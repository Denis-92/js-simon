console.log('JS SCRIPT OK!');

/*
CONSEGNA
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*/

// 1) GENERA E VISUALIZZA 5 NUMERI CASUALI

// 2) IMPOSTA TIMER 30 SECONDI

// 3) AL TERMINE DEL TIMER I NUMERI SCOMPAIONO E COMPAIONO 5 PROMPT

// 4) L'INPUT DEI 5 PROMPT VIENE SALVATO E CONFRONTATO CON I NUMERI CASUALI GENERATI AL PUNTO 1

// 5) L'OUTPUT VISUALIZZA UN REPORT DEI NUMERI INDOVINATI E SBAGLIATI

// INGREDIENTI:
// MATH.FLOOR, MATH.RANDOM, QUERY.SELECTOR, CREATE.ELEMENT, TIMER, AGGIUNGI CLASSE PER "DISPAY NONE", PROMPT,
// FORSE "INDEX OF" PER CONFRONTO INPUT CON RANDOM

const newGameButton = document.getElementById('new-game');
let maxNumber = 100;
let quantity = 5;

newGameButton.addEventListener('click', function () {
    const randomArraySelected = pointArray('random-array');
    makeUniqueRandom(quantity, maxNumber, randomArraySelected);

    const userArraySelected = pointArray('user-array');
    makeEmptyArray(quantity, userArraySelected);

});