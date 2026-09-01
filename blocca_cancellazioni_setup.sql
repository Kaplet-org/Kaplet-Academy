-- Kaplet Academy — Solo gli admin cancellano
--
-- Togliere il pulsante dalla pagina non basta: chi ha fatto login può sempre
-- chiamare l'API a mano. Questa regola vieta la cancellazione a livello di
-- database, che è l'unico posto dove un divieto è davvero un divieto.
--
-- Sono policy RESTRICTIVE: non concedono niente, si sommano in AND a quelle
-- che già esistono. Per questo lo script è sicuro anche senza sapere come sono
-- scritte le policy attuali — non ne tocca nessuna, ne aggiunge una sopra.
--
-- Non riguarda l'Edge Function `elimina-tecnico`: gira con la service_role,
-- che salta le RLS. Cancellare un tecnico continua a funzionare.
--
-- Sicuro da rieseguire.

-- Chi sta chiamando è un admin?
create or replace function public.e_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.tecnici t
    where t.id = auth.uid() and t.is_admin = true
  );
$$;

comment on function public.e_admin is 'true se l utente collegato è un amministratore; usata dalle policy che vietano la cancellazione';

-- ── certificazioni ──
-- Il tecnico le aggiunge e le modifica, ma non le cancella: una certificazione
-- tolta sparisce dallo storico, dal cruscotto competenze e dalla mappa.
drop policy if exists "solo gli admin cancellano le certificazioni" on public.certificazioni;
create policy "solo gli admin cancellano le certificazioni"
  on public.certificazioni
  as restrictive for delete
  to authenticated
  using (public.e_admin());

-- ── corsi_assegnati ──
-- Il tecnico cambia stato e date del proprio corso, ma non può togliersi
-- di mezzo un corso che l'admin gli ha assegnato.
drop policy if exists "solo gli admin cancellano i corsi assegnati" on public.corsi_assegnati;
create policy "solo gli admin cancellano i corsi assegnati"
  on public.corsi_assegnati
  as restrictive for delete
  to authenticated
  using (public.e_admin());

-- ── corsi_catalogo ──
-- Già coperta: la sua policy di scrittura è solo per gli admin. La ripetiamo
-- come restrictive per non dipendere da come verrà modificata in futuro.
drop policy if exists "solo gli admin cancellano il catalogo" on public.corsi_catalogo;
create policy "solo gli admin cancellano il catalogo"
  on public.corsi_catalogo
  as restrictive for delete
  to authenticated
  using (public.e_admin());

-- Controllo finale: devono comparire tre righe, tutte con permissive = RESTRICTIVE
select tablename, policyname, permissive, cmd
from pg_policies
where schemaname = 'public'
  and policyname like 'solo gli admin cancellano%'
order by tablename;
