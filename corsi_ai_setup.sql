-- Kaplet University — Formazione AI obbligatoria
--
-- Quattro corsi gratuiti sull'uso degli strumenti AI, da fare tutti.
--
-- Stanno sul percorso **core_ai** ("Core Path - AI"), aggiunto in
-- js/courses.js. Un percorso a sé invece di appiccicarli a tutti e 17 gli
-- altri: si vede a colpo d'occhio cosa sono, e domani ci si aggiungono
-- altri corsi AI senza toccare nient'altro.
--
-- Perché restino "per tutti", core_ai va addosso a ogni tecnico: lo fa il
-- punto 3 qui sotto. Ai nuovi assunti va messo insieme agli altri percorsi.
--
-- Aggiunta successiva ai 183 corsi di `catalogo_setup.sql`, che resta la
-- fotografia dell'Excel di partenza: quello non si tocca.
--
-- Sicuro da rieseguire.

-- ============================================================
-- 1. I corsi
-- ============================================================
insert into public.corsi_catalogo
  (id, brand, gruppo, nome, descrizione, erogazione, durata, prezzo, link, paths) values

  ('KU-C-145', 'ANTHROPIC', 'AI101', 'Claude 101',
   'Corso introduttivo gratuito di Anthropic sull uso di Claude: come si scrive una richiesta efficace, come si lavora su documenti e dati, dove conviene usarlo e dove no. Si segue online al proprio ritmo e rilascia un attestato.',
   'E-Learning', null, 0, 'https://anthropic.skilljar.com/claude-101', array['core_ai']),

  ('KU-C-146', 'ANTHROPIC', 'AI101', 'AI Fluency: Framework & Foundations',
   'Corso gratuito di Anthropic su come lavorare bene con l intelligenza artificiale: quando delegarle un compito, come descrivere ciò che serve, come giudicare una risposta e quando non fidarsi. Non riguarda un prodotto in particolare. Rilascia un attestato.',
   'E-Learning', null, 0, 'https://anthropic.skilljar.com/ai-fluency-framework-foundations', array['core_ai']),

  ('KU-C-147', 'OPENAI', 'AI101', 'AI Foundations',
   'Corso gratuito della OpenAI Academy sulle basi dell intelligenza artificiale generativa: cosa sa fare, come funziona a grandi linee, quali sono i limiti. Si accede con il proprio account ChatGPT.',
   'E-Learning', null, 0, 'https://academy.openai.com', array['core_ai']),

  ('KU-C-148', 'OPENAI', 'AI101', 'Applied AI Foundations',
   'Seguito di AI Foundations nella OpenAI Academy: come portare gli strumenti AI dentro il lavoro di tutti i giorni, con esempi pratici. Si accede con il proprio account ChatGPT.',
   'E-Learning', null, 0, 'https://academy.openai.com', array['core_ai'])

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
-- 2. Assegnazione a tutti i tecnici attivi
--    Mettere un corso su un percorso lo fa arrivare a chi quel percorso ce
--    l'ha già: le righe si generano quando l'admin salva i ruoli. Qui si
--    assegnano subito, senza aspettare che qualcuno riapra ogni scheda.
-- ============================================================
insert into public.corsi_assegnati
  (tech_id, brand, corso, anno, stato, note, assegnato_da, assegnato_il)
select
  t.id, c.brand, c.nome, extract(year from now())::int, 'da_fare',
  'Formazione AI: da fare tutti',
  (select id from public.tecnici where is_admin = true order by cognome limit 1),
  now()
from public.tecnici t
cross join public.corsi_catalogo c
where t.attivo is distinct from false
  and c.id in ('KU-C-145', 'KU-C-146', 'KU-C-147', 'KU-C-148')
  and not exists (
    select 1 from public.corsi_assegnati a
    where a.tech_id = t.id and a.brand = c.brand and a.corso = c.nome
  );

-- ============================================================
-- 3. Il percorso core_ai addosso a tutti
--    `tecnici.ruolo` è una stringa di chiavi separate da virgola.
--    Senza questo, i quattro corsi resterebbero in catalogo su un percorso
--    che non ha nessuno.
-- ============================================================
update public.tecnici
set ruolo = case
              when ruolo is null or btrim(ruolo) = '' then 'core_ai'
              else btrim(ruolo) || ',core_ai'
            end
where attivo is distinct from false
  and ('core_ai' <> all (string_to_array(coalesce(ruolo, ''), ',')));

-- ============================================================
-- 4. Verifica
-- ============================================================
select
  (select count(*) from public.corsi_catalogo where 'core_ai' = any(paths) and attivo) as corsi_su_core_ai,
  (select count(*) from public.tecnici
     where attivo is distinct from false
       and 'core_ai' = any(string_to_array(coalesce(ruolo,''), ',')))                  as tecnici_con_core_ai,
  (select count(*) from public.tecnici where attivo is distinct from false)            as tecnici_attivi,
  (select count(*) from public.corsi_assegnati a
     join public.corsi_catalogo c on c.brand = a.brand and c.nome = a.corso
    where 'core_ai' = any(c.paths))                                                    as assegnazioni_ai;
