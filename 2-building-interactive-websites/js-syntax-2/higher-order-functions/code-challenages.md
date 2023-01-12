# Code Challenages

## reverseArray() 

Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!

const sentence = ['sense.','make', 'all', 'will', 'This'];
 
reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];

```javascript
// Write your code here:

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length-1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}


// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

```


## greetAliens()

1. Write a function, greetAliens(), that takes in an array of strings and uses a for loop to print a greeting with each string in the array.

The greeting should take the following format:
“Oh powerful [stringElement], we humans offer our unconditional surrender!”

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
 
greetAliens(aliens);
// Should print:
// Oh powerful Blorgous, we humans offer our unconditional surrender! 
// Oh powerful Glamyx, we humans offer our unconditional surrender! 
// Oh powerful Wegord, we humans offer our unconditional surrender! 
// Oh powerful SpaceKing, we humans offer our unconditional surrender! 
Note: You may have noticed how convenient it would be to use .forEach(), but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!



```javascript
const greetAliens = arr => {
  for (let i = 0; i < arr.length; i++) {
    console.log('Oh powerful ' + arr[i] + ', we humans offer our unconditional surrender!');
  }
  return greetAliens;
}


// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);


```



## convertToBaby()

Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby '.

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
 
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];

Note: You may have noticed how convenient it would be to use map, but you’re not allowed to use it here. Don’t worry you’ll have plenty of opportunities to use built-in methods later on!


```javascript
const convertToBaby = arr => {
  const babyArray = [];
  for (let i = 0; i < arr.length; i++) {
    babyArray.push('baby ' + arr[i]);
  }
  return babyArray;
}


const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

```




## Fix The Broken Code!

1. We wrote a function, smallestPowerOfTwo(), which takes in an array.

Within our function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?

### Original Code

```javascript
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            i = 1;
            while (i < number) {
                  i = i * 2;
            }
            results.push(i);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
```


### My Code

```javascript
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];
            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results
}

console.log(smallestPowerOfTwo(numbers)) 
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
```


## declineEverything() and acceptEverything()

1. Write a function declineEverything() that takes in an array of strings and, using .forEach(), loops through each element in the array and calls politelyDecline() with each of them.

The .forEach() function should apply politelyDecline() directly; it should NOT merely receive an argument function that uses politelyDecline().

You can test your function when you’re ready by passing in the veggies array or by making your own array!

2. Now we need to get healthy! Write a function acceptEverything() that takes in an array of strings and loops through each element in the array and grudgingly accepts each of them, by logging to the console in the following format: 'Ok, I guess I will eat some [element].'

You can use any technique you want to accomplish this task. You can test your function when you’re ready by passing in the veggies array or by making your own array!


```javascript
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:

const declineEverything = arr => {
  arr.forEach(politelyDecline);
}

declineEverything(veggies);


const acceptEverything = arr => {
  arr.forEach(arr => {
    console.log('Ok, I guess I will eat some ' + arr + '.');
  })
}

acceptEverything(veggies);
```




## squareNums() 

1. Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!

```javascript
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = arr => arr.map(toSquare);

console.log(squareNums(numbers));

```






## shoutGreetings()

1. Write a function shoutGreetings() that takes in an array of strings and returns a new array. This new array should contain all the strings from the argument array but with capitalized letters and an exclamation point appended to the end: 'heya' will become 'HEYA!'

You can use any technique you want to accomplish this task.

You can test your function when you’re ready by passing in the greetings array or by making your own array!


```javascript
// Write your code here:
const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
```

