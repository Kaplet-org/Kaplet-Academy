# Kaplet Academy — cosa resta da fare su Supabase

Tutto il codice è scritto, committato e online. Quello che segue richiede il
dashboard di Supabase, che il 1 settembre 2026 non rispondeva: l'interfaccia si
disegnava ma il contenuto restava bianco su tutte le pagine (SQL Editor, editor
delle function, Table Editor). Le API e le Edge Function già pubblicate
funzionavano regolarmente, quindi era un guasto del loro pannello.

Quando il dashboard torna, i passi sono questi, **in quest'ordine**.

---

## 1. Ritirare il corso doppione — 1 minuto

Due strade, la prima è la più semplice.

**Dal pannello Academy** (non serve Supabase):
Catalogo → cerca `unity` → riga *Avigilon Unity Video* (In-Class, 08:00) →
**Modifica** → **Ritira dal catalogo**.

**Oppure dal SQL Editor**, rilanciando `catalogo_setup.sql`: è idempotente e
contiene già il ritiro in fondo. Deve rispondere `183 in tabella, 182 in
catalogo, 1 ritirato`.

---

## 2. Ricaricare `check-scadenze` — 3 minuti

La versione online funziona ma è **senza il modo prova**, quindi non c'è modo
di verificare che le mail arrivino davvero senza aspettare una scadenza vera.

Supabase → Edge Functions → `check-scadenze` → Code → sostituire tutto con
`functions/check-scadenze/index.ts` → Deploy.

Poi la prova:

```bash
curl -X POST "https://mcgerrvorboagkukzuzc.supabase.co/functions/v1/check-scadenze?prova=1" \
  -H "Authorization: Bearer <anon key>"
```

Deve rispondere `{"ok":true,"prova":true,...,"mail":{"inviata":true,...}}` e
una mail con oggetto `[PROVA]` deve arrivare a **admin@kaplet.it**.

Se risponde `500` con un messaggio di Resend, il problema è il mittente: vedi
il punto 4.

---

## 3. Pubblicare `impegno-mensile` — 5 minuti

Supabase → Edge Functions → **Deploy a new function** → *Via Editor* → nome
esatto `impegno-mensile` → incollare `functions/impegno-mensile/index.ts` →
Deploy.

Prova:

```bash
curl -X POST "https://mcgerrvorboagkukzuzc.supabase.co/functions/v1/impegno-mensile?prova=1" \
  -H "Authorization: Bearer <anon key>"
```

Con `?prova=1` guarda il mese in corso e manda la mail anche se sono tutti in
regola, così si vede subito com'è fatta.

Poi, **solo dopo che la function risponde**, SQL Editor →
`impegno_mensile_cron.sql` → Run. Deve elencare il job `impegno-mensile` con
pianificazione `0 8 1 * *`.

> Se lo script dice `service_role_key non trovata nel Vault`, il job va creato
> a mano: il file spiega cosa sostituire. In quel caso **non committare** il
> file con la chiave dentro.

---

## 4. Facoltativo: mittente `@kaplet.it`

Oggi le mail partono da `onboarding@resend.dev`, l'indirizzo di prova di
Resend, che può spedire **solo** verso `admin@kaplet.it` — cioè l'indirizzo con
cui è registrato l'account. Per le notifiche interne basta.

Per spedire da `academy@kaplet.it`, o verso altri indirizzi, serve verificare
il dominio: Resend → Domains → Add domain → `kaplet.it` → aggiungere i record
DNS che propone. Poi cambiare il secret `MAIL_DA` in
`Kaplet Academy <academy@kaplet.it>`.

---

## Riferimenti

| Cosa | Dove |
|---|---|
| Catalogo corsi | `catalogo_setup.sql` |
| Registro eliminazioni | `audit_log_setup.sql` (già eseguito) |
| Solo admin cancella | `blocca_cancellazioni_setup.sql` (già eseguito) |
| Date di pianificazione | `pianificazione_setup.sql` (già eseguito) |
| Mail scadenze | `functions/check-scadenze/index.ts` |
| Mail impegno mensile | `functions/impegno-mensile/index.ts` + `impegno_mensile_cron.sql` |

Secret già impostati su Supabase: `RESEND_API_KEY`, `MAIL_DA`.
Opzionali non impostati: `MAIL_A` (default `admin@kaplet.it`), `URL_ADMIN`.
