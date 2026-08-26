// Kaplet Academy - Edge Function: elimina-tecnico
// Deploy: supabase functions deploy elimina-tecnico
// Chiamata da admin.html dopo la conferma con digitazione del cognome.
//
// Elimina in modo definitivo un tecnico: file nel bucket, corsi assegnati,
// certificazioni, record in tecnici e utente Supabase Auth. Scrive sempre
// una riga in audit_log, anche se qualche passaggio fallisce a metà.
//
// Tutto gira con service_role lato server: il client non ha mai in mano
// la chiave, e la cancellazione non dipende dalle policy RLS.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "Metodo non consentito" }, 405);

  const sb = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
  );

  // ── 1. Chi sta chiamando ─────────────────────────────────────────────
  const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "").trim();
  if (!token) return json({ error: "Non autenticato." }, 401);

  const { data: authData, error: authErr } = await sb.auth.getUser(token);
  if (authErr || !authData?.user) return json({ error: "Sessione non valida." }, 401);
  const chiamante = authData.user;

  const { data: profilo } = await sb
    .from("tecnici")
    .select("is_admin, nome, cognome, email")
    .eq("id", chiamante.id)
    .single();

  if (!profilo?.is_admin) {
    return json({ error: "Permesso negato: solo un admin può eliminare un tecnico." }, 403);
  }

  // ── 2. Chi va eliminato ──────────────────────────────────────────────
  let body: { tech_id?: string; conferma_cognome?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "Corpo della richiesta non valido." }, 400);
  }

  const techId = (body.tech_id ?? "").trim();
  if (!techId) return json({ error: "tech_id mancante." }, 400);
  if (techId === chiamante.id) {
    return json({ error: "Non puoi eliminare il tuo stesso account." }, 400);
  }

  const { data: target } = await sb
    .from("tecnici")
    .select("id, nome, cognome, email, ruolo, is_admin, data_ingresso")
    .eq("id", techId)
    .single();

  if (!target) return json({ error: "Tecnico non trovato." }, 404);

  // Seconda verifica del cognome lato server: il controllo nel browser
  // da solo non protegge da una chiamata costruita a mano.
  const atteso = (target.cognome ?? "").trim().toLowerCase();
  const ricevuto = (body.conferma_cognome ?? "").trim().toLowerCase();
  if (!ricevuto || ricevuto !== atteso) {
    return json({ error: "Il cognome di conferma non corrisponde." }, 400);
  }

  // ── 3. Conteggi prima di cancellare (servono all'audit) ──────────────
  const { count: nCert } = await sb
    .from("certificazioni")
    .select("id", { count: "exact", head: true })
    .eq("tech_id", techId);

  const { count: nCorsi } = await sb
    .from("corsi_assegnati")
    .select("id", { count: "exact", head: true })
    .eq("tech_id", techId);

  const esiti: Record<string, string> = {};
  let fileRimossi = 0;

  // ── 4. File nel bucket (cartella <tech_id>/) ─────────────────────────
  try {
    const daRimuovere: string[] = [];
    const PAGINA = 100;
    for (let offset = 0; ; offset += PAGINA) {
      const { data: files, error } = await sb.storage
        .from("certificati")
        .list(techId, { limit: PAGINA, offset });
      if (error) throw error;
      if (!files?.length) break;
      daRimuovere.push(...files.map((f) => `${techId}/${f.name}`));
      if (files.length < PAGINA) break;
    }
    if (daRimuovere.length) {
      const { error } = await sb.storage.from("certificati").remove(daRimuovere);
      if (error) throw error;
      fileRimossi = daRimuovere.length;
    }
    esiti.storage = `${fileRimossi} file rimossi`;
  } catch (e) {
    esiti.storage = `ERRORE: ${(e as Error).message}`;
  }

  // ── 5. Righe collegate, dalle foglie alla radice ─────────────────────
  try {
    const { error } = await sb.from("corsi_assegnati").delete().eq("tech_id", techId);
    if (error) throw error;
    esiti.corsi_assegnati = `${nCorsi ?? 0} righe eliminate`;
  } catch (e) {
    esiti.corsi_assegnati = `ERRORE: ${(e as Error).message}`;
  }

  try {
    const { error } = await sb.from("certificazioni").delete().eq("tech_id", techId);
    if (error) throw error;
    esiti.certificazioni = `${nCert ?? 0} righe eliminate`;
  } catch (e) {
    esiti.certificazioni = `ERRORE: ${(e as Error).message}`;
  }

  try {
    const { error } = await sb.from("tecnici").delete().eq("id", techId);
    if (error) throw error;
    esiti.tecnici = "record eliminato";
  } catch (e) {
    esiti.tecnici = `ERRORE: ${(e as Error).message}`;
  }

  // ── 6. Utente Supabase Auth ──────────────────────────────────────────
  try {
    const { error } = await sb.auth.admin.deleteUser(techId);
    if (error) throw error;
    esiti.auth = "utente eliminato";
  } catch (e) {
    esiti.auth = `ERRORE: ${(e as Error).message}`;
  }

  // ── 7. Audit, sempre e comunque ──────────────────────────────────────
  const fallito = Object.values(esiti).some((v) => v.startsWith("ERRORE"));

  const { error: auditErr } = await sb.from("audit_log").insert({
    azione: "elimina_tecnico",
    eseguito_da: chiamante.id,
    eseguito_da_nome: `${profilo.nome} ${profilo.cognome}`.trim(),
    eseguito_da_email: profilo.email,
    target_id: techId,
    target_nome: `${target.nome} ${target.cognome}`.trim(),
    target_email: target.email,
    esito: fallito ? "parziale" : "completo",
    dettagli: {
      ruolo: target.ruolo,
      era_admin: target.is_admin,
      data_ingresso: target.data_ingresso,
      certificazioni_eliminate: nCert ?? 0,
      corsi_assegnati_eliminati: nCorsi ?? 0,
      file_rimossi: fileRimossi,
      passaggi: esiti,
    },
  });

  return json({
    ok: !fallito,
    esito: fallito ? "parziale" : "completo",
    tecnico: `${target.nome} ${target.cognome}`,
    certificazioni_eliminate: nCert ?? 0,
    corsi_assegnati_eliminati: nCorsi ?? 0,
    file_rimossi: fileRimossi,
    passaggi: esiti,
    audit_scritto: !auditErr,
    ...(auditErr ? { audit_errore: auditErr.message } : {}),
  }, fallito ? 207 : 200);
});
