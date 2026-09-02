-- Kaplet University — Schedulazione delle mail automatiche
--
-- SCOPERTA DELL'2 SETTEMBRE 2026: pg_cron e pg_net non erano installati.
-- Le mail di scadenza non sono mai partite da sole, nonostante i commenti
-- nel codice dicessero il contrario: la function esisteva ma non la
-- chiamava nessuno.
--
-- La chiamata usa la **chiave anonima**, non la service_role: le Edge
-- Function la accettano come JWT valido, ed è già pubblica dentro
-- admin.html sul sito. Così non serve mettere segreti nel Vault né qui.
--
-- Sicuro da rieseguire: le estensioni si creano se mancano e i job si
-- tolgono prima di ricrearli.

-- ============================================================
-- 1. Le estensioni che servono
--    pg_cron = la sveglia · pg_net = la telefonata HTTP
-- ============================================================
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;

-- ============================================================
-- 2. I due lavori
-- ============================================================
do $$
declare
  chiave text := 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZ2VycnZvcmJvYWdrdWt6dXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc4NjEyNzIsImV4cCI6MjA5MzQzNzI3Mn0.eDHZ-QUQLM2tFU4KPDEiIqXZsdfk_Cxnz7Ywxt6T46o';
  base   text := 'https://mcgerrvorboagkukzuzc.supabase.co/functions/v1/';
begin
  -- Scadenze certificazioni: ogni giorno alle 08:00.
  -- Manda una mail solo se qualcosa scade fra esattamente 60, 30 o 7 giorni.
  perform cron.unschedule('check-scadenze')
    where exists (select 1 from cron.job where jobname = 'check-scadenze');

  perform cron.schedule('check-scadenze', '0 8 * * *', format($cmd$
    select net.http_post(
      url     := %L,
      headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer ' || %L),
      body    := '{}'::jsonb
    );
  $cmd$, base || 'check-scadenze', chiave));

  -- Impegno formativo: il primo di ogni mese alle 08:00, sul mese chiuso.
  perform cron.unschedule('impegno-mensile')
    where exists (select 1 from cron.job where jobname = 'impegno-mensile');

  perform cron.schedule('impegno-mensile', '0 8 1 * *', format($cmd$
    select net.http_post(
      url     := %L,
      headers := jsonb_build_object('Content-Type','application/json','Authorization','Bearer ' || %L),
      body    := '{}'::jsonb
    );
  $cmd$, base || 'impegno-mensile', chiave));
end $$;

-- ============================================================
-- 3. Verifica: devono comparire due righe attive
-- ============================================================
select jobid, jobname, schedule, active from cron.job order by jobname;
