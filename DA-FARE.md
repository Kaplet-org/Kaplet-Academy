# Kaplet University — stato

Aggiornato il 4 settembre 2026.

## Da fare

### 1. Pubblicare `promemoria-settimanale` — 3 minuti

Il codice è scritto e committato, manca solo il deploy: l'editor delle
function del dashboard Supabase non caricava (guasto intermittente loro, la
pagina resta bianca e `monaco` non esiste).

Supabase → Edge Functions → **Deploy a new function** → *Via Editor* → nome
esatto `promemoria-settimanale` → incollare `functions/promemoria-settimanale/index.ts`
→ Deploy.

Prova, senza scrivere a nessuno se non all'admin:

```bash
curl -X POST "https://mcgerrvorboagkukzuzc.supabase.co/functions/v1/promemoria-settimanale?prova=1" \
  -H "Authorization: Bearer <anon key>"
```

Poi SQL Editor → `cron_setup.sql` → Run: rischedula tutti e tre i lavori,
compreso il promemoria del lunedì (`0 8 * * 1`).

### 2. Verificare il dominio su Resend — serve per i promemoria

**Senza questo il promemoria del lunedì non arriva agli operatori**, solo
all'admin: Resend consente di spedire unicamente all'indirizzo con cui è
registrato l'account (`admin@kaplet.it`) finché un dominio non è verificato.

Resend → Domains → Add domain → `kaplet.it` → aggiungere i record DNS che
propone. Poi cambiare il secret `MAIL_DA` in
`Kaplet University <academy@kaplet.it>`.

La function non si rompe nel frattempo: prova a spedire, registra i rifiuti
e li elenca nel riepilogo all'admin spiegandone il motivo.

## Attivo e funzionante

- Catalogo in database: 189 corsi. Percorsi obbligatori `core_ai` (4 corsi) e
  `core_compliance` (ISO 27001, ISO 9001)
- Registrazione autonoma degli operatori con approvazione dell'admin
- Registro `audit_log`; solo gli admin cancellano (policy RESTRICTIVE)
- Edge Function: `crea-utente`, `elimina-tecnico`, `check-scadenze`,
  `impegno-mensile`
- Schedulazione: scadenze ogni giorno alle 08:00, impegno formativo il primo
  del mese alle 08:00
- Secret: `RESEND_API_KEY`, `MAIL_DA`, `URL_ADMIN`

## Da tenere d'occhio

**Il piano Supabase è Free** e i consumi sono minimi (database 12 MB,
documenti 17 MB, 7 account). Il limite vero del piano gratuito non è lo
spazio ma la **pausa dopo circa una settimana di inattività**: la
schedulazione giornaliera dovrebbe tenerlo sveglio, ma non è una garanzia
contrattuale.

**Chiunque abbia la chiave anonima può far partire le mail** (`?prova=1`). La
chiave è pubblica dentro `admin.html`, quindi non è una novità, ma ora le
function spediscono. Se diventasse un problema: limite di frequenza nella
function, o un token dedicato.

## Riferimenti

| Cosa | Dove |
|---|---|
| Catalogo corsi | `catalogo_setup.sql` |
| Corsi AI obbligatori | `corsi_ai_setup.sql` |
| Corsi compliance (ISO) | `corsi_compliance_setup.sql` |
| Mansione | `mansione_setup.sql` |
| Registrazione e approvazione | `registrazione_setup.sql` |
| Registro eliminazioni | `audit_log_setup.sql` |
| Solo admin cancella | `blocca_cancellazioni_setup.sql` |
| Date di pianificazione | `pianificazione_setup.sql` |
| Schedulazione mail | `cron_setup.sql` |
| Mail scadenze | `functions/check-scadenze/index.ts` |
| Mail impegno mensile | `functions/impegno-mensile/index.ts` |
| Promemoria del lunedì | `functions/promemoria-settimanale/index.ts` |

Sito: **https://kaplet.github.io/Kaplet-Academy/** — `university.kaplet.it` è
un inoltro Aruba con iframe, va bene per le persone ma non per i link delle
mail (vedi CLAUDE.md).
