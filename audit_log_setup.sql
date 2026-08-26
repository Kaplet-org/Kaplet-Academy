-- ============================================================
-- KAPLET ACADEMY — Tabella audit_log
-- Incolla in Supabase → SQL Editor → Run
--
-- Traccia le operazioni distruttive fatte dal pannello admin.
-- Scritta esclusivamente dalle Edge Function con service_role:
-- nessuna policy di insert, quindi da browser è impossibile
-- aggiungere, modificare o cancellare righe.
-- ============================================================

create table if not exists public.audit_log (
  id uuid default gen_random_uuid() primary key,
  azione text not null,

  -- chi ha eseguito: FK con set null, così il log sopravvive
  -- anche se in futuro viene eliminato l'admin che l'ha fatto
  eseguito_da uuid references auth.users(id) on delete set null,
  eseguito_da_nome text,
  eseguito_da_email text,

  -- chi è stato eliminato: NESSUNA foreign key, di proposito.
  -- La riga in tecnici a questo punto non esiste più e un vincolo
  -- cancellerebbe in cascata proprio la prova di cosa è successo.
  target_id uuid,
  target_nome text,
  target_email text,

  esito text not null default 'completo' check (esito in ('completo','parziale')),
  dettagli jsonb,
  creato_il timestamptz not null default now()
);

create index if not exists idx_audit_creato_il on public.audit_log(creato_il desc);
create index if not exists idx_audit_azione    on public.audit_log(azione);
create index if not exists idx_audit_target    on public.audit_log(target_id);

-- ── ROW LEVEL SECURITY ──────────────────────────────────────
alter table public.audit_log enable row level security;

drop policy if exists "admin_legge_audit" on public.audit_log;

-- Sola lettura, e solo per gli admin. Nessuna policy di insert/update/delete:
-- con RLS attivo questo significa che dal browser il log è immutabile.
create policy "admin_legge_audit"
  on public.audit_log for select
  using (
    exists (
      select 1 from public.tecnici t
      where t.id = auth.uid() and t.is_admin = true
    )
  );

-- ============================================================
-- Verifica: deve restituire 0 righe e nessun errore
-- select * from public.audit_log order by creato_il desc limit 10;
-- ============================================================
