/* ─────────────────────────────────────────────────────────────────────
   Kaplet Academy — trascinamento sulla timeline
   Condiviso tra tecnico.html e admin.html: le due pagine disegnano lo
   stesso Gantt, cambia solo cosa succede al rilascio.

   Due gesti:
   · trascinare una barra già in timeline la sposta nel tempo, la durata
     resta quella (per cambiarla si apre la modale con un clic);
   · trascinare una scheda dall'elenco "da mettere in calendario" e
     lasciarla sulla timeline propone quella data come inizio.

   Si usa Pointer Events, non il drag&drop di HTML5: qui serve seguire il
   puntatore pixel per pixel e convertire la posizione in giorni.
   ───────────────────────────────────────────────────────────────────── */

const KapletGantt = (() => {

  const GIORNO = 86400000;
  const toDate = iso => new Date(iso + 'T00:00:00');
  const aISO = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000)
    .toISOString().split('T')[0];
  const addGiorni = (iso, n) => { const d = toDate(iso); d.setDate(d.getDate() + n); return aISO(d); };
  const giorniTra = (a, b) => Math.round((toDate(b) - toDate(a)) / GIORNO);
  const fmtIt = iso => toDate(iso).toLocaleDateString('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric' });

  // Soglia oltre la quale un movimento del puntatore è un trascinamento e
  // non un clic: sotto questa distanza la barra apre la modale come prima.
  const SOGLIA = 4;

  let etichetta = null;   // il riquadro con le date che segue il puntatore
  let fantasma  = null;   // la copia della scheda trascinata dall'elenco

  function mostraEtichetta(testo, x, y) {
    if (!etichetta) {
      etichetta = document.createElement('div');
      etichetta.className = 'g-drag-label';
      document.body.appendChild(etichetta);
    }
    etichetta.textContent = testo;
    etichetta.style.left = x + 'px';
    etichetta.style.top = (y - 38) + 'px';
  }
  function togliEtichetta() { if (etichetta) { etichetta.remove(); etichetta = null; } }

  /* Dalla posizione orizzontale del puntatore alla data corrispondente. */
  function dataDaX(gantt, clientX) {
    const track = gantt.querySelector('.g-track');
    if (!track) return null;
    const r = track.getBoundingClientRect();
    const inizio = gantt.dataset.start;
    const giorni = parseInt(gantt.dataset.giorni, 10);
    const frazione = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    return addGiorni(inizio, Math.round(frazione * giorni));
  }

  function abilita(opz) {
    const wrap = document.querySelector(opz.wrap);
    if (wrap && !wrap._kgDrag) { wrap._kgDrag = true; legaTimeline(wrap, opz); }
    const lista = opz.lista && document.querySelector(opz.lista);
    if (lista && !lista._kgDrag) { lista._kgDrag = true; legaLista(lista, wrap, opz); }
  }

  /* ── Spostare una barra già pianificata ─────────────────────────── */
  function legaTimeline(wrap, opz) {
    wrap.addEventListener('pointerdown', ev => {
      const barra = ev.target.closest('.g-bar');
      if (!barra || ev.button !== 0) return;
      const gantt = wrap.querySelector('.gantt');
      if (!gantt) return;

      const id = barra.dataset.id;
      if (opz.puoiSpostare && !opz.puoiSpostare(id)) return;

      const track = barra.parentElement;
      const larghezzaTrack = track.getBoundingClientRect().width;
      const giorniTotali = parseInt(gantt.dataset.giorni, 10);
      const inizio0 = barra.dataset.inizio;
      const fine0 = barra.dataset.fine || inizio0;
      const esame0 = barra.dataset.esame || '';
      const durata = giorniTra(inizio0, fine0);
      const sinistra0 = parseFloat(barra.style.left);
      const xPartenza = ev.clientX;

      let spostato = false, scarto = 0;
      // Niente setPointerCapture: catturare il puntatore sopprime il click
      // nativo, e un clic secco sulla barra deve continuare ad aprire la
      // modale. Si ascolta su window, che riceve i movimenti anche quando
      // il puntatore esce dall'elemento.

      const muovi = e => {
        const dx = e.clientX - xPartenza;
        if (!spostato && Math.abs(dx) < SOGLIA) return;
        if (!spostato) { spostato = true; barra.classList.add('g-dragging'); document.body.classList.add('g-dragging-on'); }

        // px → giorni, arrotondati: la barra scatta di giorno in giorno
        scarto = Math.round(dx / larghezzaTrack * giorniTotali);
        const nuovoInizio = addGiorni(inizio0, scarto);
        barra.style.left = (sinistra0 + scarto / giorniTotali * 100) + '%';
        mostraEtichetta(`${fmtIt(nuovoInizio)} → ${fmtIt(addGiorni(nuovoInizio, durata))}`, e.clientX, e.clientY);
      };

      const rilascia = async e => {
        window.removeEventListener('pointermove', muovi);
        window.removeEventListener('pointerup', rilascia);
        window.removeEventListener('pointercancel', rilascia);
        togliEtichetta();
        barra.classList.remove('g-dragging');
        document.body.classList.remove('g-dragging-on');
        if (!spostato) return;              // era un clic: ci pensa l'onclick
        e.preventDefault(); e.stopPropagation();
        // il browser fa partire un click subito dopo il rilascio: va zittito,
        // altrimenti alla fine di ogni trascinamento si aprirebbe la modale
        barra._appenaSpostata = true;
        setTimeout(() => { barra._appenaSpostata = false; }, 400);
        if (scarto === 0) { barra.style.left = sinistra0 + '%'; return; }

        const nuovoInizio = addGiorni(inizio0, scarto);
        const nuovaFine = addGiorni(nuovoInizio, durata);
        // l'esame segue il corso: mantiene la stessa distanza dall'inizio
        const nuovoEsame = esame0 ? addGiorni(esame0, scarto) : null;
        await opz.onSposta(id, nuovoInizio, nuovaFine, nuovoEsame);
      };

      window.addEventListener('pointermove', muovi);
      window.addEventListener('pointerup', rilascia);
      window.addEventListener('pointercancel', rilascia);
    });

    // un clic vero apre la modale, un trascinamento no
    wrap.addEventListener('click', ev => {
      const barra = ev.target.closest('.g-bar');
      if (barra && barra._appenaSpostata) { ev.stopPropagation(); barra._appenaSpostata = false; }
    }, true);
  }

  /* ── Trascinare una scheda dall'elenco sulla timeline ────────────── */
  function legaLista(lista, wrap, opz) {
    lista.addEventListener('pointerdown', ev => {
      const presa = ev.target.closest('[data-corso-id]');
      if (!presa || ev.button !== 0) return;
      if (ev.target.closest('button')) return;      // i pulsanti restano pulsanti

      const id = presa.dataset.corsoId;
      const xPartenza = ev.clientX, yPartenza = ev.clientY;
      let trascina = false;

      const muovi = e => {
        if (!trascina && Math.hypot(e.clientX - xPartenza, e.clientY - yPartenza) < SOGLIA) return;
        if (!trascina) {
          trascina = true;
          document.body.classList.add('g-dragging-on');
          fantasma = presa.cloneNode(true);
          fantasma.className = 'g-ghost';
          fantasma.style.width = presa.offsetWidth + 'px';
          document.body.appendChild(fantasma);
          wrap.classList.add('g-drop-attivo');
        }
        fantasma.style.left = (e.clientX + 14) + 'px';
        fantasma.style.top = (e.clientY - 10) + 'px';

        const gantt = wrap.querySelector('.gantt');
        const sopra = gantt && wrap.getBoundingClientRect &&
          e.clientY >= wrap.getBoundingClientRect().top &&
          e.clientY <= wrap.getBoundingClientRect().bottom;
        wrap.classList.toggle('g-drop-sopra', !!sopra);
        if (sopra) {
          const d = dataDaX(gantt, e.clientX);
          if (d) mostraEtichetta('Inizio ' + fmtIt(d), e.clientX, e.clientY);
        } else togliEtichetta();
      };

      const rilascia = async e => {
        window.removeEventListener('pointermove', muovi);
        window.removeEventListener('pointerup', rilascia);
        window.removeEventListener('pointercancel', rilascia);
        if (fantasma) { fantasma.remove(); fantasma = null; }
        togliEtichetta();
        document.body.classList.remove('g-dragging-on');
        wrap.classList.remove('g-drop-attivo', 'g-drop-sopra');
        if (!trascina) return;

        const r = wrap.getBoundingClientRect();
        const dentro = e.clientY >= r.top && e.clientY <= r.bottom && e.clientX >= r.left && e.clientX <= r.right;
        const gantt = wrap.querySelector('.gantt');
        if (!dentro || !gantt) return;      // lasciato fuori: non succede nulla
        const data = dataDaX(gantt, e.clientX);
        if (data) await opz.onPianifica(id, data);
      };

      window.addEventListener('pointermove', muovi);
      window.addEventListener('pointerup', rilascia);
      window.addEventListener('pointercancel', rilascia);
    });
  }

  return { abilita, addGiorni, giorniTra, aISO };
})();
