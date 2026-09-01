# Kaplet Academy — cosa resta da fare su Supabase

Aggiornato il 1 settembre 2026.

## Fatto

- Catalogo corsi in database (`corsi_catalogo`, 183 corsi)
- `KU-C-034 "Avigilon Unity Video"` ritirato dal catalogo
- Registro `audit_log`
- Solo gli admin possono cancellare (policy RESTRICTIVE)
- Edge Function `impegno-mensile` pubblicata
- **Le mail funzionano**: prova riuscita, Resend ha accettato il messaggio
  (`impegno-mensile?prova=1` → `mail.inviata: true`)
- Secret impostati: `RESEND_API_KEY`, `MAIL_DA`

## Resta da fare

Entrambe le cose richiedono pagine del dashboard Supabase che il 1 settembre
2026 restavano bianche — **SQL Editor** ed **editor del codice delle
function** — mentre l'elenco delle function e il deploy di una nuova
funzionavano. Guasto intermittente loro.

### 1. Ricaricare `check-scadenze` con il modo prova

La versione online funziona ma è **senza `?prova=1`**, quindi le mail di
scadenza non si possono verificare finché non scade qualcosa davvero.

Supabase → Edge Functions → `check-scadenze` → Code → sostituire tutto con
`functions/check-scadenze/index.ts` → Deploy.

Poi:

```bash
curl -X POST "https://mcgerrvorboagkukzuzc.supabase.co/functions/v1/check-scadenze?prova=1" \
  -H "Authorization: Bearer <anon key>"
```

Deve rispondere `mail.inviata: true` e far arrivare una mail `[PROVA]` a
admin@kaplet.it.

### 2. Schedulare la mail mensile

SQL Editor → `impegno_mensile_cron.sql` → Run. Deve elencare il job
`impegno-mensile` con pianificazione `0 8 1 * *`.

Senza questo la funzione esiste ma non parte da sola: la mail dell'impegno
va lanciata a mano.

## Facoltativo: mittente `@kaplet.it`

Oggi le mail partono da `onboarding@resend.dev` e possono andare **solo** a
`admin@kaplet.it`, l'indirizzo di registrazione dell'account Resend. Per le
notifiche interne basta.

Per spedire da `academy@kaplet.it` o verso altri indirizzi: Resend → Domains →
Add domain → `kaplet.it` → aggiungere i record DNS. Poi cambiare il secret
`MAIL_DA` in `Kaplet Academy <academy@kaplet.it>`.

## Riferimenti

| Cosa | Dove |
|---|---|
| Catalogo corsi | `catalogo_setup.sql` |
| Registro eliminazioni | `audit_log_setup.sql` |
| Solo admin cancella | `blocca_cancellazioni_setup.sql` |
| Date di pianificazione | `pianificazione_setup.sql` |
| Mail scadenze | `functions/check-scadenze/index.ts` |
| Mail impegno mensile | `functions/impegno-mensile/index.ts` + `impegno_mensile_cron.sql` |
