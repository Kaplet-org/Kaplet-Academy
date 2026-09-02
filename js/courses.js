// ============================================================
// KAPLET ACADEMY - Catalogo corsi
//
// I corsi NON stanno più in questo file: vivono nella tabella
// `corsi_catalogo` su Supabase, così l'admin li aggiunge, modifica ed
// elimina dal pannello. Qui restano i percorsi (RUOLI), che sono
// tassonomia interna, e le funzioni che le pagine usano da sempre.
//
// Ogni pagina deve chiamare `await caricaCatalogo(sb)` prima di disegnare
// qualcosa. Lo storico dei 183 corsi generati dall'Excel è in
// catalogo_setup.sql e nella storia git di questo file.
// ============================================================

// Riempito da caricaCatalogo(). L'array non viene mai sostituito, solo
// svuotato e riempito: così i riferimenti già presi dalle pagine restano validi.
const COURSES = [];
let CATALOGO_CARICATO = false;

// Legge il catalogo dal database. Restituisce COURSES.
// Solleva l'errore invece di ripiegare su una copia locale: meglio una
// pagina che si lamenta di un catalogo vuoto che una che ne mostra uno vecchio.
async function caricaCatalogo(sb) {
  const { data, error } = await sb.from('corsi_catalogo')
    .select('*').eq('attivo', true).order('id');
  if (error) throw error;
  COURSES.length = 0;
  (data || []).forEach(r => COURSES.push({
    id:         r.id,
    brand:      r.brand,
    gruppo:     r.gruppo || '',
    nome:       r.nome,
    desc:       r.descrizione || '',
    erogazione: r.erogazione || '',
    durata:     r.durata || '',
    // prezzo assente e prezzo zero non sono la stessa cosa
    prezzo:     (r.prezzo === null || r.prezzo === undefined) ? undefined : Number(r.prezzo),
    link:       r.link || '',
    paths:      r.paths || []
  }));
  CATALOGO_CARICATO = true;
  return COURSES;
}

// Percorsi formativi. Le chiavi finiscono in `tecnici.ruolo`, separate da virgola.
const RUOLI = [
  {
    "key": "core_av",
    "label": "Core Path - AV",
    "gruppo": "Core Path"
  },
  {
    "key": "core_net",
    "label": "Core Path - NET",
    "gruppo": "Core Path"
  },
  {
    "key": "core_sec",
    "label": "Core Path - SEC",
    "gruppo": "Core Path"
  },
  {
    "key": "core_doc",
    "label": "Core Path - DOC",
    "gruppo": "Core Path"
  },
  {
    "key": "core_field",
    "label": "Core Path - Field Technician",
    "gruppo": "Core Path"
  },
  {
    "key": "core_ai",
    "label": "Core Path - AI",
    "gruppo": "Core Path"
  },
  {
    "key": "core_compliance",
    "label": "Core Path - Compliance",
    "gruppo": "Core Path"
  },
  {
    "key": "adv_presales_av",
    "label": "Advanced Path - Pre-Sales AV",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_presales_net",
    "label": "Advanced Path - Pre-Sales NET",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_presales_sec",
    "label": "Advanced Path - Pre-Sales SEC",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_eng_av",
    "label": "Advanced Path - Engineer AV",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_eng_net",
    "label": "Advanced Path - Engineer NET",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_eng_sec",
    "label": "Advanced Path - Engineer SEC",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_doc",
    "label": "Advanced Path - DOC",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_pm",
    "label": "Advanced Path - Project Manager",
    "gruppo": "Advanced Path"
  },
  {
    "key": "adv_field",
    "label": "Advanced Path - Field Technician",
    "gruppo": "Advanced Path"
  },
  {
    "key": "spec_eng_av",
    "label": "Specialist Path - Engineer AV",
    "gruppo": "Specialist Path"
  },
  {
    "key": "spec_eng_net",
    "label": "Specialist Path - Engineer NET",
    "gruppo": "Specialist Path"
  },
  {
    "key": "spec_eng_sec",
    "label": "Specialist Path - Engineer SEC",
    "gruppo": "Specialist Path"
  }
];

// Restituisce tutti i corsi appartenenti a una lista di path/ruoli selezionati
// pathKeys: array di chiavi ruolo, es. ["core_net","adv_eng_net"]
function getCorsiPerRuoli(pathKeys) {
  if (!pathKeys || !pathKeys.length) return [];
  return COURSES.filter(c => c.paths.some(p => pathKeys.includes(p)));
}

// Compat: accetta anche una stringa con path separati da virgola (come salvato in DB)
function parseRuoli(ruoloStr) {
  if (!ruoloStr) return [];
  return ruoloStr.split(',').map(s => s.trim()).filter(Boolean);
}

// Etichetta leggibile da una chiave path
function labelRuolo(key) {
  const r = RUOLI.find(x => x.key === key);
  return r ? r.label : key;
}

// Il corso di catalogo che corrisponde a una riga di certificazioni/corsi_assegnati.
// Il legame è il nome, non l'id: è così che sono state scritte le righe finora.
function corsoDiCatalogo(brand, nome) {
  return COURSES.find(c => c.brand === brand && c.nome === nome) || null;
}
