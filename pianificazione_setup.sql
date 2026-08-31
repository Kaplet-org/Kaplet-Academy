-- Kaplet Academy — Pianificazione (Gantt)
-- Aggiunge le date di pianificazione ai corsi assegnati.
-- Sicuro da rieseguire: usa IF NOT EXISTS.

alter table public.corsi_assegnati
  add column if not exists data_inizio        date,
  add column if not exists data_fine_prevista date,
  add column if not exists data_esame         date;

comment on column public.corsi_assegnati.data_inizio        is 'Inizio del corso, impostato dal tecnico quando lo mette in corso';
comment on column public.corsi_assegnati.data_fine_prevista is 'Fine prevista del corso (precompilata dalla durata di catalogo)';
comment on column public.corsi_assegnati.data_esame         is 'Data prevista/sostenuta dell esame di certificazione';

-- Indice per il Gantt: filtra le righe pianificate ordinandole per data
create index if not exists idx_corsi_assegnati_pianificazione
  on public.corsi_assegnati (data_inizio)
  where data_inizio is not null;
