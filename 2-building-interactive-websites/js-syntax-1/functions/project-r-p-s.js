const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ? userInput : console.log('Please enter either "rock", "paper", or "scissors".'); 
    };
  
  getUserChoice('roc');
  
  const getComputerChoice = () => {
    // get random number from 0 - 2
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
      return 'rock';
    } else if (compChoice === 1) {
      return'paper';
    } else {
      return 'scissors';
    }
  };
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won with paper...';
      } else {
        return 'You won with rock!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won with scissors...';
      } else {
        return 'You won with paper!';
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won with rock...';
      } else {
        return 'You won with scissors!';
      }
    }
  
  };
  
  console.log(determineWinner());