console.log('JS FUNCTION OK!');

// GENERATORE NUMERO CASUALE DA 1 A n

function randomGenerator(receiveMax) {
    return giveRandomNumber = Math.floor(Math.random() * receiveMax) + 1;
}

// PUNTARE L'ARRAY

function pointArray(receiveIdArray) {
    //console.log(`Hai puntato la griglia ${receiveIdArray}!`);

    const giveArraySelection = document.getElementById(receiveIdArray);

    giveArraySelection.innerHTML = '';

    return giveArraySelection;
}

// CREARE GLI SLOT DELL'ARRAY E INSERIRE L'INPUT DELL'UTENTE

function makeUserArray(receiveQuantity, receiveArraySelection) {
    for (let i = 0; i < receiveQuantity; i++) {

        const createSlot = document.createElement('div');

        createSlot.className = 'slot-style';

        const userInput = parseInt(prompt('Inserisci numero da 1 a ' + maxNumber));

        createSlot.innerHTML = userInput;

        receiveArraySelection.append(createSlot);

    }

}

// CREARE GLI SLOT DELL'ARRAY E INSERIRE NUMERI RANDOM

function makeArrayContent(receiveArraySelection, receiveRandomNumber) {
    const createSlot = document.createElement('div');

    createSlot.className = 'slot-style';

    createSlot.innerHTML = receiveRandomNumber;

    receiveArraySelection.append(createSlot);
}

// CREA n NUMERI CASUALI DIVERSI

function makeUniqueRandom(receiveQuantity, receiveMax, receiveArraySelection) {

    let i = 0;
    const giveArrayRandomized = [];

    do {

        const randomNumber = randomGenerator(receiveMax);

        while (!giveArrayRandomized.includes(randomNumber)) {

            makeArrayContent(receiveArraySelection, randomNumber);

            giveArrayRandomized[i] = randomNumber;

            i++;

        }

    } while (i < receiveQuantity)

    return giveArrayRandomized;

}

// CAMBIA COLORE IN BASE A DIFFICOLTA'

function changeColorDown(receiveParameterSelector) {
    if (receiveParameterSelector.className === 'hardest-color') {
        receiveParameterSelector.className = 'hard-color';
    } else {
        if (receiveParameterSelector.className === 'hard-color') {
            receiveParameterSelector.className = 'medHard-color';
        } else {
            if (receiveParameterSelector.className === 'medHard-color') {
                receiveParameterSelector.className = 'medium-color';
            } else {
                receiveParameterSelector.className = 'easy-color';
            }
        }
    }
}

function changeColorUp(receiveParameterSelector) {
    if (receiveParameterSelector.className === 'easy-color') {
        receiveParameterSelector.className = 'medium-color';
    } else {
        if (receiveParameterSelector.className === 'medium-color') {
            receiveParameterSelector.className = 'medHard-color';
        } else {
            if (receiveParameterSelector.className === 'medHard-color') {
                receiveParameterSelector.className = 'hard-color';
            } else {
                receiveParameterSelector.className = 'hardest-color';
            }
        }
    }

}