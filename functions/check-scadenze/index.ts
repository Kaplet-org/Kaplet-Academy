// Kaplet University - Edge Function: check-scadenze
// Deploy: supabase functions deploy check-scadenze
// Trigger: pg_cron ogni giorno alle 08:00
//
// Le mail partono da Resend, non piu da SMTP Office365 parlato a mano sul
// socket: Microsoft disattiva SMTP AUTH per default sui tenant, e la password
// della casella andava rigenerata a ogni scadenza. Serve il secret
// RESEND_API_KEY. Il dominio mittente va verificato su Resend, altrimenti si
// puo spedire solo verso l'indirizzo con cui si e fatta la registrazione.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const MAIL = {
  chiave: Deno.env.get("RESEND_API_KEY") ?? "",
  da:     Deno.env.get("MAIL_DA") ?? "Kaplet University <onboarding@resend.dev>",
  a:      Deno.env.get("MAIL_A")  ?? "admin@kaplet.it",
  // Dove punta il pulsante "Apri pannello admin" dentro la mail.
  // NON usare university.kaplet.it: è un inoltro Aruba che mostra il sito
  // dentro un iframe e serve la home per qualunque indirizzo, quindi i link
  // profondi non arrivano dove devono.
  pannello: Deno.env.get("URL_ADMIN") ?? "https://kaplet.github.io/Kaplet-Academy/admin.html",
};

serve(async (req) => {
  // ?prova=1 manda una mail di esempio con dati finti: serve a verificare che
  // la catena funzioni senza aspettare che una certificazione scada davvero.
  const prova = new URL(req.url).searchParams.get("prova") === "1";

  const sb = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  await sb.rpc("aggiorna_stato_scadute");

  const oggi = new Date();
  const notifiche: any[] = [];

  for (const gg of [60, 30, 7]) {
    const target = new Date(oggi);
    target.setDate(oggi.getDate() + gg);
    const ds = target.toISOString().split("T")[0];
    const { data } = await sb
      .from("certificazioni")
      .select("*, tecnici(nome,cognome,ruolo)")
      .eq("data_scadenza", ds)
      .eq("stato", "attiva");
    (data ?? []).forEach(c => notifiche.push({ cert: c, giorni: gg }));
  }

  // L'esito dell'invio finisce nella risposta: prima la funzione diceva
  // sempre ok, anche quando il server rifiutava la mail.
  if (prova && notifiche.length === 0) {
    notifiche.push({
      giorni: 30,
      cert: {
        brand: "ESEMPIO",
        corso: "Mail di prova - nessuna scadenza reale",
        data_scadenza: new Date(Date.now() + 30 * 86400000).toISOString().split("T")[0],
        tecnici: { nome: "Mario", cognome: "Rossi", ruolo: "Esempio" },
      },
    });
  }

  let esito: Record<string, unknown> = { inviata: false, motivo: "nessuna scadenza oggi" };
  if (notifiche.length > 0) {
    try {
      esito = { inviata: true, id: await sendMail(notifiche, prova) };
    } catch (e) {
      esito = { inviata: false, motivo: String(e instanceof Error ? e.message : e) };
    }
  }

  const ok = notifiche.length === 0 || esito.inviata === true;
  return new Response(JSON.stringify({ ok, prova, n: notifiche.length, mail: esito }), {
    status: ok ? 200 : 500,
    headers: { "Content-Type": "application/json" },
  });
});

async function sendMail(notifiche: any[], prova = false): Promise<string> {
  if (!MAIL.chiave) throw new Error("manca il secret RESEND_API_KEY");

  const soggetto = (prova ? "[PROVA] " : "") + (notifiche.length === 1
    ? `Kaplet University - Certificazione in scadenza: ${notifiche[0].cert.tecnici.nome} ${notifiche[0].cert.tecnici.cognome}`
    : `Kaplet University - ${notifiche.length} certificazioni in scadenza`);

  const righe = notifiche.map(({ cert, giorni }) => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:14px;color:#1a1a1a">
        ${cert.tecnici.nome} ${cert.tecnici.cognome}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;color:#555">
        ${cert.tecnici.ruolo}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px">
        <b>${cert.brand}</b>
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;color:#555">
        ${cert.corso}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;
        color:${giorni <= 7 ? "#dc2626" : giorni <= 30 ? "#b45309" : "#555"};font-weight:600">
        ${new Date(cert.data_scadenza).toLocaleDateString("it-IT")}<br>
        <span style="font-weight:400;font-size:11px">${giorni} giorni</span>
      </td>
    </tr>`).join("");

  const html = `<!DOCTYPE html><html><body style="margin:0;background:#f5f5f5;font-family:Arial,sans-serif">
  <div style="max-width:680px;margin:0 auto;background:#fff">
    <div style="background:#0C0E0D;padding:22px 30px">
      <span style="font-size:14px;letter-spacing:.25em;text-transform:uppercase;color:#fff">
        <span style="color:#36CD81">·</span>KAPLET University
      </span>
    </div>
    <div style="background:#36CD81;padding:10px 30px">
      <span style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#0C0E0D">
        Notifica automatica scadenze
      </span>
    </div>
    <div style="padding:30px">
      <h1 style="font-size:20px;font-weight:300;color:#0C0E0D;margin:0 0 8px">
        ${notifiche.length === 1 ? "Una certificazione sta per scadere" : `${notifiche.length} certificazioni in scadenza`}
      </h1>
      <p style="font-size:14px;color:#666;margin:0 0 24px;line-height:1.6">
        Pianifica il rinnovo con anticipo.
      </p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5">
        <thead>
          <tr style="background:#f8f8f8">
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Tecnico</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Ruolo</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Brand</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Certificazione</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Scadenza</th>
          </tr>
        </thead>
        <tbody>${righe}</tbody>
      </table>
      <div style="margin-top:24px;text-align:center">
        <a href="${MAIL.pannello}"
           style="display:inline-block;background:#36CD81;color:#0C0E0D;text-decoration:none;
                  padding:11px 26px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase">
          Apri pannello admin
        </a>
      </div>
    </div>
    <div style="background:#f8f8f8;border-top:1px solid #e5e5e5;padding:18px 30px;text-align:center">
      <p style="font-size:11px;color:#999;margin:0">
        Kaplet S.r.l. · Via Cerchia di S. Giorgio, 145 · 47521 Cesena (FC)<br>
        Notifica automatica Kaplet University
      </p>
    </div>
  </div>
</body></html>`;

  const risposta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${MAIL.chiave}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: MAIL.da,
      to: [MAIL.a],
      subject: soggetto,
      html,
    }),
  });

  const corpo = await risposta.json().catch(() => ({}));
  if (!risposta.ok) {
    throw new Error(`Resend ha risposto ${risposta.status}: ${corpo?.message ?? JSON.stringify(corpo)}`);
  }
  return corpo?.id ?? "";
}
