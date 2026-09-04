// Kaplet University - Edge Function: promemoria-settimanale
// Deploy: supabase functions deploy promemoria-settimanale
// Trigger: pg_cron ogni lunedì alle 08:00 (vedi cron_setup.sql)
//
// Manda a ogni operatore l'elenco dei suoi corsi non completati, e all'admin
// un riepilogo di chi è indietro.
//
// ATTENZIONE AL MITTENTE: finché il dominio kaplet.it non è verificato su
// Resend, si può spedire SOLO all'indirizzo dell'account (MAIL_A). Le mail
// ai singoli operatori vengono rifiutate. La function non si ferma: prova a
// mandarle, registra i rifiuti e li riporta nella risposta e nel riepilogo
// all'admin. Verificato il dominio, funziona tutto senza toccare il codice.
//
// ?prova=1 dirotta OGNI mail su MAIL_A con oggetto [PROVA], scrivendo dentro
// a chi sarebbe andata: si può provare oggi senza scrivere a nessuno.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const MAIL = {
  chiave: Deno.env.get("RESEND_API_KEY") ?? "",
  da:     Deno.env.get("MAIL_DA") ?? "Kaplet University <onboarding@resend.dev>",
  a:      Deno.env.get("MAIL_A")  ?? "admin@kaplet.it",
  // NON usare university.kaplet.it: è un inoltro Aruba che mostra il sito
  // dentro un iframe e serve la home per qualunque indirizzo.
  areaTecnico: Deno.env.get("URL_TECNICO") ?? "https://kaplet.github.io/Kaplet-Academy/tecnico.html",
  pannello:    Deno.env.get("URL_ADMIN")   ?? "https://kaplet.github.io/Kaplet-Academy/admin.html",
};

const NERO = "#0C0E0D", VERDE = "#36CD81";

serve(async (req) => {
  const prova = new URL(req.url).searchParams.get("prova") === "1";

  const sb = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
  );

  const [rt, ra] = await Promise.all([
    sb.from("tecnici").select("id,nome,cognome,email,attivo,is_admin,stato_accesso"),
    sb.from("corsi_assegnati").select("tech_id,brand,corso,stato,scadenza,data_inizio,data_esame"),
  ]);

  const operatori = (rt.data ?? []).filter(t =>
    t.attivo !== false && (t.stato_accesso ?? "approvato") === "approvato"
  );
  const corsi = ra.data ?? [];
  const oggi = new Date().toISOString().split("T")[0];

  const righe = operatori.map(t => {
    const suoi     = corsi.filter(c => c.tech_id === t.id && c.stato !== "completato");
    const inRitardo = suoi.filter(c => c.scadenza && c.scadenza < oggi);
    const avviati   = suoi.filter(c => c.stato === "in_corso");
    return { t, daFare: suoi, inRitardo, avviati };
  }).filter(r => r.daFare.length > 0);

  // Una mail a testa, più il riepilogo all'admin
  const esiti: Array<Record<string, unknown>> = [];
  for (const r of righe) {
    const destinatario = prova ? MAIL.a : r.t.email;
    if (!destinatario) { esiti.push({ chi: `${r.t.nome} ${r.t.cognome}`, inviata: false, motivo: "senza indirizzo" }); continue; }
    try {
      const id = await manda(
        destinatario,
        (prova ? "[PROVA] " : "") + `Kaplet University - hai ${r.daFare.length} cors${r.daFare.length === 1 ? "o" : "i"} da completare`,
        mailOperatore(r, prova ? r.t.email : null)
      );
      esiti.push({ chi: `${r.t.nome} ${r.t.cognome}`, inviata: true, id });
    } catch (e) {
      esiti.push({ chi: `${r.t.nome} ${r.t.cognome}`, inviata: false, motivo: String(e instanceof Error ? e.message : e) });
    }
  }

  let riepilogo: Record<string, unknown> = { inviata: false, motivo: "nessuno è indietro" };
  if (righe.length) {
    try {
      riepilogo = { inviata: true, id: await manda(
        MAIL.a,
        (prova ? "[PROVA] " : "") + `Kaplet University - ${righe.length} person${righe.length === 1 ? "a" : "e"} con corsi da completare`,
        mailAdmin(righe, esiti)
      )};
    } catch (e) {
      riepilogo = { inviata: false, motivo: String(e instanceof Error ? e.message : e) };
    }
  }

  const falliti = esiti.filter(e => !e.inviata).length;
  return new Response(JSON.stringify({
    ok: falliti === 0,
    prova,
    operatori_con_corsi_da_fare: righe.length,
    promemoria: esiti,
    riepilogo_admin: riepilogo,
    nota: falliti
      ? "Alcune mail non sono partite: probabilmente il dominio kaplet.it non è verificato su Resend, quindi si può spedire solo all'indirizzo dell'account."
      : undefined,
  }), { status: falliti === 0 ? 200 : 207, headers: { "Content-Type": "application/json" } });
});

