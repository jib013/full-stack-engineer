//set empty string. If the user wants, they can enter their name in between the quotation marks. 
let userName = "Jon";
userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = "Here is a question?";
console.log(`Hello ${userName}! You asked "${userQuestion}?"`);

randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

eightBall = "";

switch (randomNumber) {
  case 0: 
    eightBall = console.log('It is certain');
  break;
  case 1: 
    eightBall = console.log('It is decidedly so');
  break;
  case 2: 
    eightBall = console.log('Reply hazy try again');
  break;
  case 3: 
    eightBall = console.log('Cannot predict now');
  break;
  case 4: 
    eightBall = console.log('Do not count on it');
  break;
  case 5: 
    eightBall = console.log('My sources say no');
  break;
  case 6: 
    eightBall = console.log('Outlook not so good');
  break;
  case 7: 
    eightBall = console.log('Signs point to yes');
  break;
}