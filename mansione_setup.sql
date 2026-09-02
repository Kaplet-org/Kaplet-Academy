-- Kaplet University — Mansione del tecnico
--
-- Fino a oggi "ruolo" voleva dire due cose diverse nello stesso pannello:
--   · `is_admin`      → i permessi (Admin oppure Tecnico)
--   · `tecnici.ruolo` → i percorsi formativi (core_net, adv_eng_sec, …)
-- Mancava la terza, quella che in azienda si intende davvero per ruolo:
-- **che mestiere fa** la persona.
--
-- `mansione` è descrittiva: non tocca i permessi e non decide da sola quali
-- corsi vengono assegnati — quelli restano governati dai percorsi.
--
-- Sicuro da rieseguire.

alter table public.tecnici
  add column if not exists mansione text;

-- I valori ammessi. Il vincolo si ricrea ogni volta, così allargare l'elenco
-- domani è una riga sola qui dentro.
alter table public.tecnici
  drop constraint if exists tecnici_mansione_valida;

alter table public.tecnici
  add constraint tecnici_mansione_valida
  check (mansione is null or mansione in ('engineer', 'sales', 'presales', 'altro'));

comment on column public.tecnici.mansione is
  'Mestiere: engineer | sales | presales | altro. Descrittiva: i permessi stanno in is_admin, i corsi nei percorsi di ruolo';

-- Chi c'è già resta senza mansione finché non gliela si assegna: meglio un
-- campo vuoto e visibile che un valore inventato.
select
  count(*)                                   as tecnici,
  count(*) filter (where mansione is null)   as senza_mansione
from public.tecnici
where attivo is distinct from false;