async function manda(a: string, soggetto: string, html: string): Promise<string> {
  if (!MAIL.chiave) throw new Error("manca il secret RESEND_API_KEY");
  const risposta = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${MAIL.chiave}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: MAIL.da, to: [a], subject: soggetto, html }),
  });
  const corpo = await risposta.json().catch(() => ({}));
  if (!risposta.ok) throw new Error(`Resend ${risposta.status}: ${corpo?.message ?? JSON.stringify(corpo)}`);
  return corpo?.id ?? "";
}

const esc = (s: unknown) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const dataIt = (d: string) => new Date(d).toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit", year: "numeric" });

function guscio(titoletto: string, contenuto: string, bottone: { testo: string; url: string }) {
  return `<!DOCTYPE html><html><body style="margin:0;background:#f5f5f5;font-family:Arial,sans-serif">
  <div style="max-width:680px;margin:0 auto;background:#fff">
    <div style="background:${NERO};padding:22px 30px">
      <span style="font-size:14px;letter-spacing:.25em;text-transform:uppercase;color:#fff">
        <span style="color:${VERDE}">·</span>KAPLET University
      </span>
    </div>
    <div style="background:${VERDE};padding:10px 30px">
      <span style="font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${NERO}">${esc(titoletto)}</span>
    </div>
    <div style="padding:30px">${contenuto}
      <div style="margin-top:24px;text-align:center">
        <a href="${bottone.url}" style="display:inline-block;background:${VERDE};color:${NERO};text-decoration:none;
           padding:11px 26px;font-size:12px;font-weight:600;letter-spacing:.08em;text-transform:uppercase">${esc(bottone.testo)}</a>
      </div>
    </div>
    <div style="background:#f8f8f8;border-top:1px solid #e5e5e5;padding:18px 30px;text-align:center">
      <p style="font-size:11px;color:#999;margin:0">
        Kaplet S.r.l. · Via Cerchia di S. Giorgio, 145 · 47521 Cesena (FC)<br>
        Promemoria automatico del lunedì · Kaplet University
      </p>
    </div>
  </div>
</body></html>`;
}

