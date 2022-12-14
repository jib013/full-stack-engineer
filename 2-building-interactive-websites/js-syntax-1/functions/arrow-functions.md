Arrow Functions

ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function. Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:

const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};



Concise Body Arrow Functions

JavaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is known as concise body. We’ll explore a few of these techniques below:

    Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
    showcasing how arrow functions parameters differ for different amounts of parameters

    // Zero parameters

        const functionName = () => {};

    // One parameter

        const functionName = parameter => {};

    //Two or more parameters

        const functionName = (paraOne, para2) => {};


    A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.

    // Single line block

        const sumNumbers = number => number + number;

    //multi-line block

        const sumNumbers = number => {
            const sum = number + number;
            return sum;
        };


So if we have a function:

const squareNum = (num) => {
  return num * num;
};

We can refactor the function to:

const squareNum = num => num * num;

Notice the following changes:

    The parentheses around num have been removed, since it has a single parameter.
    The curly braces { } have been removed since the function consists of a single-line block.
    The return keyword has been removed since the function consists of a single-line block.


//Ex: original function

const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};

//converted to arrow function
const plantNeedsWater = day => day === 'Wednesday' ? true : false;
