-- Kaplet University — Formazione AI obbligatoria
--
-- Quattro corsi gratuiti sull'uso degli strumenti AI, da fare tutti.
-- Sono su **tutti e 17 i percorsi**: così arrivano a chiunque, qualunque
-- ruolo abbia, anche a chi verrà assunto domani.
--
-- Aggiunta successiva ai 183 corsi di `catalogo_setup.sql`, che resta la
-- fotografia dell'Excel di partenza: qui non si tocca.
--
-- Sicuro da rieseguire: i corsi sono in upsert sull'id e le assegnazioni
-- si creano solo per chi non le ha già.

-- ============================================================
-- 1. I corsi
-- ============================================================
insert into public.corsi_catalogo
  (id, brand, gruppo, nome, descrizione, erogazione, durata, prezzo, link, paths) values

  ('KU-C-145', 'ANTHROPIC', 'AI101', 'Claude 101',
   'Corso introduttivo gratuito di Anthropic sull uso di Claude: come si scrive una richiesta efficace, come si lavora su documenti e dati, dove conviene usarlo e dove no. Si segue online al proprio ritmo e rilascia un attestato.',
   'E-Learning', null, 0, 'https://anthropic.skilljar.com/claude-101',
   array['core_av','core_net','core_sec','core_doc','core_field',
         'adv_presales_av','adv_presales_net','adv_presales_sec',
         'adv_eng_av','adv_eng_net','adv_eng_sec','adv_doc','adv_pm','adv_field',
         'spec_eng_av','spec_eng_net','spec_eng_sec']),

  ('KU-C-146', 'ANTHROPIC', 'AI101', 'AI Fluency: Framework & Foundations',
   'Corso gratuito di Anthropic su come lavorare bene con l intelligenza artificiale: quando delegarle un compito, come descrivere ciò che serve, come giudicare una risposta e quando non fidarsi. Non riguarda un prodotto in particolare. Rilascia un attestato.',
   'E-Learning', null, 0, 'https://anthropic.skilljar.com/ai-fluency-framework-foundations',
   array['core_av','core_net','core_sec','core_doc','core_field',
         'adv_presales_av','adv_presales_net','adv_presales_sec',
         'adv_eng_av','adv_eng_net','adv_eng_sec','adv_doc','adv_pm','adv_field',
         'spec_eng_av','spec_eng_net','spec_eng_sec']),

  ('KU-C-147', 'OPENAI', 'AI101', 'AI Foundations',
   'Corso gratuito della OpenAI Academy sulle basi dell intelligenza artificiale generativa: cosa sa fare, come funziona a grandi linee, quali sono i limiti. Si accede con il proprio account ChatGPT.',
   'E-Learning', null, 0, 'https://academy.openai.com',
   array['core_av','core_net','core_sec','core_doc','core_field',
         'adv_presales_av','adv_presales_net','adv_presales_sec',
         'adv_eng_av','adv_eng_net','adv_eng_sec','adv_doc','adv_pm','adv_field',
         'spec_eng_av','spec_eng_net','spec_eng_sec']),

  ('KU-C-148', 'OPENAI', 'AI101', 'Applied AI Foundations',
   'Seguito di AI Foundations nella OpenAI Academy: come portare gli strumenti AI dentro il lavoro di tutti i giorni, con esempi pratici. Si accede con il proprio account ChatGPT.',
   'E-Learning', null, 0, 'https://academy.openai.com',
   array['core_av','core_net','core_sec','core_doc','core_field',
         'adv_presales_av','adv_presales_net','adv_presales_sec',
         'adv_eng_av','adv_eng_net','adv_eng_sec','adv_doc','adv_pm','adv_field',
         'spec_eng_av','spec_eng_net','spec_eng_sec'])

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
-- 2. Assegnazione a tutti
--    Mettere i corsi sui percorsi li fa arrivare ai tecnici futuri, ma non
--    a quelli già registrati: le righe si generano quando l'admin salva i
--    ruoli di un tecnico. Qui si assegnano subito a chi c'è già.
-- ============================================================
insert into public.corsi_assegnati
  (tech_id, brand, corso, anno, stato, note, assegnato_da, assegnato_il)
select
  t.id,
  c.brand,
  c.nome,
  extract(year from now())::int,
  'da_fare',
  'Formazione AI: da fare tutti',
  (select id from public.tecnici where is_admin = true order by cognome limit 1),
  now()
from public.tecnici t
cross join public.corsi_catalogo c
where t.attivo is distinct from false
  and c.id in ('KU-C-145', 'KU-C-146', 'KU-C-147', 'KU-C-148')
  -- chi ce l'ha già non la riceve due volte
  and not exists (
    select 1 from public.corsi_assegnati a
    where a.tech_id = t.id and a.brand = c.brand and a.corso = c.nome
  );

-- ============================================================
-- 3. Verifica
-- ============================================================
select
  (select count(*) from public.corsi_catalogo where gruppo = 'AI101' and attivo)      as corsi_ai_in_catalogo,
  (select count(*) from public.tecnici where attivo is distinct from false)           as tecnici_attivi,
  (select count(*) from public.corsi_assegnati a
     join public.corsi_catalogo c on c.brand = a.brand and c.nome = a.corso
    where c.gruppo = 'AI101')                                                         as assegnazioni_ai;
