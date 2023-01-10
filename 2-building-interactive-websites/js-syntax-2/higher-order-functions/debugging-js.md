# DEBUGGING JAVASCRIPT CODE
Debugging Overview
Any programmer will tell you that it is incredibly common to be making great progress working through a coding problem when all of a sudden an error like this gets thrown at you:

/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
"my_name".capitalize();
          ^
 
TypeError: "my_name".capitalize is not a function
...
Alternatively, you might have finally finished implementing a complex function only to find it doesn’t work at all as you expected:

console.log('The square root of 4 is ' + squareRoot(4));
=> 'The square root of 4 is 1.87878787'
If any of these things happen to you, don’t fret! In our article Thinking About Errors Differently in Your Code, you discovered that these experiences are normal for all developers, no matter how experienced they are. A key skill developers possess is knowing how to debug their code when issues occur.

This lesson will build on that article, demonstrating how to implement those skills in real-life JavaScript situations. If you haven’t had a chance to read the article yet, we highly encourage you to do so right now.

Alright, are you ready to begin your transition from frustrated coder to bug squasher extraordinaire? Let’s get started!


## Error Stack Traces
We’ll start this lesson by taking a closer look at the most straightforward way to know your code isn’t working as expected: errors!

You might recognize errors as the scary red text that appears on your screen when you try to run broken code. A piece of software, called a compiler, is trying to translate your code so that your computer can understand and run it. However, the compiler is coming across a piece of code that it can’t interpret. As a result, it throws an error back to you to let you know that it has to stop and why.

This information is logged as an error stack trace — a printed message containing information about where the error occurred, what type of error was thrown, and a description of the error.

Take a look at the diagram to the right to see where you can find all of this information.

As a new programmer, it’s easy to see an error and be overcome with a sense of dread and self-doubt. However, you’ll soon realize, errors are the best kind of bug you can hope for, since they tell you exactly what went wrong and where.



## Reading Error Stack Traces
Now that we know what information we can get from an error stack trace, let’s take a look at an example.

/home/ccuser/workspace/learn-javascript-debugging-code/app.js:1
myVariable;
^
 
ReferenceError: myVariable is not defined
...
Using this stack trace, let’s answer three questions you should ask yourself every time you want to debug an error:

In what line did the error occur? You can almost always find this information on the first line of the stack trace in the following format <file path>/<file name>:<line number>. In this example, the location is app.js:1. This means that the error was thrown in the file named app.js on line 1.
What type of error was thrown? The first word on the fifth line of the stack trace is the type of error that was thrown. In this case, the type of error was ReferenceError. We will discuss this error type in the next exercise.
What is the error message? The rest of the fifth line after the error type provides an error message, describing what went wrong. In this case, the description is myVariable is not defined.
You might notice in this example we skipped explaining a few lines in the stack trace and only included the beginning of the stack trace. A large part of debugging errors is recognizing which pieces of information are useful and which ones aren’t. For now, you will succeed by focusing on just the first and fifth lines of your error stack traces.


Based on the following error stack trace, fill in the answers to the questions below:

------------------------------------------------------------------