function mailOperatore(r: any, destinatarioVero: string | null) {
  const riga = (c: any, ritardo: boolean) => `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px"><b>${esc(c.brand)}</b></td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:14px;color:#1a1a1a">${esc(c.corso)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;color:${ritardo ? "#dc2626" : "#555"};font-weight:${ritardo ? "600" : "400"}">
        ${c.scadenza ? dataIt(c.scadenza) : "—"}
      </td>
      <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:12px;color:#777">
        ${c.stato === "in_corso" ? "in corso" : "da iniziare"}
      </td>
    </tr>`;

  const ordinati = [...r.inRitardo, ...r.daFare.filter((c: any) => !r.inRitardo.includes(c))];
  return guscio("Promemoria formazione", `
    ${destinatarioVero ? `<p style="font-size:12px;color:#b45309;margin:0 0 16px;padding:8px 12px;background:#fef3c7">Mail di prova: sarebbe andata a <b>${esc(destinatarioVero)}</b>.</p>` : ""}
    <h1 style="font-size:20px;font-weight:300;color:${NERO};margin:0 0 8px">Ciao ${esc(r.t.nome)}</h1>
    <p style="font-size:14px;color:#666;margin:0 0 24px;line-height:1.6">
      Hai <b style="color:${NERO}">${r.daFare.length} cors${r.daFare.length === 1 ? "o" : "i"}</b> ancora da completare${
        r.inRitardo.length ? `, di cui <b style="color:#dc2626">${r.inRitardo.length} oltre la scadenza</b>` : ""
      }.${r.avviati.length ? ` ${r.avviati.length} l${r.avviati.length === 1 ? "o hai" : "i hai"} già iniziat${r.avviati.length === 1 ? "o" : "i"}.` : ""}
    </p>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5">
      <thead><tr style="background:#f8f8f8">
        ${["Brand", "Corso", "Entro il", "Stato"].map(h => `<th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">${h}</th>`).join("")}
      </tr></thead>
      <tbody>${ordinati.slice(0, 25).map((c: any) => riga(c, r.inRitardo.includes(c))).join("")}</tbody>
    </table>
    ${ordinati.length > 25 ? `<p style="font-size:12px;color:#999;margin:12px 0 0">…e altri ${ordinati.length - 25}. Li trovi tutti nella tua area.</p>` : ""}
  `, { testo: "Vai alla mia area", url: MAIL.areaTecnico });
}

function mailAdmin(righe: any[], esiti: Array<Record<string, unknown>>) {
  const falliti = esiti.filter(e => !e.inviata);
  return guscio("Riepilogo del lunedì", `
    <h1 style="font-size:20px;font-weight:300;color:${NERO};margin:0 0 8px">
      ${righe.length} person${righe.length === 1 ? "a" : "e"} con corsi da completare
    </h1>
    <p style="font-size:14px;color:#666;margin:0 0 24px;line-height:1.6">A ciascuno è stato mandato il suo elenco.</p>
    <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5">
      <thead><tr style="background:#f8f8f8">
        ${["Operatore", "Da completare", "In ritardo", "Già avviati"].map(h => `<th style="padding:9px 12px;text-align:left;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#888;border-bottom:2px solid #e5e5e5">${h}</th>`).join("")}
      </tr></thead>
      <tbody>${righe
        .slice()
        .sort((a, b) => b.inRitardo.length - a.inRitardo.length || b.daFare.length - a.daFare.length)
        .map(r => `<tr>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:14px;color:#1a1a1a">${esc(r.t.nome)} ${esc(r.t.cognome)}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px">${r.daFare.length}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;color:${r.inRitardo.length ? "#dc2626" : "#16a34a"};font-weight:${r.inRitardo.length ? "600" : "400"}">${r.inRitardo.length}</td>
          <td style="padding:10px 12px;border-bottom:1px solid #e5e5e5;font-size:13px;color:#555">${r.avviati.length}</td>
        </tr>`).join("")}</tbody>
    </table>
    ${falliti.length ? `<div style="margin-top:20px;padding:12px 14px;background:#fef2f2;border:1px solid #fecaca">
      <p style="font-size:13px;color:#b91c1c;margin:0 0 6px"><b>${falliti.length} promemoria non sono partiti.</b></p>
      <p style="font-size:12px;color:#7f1d1d;margin:0;line-height:1.5">
        Quasi certamente il dominio kaplet.it non è ancora verificato su Resend, quindi si può spedire solo
        all'indirizzo con cui è registrato l'account. ${esc(falliti.map(f => f.chi).join(", "))}.
      </p></div>` : ""}
  `, { testo: "Apri pannello admin", url: MAIL.pannello });
}
