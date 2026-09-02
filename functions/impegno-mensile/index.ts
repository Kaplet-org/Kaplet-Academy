// Kaplet University - Edge Function: impegno-mensile
// Deploy: supabase functions deploy impegno-mensile
// Trigger: pg_cron il 1 del mese alle 08:00 (vedi impegno_mensile_cron.sql)
//
// Guarda il mese appena chiuso e manda all'admin l'elenco di chi non ha
// rispettato il minimo. Gli stessi due numeri stanno in admin.html
// (MIN_GIORNATE, MIN_CERT): se si alza l'asticella vanno cambiati in
// tutti e due i posti.
//
// ?prova=1 lo fa girare sul mese in corso invece che su quello chiuso, e
// manda la mail anche se sono tutti in regola.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const MIN_GIORNATE = 2;
const MIN_CERT     = 2;

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

const MESI = ["gennaio","febbraio","marzo","aprile","maggio","giugno",
              "luglio","agosto","settembre","ottobre","novembre","dicembre"];

serve(async (req) => {
  const prova = new URL(req.url).searchParams.get("prova") === "1";

  const sb = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  // Il mese appena chiuso: la function gira il 1, quindi si guarda indietro.
  const oggi = new Date();
  const rif = prova ? oggi : new Date(oggi.getFullYear(), oggi.getMonth() - 1, 1);
  const anno = rif.getFullYear();
  const mese = rif.getMonth();

  const [rt, rc, ra] = await Promise.all([
    sb.from("tecnici").select("id,nome,cognome,ruolo,attivo"),
    sb.from("certificazioni").select("tech_id,data_conseguimento"),
    sb.from("corsi_assegnati").select("tech_id,stato,data_inizio,data_fine_prevista"),
  ]);

  const tecnici = (rt.data ?? []).filter(t => t.attivo !== false);
  const certs   = rc.data ?? [];
  const corsi   = ra.data ?? [];

  const righe = tecnici.map(t => {
    const giornate = corsi
      .filter(c => c.tech_id === t.id)
      .reduce((n, c) => n + giornateNelMese(c, anno, mese), 0);
    const certificazioni = certs.filter(c => {
      if (c.tech_id !== t.id || !c.data_conseguimento) return false;
      const d = new Date(c.data_conseguimento + "T00:00:00");
      return d.getFullYear() === anno && d.getMonth() === mese;
    }).length;
    return {
      nome: `${t.nome} ${t.cognome}`,
      ruolo: t.ruolo ?? "",
      giornate,
      certificazioni,
      ok: giornate >= MIN_GIORNATE && certificazioni >= MIN_CERT,
    };
  });

  const indietro = righe.filter(r => !r.ok);

  let esito: Record<string, unknown> = { inviata: false, motivo: "tutti in regola" };
  if (indietro.length > 0 || prova) {
    try {
      esito = { inviata: true, id: await sendMail(righe, indietro, anno, mese, prova) };
    } catch (e) {
      esito = { inviata: false, motivo: String(e instanceof Error ? e.message : e) };
    }
  }

  const ok = indietro.length === 0 && !prova ? true : esito.inviata === true;
  return new Response(JSON.stringify({
    ok, prova,
    mese: `${MESI[mese]} ${anno}`,
    tecnici: righe.length,
    indietro: indietro.length,
    mail: esito,
  }), { status: ok ? 200 : 500, headers: { "Content-Type": "application/json" } });
});

/* Giorni di un corso che cadono dentro il mese. Un corso 'da_fare' non
   conta: è pianificato, non fatto. Stessa regola di admin.html. */
function giornateNelMese(c: any, anno: number, mese: number): number {
  if (!c.data_inizio || c.stato === "da_fare") return 0;
  const inizio = new Date(c.data_inizio + "T00:00:00");
  const fine   = new Date((c.data_fine_prevista ?? c.data_inizio) + "T00:00:00");
  const primo  = new Date(anno, mese, 1);
  const ultimo = new Date(anno, mese + 1, 0);
  const da = inizio > primo  ? inizio : primo;
  const a  = fine   < ultimo ? fine   : ultimo;
  if (a < da) return 0;
  return Math.round((a.getTime() - da.getTime()) / 86400000) + 1;
}

async function sendMail(
  righe: any[], indietro: any[], anno: number, mese: number, prova: boolean
): Promise<string> {
  if (!MAIL.chiave) throw new Error("manca il secret RESEND_API_KEY");

  const periodo = `${MESI[mese]} ${anno}`;
  const soggetto = (prova ? "[PROVA] " : "") + (indietro.length
    ? `Kaplet University - ${indietro.length} tecnic${indietro.length === 1 ? "o" : "i"} sotto il minimo di ${periodo}`
    : `Kaplet University - ${periodo}: tutti in regola`);

  const cella = (v: number, min: number) => {
    const manca = v < min;
    return `<td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;
      color:${manca ? "#dc2626" : "#16a34a"};font-weight:${manca ? "600" : "400"}">
      ${v} <span style="color:#999;font-weight:400">/ ${min}</span></td>`;
  };

  const corpo = righe
    .slice()
    .sort((a, b) => Number(a.ok) - Number(b.ok) || a.nome.localeCompare(b.nome))
    .map(r => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:14px;color:#1a1a1a">
        ${r.ok ? "" : '<span style="color:#dc2626">● </span>'}${r.nome}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:12px;color:#777">${r.ruolo}</td>
      ${cella(r.giornate, MIN_GIORNATE)}
      ${cella(r.certificazioni, MIN_CERT)}
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
        Impegno formativo · ${periodo}
      </span>
    </div>
    <div style="padding:30px">
      <h1 style="font-size:20px;font-weight:300;color:#0C0E0D;margin:0 0 8px">
        ${indietro.length
          ? `${indietro.length} su ${righe.length} sotto il minimo`
          : "Tutto il team ha rispettato il minimo"}
      </h1>
      <p style="font-size:14px;color:#666;margin:0 0 24px;line-height:1.6">
        Il minimo è ${MIN_GIORNATE} giornate di corso e ${MIN_CERT} certificazioni al mese, a testa.
      </p>
      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5">
        <thead>
          <tr style="background:#f8f8f8">
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Tecnico</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Ruolo</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Giornate</th>
            <th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">Certificazioni</th>
          </tr>
        </thead>
        <tbody>${corpo}</tbody>
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
    body: JSON.stringify({ from: MAIL.da, to: [MAIL.a], subject: soggetto, html }),
  });

  const risp = await risposta.json().catch(() => ({}));
  if (!risposta.ok) {
    throw new Error(`Resend ha risposto ${risposta.status}: ${risp?.message ?? JSON.stringify(risp)}`);
  }
  return risp?.id ?? "";
}
