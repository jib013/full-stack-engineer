/*

Building Interactive Websites
Dog Years

Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

Here’s how you convert your age from “human years” to “dog years”:

    The first two years of a dog’s life count as 10.5 dog years each.
    Each year following equates to 4 dog years.

Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.

*/



//set my current age
const myAge = 35;

//set early year value for dogs
let earlyYears = 2; 

//reassign the value for match the amount of years in human years that is
earlyYears *= 10.5;

//Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it. 
laterYears = myAge - 2; 

//calculate the number of dog years accounted for by your later years
laterYears *= 4;

//total years
myAgeInDogYears = earlyYears + laterYears;

//conver my name to lower case
const myName = 'Jon'.toLowerCase();

console.log(earlyYears);
console.log(laterYears);
console.log(myAgeInDogYears);
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`);