/home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
if (numberSum > total;) {
                     ^
            
SyntaxError: Unexpected token ;

------------------------------------------------------------------

From what file was this error thrown?
1 - Answer: script.js
On what line of that file was this error thrown?
2 - Answer: 5
What type of error was thrown in this stack trace?
3 - Answer: SyntaxError
What is the description of the error in this stack trace?
4 - Answer: Unexpected token


## JavaScript Error Types
Now that you can identify the type of error from an error stack trace, you might be wondering what the different types of errors mean.

Here are three common error types:

SyntaxError: This error will be thrown when a typo creates invalid code — code that cannot be interpreted by the compiler. When this error is thrown, scan your code to make sure you properly opened and closed all brackets, braces, and parentheses and that you didn’t include any invalid semicolons.
ReferenceError: This error will be thrown if you try to use a variable that does not exist. When this error is thrown, make sure all variables are properly declared.
TypeError: This error will be thrown if you attempt to perform an operation on a value of the wrong type. For example, if we tried to use a string method on a number, it would throw a TypeError.
There are seven types of built-in JavaScript errors in total. You can find more information about all of them at the MDN JavaScript Error documentation. Whenever you are confronted with an error you can’t comprehend, consulting this documentation is a great place to start.



```javascript
myVariable++;
// 1 - What type of error will be thrown on the line above: 
ReferenceError

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: 
TypeError

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: 
SyntaxError
```



## Debugging Errors
Here’s a process for efficiently working through your code’s errors one by one:

Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
Fix the bug and re-run your code.
Repeat steps 1-3 until your code no longer throws any errors.
While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

```javascript
function isSumBigger(number1, number2, total {
  const sum = number1 + number2;
  
  if (numberSum > total;) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
```


### solution

```javascript
function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;
  if (sum > total) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));
```


## Locating Silent Bugs
Errors thrown by the computer are really useful because they identify the bug type and location for you right away. However, even if your code runs error-free, it is not necessarily bug-free.

You may find that your code is consistently returning incorrect values without throwing any errors. A lack of thrown errors does not mean your code logic is completely correct.

An incredibly powerful tool for locating bugs is a method you likely learned very early on in your JavaScript journey: console.log()!

By adding print statements to our code, we can identify where things have gone wrong.

Let’s try using console.log() to do some debugging.



### Original Code

```javascript
function capitalizeASingleWord(word) {
  
  if (!word.match(' ')) {
    
    return null;
  }
  
  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));
```


1. In the code editor, we’ve given you a function that is supposed to take a string containing a single word as an argument and return the capitalized version of that word. If the string contains multiple words (contains a space character, ' '), it should return null.

Currently, this code is not working as expected. Take a look at our tests on lines 16-19. We expect the first function call to return 'Hey' and the second function call to return null. Run the code to see that it is not working as expected but also not throwing any errors. 

2. Let’s use console.log() to debug this code! Start by adding a console.log() statement to line 2 and printing out the word being passed into the function. This will help us ensure our function is being called properly and the word variable is set as we expect at the start of the function.

3. Looking at the console output, both 'hey' and 'hey ho' are being printed as we expected. No bugs yet.

Comment out the console.log() statement from the beginning of the function. Then add the following console.log() statement inside the if statement to see if it is working properly:

console.log('Word value inside of if statement: ' + word);
The behavior we want is for 'hey ho' to enter the if block and return null and for 'hey' to skip the if block and get capitalized.

4. Look at the console output. 'hey' is being printed from inside the if statement block and 'hey ho' is not. This is the opposite behavior we expected. We found a bug!

Looking at our if statement, we accidentally included a ! that is negating our condition. It is saying that if a word does not have multiple words, go into the if block, and if it does, move past it.

Delete the ! character from the beginning of the if statement condition to fix the bug, then re-run our code.

Our function now appears to be working as expected, so there is no need to continue stepping through the rest of the function.



```javascript
function capitalizeASingleWord(word) {
//check word being printed
//console.log(word);

  if (word.match(' ')) {
    console.log('Word value inside of if statement: ' + word);
    return null;
  }
  
  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));
```




## Debugging with console.log()
Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.
This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs. Let’s try this debugging process again in practice.


1. In the code editor, we have included a broken function for you to debug. This function is supposed to take two strings, compare the first letter of each, and return the string which comes later alphabetically. If the first letters of both strings are the same, it should return null.

At the bottom of the file, we’ve included three test cases and their expected outputs. If you run the code, you will see that they are not working as expected.

Using the console.log() debugging mindset laid out above, walk through the code, locate the three bugs we have included for you, and fix them.

This is a big task, so feel free to consult the hint for suggestions on where to place your console.log() statements and how to fix the code.

### original code

```javascript
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(1);
  const firstLetter2 = string2.charAt(1);
  
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 > firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));
```

### my solution
```javascript
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  // console.log(firstLetter1);
  // console.log(firstLetter2);
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 < firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));
```



## Finding Documentation
Sometimes once you’ve tracked down a bug, you might still be confused on how to fix it! Whenever you want to know more about how JavaScript works and what it can do, the best place to go is documentation. You can find the JavaScript documentation at the MDN JavaScript web docs.

The MDN JavaScript web docs are a powerful resource, but they can be overwhelming because they cover so much information. We encourage you to explore the docs, but often the fastest way to access a specific part of the docs you’re interested in is to Google it.

For example, if we wanted more information on the Number object’s .isNan() method, we could Google “MDN isNan” and then click the link to the MDN page. If we were looking to see a list of all of the String built-in methods, we might Google “MDN String”, click the link to MDN, and then scroll down to the “Methods” section of the documentation.

There are many ways to get to the documentation you are looking for. Find the one that works best for your workflow.

1. In the code editor, we’ve included a function that is supposed to take a string and return a version of that string repeated twice. For example, you can see in the test case at the bottom of the file, we expect doubleString('echo') to return 'echoecho'.

However currently, when we run our file, nothing happens. Clearly we are using the .repeat() method incorrectly. Let’s find the MDN documentation for String.repeat().

Find the link to the documentation for String.repeat() and paste it to the end of the comment on line 1.

2. 
Now that we’ve found the documentation for String.repeat(), let’s read the documentation to see what we’re doing wrong. Take a look at the parameters section of the documentation. Can you see why our string isn’t getting repeated?

Using this information, fix the .repeat() call in our code.


```javascript
// Link to String.repeat() documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat 

function doubleString(string) {
  return string.repeat(2);
}

// Should return 'echoecho'
console.log("doubleString('echo') returns: " + doubleString('echo'));
```


## Stack Overflow
At this point, you might be thinking to yourself, documentation is good and all, but there’s no way it will solve all of my issues! And we totally agree. All programming languages have difficult problems and strange edge cases that appear unexpectedly and are sometimes impossible to solve alone.

If you are ever stuck trying to solve a coding problem, we strongly encourage you to Google for a solution. One of the best sites you will see appear in the search results is Stack Overflow.

Stack Overflow is a question and answer forum where frustrated programmers post issues and other programmers discuss and vote for solutions. Almost always if you have an issue, Stack Overflow has an answer.

For example, say you are stumped trying to write an alphabetize function. If you search “alphabetize string JavaScript” on Google, this Stack Overflow search result will appear. You can quickly scan through the answers on it to see which ones work for you.

If you are ever programming and a problem is becoming so insurmountable that you want to quit, Stack Overflow is a great place to go to get unstuck.


1. In the code editor, we’ve included an unfinished function, containsCake(). It takes a string and checks if that string contains the substring 'cake' inside of it. If so, it should return true. If not, it should return false.

Using the information in this Stack Overflow post, implement the functionality of this function.

If you’re stuck on how to translate the answer from this forum into working code, check out the hint.


```javascript
// Returns whether or not the provided string contains a substring of "cake" in it.
function containsCake(string) {
  if (string.includes('cake')) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));
```




## Debugging Review
You just learned a lot of techniques for helping you get unstuck in all debugging situations. Congratulations! Let’s synthesize everything you learned into one debugging process.

Is your code throwing errors? If so, read the error stack trace for the type, description, and location of the error. Go to the error’s location and try to fix.
Is your code broken but not throwing errors? Walk through your code using console.log() statements. When unexpected results occur, isolate the bug and try to fix it.
Did you locate the bug using steps 1 and 2, but can’t fix the bug? Consult documentation to make sure you are using all JavaScript functionality properly. If you are still stuck, Google your issue and consult Stack Overflow for help. Read solutions or post your own Stack Overflow question if none exist on the topic.
It may take some time and practice, but this is how all developers work through their issues, so don’t give up, and you’ll be an expert in no time.

Congratulations again on learning all of these new techniques. Let’s give them one more round of practice so you can see how much progress you’ve made!


1. In the code editor, we have provided you a broken implementation of a function called isStringPerfectLength(). This function takes a string (string), a minimum string length (minLength), and a maximum string length (maxLength). It should return whether the provided string is within the range of the two lengths. More specifically, if it is longer than the minLength and shorter than the maxLength.

We have provided three example test cases at the bottom of the file. The first checks if the string 'Dog' is in the length range of 2 and 4. In this case, the function should return true because the length of the string is 3 which is between those two values. The next two examples fail. The first fails because the string is too long. The second fails because the string is too short.

Using the debugging process you learned in this lesson, outlined above, find and fix all the bugs in this code.

The code will throw errors at you right off the bat, but remember, this is a good thing! We believe you have all the skills now to debug this code. Don’t give up and show us what you’ve learned! We know you can do it.


### Original Code

```javascript
function isStringPerfectLength(string, minLength, maxLength {
  const stringLength = string.length;
  
  if (stringLenth > minLength) {
    return false;
  } else if (stringLenth < maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
```

### My Code

```javascript
function isStringPerfectLength(string, minLength, maxLength) {
  const stringLength = string.length;
  
  if (stringLength < minLength) {
    return false;
  } else if (stringLength > maxLength) {
    return false;
  } else {
    return true;
  }
}

// Should return true
console.log("isStringPerfectLength('Dog', 2, 4) returns: " + isStringPerfectLength('Dog', 2, 4));

// Should return false
console.log("isStringPerfectLength('Mouse', 2, 4) returns: " + isStringPerfectLength('Mouse', 2, 4));

// Should return false
console.log("isStringPerfectLength('Cat', 4, 9) returns: " + isStringPerfectLength('Cat', 4, 9));
```


