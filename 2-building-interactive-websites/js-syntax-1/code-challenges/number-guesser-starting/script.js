// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);


// The purpose of this function is to be called each round to determine which guess is closest to the target number.

const compareGuesses = (humanGuess, compGuess, target) => {
    const humanCalc = () => {
        if (isNaN(humanGuess)) {
            alert("Please enter a number between 0 and 9.");
        } else {
            return Math.abs(humanGuess - target);
        }
    }

    console.log(`humanGuess: ${humanGuess}`);
    console.log(`compGuess: ${compGuess}`);
    console.log(`target: ${target}`);


    const compCalc = () => {
            return Math.abs(compGuess - target);
    }

    const cpuVsHuman = (guess1, guess2) => {
        console.log(`guess1: ${guess1}`);
        console.log(`guess2: ${guess2}`);

        if (guess1 === guess2) {
            return true;
        } else if (guess1 > guess2) {
            return false;
        } else if (guess1 < guess2){
            return true;
        }
    }
    console.log(`cpuVsHuman return value: ${cpuVsHuman(humanCalc(), compCalc())}`);
}


// The purpose of this function is to be used to correctly increase the winner’s score after each round.

const updateScore = (winner) => {

    console.log(winner);
    
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}


//The purpose of this function is to be used to update the round number after each round.

const advanceRound = () => {
    currentRoundNumber++;
}

compareGuesses(2,6,2);
compareGuesses(3,6,4);
compareGuesses(4,6,5);
compareGuesses(5,6,9);

/* ATTEMPT 2

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);


// The purpose of this function is to be called each round to determine which guess is closest to the target number.

const compareGuesses = (humanGuess, compGuess, target) => {
    const humanCalc = () => {
        if (isNaN(humanGuess)) {
            alert("Please enter a number between 0 and 9.");
        } else {
            return Math.abs(humanGuess - target);
        }
    }

    console.log(humanGuess);
    console.log(compGuess);


    const compCalc = () => {
            return Math.abs(compGuess - target);
    }

    const cpuVsHuman = (guess1, guess2) => {
        console.log(guess1);
        console.log(guess2);

        if (guess1 === guess2) {
            return true;
        } else if (guess1 > guess2) {
            return false;
        } else if (guess1 < guess2){
            return true;
        }
    }
    return cpuVsHuman(humanCalc(), compCalc());
}


// The purpose of this function is to be used to correctly increase the winner’s score after each round.

const updateScore = (winner) => {

    console.log(winner);
    
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}


//The purpose of this function is to be used to update the round number after each round.

const advanceRound = () => {
    currentRoundNumber++;
}

*/









/* FIRST VERSION 

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.
const generateTarget = () => Math.floor(Math.random() * 10);


// The purpose of this function is to be called each round to determine which guess is closest to the target number.

const compareGuesses = (humanGuess, compGuess, target) => {
    const humanCalc = () => {
        if (humanGuess > target) {
            return humanGuess - target;
        } else if (humanGuess < target) {
            return target - humanGuess;
        } else if (humanGuess === target){
            return target;
        } else if (humanGuess < 0 || humanGuess > 9) {
            alert("Please enter a number between 0 and 9.");
        }
    }

    const compCalc = () => {
        if (compGuess > target) {
            return compGuess - target;
        } else if (compGuess < target) {
            return target - humanGuess;
        } else if (compGuess === target){
            return target;
        }
    }

    const cpuVsHuman = (humanCalc, compCalc) => {
        if (humanCalc === compCalc) {
            return true;
        } else if (humanCalc > compCalc) {
            return false;
        } else if (humanCalc < compCalc){
            return true;
        }
    }
}


// The purpose of this function is to be used to correctly increase the winner’s score after each round.

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}


//The purpose of this function is to be used to update the round number after each round.

const advanceRound = () => {
    currentRoundNumber++;
}

*/