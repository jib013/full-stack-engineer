Functions
What are Functions?

When first learning how to calculate the area of a rectangle, there’s a sequence of steps to calculate the correct answer:

    Measure the width of the rectangle.
    Measure the height of the rectangle.
    Multiply the width and height of the rectangle.

With practice, you can calculate the area of the rectangle without being instructed with these three steps every time.

We can calculate the area of one rectangle with the following code:

const width = 10;
const height = 6;
const area =  width * height;
console.log(area); // Output: 60

Imagine being asked to calculate the area of three different rectangles:

// Area of the first rectangle
const width1 = 10;
const height1 = 6;
const area1 =  width1 * height1;
 
// Area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 =  width2 * height2;
 
// Area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 =  width3 * height3;

In programming, we often use code to perform a specific task multiple times. Instead of rewriting the same code, we can group a block of code together and associate it with one task, then we can reuse that block of code whenever we need to perform the task again. We achieve this by creating a function. A function is a reusable block of code that groups together a sequence of statements to perform a specific task.

In this lesson, you will learn how to create and use functions, and how they can be used to create clearer and more concise code.







Function Declarations

In JavaScript, there are many ways to create a function. One way to create a function is by using a function declaration. Just like how a variable declaration binds a value to a variable name, a function declaration binds a function to a name, or an identifier. Take a look at the anatomy of a function declaration below:
Diagram showing the syntax of a function declaration

A function declaration consists of:

    The function keyword.
    The name of the function, or its identifier, followed by parentheses.
    A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.

A function declaration is a function that is bound to an identifier, or name. In the next exercise we’ll go over how to run the code inside the function body.

We should also be aware of the hoisting feature in JavaScript which allows access to function declarations before they’re defined.

Take a look at example of hoisting:

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

Notice how hoisting allowed greetWorld() to be called before the greetWorld() function was defined! Since hoisting isn’t considered good practice, we simply want you to be aware of this feature.

If you want to read more about hoisting, check out MDN documentation on hoisting.





function getReminder() {
  console.log('Water the plants');
}

getReminder();

function greetInSpanish() {
  console.log('Buenas tardes.')
}

greetInSpanish();










Calling a Function

As we saw in previous exercises, a function declaration binds a function to an identifier.

However, a function declaration does not ask the code inside the function body to run, it just declares the existence of the function. The code inside a function body runs, or executes, only when the function is called.

To call a function in your code, you type the function name followed by parentheses.
Diagram showing the syntax of invoking a function

This function call executes the function body, or all of the statements between the curly braces in the function declaration. Function execution diagram

We can call the same function as many times as needed.




function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}










Parameters and Arguments

So far, the functions we’ve created execute a task without an input. However, some functions can take inputs and use the inputs to perform a task. When declaring a function, we can specify its parameters. Parameters allow functions to accept input(s) and perform a task using the input(s). We use parameters as placeholders for information that will be passed to the function when it is called.

Let’s observe how to specify parameters in our function declaration:
JavaScript syntax for declaring a function with parameters

In the diagram above, calculateArea(), computes the area of a rectangle, based on two inputs, width and height. The parameters are specified between the parenthesis as width and height, and inside the function body, they act just like regular variables. width and height act as placeholders for values that will be multiplied together.

When calling a function that has parameters, we specify the values in the parentheses that follow the function name. The values that are passed to the function when it is called are called arguments. Arguments can be passed to the function as values or variables.
JavaScript syntax for invoking a function with arguments as values

In the function call above, the number 10 is passed as the width and 6 is passed as height. Notice that the order in which arguments are passed and assigned follows the order that the parameters are declared.
JavaScript syntax for invoking a function with arguments as variables

The variables rectWidth and rectHeight are initialized with the values for the height and width of a rectangle before being used in the function call.

By using parameters, calculateArea() can be reused to compute the area of any rectangle! Functions are a powerful tool in computer programming so let’s practice creating and calling functions with parameters.




