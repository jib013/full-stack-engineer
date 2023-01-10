# Iterator Documentation

There are many additional built-in array methods, a complete list of which is on the MDN’s Array iteration methods page.

The documentation for each method contains several sections:

    A short definition.
    A block with the correct syntax for using the method.
    A list of parameters the method accepts or requires.
    The return value of the function.
    An extended description.
    Examples of the method’s use.
    Other additional information.

In the instructions below, there are some errors in the code. Use the documentation for a given method to determine the error or fill in a blank to make the code run correctly.


1. In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

For more information browse MDN’s documentation on .some() .

2. The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

We’ve used .filter() in a previous exercise, but, for more information browse MDN’s documentation on .filter() .
Checkpoint 3 Passed

3. In the last line of main.js, there is this code:

// console.log(interestingWords.every(word =>        ));

Complete the code between the parentheses to check if every element has more than 5 characters.

Make sure to uncomment (delete the // before) the last line of the program before you run the code.

For more information browse MDN’s documentation on .every() .


```javascript
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
})


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {
  return word.length > 5;
 } ));

```


# Choose the Right Iterator

There are many iteration methods you can choose. In addition to learning the correct syntax for the use of iteration methods, it is also important to learn how to choose the correct method for different scenarios. The exercises below will give you the opportunity to do just that!

You’ll see errors pop up in the terminal as you work through this exercise, but by the end the errors will be gone!


1. Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.

2. In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.

3. In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.

4. In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.

5. In the fifth method call, replace the word method with a method that will return a boolean value.



```javascript
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);
```






# Review

Awesome job on clearing the iterators lesson! You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let’s review!

    .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
    .map() executes the same code on every element in an array and returns a new array with the updated elements.
    .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
    .findIndex() returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
    .reduce() iterates through an array and takes the values of the elements and returns a single value.
    All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.
    You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).


