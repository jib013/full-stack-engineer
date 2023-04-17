#  The throw Keyword

Creating an error doesn’t cause our program to stop — remember, an error must be thrown for it to halt the program.

To throw an error in JavaScript, we use the throw keyword like so:

throw Error('Something wrong happened');
// Error: Something wrong happened

When we use the throw keyword, the error is thrown and code after the throw statement will not execute. Take for example:

throw Error('Something wrong happened');
// Error: Something wrong happened
 
console.log('This will never run');

After throw Error('Something wrong happened'); is executed and the error object is thrown, the console.log() statement will not run (just like when a built-in JavaScript error was thrown!). 

```Javascript
throw Error("Username or password does not match");
 console.log('This will not show up');
 ```







 # The try...catch Statement

Up to this point, thrown errors have caused our program to stop running. But, we have the ability to anticipate and handle these errors by writing code to address the error and allow our program to continue running.

In JavaScript, we use try...catch statement to anticipate and handle errors. Take a look at example below:

try {
  throw Error('This error will get caught');
} catch (e) {
  console.log(e);
}
// Prints: This error will get caught
 
console.log('The thrown error that was caught in the try...catch statement!');
// Prints: 'The thrown error that was caught in the try...catch statement!'

Now, let’s break down what happened in the try...catch statement above:

    We have code that follows try inside curly braces {} known as the try block.
    Inside the try block we insert code that we anticipate might throw an error.
    Since we want to see what happens if an error is thrown in the try block, we throw an error with the message 'This error will get caught'.
    Following the try block is the catch statement which accepts the thrown error from the try block . The e represents the thrown error.
    The curly braces that follow catch(e) is known as the catch block and contains code that executes to handle the error.
    Since the error is caught, our console.log() after the try...catch statement prints 'The thrown error that was caught in the try...catch statement!'.

Generally speaking, in a try...catch statement, we evaluate code in the try block and if the code throws an error, the code inside the catch block will handle the error for us. The provided example just showcases how a try...catch statement works because we know an error is being thrown. Let’s first practice writing our own try...catch statement and afterwards we will go over a more practical usage of try...catch.


1. Create a try...catch statement that doesn’t have any code in the try block or the catch block. The catch statement will have accept e for the error object.
Checkpoint 2 Passed

2. In the try block, throw an error using the Error() function and pass into Error() a string containing a message of your choice!
Checkpoint 3 Passed

3. Inside the catch block, log the error to the console.



```JavaScript
try {
  throw Error("Error message of my choice!");
} catch (e) {
  console.log(e);
}
```









# Handling with try...catch

In the previous exercise we caught an error that we threw, but we can also use a try...catch statement to handle built-in errors that are thrown by the JavaScript engine that is reading and evaluating our code.

```Javascript
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
// Prints: TypeError: Assignment to constant variable.
```

In the example above, we didn’t use the throw keyword to throw a custom error, rather we tried to re-assign a const variable and a TypeError was thrown. Then, in our catch block, we logged the error to the console.

Using a try...catch statement for built-in JavaScript errors is really beneficial when we need to use data from an external source that’s not written directly in our program.

Let’s say we expect to grab an array from a database but the information we get back is a string. In our program, we could have a function that only works on arrays. If that function was called with a string instead of an array we would get an error and our program would stop running!

However, we can use a try...catch statement to handle the thrown error for us which allows our program to continue running and we receive a message knowing what went wrong! Let’s see how we can implement this in our code.




```JavaScript
function capAllElements(arr){
	try { 
    arr.forEach((el, index, array) => {
      array[index] = el.toUpperCase();
    });
  } catch(e) {
    console.log(e);
  }
}

capAllElements('Incorrect argument');
```


