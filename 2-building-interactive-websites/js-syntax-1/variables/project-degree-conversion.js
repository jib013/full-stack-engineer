// var to set the value of kelvin
const kelvin = 293;

//convert celsius from kelvin 
let celsius = kelvin - 273;

//convert farhrenheit from kelvin
let farhrenheit = celsius * (9/5) + 32;

//round value down
farhrenheit = Math.floor(farhrenheit);

console.log(`The temperature is ${farhrenheit} degrees Farhrenheit`);

//convert celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees in Newton converted from celsius.`)