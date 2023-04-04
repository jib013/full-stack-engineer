/* main.js */
import {changeText, changeToFunkyColor} from './module.js.js';
// import the functions here, then uncomment the code below

const header = document.getElementById("header");

changeText(header, 'I did it!');

setInterval(()=> {
  
  changeToFunkyColor(header);

}, 200);