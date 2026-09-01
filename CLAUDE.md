# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Comandi

Non c'è build, bundler, package.json, linter o test suite. Il sito è HTML statico servito da GitHub Pages (branch `main`, cartella root): il deploy è `git push` su `main`.

```bash
# Sviluppo locale (serve un server HTTP, non aprire i file con file://)
python3 -m http.server 8000     # poi http://localhost:8000/login.html

# Edge Functions (Supabase CLI)
supabase link --project-ref mcgerrvorboagkukzuzc
supabase functions deploy check-scadenze
supabase secrets set SMTP_PASSWORD="..."
```

Progetto Supabase: `mcgerrvorboagkukzuzc`. Lo si può ispezionare con gli strumenti MCP Supabase (`list_tables`, `execute_sql`) — utile perché lo schema in repo è disallineato (vedi sotto).

## Architettura

Quattro pagine HTML autonome, senza framework. Ogni pagina contiene **il proprio CSS e il proprio JS inline**, e crea il proprio client Supabase con `SUPA_URL` / `SUPA_KEY` hardcoded in cima allo `<script>`. L'unico file JS condiviso realmente caricato è `js/courses.js`; le librerie (supabase-js, Chart.js) arrivano da CDN.

- `index.html` — catalogo corsi (filtri per brand/ruolo, costruito da `COURSES`/`RUOLI`)
- `login.html` — login; legge `tecnici.is_admin` e `tecnici.attivo` e redirige
- `tecnico.html` — area personale: corsi assegnati, certificazioni, percorso consigliato
- `admin.html` — pannello admin: team, corsi assegnati, catalogo, pianificazione, scadenze, matrice brand, cruscotto competenze, impostazioni

Conseguenza pratica: **una modifica trasversale (palette, guardia di sessione, helper) va replicata in ogni pagina**. I token colore (`--black #0C0E0D`, `--green #36CD81`, `--warn`, `--danger`, …) sono duplicati nel `:root` di ciascun file.

### File morti — non modificarli aspettandosi un effetto
- `js/api.js` e `js/config.js`: nessuna pagina li include; la logica è stata inlinata nelle HTML.
- `courses.js` nella root: duplicato obsoleto (171 corsi). Non è più nemmeno il duplicato di qualcosa: dal passaggio del catalogo in DB, `js/courses.js` non contiene più corsi.

### Auth e ruoli
Auth Supabase email/password. Ogni pagina protetta ripete la guardia: niente sessione → `login.html`; `is_admin` sbagliato per la pagina → redirect all'altra area. `admin.html` chiama l'Edge Function `crea-utente` (`POST /functions/v1/crea-utente`) per creare utenti con service role: **quella function non è versionata in questo repo**, esiste solo su Supabase.

