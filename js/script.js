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

const convertToSeconds = 1000;

const newGameButton = document.getElementById('new-game');

newGameButton.addEventListener('click', function () {

    const randomArraySelected = pointArray('random-array');

    const arraySolution = makeUniqueRandom(quantity, maxNumber, randomArraySelected);

    console.log('soluzione', arraySolution);


    const userArraySelected = pointArray('user-array');

    setTimeout(function () {

        randomArraySelected.innerHTML = '';

        const arrayInput = makeUserArray(quantity, userArraySelected);

        checkSolution(arrayInput, arraySolution);

    }, 2000/*userTime * convertToSeconds*/); //------------------TOGLI IL TIMER A 2 SECONDI PER DEBUG

});

// PARAMETRI DIFFICOLTA'

let maxNumber = 50;
const maxNumberSelector = pointArray('max-number');
maxNumberSelector.append(maxNumber);

let quantity = 5;
const quantitySelector = pointArray('quantity-numbers');
quantitySelector.append(quantity);

let userTime = 30;
const userTimeSelector = pointArray('user-timer');
userTimeSelector.append(userTime);


// BOTTONE ABBASSA DIFFICOLTA'

const moreEasyButton = document.getElementById('more-easy');

moreEasyButton.addEventListener('click', function () {
    if (maxNumber > 40) { maxNumber -= 10; }
    if (quantity > 4) { quantity--; }
    if (userTime < 35) { userTime += 5; }

    const maxNumberSelector = pointArray('max-number');
    maxNumberSelector.append(maxNumber);

    const quantitySelector = pointArray('quantity-numbers');
    quantitySelector.append(quantity);

    const userTimeSelector = pointArray('user-timer');
    userTimeSelector.append(userTime);

    changeColorDown(maxNumberSelector);

    changeColorDown(quantitySelector);

    changeColorDown(userTimeSelector);

});

// BOTTONE AUMENTA DIFFICOLTA'

const lessEasyButton = document.getElementById('less-easy');

lessEasyButton.addEventListener('click', function () {
    if (maxNumber < 80) { maxNumber += 10; }
    if (quantity < 8) { quantity++; }
    if (userTime > 15) { userTime -= 5; }

    const maxNumberSelector = pointArray('max-number');
    maxNumberSelector.append(maxNumber);

    const quantitySelector = pointArray('quantity-numbers');
    quantitySelector.append(quantity);

    const userTimeSelector = pointArray('user-timer');
    userTimeSelector.append(userTime);

    changeColorUp(maxNumberSelector);

    changeColorUp(quantitySelector);

    changeColorUp(userTimeSelector);

});