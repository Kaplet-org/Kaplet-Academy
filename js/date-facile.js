/* ─────────────────────────────────────────────────────────────────────
   Kaplet Academy — campi data più comodi
   Condiviso da tecnico.html e admin.html.

   Di serie il calendario si apre solo centrando la piccola icona sulla
   destra del campo, che è un bersaglio minuscolo. Qui basta toccare un
   punto qualsiasi del campo, o premere Invio quando ci si arriva col
   tabulatore.
   ───────────────────────────────────────────────────────────────────── */

(() => {

  function apri(campo) {
    if (!campo || campo.disabled || campo.readOnly) return;
    try {
      // showPicker richiede un gesto dell'utente: clic e tasto lo sono.
      // Solleva un'eccezione se il calendario è già aperto — per esempio
      // quando si clicca proprio sull'icona — e lì non c'è nulla da fare.
      campo.showPicker();
    } catch (e) { /* già aperto, oppure browser che non espone showPicker */ }
  }

  document.addEventListener('click', ev => {
    const campo = ev.target.closest && ev.target.closest('input[type="date"]');
    if (campo) apri(campo);
  });

  document.addEventListener('keydown', ev => {
    if (ev.key !== 'Enter') return;
    const campo = ev.target.closest && ev.target.closest('input[type="date"]');
    if (!campo) return;
    ev.preventDefault();     // altrimenti Invio invierebbe la finestra
    apri(campo);
  });

})();
