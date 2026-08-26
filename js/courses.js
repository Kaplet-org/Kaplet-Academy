// ============================================================
// KAPLET ACADEMY - Catalogo corsi (auto-generato da Excel)
// 183 corsi - ogni corso ha i path/ruoli a cui appartiene
// ============================================================

const COURSES = [
  {
    "id": "KU-C-001",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "QuickStart: Onboarding the AV Industry",
    "desc": "È un corso introduttivo on-demand pensato per chi è nuovo nel settore AV (audiovisivo). Offre una panoramica rapida su organizzazioni del settore, ruoli professionali, tecnologie AV, segmenti di mercato e basi dei sistemi audiovisivi, con lezioni online interattive, video ed esercitazioni. L’obiettivo è aiutare chi parte da zero a capire come funziona l’industria e a orientare il proprio percorso professionale. Si segue in autonomia, al proprio ritmo.",
    "erogazione": "E-Learning",
    "durata": "10:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_field"
    ]
  },
  {
    "id": "KU-C-002",
    "brand": "AVIXA",
    "gruppo": "NET101",
    "nome": "Networking Technology",
    "desc": "È un corso online on-demand dedicato alle basi del networking applicato al mondo AV. Spiega in modo pratico Ethernet, IP networking, modello OSI, protocolli di trasporto AV, sicurezza di rete, configurazioni tipiche e troubleshooting, con l’obiettivo di dare ai professionisti AV il linguaggio e le competenze essenziali per dialogare meglio con l’IT e gestire sistemi AV over IP.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net",
      "core_field"
    ]
  },
  {
    "id": "KU-E-001",
    "brand": "AVIXA",
    "gruppo": "",
    "nome": "AVIXA-Recognized AV Technologist Test",
    "erogazione": "Test",
    "durata": "02:00",
    "paths": []
  },
  {
    "id": "KU-C-003",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "What is Color Temperature and why is it important?",
    "desc": "È un breve corso on-demand di taglio introduttivo che spiega che cos’è la temperatura colore e perché è importante nel mondo AV, aiutando a capire come influisce sulla resa visiva e sulla qualità percepita delle immagini.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-004",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Video Signal and Transportation",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato ai segnali video e alla loro trasmissione, utile per capire la natura del video signal e la sua importanza nel settore AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-005",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "SPL & Weighting Curves",
    "desc": "È un breve corso on-demand di taglio introduttivo che spiega il rapporto tra SPL, curve di pesatura e udito umano, aiutando a capire perché questi parametri sono importanti nella valutazione e gestione dell’audio in ambito AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-006",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Sound System Equalizing",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato alle basi dell’equalizzazione di un sistema audio, utile per capire come intervenire sull’EQ per ottimizzare la resa sonora di un impianto.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-007",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Sizing Displays",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato al dimensionamento dei display, utile per capire come scegliere uno schermo in base alla dimensione del display e dell’area di installazione o visione.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-008",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Setting Power Amplifier Input Levels",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato alla corretta impostazione della sensibilità d’ingresso dei power amplifier, utile per capire come regolare il livello dell’amplificatore in modo da garantire una migliore esperienza AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-009",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "PISCR Explained",
    "desc": "È un breve corso on-demand di taglio introduttivo che spiega che cos’è il PISCR e perché un buon contrasto è fondamentale nei sistemi AV a proiezione, aiutando a capire meglio la qualità visiva delle immagini proiettate.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-010",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Microphone Types and Polar Patterns",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato ai tipi di microfono e ai diagrammi polari, utile per capire le principali tipologie costruttive e come la direttività influisce sulla ripresa del suono nei sistemi AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-011",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Microphone Sensitivity",
    "desc": "È un breve corso on-demand di taglio introduttivo che spiega che cos’è la sensibilità di un microfono e perché è importante, aiutando a capire come questo parametro influisce sulla corretta acquisizione del segnale audio nei sistemi AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-012",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Loudspeaker Polar Patterns and Frequency Response",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato ai diagrammi polari dei diffusori e alla risposta in frequenza, utile per capire come leggere le specifiche tecniche di un loudspeaker e valutarne meglio il comportamento acustico.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-013",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Inverse Square Law",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato alla legge dell’inverso del quadrato, utile per capire in modo visivo come varia il livello di energia o pressione sonora all’aumentare della distanza dalla sorgente nei sistemi AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-014",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "How to calculate Aspect Ratio",
    "desc": "È un breve corso on-demand di taglio introduttivo che spiega come calcolare l’aspect ratio e come scegliere il display corretto in base al rapporto tra formato dello schermo e risoluzione.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-015",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "How Loud Should my Audio System Be?",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato a come stabilire quanto deve essere “forte” un sistema audio, utile per capire se l’ascoltatore riesce davvero a percepire correttamente il segnale in base alle variabili dell’impianto.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-016",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Ohm's Law and Circuit Theory",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato alla legge di Ohm e alla teoria dei circuiti, utile per capire i principi elettrici di base che stanno dietro al funzionamento dei sistemi AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc",
      "core_field"
    ]
  },
  {
    "id": "KU-C-017",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Fundamentals of Optical Image Capture",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato ai fondamenti dell’acquisizione ottica dell’immagine, utile per capire in modo semplice come vengono catturate le immagini nei sistemi video e AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-018",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Frequency, Wavelength, and Amplitude",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato a frequenza, lunghezza d’onda e ampiezza, utile per capire i tre componenti fondamentali delle onde sonore e luminose nel contesto AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-019",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Calculating Projection Throw Distance",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato al calcolo della distanza di proiezione, utile per capire quali formule usare per determinare il corretto posizionamento del proiettore rispetto allo schermo.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-020",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "ROI and LED Display System Designs",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato al ROI e alla progettazione di sistemi LED display, utile per capire come consulenti, designer e clienti possano valutare il modo migliore di utilizzare un nuovo LED wall per massimizzarne il ritorno sull’investimento.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-021",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "Wi-Fi RF Spectrum Analysis",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato all’analisi dello spettro RF del Wi-Fi, utile per capire in modo semplice come il segnale Wi-Fi si propaga dal router ai dispositivi e quali elementi incidono sulla qualità della connessione in ambito AV.",
    "erogazione": "Video",
    "durata": "00:10",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-022",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "AV Math",
    "desc": "È un corso on-demand dedicato alla matematica applicata al mondo AV, utile per rafforzare le competenze di base e saperle usare in casi pratici come aspect ratio, dimensionamento dei display, scale, legge di Ohm, calcoli di potenza e variazioni in decibel.",
    "erogazione": "E-Learning",
    "durata": "15:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-023",
    "brand": "AVIXA",
    "gruppo": "AV101",
    "nome": "AVoIP Foundations",
    "desc": "È un corso on-demand introduttivo su AVoIP (AV over IP), utile per capire come i contenuti AV vengano trasportati su reti IP standard e quali aspetti tecnici vadano considerati prima, durante e dopo l’implementazione di una soluzione. È incluso nel track General Knowledge, vale 12 RU ed è gratuito per i membri Elite.",
    "erogazione": "E-Learning",
    "durata": "12:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-024",
    "brand": "AVIXA",
    "gruppo": "AV201",
    "nome": "CTS 1: AV Technology",
    "desc": "È un corso on-demand fondamentale per chi si prepara al CTS, dedicato alle basi della tecnologia AV. Copre i principi scientifici di suono, luce ed elettricità, i componenti dei sistemi audio e video, il ruolo del networking e dei sistemi di controllo, oltre ai fondamenti dell’industria AV e della gestione di progetto. È il primo modulo del percorso CTS Prep.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-025",
    "brand": "AVIXA",
    "gruppo": "AV201",
    "nome": "CTS 2: Applied AV and AV Project Process",
    "desc": "È un corso on-demand che prosegue il percorso CTS Prep dopo CTS 1, utile per approfondire le competenze chiave testate nell’esame CTS e applicarle in modo più concreto. Copre temi come business of AV, standard di settore, matematica applicata, raccolta requisiti, site survey, lettura dei disegni, principi di progettazione, project management, installazione, collaudo, manutenzione e troubleshooting.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-C-026",
    "brand": "AVIXA",
    "gruppo": "NET101",
    "nome": "AV for IT Pros",
    "desc": "È un corso on-demand di circa 5 ore pensato per i professionisti IT che vogliono capire meglio la convergenza tra IT e AV, così da gestire e ottimizzare in modo più efficace i sistemi audiovisivi all’interno dell’infrastruttura di rete aziendale.",
    "erogazione": "E-Learning",
    "durata": "05:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net"
    ]
  },
  {
    "id": "KU-C-027",
    "brand": "AVIXA",
    "gruppo": "AV204",
    "nome": "AV Math for Design Online",
    "desc": "È un corso online on-demand dedicato alla matematica applicata alla progettazione AV, utile per rafforzare i calcoli usati nel design di sistemi audiovisivi, come distanze di visione, dimensioni immagine, proiezione, spaziatura dei diffusori, impedenza, wattaggio e aspetti infrastrutturali.",
    "erogazione": "E-Learning",
    "durata": "15:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-028",
    "brand": "AVIXA",
    "gruppo": "AV204",
    "nome": "AV Design 1: Environment Online",
    "desc": "È un corso online on-demand dedicato alla progettazione dell’ambiente AV, utile per capire come tradurre i bisogni del cliente in un design concreto, considerando processo progettuale, ergonomia, principi visivi e principi audio. Include anche esercitazioni basate su scenari pratici e materiali AVIXA da usare nel lavoro.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-C-029",
    "brand": "AVIXA",
    "gruppo": "AV204",
    "nome": "AV Design 2: Infrastructure Online",
    "desc": "È un corso online on-demand dedicato all’infrastruttura per la progettazione AV, utile per capire come il contesto edilizio influenzi il design dei sistemi audiovisivi, considerando impianti elettrici, acustica, illuminazione, HVAC, montaggio e coordinamento con le altre discipline tecniche. (avixa.org )",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-C-030",
    "brand": "AVIXA",
    "gruppo": "AV204",
    "nome": "AV Design 3: Applied Design Online",
    "desc": "È un corso online on-demand dedicato alla progettazione AV applicata, utile per sviluppare competenze pratiche su segnali audio/video digitali, EDID, processing audio, gain structure, reti AV, multicast, sicurezza dei sistemi e principi di human-centered design. (avixa.org )",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-C-031",
    "brand": "AVIXA",
    "gruppo": "AV204",
    "nome": "Audiovisual Network Professional (ANP) Prep",
    "desc": "È un corso online on-demand di preparazione all’esame ANP pensato per professionisti AV e IT che vogliono arrivare preparati alla certificazione Audiovisual Network Professional. Aiuta a ripassare i fondamenti di networking, le soluzioni AV in rete, le operazioni di sicurezza e troubleshooting, oltre a familiarizzare con struttura dell’esame, formato delle domande e strategie di test-taking. Attenzione: il corso non iscrive all’esame, che va richiesto e pagato separatamente.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-003",
    "brand": "AVIXA",
    "gruppo": "AV204",
    "nome": "Audiovisual Network Professional Certification",
    "desc": "È la certificazione AVIXA ANP (Audiovisual Network Professional), pensata per professionisti AV e IT che vogliono dimostrare competenze nell’integrazione dei sistemi AV in rete. Valida la capacità di collegare correttamente apparati AV al network, oppure, lato IT, di integrare correttamente l’AV nell’infrastruttura di rete. L’esame si sostiene solo in presenza presso centri Pearson VUE, ha una validità di 3 anni, non richiede il CTS e al momento è disponibile solo in inglese.",
    "erogazione": "Certification",
    "durata": "02:30",
    "prezzo": 250,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-E-004",
    "brand": "DANTE",
    "gruppo": "AV101",
    "nome": "Dante Certification Level 1",
    "desc": "È un corso introduttivo gratuito pensato per iniziare con Dante e l’AV over IP, utile per capire i fondamenti di audio digitale, video e networking, con anche dimostrazioni pratiche su Dante Controller. L’obiettivo è fornire le basi per progettare e gestire reti Dante semplici a singolo switch, ed è indicato per professionisti AV, integratori e personale IT che si avvicinano al networking AV.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-005",
    "brand": "DANTE",
    "gruppo": "AV101",
    "nome": "Dante Certification Level 2",
    "desc": "È un corso intermedio gratuito pensato per approfondire le competenze su networking Dante in ambienti AV più strutturati, con focus su reti gestite, prestazioni ottimizzate e troubleshooting professionale. Copre temi come IP networking, QoS, VLAN, IGMP, ridondanza e un uso più avanzato di Dante Controller, per progettare e gestire con sicurezza sistemi Dante in contesti aziendali.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-006",
    "brand": "DANTE",
    "gruppo": "AV202",
    "nome": "Dante Certification Level 3",
    "desc": "È il livello più avanzato della certificazione Dante, pensato per professionisti AV e IT che gestiscono sistemi Dante su scala enterprise. Approfondisce temi come deployment su subnet multiple, sincronizzazione PTP, automazione tramite Dante API e progettazione di reti AV resilienti e sicure, con una visione adatta a infrastrutture complesse e distribuite.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av",
      "adv_doc"
    ]
  },
  {
    "id": "KU-E-007",
    "brand": "DANTE",
    "gruppo": "AV202",
    "nome": "Dante Domain Manager Administrator Certification",
    "desc": "È una certificazione specialistica avanzata pensata per chi vuole approfondire la gestione di reti Dante oltre i livelli 1, 2 e 3, con focus su Dante Domain Manager. Il corso spiega come distribuire e configurare DDM, gestire segmentazione logica dei domini, clocking avanzato, utenti e logging, e comprendere come DDM interagisce con Dante Controller in reti più grandi e complesse.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_av",
      "adv_doc"
    ]
  },
  {
    "id": "KU-E-008",
    "brand": "DANTE",
    "gruppo": "AV301",
    "nome": "Dante Mastery Certification",
    "desc": "È una certificazione avanzata e a pagamento, pensata per professionisti AV e IT che vogliono distinguersi nella gestione di sistemi Dante complessi attraverso una formazione pratica, intensiva e in presenza. Si svolge in 4 giorni presso le sedi Audinate di Portland o Cambridge e approfondisce temi come configurazione degli switch, ottimizzazione della rete Dante, troubleshooting avanzato, reti Layer 3, Dante Domain Manager e Dante Director. È il livello più alto della formazione Dante.",
    "erogazione": "Certification",
    "durata": "32:00",
    "prezzo": 2000,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-E-009",
    "brand": "NDI",
    "gruppo": "AV101",
    "nome": "NDI Basics",
    "desc": "È un corso introduttivo on-demand su NDI pensato per apprendere i fondamenti della tecnologia NDI e dell’AV over IP, utile per capire workflow, differenze rispetto a SDI, switching, discovery, registration e principali casi d’uso. Il percorso include 8 contenuti con assessment finale, richiede il superamento dei quiz per ottenere il badge.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-010",
    "brand": "NDI",
    "gruppo": "AV203",
    "nome": "NDI Professional",
    "desc": "È un corso on-demand di livello avanzato su NDI, pensato per sviluppare competenze più tecniche nella progettazione, gestione e ottimizzazione di workflow NDI scalabili. Copre temi come discovery avanzata, reti multi-switch e multi-subnet, multicast, architettura NDI, troubleshooting con NDI Analysis e uso degli NDI Tools, e prevede un assessment finale da 30 domande con certificazione al superamento.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 25,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-011",
    "brand": "NDI",
    "gruppo": "AV101",
    "nome": "NDI Tools",
    "desc": "È un percorso on-demand dedicato agli NDI Tools, pensato per imparare in modo pratico a usare la suite gratuita di applicazioni NDI nei workflow AV e broadcast. Include 11 moduli brevi su strumenti come Access Manager, Audio Direct, Screen Capture, Webcam Input, Bridge, Router, Remote, Test Patterns, VLC Plugin, Adobe Plugins e Studio Monitor, con focus su routing, monitoraggio, contributi remoti, controllo, diagnostica e integrazione software.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-032",
    "brand": "KNX & DALI",
    "gruppo": "",
    "nome": "Corso Base Ohmega Progettazioni",
    "desc": "E' un corso introdutti di KNX e DALI che permette ai tecnici di comprendere le caratteristiche di questi due bus di comunicazione e di poter gestire il coordinamenti con le figure deicate alla lora configurazione durante i cantieri. Prezzo a giornata con un numero n di studenti)",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 700,
    "paths": [
      "adv_presales_av",
      "adv_presales_net",
      "adv_presales_sec"
    ]
  },
  {
    "id": "KU-C-033",
    "brand": "AVIGILON",
    "gruppo": "SEC201",
    "nome": "Avigilon Unity Video8",
    "desc": "Technicians that are responsible for installing and maintaining an Avigilon Unity Video system.",
    "erogazione": "E-Learning",
    "durata": "21:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-034",
    "brand": "AVIGILON",
    "gruppo": "SEC201",
    "nome": "Avigilon Unity Video",
    "desc": "Corso Sales e presales direttamente con Vendor in person con Presentazione prodotti e costruzione Progetti",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-035",
    "brand": "AVIGILON",
    "gruppo": "SEC201",
    "nome": "Avigilon Alta Video (Ava/Aware) Configuration and Operation",
    "desc": "This course is for installers and integrators seeking foundational knowledge in key functions of the Avigilon Alta Video (Ava/Aware) platform.",
    "erogazione": "E-Learning",
    "durata": "04:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-036",
    "brand": "AVIGILON",
    "gruppo": "SEC101",
    "nome": "Alta Video Pre sales e Sales",
    "desc": "Corso Sales e presales direttamente con Vendor in person con Presentazione prodotti e costruzione Progetti",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-037",
    "brand": "AVIGILON",
    "gruppo": "SEC201",
    "nome": "Avigilon Alta Access Installation and Configuration",
    "desc": "Corso OnlinePer installation e configuration del sistema",
    "erogazione": "E-Learning",
    "durata": "05:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-038",
    "brand": "AVIGILON",
    "gruppo": "SEC101",
    "nome": "Alta Access Pre sales e sales",
    "desc": "Corso Sales e presales direttamente con Vendor in person con Presentazione prodotti e costruzione Progetti",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-040",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Get to know network technology",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato ai fondamenti del networking, utile per comprendere i concetti base delle reti applicate al mondo video e AV. Copre temi come come i dati viaggiano in rete, capacità dei diversi tipi di cavo e principi del Power over Ethernet (PoE), insieme alle nozioni di base su componenti di rete e progettazione. Il corso dura circa 30–40 minuti, è gratuito e non richiede prerequisiti, con l’obiettivo di fornire una prima comprensione della tecnologia di rete e del video su IP.",
    "erogazione": "E-Learning",
    "durata": "00:40",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-041",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Get to know lighting for video surveillance",
    "desc": "È un breve corso on-demand introduttivo dedicato all’illuminazione applicata alla videosorveglianza, utile per comprendere come la luce influenzi la qualità delle immagini video. Copre temi come importanza della luce, differenza tra illuminazione visibile e infrarossa (IR), condizioni di ripresa in ambienti bui e principi di progettazione dell’illuminazione, includendo anche consigli pratici per la site planning. Il corso dura circa 15 minuti ed è pensato per fornire una base su come ottenere immagini efficaci in diverse condizioni di luce.",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-042",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Get to know image quality optimization",
    "desc": "È un breve corso on-demand introduttivo dedicato all’ottimizzazione della qualità dell’immagine nei sistemi video, utile per comprendere come ottenere riprese efficaci in diversi contesti. Copre fattori come risoluzione, sensori, frame rate, esposizione e velocità dell’otturatore, oltre al corretto posizionamento delle telecamere e alla gestione di condizioni complesse come aree molto luminose o in ombra. L’obiettivo è fornire le basi per configurare e installare sistemi video in modo da massimizzare la qualità delle immagini.",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-043",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Get to know Axis network camera product types",
    "desc": "È un breve corso on-demand introduttivo dedicato ai diversi tipi di telecamere di rete Axis, utile per comprendere le differenze tra le varie soluzioni e quando utilizzarle nei diversi scenari di videosorveglianza. Copre le principali categorie come fixed dome, bullet, PTZ, panoramic, termiche e modulari, spiegandone caratteristiche, punti di forza e casi d’uso tipici. L’obiettivo è fornire una base per scegliere la tipologia di camera più adatta in funzione delle esigenze di sicurezza e del contesto applicativo.",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-044",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Get to know Axis network camera naming convention",
    "desc": "È un breve corso on-demand introduttivo dedicato alla nomenclatura delle telecamere di rete Axis, utile per capire come leggere e interpretare correttamente i codici prodotto. Spiega come il nome di una camera riveli in modo standardizzato informazioni come linea, tipo, serie, risoluzione, numerazione ed eventuali estensioni/funzionalità, con l’obiettivo di permettere di confrontare e selezionare i prodotti direttamente dal codice; il corso dura circa 20–30 minuti, è gratuito e non richiede prerequisiti.",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-045",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Funzionalità di ricerca forense in AXIS Optimizer for Milestone Xprotect",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:20",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-046",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Scopri AXIS License Manager",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-047",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Scopri AXIS License Plate Verifier",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-048",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Informazioni su AXIS Perimeter Defender",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:20",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-049",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Get to know Axis thermal and thermometric cameras",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:20",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-050",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Scopri la sicurezza informatica in Axis",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-051",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Telecamere protette contro le esplosioni",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-052",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Qualità di immagine applicata",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-053",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Guardati intorno con le telecamere panoramiche",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-054",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Soluzioni per la sicurezza perimetrale e dell'area",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-055",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Introduzione ai radar di sicurezza",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:45",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-056",
    "brand": "AXIS",
    "gruppo": "SEC101",
    "nome": "Sfruttare al massimo l'analisi video",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_sec"
    ]
  },
  {
    "id": "KU-C-057",
    "brand": "AXIS",
    "gruppo": "SEC201",
    "nome": "A&E - Progettazione delle soluzioni video di rete",
    "desc": "",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_sec",
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-058",
    "brand": "AXIS",
    "gruppo": "SEC201",
    "nome": "Analitiche Video Avanzate",
    "desc": "",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-059",
    "brand": "AXIS",
    "gruppo": "SEC201",
    "nome": "AXIS Perimeter Defender",
    "desc": "",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_sec",
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-060",
    "brand": "AXIS",
    "gruppo": "SEC201",
    "nome": "Intrusion Protection Avanzata",
    "desc": "",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-061",
    "brand": "BARCO",
    "gruppo": "AV102",
    "nome": "Assessment",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-062",
    "brand": "BARCO CTRL",
    "gruppo": "AV203",
    "nome": "Barco CTRL Continued Education",
    "desc": "È un corso di aggiornamento professionale su Barco CTRL pensato per chi vuole consolidare e mantenere aggiornate le competenze sulla piattaforma KVM over IP per control room di Barco. Si inserisce nel percorso di training & certification del prodotto ed è utile per approfondire uso, supporto e gestione operativa dell’ecosistema Barco CTRL in contesti di sala controllo.",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-063",
    "brand": "BARCO CTRL",
    "gruppo": "AV203",
    "nome": "Barco CTRL Sales Specialist",
    "desc": "È un corso introduttivo su Barco CTRL pensato per fornire una panoramica iniziale della piattaforma KVM over IP per control room di Barco. Serve a capire cos’è Barco CTRL, come si posiziona in sala controllo e quali sono i suoi pilastri principali — semplicità, scalabilità e sicurezza — così da creare una base utile prima dei moduli più operativi o specialistici.",
    "erogazione": "E-Learning",
    "durata": "00:20",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-064",
    "brand": "BARCO CTRL",
    "gruppo": "AV203",
    "nome": "Barco CTRL Technical Associate",
    "desc": "È un corso tecnico su Barco CTRL pensato per chi vuole sviluppare competenze operative sulla piattaforma KVM over IP per control room, con un taglio più pratico rispetto al modulo introduttivo. Si inserisce nel percorso di training e certificazione Barco per tecnici e specialisti, orientato a temi come installazione, configurazione, riconfigurazione e troubleshooting di base dei sistemi.",
    "erogazione": "E-Learning",
    "durata": "01:30",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-012",
    "brand": "BARCO CTRL",
    "gruppo": "AV306",
    "nome": "Barco CTRL Technical Expert",
    "desc": "È un corso/certificazione tecnica avanzata su Barco CTRL pensato per professionisti che vogliono sviluppare una competenza più approfondita sulla piattaforma KVM over IP per control room. Si colloca nel livello Expert del percorso Barco, quindi con focus su configurazione avanzata, manutenzione, troubleshooting approfondito, analisi dei log ed escalation verso R&D, applicati all’ecosistema Barco CTRL.",
    "erogazione": "Certification",
    "durata": "16:00",
    "prezzo": 1400,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-E-013",
    "brand": "BARCO CTRL",
    "gruppo": "AV306",
    "nome": "Barco UniSee",
    "desc": "È un corso/certificazione tecnica avanzata su Barco UniSee pensato per professionisti che vogliono sviluppare competenze approfondite sui videowall LCD bezel-less di Barco in contesti professionali. Si colloca nel livello Expert del percorso Barco, quindi con focus su installazione e riconfigurazione avanzata, manutenzione, troubleshooting approfondito, raccolta e analisi dei log ed escalation verso R&D applicati all’ecosistema UniSee.",
    "erogazione": "Certification",
    "durata": "16:00",
    "prezzo": 1400,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-065",
    "brand": "BARCO VIDEO",
    "gruppo": "AV102",
    "nome": "Technical Introduction",
    "desc": "È un corso e-learning introduttivo tecnico su Barco Event Master, pensato per fornire una panoramica delle specifiche tecniche dei diversi sistemi Event Master e dei relativi card set. Serve a creare una base iniziale utile per comprendere meglio l’architettura della piattaforma di image processing Barco nei contesti live e professionali.",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-014",
    "brand": "BARCO VIDEO",
    "gruppo": "AV202",
    "nome": "E2 Gen2",
    "desc": "È un corso/certificazione specialistica in aula su Barco Event Master, pensato per tecnici AV, technical director e pre-sales che devono configurare, usare e comprendere in profondità la piattaforma nei live event. Copre hardware Event Master, terminologia video digitale, setup e operation, Toolset, controller EC-30/EC-50, linking con Ex, applicazioni widescreen/multi-screen/LED wall e include esami pratici e teorici per ottenere la qualifica Barco Certified Specialist, valida 2 anni.",
    "erogazione": "Certification",
    "durata": "32:00",
    "prezzo": 2000,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-015",
    "brand": "BARCO VIDEO",
    "gruppo": "AV307",
    "nome": "E2 Gen2 (Level 2)",
    "desc": "È un corso avanzato in aula su Barco Event Master E2 Gen2 (Level 2), pensato per chi vuole sviluppare competenze più approfondite sulla piattaforma di image processing per eventi live. Si colloca nel livello Expert del percorso Barco, con focus su configurazione avanzata, gestione operativa e troubleshooting dei sistemi Event Master in contesti professionali.",
    "erogazione": "Certification",
    "durata": "24:00",
    "prezzo": 2400,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-E-016",
    "brand": "BARCO VIDEO",
    "gruppo": "AV307",
    "nome": "Event Master Encore3 Certified Specialist",
    "desc": "È un corso specialistico completo su Barco Encore3 / Event Master, pensato sia per chi conosce già Event Master E2 sia per chi è nuovo nel mondo Barco Image Processing. Fornisce una formazione approfondita sul prodotto attuale Encore3 e, al completamento del percorso di 3 giorni, porta alla certificazione Level 1 Specialist. Il link russo che hai inviato non risulta disponibile, ma il contenuto corrisponde alla pagina Barco del corso Event Master Encore3 Technical Specialist Full / Certified Specialist.",
    "erogazione": "Certification",
    "durata": "24:00",
    "prezzo": 1400,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-E-017",
    "brand": "BARCO VIDEO",
    "gruppo": "AV203",
    "nome": "Corso Image Processor presso Comm-Tec",
    "desc": "Corso organizzato da comm-tec che garantisce una formazione generale sui processori grafici e la loro configurazione.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_av",
      "adv_doc"
    ]
  },
  {
    "id": "KU-C-066",
    "brand": "BRIGHTSIGN",
    "gruppo": "AV203",
    "nome": "brightAuthor connected 101",
    "desc": "Corso base e generico sull'utilizzo dei brightsign.",
    "erogazione": "E-Learning",
    "durata": "04:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_av",
      "adv_doc"
    ]
  },
  {
    "id": "KU-C-067",
    "brand": "CISCO",
    "gruppo": "KAPLET101",
    "nome": "Black Belt New Hire",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net",
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-068",
    "brand": "CISCO",
    "gruppo": "KAPLET101",
    "nome": "Black Belt (Collaboration) almeno 25 in totale",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net",
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-069",
    "brand": "CISCO",
    "gruppo": "KAPLET101",
    "nome": "Black Belt (Networking) almeno 25 in totale",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_net",
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-018",
    "brand": "CISCO",
    "gruppo": "NET101",
    "nome": "Cisco Certified Support Technician (CCST) Networking",
    "desc": "È la certificazione CCST IT Support, pensata per validare competenze entry-level di supporto IT e preparare a ruoli come help desk, end-user support, computer support specialist e IT help desk analyst. Fa parte del percorso Cisco Certified Support Technician e, per ottenerla, bisogna superare un esame core; Cisco indica che non ci sono prerequisiti formali.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 125,
    "paths": [
      "core_net",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-019",
    "brand": "CISCO",
    "gruppo": "NET101",
    "nome": "Certified Support Technician (CCST) IT Support",
    "desc": "È la famiglia di certificazioni Cisco Certified Support Technician (CCST), pensata per ruoli entry-level IT. Valida competenze di base in networking, cybersecurity o IT support, non richiede prerequisiti formali e si ottiene superando un esame core per ciascun percorso. Cisco la presenta anche come primo passo verso certificazioni associate come CCNA o Cisco Certified Cybersecurity Associate.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 125,
    "paths": [
      "core_av",
      "core_net",
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-020",
    "brand": "CISCO",
    "gruppo": "NET101",
    "nome": "Cisco Certified Network Associate (CCNA)",
    "desc": "È la certificazione Cisco CCNA (Cisco Certified Network Associate), pensata per validare competenze fondamentali in networking, IP connectivity, IP services, security e automazione. È un titolo molto riconosciuto per chi vuole iniziare o consolidare una carriera in ambito reti e IT. Per ottenerla bisogna superare un unico esame, non ci sono prerequisiti formali, anche se Cisco segnala che può essere utile avere 1 o più anni di esperienza pratica con soluzioni Cisco. La certificazione ha validità 3 anni.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 300,
    "paths": [
      "core_net"
    ]
  },
  {
    "id": "KU-E-021",
    "brand": "CISCO",
    "gruppo": "AV205",
    "nome": "Cisco Certified Network Professional Collaboration",
    "desc": "È la certificazione Cisco CCNP Collaboration, pensata per professionisti che vogliono validare competenze avanzate nelle tecnologie di collaborazione, tra cui infrastruttura e design, protocolli, endpoint, applicazioni collaboration e call control. Per ottenerla bisogna superare 2 esami: 1 core exam e 1 concentration exam; non ci sono prerequisiti formali, anche se Cisco indica spesso 3–5 anni di esperienza nel settore. La certificazione ha validità 3 anni.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 400,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-022",
    "brand": "CISCO",
    "gruppo": "NET201",
    "nome": "Cisco Certified Network Professional Enterprise",
    "desc": "È la certificazione Cisco CCNP Enterprise, pensata per professionisti che vogliono validare competenze avanzate nelle reti enterprise, inclusi infrastructure, virtualization, network assurance, security e automation. Per ottenerla bisogna superare 2 esami: 1 core exam e 1 concentration exam; non ci sono prerequisiti formali, anche se Cisco indica spesso 3–5 anni di esperienza nell’implementazione di soluzioni enterprise. La certificazione ha validità 3 anni.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 400,
    "paths": [
      "adv_eng_net"
    ]
  },
  {
    "id": "KU-E-023",
    "brand": "CISCO",
    "gruppo": "NET202",
    "nome": "Cisco Certified Network Professional Wireless",
    "desc": "È la nuova certificazione Cisco CCNP Wireless, che Cisco introdurrà dal 19 marzo 2026 per riportare in un percorso dedicato le competenze wireless prima incluse nel CCNP Enterprise. È pensata per professionisti che vogliono validare competenze avanzate su reti Wi-Fi enterprise, progettazione, implementazione, troubleshooting e tecnologie moderne come Wi-Fi 6, Wi-Fi 7 e Cisco Meraki.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 400,
    "paths": [
      "adv_eng_net"
    ]
  },
  {
    "id": "KU-E-024",
    "brand": "CISCO",
    "gruppo": "AV305",
    "nome": "Cisco Certified Internetwork Expert (CCIE) Collaboration",
    "desc": "È la certificazione Cisco CCIE Collaboration, pensata per professionisti senior che vogliono validare competenze di livello expert nella progettazione, implementazione, operation e ottimizzazione di soluzioni di collaboration complesse. Copre aree come unified communications, gestione e analytics cloud-connected, hybrid/cloud calling, Webex Contact Center e API. Per ottenerla bisogna superare 2 esami: 1 core exam e 1 practical exam; non ci sono prerequisiti formali, anche se Cisco raccomanda 5–7 anni di esperienza. La certificazione ha validità 3 anni.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 400,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-E-025",
    "brand": "CISCO",
    "gruppo": "NET301",
    "nome": "Cisco Certified Internetwork Expert (CCIE) Enterprise",
    "desc": "È la certificazione Cisco CCIE Enterprise Infrastructure, pensata per professionisti senior che vogliono validare competenze di livello expert nelle reti enterprise, dalla progettazione e implementazione fino a operation, ottimizzazione, sicurezza, servizi e automazione. Per ottenerla bisogna superare 2 esami: 1 core exam scritto e 1 lab pratico hands-on; non ci sono prerequisiti formali, anche se Cisco raccomanda 5–7 anni di esperienza. La certificazione ha validità 3 anni.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 400,
    "paths": [
      "spec_eng_net"
    ]
  },
  {
    "id": "KU-E-026",
    "brand": "CISCO",
    "gruppo": "NET302",
    "nome": "Cisco Certified Internetwork Expert (CCIE) Enterprise Wireless",
    "desc": "È la certificazione Cisco CCIE Enterprise Wireless, pensata per professionisti senior che vogliono validare competenze di livello expert nella progettazione, implementazione, operation e ottimizzazione di reti wireless enterprise complesse. Copre aree come architetture wireless, sicurezza, analytics, automazione e programmabilità. Per ottenerla bisogna superare 2 esami: 1 core exam e 1 lab pratico hands-on; non ci sono prerequisiti formali, anche se Cisco raccomanda 5–7 anni di esperienza. La certificazione ha validità 3 anni.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 400,
    "paths": [
      "spec_eng_net"
    ]
  },
  {
    "id": "KU-C-070",
    "brand": "CRESTRON",
    "gruppo": "AV102",
    "nome": "Crestron Basics - Commercial",
    "desc": "È un learning path introduttivo per il mercato commerciale pensato per fornire le competenze essenziali per progettare e installare soluzioni Crestron enterprise-grade. Copre una panoramica dei prodotti Crestron con focus su conferencing e collaboration, video intelligente, distribuzione AV avanzata, networking AV, AV over IP, XiO Cloud, sicurezza e USB, costruendo una base tecnica utile per chi inizia a lavorare con l’ecosistema Crestron.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-071",
    "brand": "CRESTRON",
    "gruppo": "AV102",
    "nome": "Crestron Commercial Solutions (No Classroom)",
    "desc": "È un learning path dedicato alle soluzioni Crestron per ambienti commerciali, pensato per sviluppare competenze su progettazione, implementazione e gestione di sistemi AV professionali in contesti corporate. Copre temi come DigitalMedia, room scheduling, sistemi di controllo, AV Framework, switch USB, applicazioni commerciali e design degli spazi, con l’obiettivo di migliorare collaborazione, uniformità d’esperienza e produttività negli ambienti di lavoro.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-072",
    "brand": "CRESTRON",
    "gruppo": "AV102",
    "nome": "Crestron Certified Technology Architect - Commercial (CTA-C)",
    "desc": "È un percorso di certificazione avanzato per il mercato commerciale, pensato per AV designer, tecnici e figure technical sales che vogliono approfondire le tecnologie Crestron più evolute. Copre Crestron Basics, software e strumenti, DM NVX, intelligent video e Automate VX, Flex conferencing & collaboration, lighting & shades, soluzioni commerciali e XiO Cloud, con un approccio orientato a progettazione, implementazione e gestione di sistemi AV avanzati; al termine consente di ottenere la certificazione Crestron Certified Technology Architect – Commercial (CTA-C).",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-073",
    "brand": "CRESTRON",
    "gruppo": "AV102",
    "nome": "DM NVX® Technology - Certified Designer",
    "desc": "È un percorso di certificazione specialistico dedicato alla progettazione di sistemi AVoIP con tecnologie Crestron, pensato per chi vuole approfondire DM NVX, DM NAX e DM NUX. Copre design di soluzioni AV over IP, risorse progettuali, scenari applicativi, utilizzo del PoE, sicurezza di rete, terminologia IT, DM NVX Director e XiO Cloud, con un approccio orientato a progettazione e implementazione di ecosistemi AV su rete; al termine permette di sviluppare competenze avanzate come Certified Designer nell’ambito DM NVX Technology.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-074",
    "brand": "CRESTRON",
    "gruppo": "AV203",
    "nome": "DM NVX® Technology - Certified Engineer",
    "desc": "È un percorso di certificazione tecnico-pratico dedicato alla tecnologia DM NVX AV-over-IP, pensato per chi vuole acquisire esperienza concreta nella progettazione, configurazione, deployment e troubleshooting di soluzioni Crestron su rete. Copre l’integrazione di video, audio e USB in ambiente IP, con un approccio orientato all’intero ciclo di vita del sistema, dal concept fino alla messa in esercizio; al termine consente di sviluppare competenze operative avanzate come Certified Engineer nell’ambito DM NVX Technology.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-075",
    "brand": "CRESTRON",
    "gruppo": "AV310",
    "nome": "Intelligent Video - Certified Designer",
    "desc": "È un percorso di certificazione specialistico dedicato alla progettazione di soluzioni Crestron Intelligent Video con Automate VX, pensato per chi vuole imparare a disegnare e implementare correttamente sistemi di tracking e regia automatica in ambienti diversi. Copre posizionamento di camere e microfoni, criteri progettuali per le varie tipologie di spazio, uso del tool Automate VX Room Designer e generazione del file di progetto per design review e deployment, con un approccio orientato a progettazione accurata e implementazione efficace; al termine consente di ottenere la certificazione Intelligent Video Certified Design (IVC-D).",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-076",
    "brand": "CRESTRON",
    "gruppo": "AV310",
    "nome": "Intelligent Video - Certified Engineer",
    "desc": "È un percorso di certificazione tecnico-pratico dedicato alle soluzioni Crestron Intelligent Video con Automate VX, pensato per chi vuole imparare a configurare, mettere in servizio e risolvere problemi in ambienti meeting ad alto impatto come boardroom e lecture hall. Copre commissioning, troubleshooting, ottimizzazione delle inquadrature, tracciamento del relatore attivo, layout video personalizzati, registrazione e streaming integrati, oltre all’integrazione con piattaforme di videoconferenza esistenti, con un approccio orientato a gestione operativa e implementazione avanzata; al termine consente di ottenere la certificazione Intelligent Video Certified Engineer (IVC-E).",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-077",
    "brand": "CRESTRON",
    "gruppo": "AV102",
    "nome": "Technician, Crestron Commercial - Certification",
    "desc": "È un percorso di certificazione per tecnici AV in ambito commerciale, pensato per chi vuole acquisire le basi per installare, configurare e mettere in servizio soluzioni Crestron complesse. Copre commissioning di sistemi completi, integrazione con apparati di terze parti, terminologia di settore, configurazione dei dispositivi Crestron, uso dei software applicativi e supporto post-installazione, con un approccio orientato a attività operative e avviamento dei sistemi; al termine consente di ottenere la certificazione Technician, Crestron Commercial.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-140",
    "brand": "CRESTRON",
    "gruppo": "",
    "nome": "Crestron Core Track",
    "erogazione": "E-Learning",
    "durata": "",
    "paths": []
  },
  {
    "id": "KU-C-141",
    "brand": "CRESTRON",
    "gruppo": "",
    "nome": "Crestron Fundamentals Commercial (CTI-CFC)",
    "erogazione": "E-Learning",
    "durata": "",
    "paths": []
  },
  {
    "id": "KU-C-142",
    "brand": "CRESTRON",
    "gruppo": "",
    "nome": "Crestron Network Solutions - Introduzione (CNS-I)",
    "erogazione": "E-Learning",
    "durata": "",
    "paths": []
  },
  {
    "id": "KU-C-143",
    "brand": "CRESTRON",
    "gruppo": "",
    "nome": "Crestron Network Solutions - Design (CNS-D)",
    "erogazione": "E-Learning",
    "durata": "",
    "paths": []
  },
  {
    "id": "KU-C-144",
    "brand": "CRESTRON",
    "gruppo": "",
    "nome": "DigitalMedia 4K Designer",
    "erogazione": "E-Learning",
    "durata": "",
    "paths": []
  },
  {
    "id": "KU-C-078",
    "brand": "ELMO",
    "gruppo": "SEC202",
    "nome": "Elmo Security",
    "desc": "E' Un percorso formativo Tecnico/Pre sales con presentazione prodotti e corso Base /Avanzato di configurazione apparati",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec",
      "adv_doc",
      "adv_field"
    ]
  },
  {
    "id": "KU-C-079",
    "brand": "EXTRON",
    "gruppo": "AV101",
    "nome": "AV Associate",
    "desc": "È un programma di certificazione online introduttivo pensato per fornire una solida base sulle tecnologie AV fondamentali e una panoramica dei prodotti e delle applicazioni Extron. Copre temi come networking, controllo di sistema ed elaborazione digitale del segnale, si segue online in autonomia da desktop o mobile e rappresenta anche la base per i percorsi di certificazione avanzati Extron.",
    "erogazione": "E-Learning",
    "durata": "27:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-080",
    "brand": "EXTRON",
    "gruppo": "AV202",
    "nome": "ProDSP Specialist",
    "desc": "È un programma di certificazione online specialistico pensato per chi vuole approfondire la configurazione, il controllo e l’ottimizzazione di sistemi audio con prodotti Extron ProDSP. Copre l’uso del software DSP Configurator, i criteri di setup e tuning audio, l’impiego di template e blocchi di elaborazione, la validazione delle configurazioni DSP in diverse applicazioni AV, oltre a temi come Dante e VoIP in ambito audio di rete; è indicato per professionisti che installano, configurano e ottimizzano sistemi audio AV.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-081",
    "brand": "EXTRON",
    "gruppo": "AV201",
    "nome": "NetworkAV Specialist",
    "desc": "È un programma di certificazione online specialistico pensato per chi vuole approfondire la progettazione, il deployment, il commissioning e il troubleshooting di sistemi AV over IP con ecosistema Extron NAV. Copre configurazioni punto-punto e multipunto, best practice d’uso di NAVigator per gestione e controllo sicuri, pianificazione del sistema, sicurezza di rete e workflow operativi, con un approccio orientato a implementazione e gestione di sistemi AV in rete; al termine sviluppa competenze come Network AV Specialist (NAVS).",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av",
      "adv_doc"
    ]
  },
  {
    "id": "KU-E-027",
    "brand": "FORTINET",
    "gruppo": "NET101",
    "nome": "NSE 1+2 | Fortinet Certified Fundamentals Cybersecurity",
    "desc": "È un percorso formativo introduttivo sulla cybersecurity (Fortinet Certified Fundamentals), pensato per fornire una base solida sui concetti fondamentali della sicurezza informatica. Copre il panorama delle minacce, i principi di sicurezza, le tecniche di protezione e le principali tecnologie, con l’obiettivo di preparare a ruoli entry-level o a chi necessita di una comprensione generale della cybersecurity.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-028",
    "brand": "FORTINET",
    "gruppo": "NET203",
    "nome": "NSE 3 | Fortinet Certified Professional Security Operations",
    "desc": "È un percorso formativo di livello base-intermedio sulla cybersecurity (Fortinet Certified Associate – FCA), pensato per sviluppare competenze operative nella gestione e configurazione dei dispositivi di sicurezza FortiGate.\n\nIl corso copre le funzionalità principali dei firewall Fortinet, incluse attività come configurazione di rete, policy di sicurezza, VPN, controllo accessi, monitoraggio e protezione dalle minacce, con l’obiettivo di fornire una comprensione pratica delle operazioni di sicurezza più comuni. \n\nÈ rivolto a professionisti IT e cybersecurity che devono gestire o amministrare infrastrutture di sicurezza, e richiede il superamento di un esame finale (FortiGate Operator) per ottenere la certificazione, valida tipicamente per due anni.",
    "erogazione": "Certification",
    "durata": "06:30",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-E-029",
    "brand": "FORTINET",
    "gruppo": "NET203",
    "nome": "NSE 4+5 | Fortinet Certified Professional Security Operations",
    "desc": "È un percorso formativo di livello intermedio sulla sicurezza operativa, pensato per sviluppare competenze nella gestione, monitoraggio e risposta agli incidenti di cybersecurity. Copre attività come analisi dei log, rilevamento delle minacce e gestione delle operazioni di sicurezza, con l’obiettivo di preparare ruoli operativi in ambito SOC e sicurezza IT.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-E-030",
    "brand": "FORTINET",
    "gruppo": "NET203",
    "nome": "NSE 4+5 | Fortinet Certified Professional Cloud Security Security Operations",
    "desc": "È un percorso formativo di livello intermedio dedicato alla sicurezza in ambienti cloud, pensato per sviluppare competenze nella protezione di infrastrutture e applicazioni cloud. Copre temi come configurazione della sicurezza, gestione degli accessi, monitoraggio e protezione delle workload, con l’obiettivo di preparare a ruoli operativi nella cloud security.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-E-031",
    "brand": "FORTINET",
    "gruppo": "NET203",
    "nome": "NSE 4+5 | Fortinet Certified Professional SASE Security Operations",
    "desc": "È un percorso formativo di livello intermedio dedicato all’architettura SASE (Secure Access Service Edge), pensato per sviluppare competenze nella protezione degli accessi a Internet, cloud e applicazioni SaaS. Copre la progettazione, implementazione e gestione di infrastrutture SASE, includendo concetti come accesso sicuro, Zero Trust e sicurezza cloud-based, con l’obiettivo di preparare ruoli tecnici nella network e cloud security.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-E-032",
    "brand": "FORTINET",
    "gruppo": "NET203",
    "nome": "NSE 4+5 | Fortinet Certified Professional Security Operations",
    "desc": "È un percorso formativo di livello intermedio dedicato alla sicurezza delle reti, pensato per sviluppare competenze nella configurazione, gestione e monitoraggio di infrastrutture di network security. Copre attività operative come deployment di firewall, gestione delle policy, analisi del traffico e protezione delle applicazioni, con l’obiettivo di preparare ruoli tecnici nella network security e amministrazione di sistemi di sicurezza.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-E-033",
    "brand": "FORTINET",
    "gruppo": "NET303",
    "nome": "NSE 6+7 | Fortinet Certified Specialist Security Operations",
    "desc": "È un percorso formativo avanzato dedicato alla security operations, pensato per sviluppare competenze nella progettazione, gestione e ottimizzazione di infrastrutture SOC. Copre attività come monitoraggio avanzato, analisi e risposta agli incidenti, troubleshooting e automazione delle operazioni di sicurezza, con l’obiettivo di preparare profili senior nella cybersecurity operativa e architettura di sicurezza.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_sec"
    ]
  },
  {
    "id": "KU-E-034",
    "brand": "FORTINET",
    "gruppo": "NET303",
    "nome": "NSE 6+7 | Fortinet Certified Specialist Cloud Security Security Operations",
    "desc": "È un percorso formativo avanzato dedicato alla sicurezza in ambienti cloud, pensato per sviluppare competenze nella progettazione, gestione e ottimizzazione di architetture di cloud security a livello enterprise. Copre attività come design, amministrazione, monitoraggio e troubleshooting di soluzioni di sicurezza per applicazioni cloud pubbliche e private, con l’obiettivo di preparare profili senior nella cloud security e architettura di sicurezza avanzata.",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_sec"
    ]
  },
  {
    "id": "KU-E-035",
    "brand": "FORTINET",
    "gruppo": "NET303",
    "nome": "NSE 6+7 | Fortinet Certified Specialist SASE Security Operations",
    "desc": "È un percorso formativo avanzato dedicato all’architettura SASE (Secure Access Service Edge), pensato per sviluppare competenze nella progettazione, gestione e ottimizzazione di infrastrutture di accesso sicuro distribuite. Copre attività come design, deployment, monitoraggio e troubleshooting di soluzioni SASE, includendo componenti come SD-WAN, Zero Trust, secure web gateway e firewall-as-a-service, con l’obiettivo di preparare profili senior nella network e cloud security avanzata",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_sec"
    ]
  },
  {
    "id": "KU-E-036",
    "brand": "FORTINET",
    "gruppo": "NET303",
    "nome": "NSE 6+7 | Fortinet Certified Specialist Security Operations",
    "desc": "È un percorso formativo avanzato dedicato alla sicurezza delle reti, pensato per sviluppare competenze nella progettazione, gestione e ottimizzazione di infrastrutture di network security a livello enterprise. Copre attività come design, amministrazione, monitoraggio e troubleshooting di soluzioni avanzate (firewall, SD-WAN, routing e sicurezza integrata), con l’obiettivo di preparare profili senior nella network security e architettura di sicurezza",
    "erogazione": "Certification",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_sec"
    ]
  },
  {
    "id": "KU-C-082",
    "brand": "K-ARRAY",
    "gruppo": "AV202",
    "nome": "2-DAY K-EXPERIENCE AT K-ARRAY HQ",
    "desc": "",
    "erogazione": "In-Class",
    "durata": "16:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-083",
    "brand": "K-ARRAY",
    "gruppo": "AV202",
    "nome": "K-ARRAY Certified Designer",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-084",
    "brand": "K-ARRAY",
    "gruppo": "AV202",
    "nome": "K-ARRAY Certified Installer",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-085",
    "brand": "K-SCAPE",
    "gruppo": "AV202",
    "nome": "KSCAPE WEBINAR SERIES: RAIL S",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-086",
    "brand": "K-SCAPE",
    "gruppo": "AV202",
    "nome": "KSCAPE APPLICATION WEBINAR SERIES: CORPORATE",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-C-087",
    "brand": "K-SCAPE",
    "gruppo": "AV202",
    "nome": "KSCAPE APPLICATION WEBINAR SERIES: HOSPITALITY",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av"
    ]
  },
  {
    "id": "KU-C-088",
    "brand": "KSENIA",
    "gruppo": "SEC202",
    "nome": "Ksenia security",
    "desc": "E' Un percorso formativo Tecnico/Pre sales con presentazione prodotti e corso Base /Avanzato di configurazione apparati",
    "erogazione": "In-Class",
    "durata": "16:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_sec",
      "adv_doc",
      "adv_field"
    ]
  },
  {
    "id": "KU-C-089",
    "brand": "MAXHUB",
    "gruppo": "AV102",
    "nome": "MAXHUB XBoard V7 Series",
    "desc": "",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-090",
    "brand": "MILESTONE",
    "gruppo": "SEC201",
    "nome": "XProtect Certified Design Engineer (XCDE)",
    "desc": "Gli ingegneri di progettazione XProtect progettano soluzioni di sorveglianza per soddisfare le esigenze dei clienti. La valutazione XProtect Certified Design Engineer (XCDE) verifica le tue conoscenze su: Nozioni di base sulla sorveglianza tecnica e video, progettazione del sondaggio del sito, architettura del sistema XProtect, prodotti ed estensioni XProtect, funzionalità di progettazione XProtect, workstation client intelligenti, licenze e assistenza XProtect, best practice per la sicurezza e la sicurezza informatica e gli strumenti e le risorse dei partner XProtect.",
    "erogazione": "E-Learning",
    "durata": "16:00",
    "prezzo": 850,
    "paths": [
      "adv_presales_sec",
      "adv_eng_sec"
    ]
  },
  {
    "id": "KU-C-091",
    "brand": "MILESTONE",
    "gruppo": "SEC301",
    "nome": "XProtect Certified Integration Technician (XCIT)",
    "desc": "I tecnici di integrazione XProtect installano e configurano installazioni XProtect VMS moderatamente complesse con conteggi delle telecamere di 100-500 telecamere. La valutazione XProtect Certified Integration Technician (MCIT) verifica la tua capacità di eseguire questa attività.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 1000,
    "paths": [
      "spec_eng_sec"
    ]
  },
  {
    "id": "KU-C-092",
    "brand": "MILESTONE",
    "gruppo": "SEC301",
    "nome": "XProtect Certified Integration Engineer (XCIE)",
    "desc": "Gli ingegneri di integrazione certificati XProtect installano e configurano complesse installazioni XProtect con un conteggio delle telecamere di circa 100-10.000 telecamere. La valutazione XProtect Certified Integration Engineer (XCIE) verifica la tua conoscenza e capacità di eseguire attività relative a: Best Practice IT e sicurezza, Preparazione della distribuzione XProtect, Installazione XProtect, Impostazioni di configurazione XProtect, Comportamenti di configurazione XProtect, Espansione XProtect, Consegna XProtect e Manutenzione XProtect.",
    "erogazione": "E-Learning",
    "durata": "24:00",
    "prezzo": 1500,
    "paths": [
      "spec_eng_sec"
    ]
  },
  {
    "id": "KU-C-093",
    "brand": "NOTIFIER",
    "gruppo": "SEC101",
    "nome": "Pre-Sales",
    "desc": "Corso Pre Sales e Sales direttamente dal Distributore",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-094",
    "brand": "NOTIFIER",
    "gruppo": "SEC203",
    "nome": "Security Fire",
    "desc": "Corso Tecnico Formativo che abilita alla Programmazione base Centrale Notifier",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_doc",
      "adv_field"
    ]
  },
  {
    "id": "KU-C-095",
    "brand": "NOTIFIER",
    "gruppo": "SEC203",
    "nome": "Security Fire",
    "desc": "Corso Tecnico Formativo che abilita alla Programmazione Avanzata Centrale Notifier",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_field"
    ]
  },
  {
    "id": "KU-C-096",
    "brand": "NOVASTAR",
    "gruppo": "AV102",
    "nome": "LED Screen Technician",
    "desc": "È una certificazione introduttiva di livello base del programma Novastar Certified Engineer (NCE), pensata per formare tecnici junior sulle operazioni fondamentali e sulla manutenzione dei LED display. Copre terminologia di settore, architettura dei sistemi LED, componenti hardware, collegamenti, file di configurazione, software di base, tipologie di schermi, interfacce e scenari applicativi, con l’obiettivo di rendere il candidato capace di orientarsi rapidamente nel contesto tecnico dei display LED; è il livello foundation del percorso NCE e costituisce il prerequisito per le certificazioni successive.",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-097",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Professional in LED Screen Solution Design",
    "desc": "È una certificazione di livello intermedio del programma Novastar Certified Engineer (NCE), pensata per chi vuole sviluppare competenze nella progettazione di soluzioni per LED screen. È rivolta a professionisti che hanno già ottenuto la certificazione L1, come sales, pre-sales, solution designer e tecnici che vogliono evolvere verso attività di configurazione e design. Copre architetture avanzate di controllo LED, calcolo dei moduli e dei carichi, scelta dei prodotti Novastar, progettazione di topologie di sistema e sviluppo di soluzioni per piccoli e medi progetti LED; richiede NCE L1 e almeno un anno di esperienza nel settore LED.",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc",
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-098",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Specialist in LED Screen Solution Design",
    "desc": "È una certificazione avanzata del programma Novastar Certified Engineer (NCE), pensata per formare professionisti capaci di progettare soluzioni complesse di LED display e sistemi di controllo. È rivolta soprattutto a pre-sales engineer, solution designer e figure tecniche con esperienza nel settore, e copre configurazioni multi-sending card, sincronizzazione, integrazione tra LED/LCD/proiezione, selezione della gamma prodotti Novastar e progettazione per scenari complessi come maxi-schermi, forme irregolari, bassa latenza, alta qualità d’immagine, trasmissione a lunga distanza, cluster publishing, 3D e soluzioni 5G; è indicata in particolare per chi ha già una base NCE L2 o almeno tre anni di esperienza nel settore LED.",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-099",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Expert in LED Screen Solution Design",
    "desc": "COMING SOON",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-100",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Professional in LED Screen Implementation",
    "desc": "È una certificazione di livello intermedio del programma Novastar Certified Engineer (NCE), pensata per formare tecnici con competenze pratiche nell’installazione, configurazione e manutenzione di LED display. È rivolta soprattutto a tecnici, post-sales engineer e rental engineer che hanno già ottenuto la certificazione L1, e copre architetture di controllo avanzate, uso dei principali prodotti Novastar, operazioni avanzate in NovaLCT e troubleshooting completo della catena di sistema; al termine consente di gestire in autonomia installazione, debug e manutenzione di base di progetti LED di piccole e medie dimensioni.",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-101",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Specialist in LED Screen Implementation",
    "desc": "È una certificazione avanzata del programma Novastar Certified Engineer (NCE), pensata per formare figure senior specializzate nell’implementazione di sistemi di controllo per LED display complessi. È rivolta soprattutto a technical support engineer, after-sales engineer, rental engineer e professionisti con oltre 3 anni di esperienza o competenze di livello L2, e copre operazioni avanzate in NovaLCT, utilizzo pratico dell’intera gamma prodotti Novastar, configurazioni per scenari complessi come schermi extra-large o irregolari, bassa latenza, trasmissioni a lunga distanza, soluzioni 3D e sistemi con backup completo; al termine consente di operare su progetti LED complessi e su attività di supporto tecnico avanzato.",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-102",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Expert in LED Screen Implementation",
    "desc": "COMING SOON",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-103",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Professional in LED Screen Calibration",
    "desc": "È una certificazione specialistica intermedia del programma Novastar Certified Engineer (NCE), pensata per formare tecnici capaci di eseguire la calibrazione dei LED display. È rivolta soprattutto a technical support engineer, after-sales engineer e rental engineer che hanno già ottenuto la certificazione L1, e copre fondamenti della calibrazione, diverse modalità di correzione, workflow operativi come CLB-Cabinet, CLB-Screen e Calcube, oltre all’analisi dei casi e al troubleshooting; al termine consente di operare in autonomia nella calibrazione di luminosità e colore dei display LED SMD.",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-104",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Specialist in LED Screen Calibration",
    "desc": "È una certificazione avanzata del programma Novastar Certified Engineer (NCE), pensata per formare figure senior specializzate nella calibrazione dei LED display. È rivolta soprattutto a tecnici, post-sales engineer e rental engineer con certificazione NCE L2 o almeno 3 anni di esperienza, e copre calibrazione SMD e COB, schermi irregolari, calibrazione ad alta precisione e full grayscale, uso dei software CLB e Calcube, oltre al troubleshooting delle problematiche di calibrazione; al termine consente di operare in autonomia su servizi avanzati di calibrazione COB e su schermi LED di forma irregolare.",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-105",
    "brand": "NOVASTAR",
    "gruppo": "AV311",
    "nome": "Expert in LED Screen Calibration",
    "desc": "COMING SOON",
    "erogazione": "In-Class",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-106",
    "brand": "POWERSOFT",
    "gruppo": "AV102",
    "nome": "Powersoft 101I",
    "desc": "È un breve corso tecnico di taglio pratico dedicato al software ArmoníaPlus, utile per imparare a creare un progetto Install, utilizzare le funzioni di Dynamic Music Distribution e progettare interfacce App e Web View. Il focus è sulle attività di configurazione e design del sistema per la gestione e il controllo della distribuzione musicale.",
    "erogazione": "E-Learning",
    "durata": "03:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-107",
    "brand": "POWERSOFT",
    "gruppo": "AV202",
    "nome": "Powersoft 201i",
    "desc": "È un corso tecnico on-demand di livello intermedio dedicato ai sistemi Install Powersoft, pensato per chi vuole approfondire la progettazione di progetti avanzati in ArmoníaPlus. Copre la creazione e gestione di sistemi Install più complessi, oltre a temi come audio networking, configurazione di reti e integrazione con controlli di terze parti, ampliando le competenze sviluppate nel corso 101i e fornendo una comprensione più completa del software e delle funzionalità di sistema.",
    "erogazione": "E-Learning",
    "durata": "03:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-108",
    "brand": "Q-SYS",
    "gruppo": "AV102",
    "nome": "Q-SYS Architect",
    "desc": "È un corso introduttivo in aula su Q-SYS Architect, pensato per chi vuole iniziare a progettare sistemi nell’ecosistema Q-SYS senza necessità di competenze di programmazione o commissioning. È indicato per consulenti AV, end user, pre-sales engineer e progettisti, e copre signal flow di base, differenza tra sistemi centralizzati e distribuiti, design di spazi meeting/collaboration e panoramica delle principali famiglie QSC come processing, I/O, amplificatori e diffusori. Non richiede prerequisiti, dura 4 ore in aula e riconosce 2 crediti AVIXA CTS al superamento dell’assessment finale.",
    "erogazione": "Webinar (Prase)",
    "durata": "02:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-109",
    "brand": "Q-SYS",
    "gruppo": "AV102",
    "nome": "Q-SYS Sales Professional",
    "desc": "È un corso on-demand pensato per figure commerciali e sales, utile per capire come presentare e valorizzare la piattaforma Q-SYS senza richiedere competenze tecniche o esperienza con Q-SYS Designer. Copre i principi della piattaforma, panoramica hardware e software, controllo integrato con audio e video, value proposition cloud-first ed ecosistema partner, con un approccio orientato a vendita e posizionamento della soluzione. Non richiede prerequisiti, dura circa 3 ore e riconosce 1,5 crediti AVIXA CTS al completamento.",
    "erogazione": "In-Class",
    "durata": "03:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-110",
    "brand": "Q-SYS",
    "gruppo": "AV102",
    "nome": "Q-SYS Level 0",
    "desc": "Corso introduttivo per accedere al Level 1",
    "erogazione": "E-Learning",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-111",
    "brand": "Q-SYS",
    "gruppo": "AV202",
    "nome": "Q-SYS Level 1",
    "desc": "È un corso tecnico di livello base-intermedio su Q-SYS, pensato per chi vuole imparare a configurare, distribuire e fare troubleshooting dei sistemi sulla piattaforma. Copre Core Manager, Administrator e Configurator, controllo e UCI, audio playback, test & measurement, mixer, soluzioni di conferencing, telephony deployment, monitoraggio cloud e aspetti di sicurezza, con un approccio orientato a commissioning operativo e preparazione all’esame finale; per completarlo è richiesto prima il corso Q-SYS Level Zero.",
    "erogazione": "E-Learning",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_av",
      "adv_doc"
    ]
  },
  {
    "id": "KU-C-112",
    "brand": "Q-SYS",
    "gruppo": "AV202",
    "nome": "Q-SYS Level 2",
    "desc": "È un corso live di livello intermedio-avanzato su Q-SYS, pensato per chi vuole consolidare le competenze dopo il Level 1 attraverso attività pratiche di deployment, creazione di interfacce utente, introduzione a networking e controllo. Ogni partecipante lavora su Core Q-SYS e periferiche di controllo dedicate, con un approccio fortemente hands-on e un esame finale di troubleshooting basato su scenari reali di installazione. Richiede come prerequisiti Q-SYS Level One e Q-SYS Control 101, può essere seguito in presenza o da remoto ed assegna 8 crediti AVIXA CTS al completamento.",
    "erogazione": "In-Class (Prase)",
    "durata": "16:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-113",
    "brand": "Q-SYS",
    "gruppo": "",
    "nome": "Q-SYS Quantum",
    "erogazione": "In-Class",
    "durata": "03:00",
    "paths": []
  },
  {
    "id": "KU-E-037",
    "brand": "SHURE",
    "gruppo": "AV102",
    "nome": "Collaboration & Conferencing Certification - Level 1",
    "desc": "GROUP ID: CCLevel1 | È un percorso introduttivo pensato per team tecnici che gestiscono infrastrutture AV/IT aziendali e per i Channel Partner Shure che supportano i clienti nella scelta delle soluzioni audiovisive più adatte per spazi meeting e ambienti di apprendimento. L’obiettivo è fornire una base chiara per orientarsi tra esigenze tecniche, consulenza e selezione delle tecnologie AV corrette.",
    "erogazione": "Certification",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "core_av",
      "core_doc"
    ]
  },
  {
    "id": "KU-E-038",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Collaboration & Conferencing Certification - Level 2",
    "desc": "GROUP ID: CCLevel2 | È un percorso tecnico pensato per tecnici esperti e ingegneri AV/IT che affrontano attività più complesse di progettazione, setup e configurazione dei sistemi, con l’obiettivo di realizzare soluzioni integrate e affidabili. È rivolto a figure con una preparazione già solida e richiede il completamento del Livello 1 come prerequisito per accedere ai corsi.",
    "erogazione": "Certification",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-039",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Pro Level 1",
    "desc": "È un percorso pensato per professionisti audio emergenti, tecnici AV junior, assistenti audio, stagisti e team commerciali, ideale per costruire una base iniziale sulle competenze e sui concetti fondamentali del settore. Si rivolge a figure all’inizio del percorso professionale o che vogliono rafforzare la propria comprensione tecnica per operare con maggiore sicurezza nel mondo audio e AV.",
    "erogazione": "Certification",
    "durata": "04:30",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-040",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Pro Level 2",
    "desc": "È un percorso ideale per audio engineer, tecnici live sound (FOH e mix), specialisti corporate e AV coordinator, pensato per figure che operano già in contesti professionali e vogliono consolidare competenze pratiche nella gestione audio. Si rivolge a ruoli coinvolti nella configurazione, ottimizzazione e gestione operativa dei sistemi in ambienti live, corporate ed eventi.",
    "erogazione": "Certification",
    "durata": "07:00",
    "prezzo": 0,
    "paths": [
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-E-041",
    "brand": "SHURE",
    "gruppo": "AV308",
    "nome": "Pro Level 3",
    "desc": "È un percorso pensato per professionisti AV esperti, RF coordinator, system designer, senior AV engineer e specialisti dell’integrazione, ideale per figure che gestiscono progetti complessi e vogliono approfondire competenze avanzate. Si rivolge a ruoli coinvolti nella progettazione, ottimizzazione e gestione di sistemi AV evoluti, con particolare attenzione agli aspetti di integrazione e coordinamento tecnico.",
    "erogazione": "Certification",
    "durata": "14:00",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-114",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Microflex Complete Wireless Technical Enablement Training",
    "desc": "È un corso on-demand di taglio tecnico-specialistico dedicato al sistema Shure Microflex Complete Wireless (MXCW), utile per approfondirne funzionalità, setup e configurazione. Copre caratteristiche e vantaggi, casi d’uso tipici, componenti hardware con montaggio e collegamenti, configurazione di base e configurazione avanzata tramite interfacce web, con un approccio orientato a installazione, commissioning e gestione operativa del sistema.",
    "erogazione": "E-Learning",
    "durata": "01:30",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-115",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "MXA310 Table Array Technical Enablement",
    "desc": "È un breve corso tecnico di taglio pratico dedicato al microfono da tavolo Shure MXA310, utile per imparare come installarlo e configurarlo correttamente. Il focus è sulle attività essenziali di setup e messa in servizio del dispositivo in ambienti meeting e conferencing.",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-116",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Microflex Wireless neXt 4 and 8 Channel Technical Enablement",
    "desc": "È un corso tecnico-specialistico on-demand dedicato al sistema Shure Microflex Wireless neXt a 4 e 8 canali, utile per approfondirne funzioni, componenti hardware, interfaccia utente e software Designer. Il percorso, suddiviso in 4 moduli, mostra in modo pratico come configurare il sistema, con casi d’uso, suggerimenti operativi e best practice per l’installazione e la messa in servizio; per ottenere il credito formativo è necessario superare l’esame finale con almeno l’80%.",
    "erogazione": "E-Learning",
    "durata": "00:45",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-117",
    "brand": "SHURE",
    "gruppo": "AV102",
    "nome": "MXA920 Ceiling Array Microphone Technical Enablement",
    "desc": "È un breve corso tecnico di taglio pratico dedicato al microfono array da soffitto Shure MXA920, utile per imparare come installarlo e configurarlo correttamente. Il focus è sulle attività essenziali di setup e messa in servizio del nuovo modello di punta della gamma di microfoni di rete Shure.",
    "erogazione": "E-Learning",
    "durata": "00:45",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-118",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Fast Track: BLX Wireless System",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato al sistema wireless Shure BLX, utile per capire componenti, funzioni e possibilità d’uso della piattaforma. È pensato per applicazioni come strumenti musicali, fitness e parlato, e fornisce una panoramica pratica delle caratteristiche e capacità del sistema per aiutare a scegliere e usare correttamente la soluzione BLX.",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-119",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "SLX-D+ Technical Enablement",
    "desc": "È un corso tecnico-specialistico on-demand dedicato al sistema wireless Shure SLX-D+, pensato per utenti, tecnici e professionisti audio che vogliono imparare a configurarlo, metterlo in servizio e usarlo con sicurezza. Copre setup e configurazione, oltre a funzioni avanzate come ShowLink Ease, Digital Feedback Reduction, encryption, audio summing e integrazione con Wireless Workbench Mobile, con l’obiettivo di facilitare sia la migrazione da SLX-D sia il primo deployment di SLX-D+ in modo efficace.",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-120",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Fast Track: QLX-D Wireless System",
    "desc": "È un breve corso on-demand di taglio introduttivo dedicato al sistema wireless digitale Shure QLX-D, utile per conoscere caratteristiche, componenti e funzionamento generale della piattaforma. Il focus è offrire una panoramica chiara del sistema, così da comprenderne meglio le possibilità d’uso in ambito audio professionale.",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-121",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "ANX4 Technical Overview",
    "desc": "È un corso tecnico-specialistico on-demand dedicato al ricevitore wireless scalabile Shure ANX4, pensato per chi vuole imparare a gestire licenze, configurazione hardware e deployment di sistemi wireless ad alta densità di canali. Copre attivazione e trasferimento delle licenze, utilizzo con trasmettitori Axient Digital o ULX-D, setup del ricevitore e workflow operativi, con l’obiettivo di sfruttare al meglio ANX4 in installazioni wireless professionali complesse.",
    "erogazione": "E-Learning",
    "durata": "00:35",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-122",
    "brand": "SHURE",
    "gruppo": "AV202",
    "nome": "Axient Digital PSM Technical Enablement",
    "desc": "È un corso tecnico-specialistico on-demand dedicato a Shure Axient Digital PSM, pensato per professionisti audio, fonici e staff tecnico che vogliono approfondire in modo pratico e tecnico il sistema. Si basa sulle nozioni introduttive del modulo overview e offre indicazioni più dettagliate su setup, configurazione e utilizzo operativo di Axient Digital PSM, con l’obiettivo di sviluppare una comprensione più completa della piattaforma in contesti professionali.",
    "erogazione": "E-Learning",
    "durata": "00:50",
    "prezzo": 0,
    "paths": [
      "adv_presales_av",
      "adv_eng_av"
    ]
  },
  {
    "id": "KU-C-123",
    "brand": "TECNOFIRE",
    "gruppo": "SEC101",
    "nome": "Corso Pre sales",
    "desc": "Corso Pre-Sales Prodotti con nozioni sulla normativa antincendio",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "core_sec",
      "core_doc"
    ]
  },
  {
    "id": "KU-C-124",
    "brand": "TECNOFIRE",
    "gruppo": "SEC203",
    "nome": "Corso Tecnico 1 Livello",
    "desc": "Corso Tecnico programmazione Base Centrale Incendio",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_doc",
      "adv_field"
    ]
  },
  {
    "id": "KU-C-125",
    "brand": "TECNOFIRE",
    "gruppo": "SEC203",
    "nome": "Corso Tecnico 2 Livello",
    "desc": "Corso Tecnico programmazione Avanzato Centrale Incendio",
    "erogazione": "In-Class",
    "durata": "08:00",
    "prezzo": 0,
    "paths": [
      "adv_field"
    ]
  },
  {
    "id": "KU-C-126",
    "brand": "TELEVIC",
    "gruppo": "AV102",
    "nome": "Meeting Foundamentals",
    "desc": "È un breve corso e-learning introduttivo dedicato ai fondamenti dei sistemi di conferenza, utile per capire cosa sia un conference system, quali siano i diversi tipi di meeting e quali componenti siano necessari per realizzare una sala conferenze efficace. Il percorso fornisce una panoramica delle funzionalità principali e delle possibili configurazioni, aiutando a orientarsi tra le esigenze tipiche degli ambienti meeting e le soluzioni tecnologiche disponibili.",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-127",
    "brand": "TELEVIC",
    "gruppo": "AV102",
    "nome": "Televic Foundation",
    "desc": "È un breve corso e-learning introduttivo dedicato alle soluzioni Televic per meeting e conferenze, utile per comprendere l’azienda, la sua visione e il portafoglio prodotti. Il percorso offre una panoramica delle tecnologie Televic, delle principali linee di prodotto e delle funzionalità di smart audio e controllo, con l’obiettivo di aiutare a identificare e applicare le soluzioni più adatte ai diversi scenari di meeting e conferencing.",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-128",
    "brand": "TELEVIC",
    "gruppo": "AV309",
    "nome": "Technical Training Level 1",
    "desc": "",
    "erogazione": "",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-129",
    "brand": "TELEVIC",
    "gruppo": "AV309",
    "nome": "Technical Training Level 2",
    "desc": "",
    "erogazione": "",
    "durata": "",
    "prezzo": 0,
    "paths": [
      "spec_eng_av"
    ]
  },
  {
    "id": "KU-C-130",
    "brand": "YAMAHA",
    "gruppo": "AV101",
    "nome": "General Knowledge | Beginner | 1. Sound and Hearing Basics",
    "desc": "È un breve corso introduttivo sui principi fondamentali dell’audio, pensato per fornire una base chiara su come viene prodotto il suono, come si propagano le onde sonore e come funziona la percezione uditiva umana. Il percorso aiuta a comprendere i concetti essenziali dell’acustica e dell’audio, risultando utile sia per principianti sia per professionisti che vogliono rafforzare le proprie conoscenze tecniche.",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-131",
    "brand": "YAMAHA",
    "gruppo": "AV101",
    "nome": "General Knowledge | Beginner | 2. Basics of Sound Wave",
    "desc": "È un breve corso introduttivo sulle onde sonore e sull’acustica, pensato per fornire una base solida sui principi fisici del suono. Copre temi come proprietà delle onde, frequenza, ampiezza, fase, interazioni tra onde e tipologie di onde sonore, con l’obiettivo di sviluppare una comprensione utile sia per chi inizia sia per chi opera in ambiti come audio engineering, produzione musicale e discipline tecniche correlate.",
    "erogazione": "E-Learning",
    "durata": "00:45",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-132",
    "brand": "YAMAHA",
    "gruppo": "AV101",
    "nome": "General Knowledge | Beginner | 3. Sound intensity, loudness, and decibels",
    "desc": "È un breve corso introduttivo dedicato a intensità sonora, percezione del volume e decibel, pensato per fornire una base chiara sia sugli aspetti fisici sia su quelli percettivi del suono. Copre la differenza tra forza del suono e loudness, il modo in cui l’orecchio umano elabora i segnali audio, il range dinamico, oltre ai concetti di esponenti, logaritmi e definizione del decibel, fondamentali per comprendere correttamente le misure audio.",
    "erogazione": "E-Learning",
    "durata": "00:30",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-133",
    "brand": "YAMAHA",
    "gruppo": "AV101",
    "nome": "General Knowledge | Beginner | 4. Sound Intensity and Loudness: Levels and Calculations",
    "desc": "È un breve corso introduttivo di taglio tecnico dedicato al concetto di livello in acustica, utile per collegare in modo pratico pressione sonora, intensità sonora e loudness percepita. Copre SPL e valori di riferimento, rapporto tra pressione e intensità, curve di uguale sensazione sonora, filtri di pesatura come l’A-weighting, calcoli in decibel e principali scale audio come dBu, dBV e dBFS, con l’obiettivo di fornire una comprensione chiara e applicabile ai contesti audio reali.",
    "erogazione": "E-Learning",
    "durata": "00:45",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-134",
    "brand": "YAMAHA",
    "gruppo": "AV101",
    "nome": "General Knowledge | Advanced | Speech Intelligibility: Can You Hear Me?",
    "desc": "È un breve corso introduttivo dedicato all’intelligibilità del parlato, utile per capire perché una comunicazione chiara dipenda non solo dal sistema AV, ma anche dalle caratteristiche dell’ambiente in cui viene utilizzato. Spiega come si misura l’intelligibilità e quali interventi possono contribuire a migliorarla, offrendo una base pratica per progettare e valutare meglio spazi e soluzioni audio.",
    "erogazione": "E-Learning",
    "durata": "00:55",
    "prezzo": 0,
    "paths": [
      "core_av"
    ]
  },
  {
    "id": "KU-C-135",
    "brand": "YAMAHA",
    "gruppo": "",
    "nome": "General Knowledge | Advanced | Connecting AES67 Devices",
    "erogazione": "E-Learning",
    "durata": "00:15",
    "paths": []
  },
  {
    "id": "KU-C-136",
    "brand": "YAMAHA",
    "gruppo": "",
    "nome": "Distributed Audio​ and Public Address​ Courses | Beginner | Yamaha Certified ProAV Specialist - Level 1",
    "erogazione": "E-Learning",
    "durata": "01:00",
    "paths": []
  },
  {
    "id": "KU-C-137",
    "brand": "YAMAHA",
    "gruppo": "",
    "nome": "Distributed Audio​ and Public Address​ Courses | Beginner | Better Sound for Commercial Installations",
    "erogazione": "E-Learning",
    "durata": "01:30",
    "paths": []
  },
  {
    "id": "KU-C-138",
    "brand": "YAMAHA",
    "gruppo": "",
    "nome": "DM3 Series: Digital Mixing Console",
    "erogazione": "E-Learning",
    "durata": "01:30",
    "paths": []
  },
  {
    "id": "KU-C-139",
    "brand": "YAMAHA",
    "gruppo": "",
    "nome": "DM7 Series: Digital Mixing Console",
    "erogazione": "E-Learning",
    "durata": "03:00",
    "paths": []
  }
];

// I 17 ruoli flaggabili (= colonne path del catalogo Excel)
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
