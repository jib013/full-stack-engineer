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