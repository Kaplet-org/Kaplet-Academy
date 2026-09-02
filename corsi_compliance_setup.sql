-- Kaplet University — Formazione compliance obbligatoria
--
-- ISO 27001 (sicurezza delle informazioni) e ISO 9001 (qualità), erogati
-- sulla piattaforma Complaion. Da fare tutti.
--
-- Stanno sul percorso **core_compliance** ("Core Path - Compliance"),
-- aggiunto in js/courses.js. Stessa scelta fatta per i corsi AI: un
-- percorso a sé invece di appiccicarli a tutti gli altri, così si vedono
-- raggruppati e domani ci si aggiunge GDPR o sicurezza sul lavoro senza
-- toccare nient'altro.
--
-- Perché restino "per tutti", core_compliance va addosso a ogni operatore:
-- lo fa il punto 3. Ai nuovi assunti va spuntato insieme agli altri percorsi.
--
-- Sicuro da rieseguire.

-- ============================================================
-- 1. I corsi
-- ============================================================
insert into public.corsi_catalogo
  (id, brand, gruppo, nome, descrizione, erogazione, durata, prezzo, link, paths) values

  ('KU-C-149', 'COMPLAION', 'COMPLIANCE', 'ISO 27001 - Sicurezza delle informazioni',
   'Formazione sulla norma ISO/IEC 27001, lo standard per la gestione della sicurezza delle informazioni: come si classificano i dati, quali comportamenti sono richiesti a chi ci lavora, come si segnalano gli incidenti. Si segue sulla piattaforma Complaion.',
   'E-Learning', null, null, 'https://app.complaion.com/', array['core_compliance']),

  ('KU-C-150', 'COMPLAION', 'COMPLIANCE', 'ISO 9001 - Sistema di gestione qualità',
   'Formazione sulla norma ISO 9001, lo standard per i sistemi di gestione della qualità: procedure, responsabilità, gestione delle non conformità e miglioramento continuo. Si segue sulla piattaforma Complaion.',
   'E-Learning', null, null, 'https://app.complaion.com/', array['core_compliance'])

on conflict (id) do update set
  brand       = excluded.brand,
  gruppo      = excluded.gruppo,
  nome        = excluded.nome,
  descrizione = excluded.descrizione,
  erogazione  = excluded.erogazione,
  durata      = excluded.durata,
  prezzo      = excluded.prezzo,
  link        = excluded.link,
  paths       = excluded.paths,
  attivo      = true;

-- ============================================================
-- 2. Assegnazione a tutti gli operatori attivi e approvati
--    Chi aspetta un'approvazione non li riceve: i corsi glieli assegna
--    l'admin quando lo approva.
-- ============================================================
insert into public.corsi_assegnati
  (tech_id, brand, corso, anno, stato, note, assegnato_da, assegnato_il)
select
  t.id, c.brand, c.nome, extract(year from now())::int, 'da_fare',
  'Compliance: da fare tutti',
  (select id from public.tecnici where is_admin = true order by cognome limit 1),
  now()
from public.tecnici t
cross join public.corsi_catalogo c
where t.attivo is distinct from false
  and coalesce(t.stato_accesso, 'approvato') = 'approvato'
  and c.id in ('KU-C-149', 'KU-C-150')
  and not exists (
    select 1 from public.corsi_assegnati a
    where a.tech_id = t.id and a.brand = c.brand and a.corso = c.nome
  );

-- ============================================================
-- 3. Il percorso core_compliance addosso a tutti
-- ============================================================
update public.tecnici
set ruolo = case
              when ruolo is null or btrim(ruolo) = '' then 'core_compliance'
              else btrim(ruolo) || ',core_compliance'
            end
where attivo is distinct from false
  and coalesce(stato_accesso, 'approvato') = 'approvato'
  and ('core_compliance' <> all (string_to_array(coalesce(ruolo, ''), ',')));

-- ============================================================
-- 4. Verifica
-- ============================================================
select
  (select count(*) from public.corsi_catalogo where 'core_compliance' = any(paths) and attivo) as corsi_compliance,
  (select count(*) from public.tecnici
     where attivo is distinct from false
       and 'core_compliance' = any(string_to_array(coalesce(ruolo,''), ',')))                  as con_il_percorso,
  (select count(*) from public.tecnici
     where attivo is distinct from false
       and coalesce(stato_accesso,'approvato') = 'approvato')                                  as operatori_attivi,
  (select count(*) from public.corsi_assegnati a
     join public.corsi_catalogo c on c.brand = a.brand and c.nome = a.corso
    where 'core_compliance' = any(c.paths))                                                    as assegnazioni;
