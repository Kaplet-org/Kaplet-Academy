# Kaplet University — cosa resta da fare su Supabase

Aggiornato il 1 settembre 2026.

## Resta una cosa sola

**Schedulare la mail mensile.** SQL Editor → contenuto di `impegno_mensile_cron.sql`
→ Run. Deve elencare il job `impegno-mensile` con pianificazione `0 8 1 * *`.

Senza questo la funzione esiste e funziona, ma non parte da sola: la mail
dell'impegno formativo va lanciata a mano.

Non è stato possibile farlo l'1 settembre 2026 perché **il SQL Editor del
dashboard Supabase restava bianco** (`document.body.innerText` vuoto), per tutta
la giornata e su qualunque query, nuova o salvata. Il resto del dashboard nel
frattempo funzionava: elenco delle function, deploy, secret. Guasto loro.

Se ricapita, il modo per accorgersene subito:

```js
// nella console della pagina
typeof monaco !== 'undefined' && monaco.editor.getModels().length
```

## Fatto

- Catalogo corsi in database (`corsi_catalogo`, 183 corsi)
- `KU-C-034 "Avigilon Unity Video"` ritirato
- Registro `audit_log`
- Solo gli admin possono cancellare (policy RESTRICTIVE)
- Edge Function `check-scadenze` e `impegno-mensile` pubblicate, entrambe col
  modo `?prova=1`
- **Le mail funzionano, verificato**: `check-scadenze?prova=1` e
  `impegno-mensile?prova=1` hanno risposto `mail.inviata: true` con id Resend
- Nome corretto (Kaplet University) e link a `university.kaplet.it` dentro le mail
- Secret: `RESEND_API_KEY`, `MAIL_DA`, `URL_ADMIN`

## Facoltativo: mittente `@kaplet.it`

Oggi le mail partono da `onboarding@resend.dev` e possono andare **solo** a
`admin@kaplet.it`, l'indirizzo con cui è registrato l'account Resend. Per le
notifiche interne basta.

Per spedire da `academy@kaplet.it` o verso altri indirizzi: Resend → Domains →
Add domain → `kaplet.it` → aggiungere i record DNS. Poi cambiare il secret
`MAIL_DA`.

## Riferimenti

| Cosa | Dove |
|---|---|
| Catalogo corsi | `catalogo_setup.sql` |
| Registro eliminazioni | `audit_log_setup.sql` |
| Solo admin cancella | `blocca_cancellazioni_setup.sql` |
| Date di pianificazione | `pianificazione_setup.sql` |
| Mail scadenze | `functions/check-scadenze/index.ts` |
| Mail impegno mensile | `functions/impegno-mensile/index.ts` + `impegno_mensile_cron.sql` |

Il sito sta su **https://university.kaplet.it** (proxy Aruba davanti a GitHub
Pages: nessun file CNAME nel repo, non aggiungerlo).
