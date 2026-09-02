# Kaplet University — stato

Aggiornato il 2 settembre 2026. **Non resta niente in sospeso su Supabase.**

## Tutto quello che è attivo

- Catalogo corsi in database: 187 corsi (183 iniziali + 4 AI), `KU-C-034` ritirato
- Quattro corsi AI obbligatori su tutti e 17 i percorsi, assegnati a tutti i tecnici
- Registro `audit_log`; solo gli admin possono cancellare (policy RESTRICTIVE)
- Edge Function: `crea-utente`, `elimina-tecnico`, `check-scadenze`, `impegno-mensile`
- **Mail verificate funzionanti** (`?prova=1` su entrambe → `mail.inviata: true`)
- **Schedulazione attiva**: `check-scadenze` ogni giorno alle 08:00,
  `impegno-mensile` il primo del mese alle 08:00

## Da tenere d'occhio

**Le mail di scadenza non sono mai partite prima del 2 settembre 2026.** pg_cron
e pg_net non erano installati, quindi nessuno chiamava la function: rispondeva
correttamente solo a chi la invocava a mano. Vale la pena controllare, il primo
giorno utile, che una mail arrivi davvero.

**Chiunque abbia la chiave anonima può far partire le mail.** La chiave è
pubblica dentro `admin.html`, quindi non è una novità, ma ora che le function
mandano posta qualcuno potrebbe inondare `admin@kaplet.it` chiamando
`?prova=1`. Se dovesse capitare: mettere un limite di frequenza nella function,
oppure passare a un token dedicato.

## Facoltativo: mittente `@kaplet.it`

Le mail partono da `onboarding@resend.dev` e possono andare **solo** a
`admin@kaplet.it`, l'indirizzo dell'account Resend. Per spedire da
`academy@kaplet.it` o ad altri: Resend → Domains → Add domain → `kaplet.it` →
record DNS. Poi cambiare il secret `MAIL_DA`.

## Riferimenti

| Cosa | Dove |
|---|---|
| Catalogo corsi | `catalogo_setup.sql` |
| Corsi AI obbligatori | `corsi_ai_setup.sql` |
| Registro eliminazioni | `audit_log_setup.sql` |
| Solo admin cancella | `blocca_cancellazioni_setup.sql` |
| Date di pianificazione | `pianificazione_setup.sql` |
| Schedulazione mail | `cron_setup.sql` |
| Mail scadenze | `functions/check-scadenze/index.ts` |
| Mail impegno mensile | `functions/impegno-mensile/index.ts` |

Sito: **https://university.kaplet.it** (proxy Aruba davanti a GitHub Pages:
niente file CNAME nel repo).
