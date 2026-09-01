-- Kaplet Academy — Schedulazione della mail sull'impegno formativo
--
-- Fa girare la Edge Function `impegno-mensile` il primo di ogni mese alle 08:00.
-- Guarda il mese appena chiuso e manda all'admin l'elenco di chi non ha fatto
-- il minimo (2 giornate di corso e 2 certificazioni).
--
-- DA ESEGUIRE **DOPO** aver deployato la function, altrimenti pg_cron chiama
-- un indirizzo che risponde 404.
--
-- Sicuro da rieseguire: prima toglie il job se esiste già.

-- Serve la chiave di servizio per chiamare la function: si prende dal Vault,
-- dove Supabase la tiene già. Se il progetto non usa il Vault, sostituire
-- `chiave` con la service_role key scritta a mano — ma allora questo file
-- NON va committato con la chiave dentro.
do $$
declare
  chiave text;
begin
  select decrypted_secret into chiave
  from vault.decrypted_secrets
  where name = 'service_role_key'
  limit 1;

  if chiave is null then
    raise notice 'service_role_key non trovata nel Vault: crea il job a mano dal dashboard';
    return;
  end if;

  perform cron.unschedule('impegno-mensile')
  where exists (select 1 from cron.job where jobname = 'impegno-mensile');

  perform cron.schedule(
    'impegno-mensile',
    '0 8 1 * *',   -- il giorno 1 di ogni mese, alle 08:00
    format($cmd$
      select net.http_post(
        url     := 'https://mcgerrvorboagkukzuzc.supabase.co/functions/v1/impegno-mensile',
        headers := jsonb_build_object(
                     'Content-Type',  'application/json',
                     'Authorization', 'Bearer %s'
                   ),
        body    := '{}'::jsonb
      );
    $cmd$, chiave)
  );
end $$;

-- Verifica: deve comparire il job con la sua pianificazione
select jobid, jobname, schedule, active
from cron.job
where jobname in ('impegno-mensile', 'check-scadenze')
order by jobname;