### Dati
Tabelle usate dal codice:
- `tecnici` — `id` (= `auth.users.id`), `nome`, `cognome`, `ruolo`, `email`, `is_admin`, `attivo`, `data_ingresso`
- `certificazioni` — `tech_id`, `brand`, `corso`, `data_conseguimento`, `data_scadenza`, `documento_url`, `note`, `stato` (`attiva`/`scaduta`), `solo_corso`
- `corsi_assegnati` — `tech_id`, `brand`, `corso`, `anno`, `stato` (`da_fare`/`in_corso`/`completato`), `scadenza`, `note`, `assegnato_da`, `assegnato_il`, `data_inizio`, `data_fine_prevista`, `data_esame`
- `corsi_catalogo` — il catalogo corsi: `id` (KU-C-###), `brand`, `gruppo`, `nome`, `descrizione`, `erogazione`, `durata`, `prezzo`, `link`, `paths` (`text[]`), `attivo`. Creata da `catalogo_setup.sql`
- Storage bucket `certificati`, file sotto `<user_id>/…`

**Il legame tra catalogo e righe è `brand` + `nome`, non l'id**: `certificazioni.corso` e `corsi_assegnati.corso` contengono il testo del nome. Rinominare un corso in catalogo scollega le righe già registrate — `salvaCorsoCatalogo()` avvisa prima di farlo.

Gli script SQL in root si eseguono a mano nel SQL Editor del dashboard (la CLI Supabase non è autenticata e gli strumenti MCP non hanno permessi di scrittura su questo progetto): `catalogo_setup.sql`, `pianificazione_setup.sql`, `audit_log_setup.sql`. Sono idempotenti.

`supabase_setup.sql` è **datato**: non contiene `corsi_assegnati`, né `tecnici.attivo`, né `certificazioni.solo_corso`, e le sue policy RLS non riflettono lo stato attuale. Trattalo come storia, non come sorgente di verità — verifica lo schema reale prima di scrivere query.

### Catalogo corsi e percorsi (`js/courses.js`)
I corsi **non stanno più nel file**: vivono nella tabella `corsi_catalogo` e li gestisce l'admin dalla sezione *Catalogo*. `js/courses.js` è ora solo il caricatore e la tassonomia. Espone:
- `COURSES` — array **vuoto all'avvio**, riempito da `caricaCatalogo(sb)`. Non viene mai sostituito, solo svuotato e riempito, così i riferimenti già presi restano validi. Elementi: `{id, brand, gruppo, nome, desc, erogazione, durata, prezzo, link, paths[]}`
- `RUOLI` — 17 percorsi con `{key, label, gruppo}`, chiavi con prefisso `core_*`, `adv_*`, `spec_*`
- `caricaCatalogo(sb)`, `getCorsiPerRuoli(keys)`, `parseRuoli(str)`, `labelRuolo(key)`, `corsoDiCatalogo(brand, nome)`

**Ogni pagina deve fare `await caricaCatalogo(sb)` prima di disegnare.** Admin e tecnico lo infilano nel `Promise.all` di `load()`/`caricaDati()`; `index.html` lo fa dentro `checkAuth()` e poi chiama `costruisciRAW()` + `initCourses()` — lì `RAW` è un `let` riempito dopo, non più un `const` costruito a inizio script.

`tecnici.ruolo` non è testo libero: contiene le **chiavi dei path separate da virgola** (es. `core_net,adv_eng_net`). Quando l'admin assegna i ruoli a un tecnico, `getCorsiPerRuoli` genera automaticamente le righe in `corsi_assegnati`.

Eliminare un corso dal pannello è un **ritiro**, non una `delete`: mette `attivo = false` e `caricaCatalogo` filtra su `attivo`, così le certificazioni già registrate continuano a trovare il loro corso.

### Cruscotto competenze (`admin.html`, sezione `competenze`)
Area di lavoro del branch `competenze-v2`. Deriva un livello 0–5 per vendor/vertical dalle certificazioni attive:
- `VERTICAL_MAP` mappa ogni brand su uno di `Network` / `Security fisica` / `Audio` / `Video`
- `pesoCert()` pesa la certificazione dal prefisso dei suoi `paths` (`spec_` 4, `adv_` 2.5, altro 1), dimezza se `solo_corso`, altrimenti +1
- `calcolaLivello()` = `sqrt(somma pesi)` + bonus fino a 1 per numero di tecnici distinti, clampato a 5
- I target per area vivono in `localStorage` (`kaplet_targets`), non in DB

Le sezioni si mostrano con `showSection(id, btn)` e le sotto-tab con `setVTab(tab, btn)`; il grafico Chart.js va distrutto/ricreato (`compChartInst`) a ogni render.

### Notifiche scadenze
`functions/check-scadenze/index.ts` (Deno): chiama la RPC `aggiorna_stato_scadute`, cerca le certificazioni che scadono esattamente tra 60/30/7 giorni e invia una mail HTML via SMTP Office365 parlato a mano sul socket (`Deno.connect` + `startTls`). Schedulata con `pg_cron` alle 08:00. Il link "Apri pannello admin" nella mail contiene ancora il placeholder `tuoaccount.github.io`.

## Convenzioni

Tutto — UI, commenti, nomi di funzioni e variabili — è in **italiano** (`caricaDocumento`, `giorniAllaScadenza`, `certsAttive`). Mantieni questa scelta. Lo stile è quello del codice esistente: funzioni globali, `async/await` diretto su supabase-js, `toast()` per i messaggi, `openOverlay`/`closeOverlay` per le modali.
