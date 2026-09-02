-- Kaplet University — Registrazione autonoma con approvazione
--
-- I tecnici si creano l'account da soli; l'admin approva e assegna
-- mansione e percorsi. Nessuno entra prima di essere approvato.
--
-- Tre difese, perché la prima da sola non basterebbe:
--   1. il modulo accetta solo indirizzi @kaplet.it
--   2. la policy di inserimento ricontrolla l'indirizzo lato database, e
--      obbliga la riga a nascere non-admin, non attiva, in attesa
--   3. un trigger impedisce a chi non è admin di cambiarsi da solo
--      permessi, stato o approvazione
--
-- Sicuro da rieseguire.

-- ============================================================
-- 1. Lo stato della richiesta
-- ============================================================
alter table public.tecnici
  add column if not exists stato_accesso text not null default 'approvato';

alter table public.tecnici
  drop constraint if exists tecnici_stato_accesso_valido;

alter table public.tecnici
  add constraint tecnici_stato_accesso_valido
  check (stato_accesso in ('in_attesa', 'approvato', 'rifiutato'));

comment on column public.tecnici.stato_accesso is
  'in_attesa = si è registrato e aspetta · approvato = può entrare · rifiutato = non entra e non può ritentare';

-- Chi c'è già è approvato per definizione: lo ha creato l'admin.
update public.tecnici set stato_accesso = 'approvato' where stato_accesso is null;

create index if not exists idx_tecnici_in_attesa
  on public.tecnici (stato_accesso) where stato_accesso = 'in_attesa';

-- ============================================================
-- 2. Registrarsi: si può creare SOLO la propria riga, e solo in attesa
-- ============================================================
drop policy if exists "ci si registra da soli, in attesa" on public.tecnici;
create policy "ci si registra da soli, in attesa"
  on public.tecnici for insert
  to authenticated
  with check (
    id = auth.uid()
    and is_admin = false
    and attivo = false
    and stato_accesso = 'in_attesa'
    and lower(coalesce(auth.jwt() ->> 'email', '')) like '%@kaplet.it'
  );

-- ============================================================
-- 3. Nessuno si promuove da solo
--    Le policy RLS non sanno confrontare il vecchio col nuovo valore:
--    per questo serve un trigger.
-- ============================================================
create or replace function public.blocca_autopromozione()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  -- se chi scrive è admin, passa tutto
  if exists (select 1 from public.tecnici t
             where t.id = auth.uid() and t.is_admin = true) then
    return new;
  end if;
  -- altrimenti i campi sensibili restano quelli di prima
  new.is_admin      := old.is_admin;
  new.attivo        := old.attivo;
  new.stato_accesso := old.stato_accesso;
  return new;
end $$;

drop trigger if exists trg_blocca_autopromozione on public.tecnici;
create trigger trg_blocca_autopromozione
  before update on public.tecnici
  for each row execute function public.blocca_autopromozione();

-- ============================================================
-- 4. Verifica
-- ============================================================
select
  count(*)                                            as tecnici,
  count(*) filter (where stato_accesso = 'approvato')  as approvati,
  count(*) filter (where stato_accesso = 'in_attesa')  as in_attesa,
  count(*) filter (where stato_accesso = 'rifiutato')  as rifiutati
from public.tecnici;
