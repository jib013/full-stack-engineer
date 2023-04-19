# Automated and Organizer Tests

## Mocha Framework

### Install Mocha I

Before writing any tests you’ll need to use Node.js and npm to set up a JavaScript project and install Mocha.

    Node allows you to run JavaScript in the terminal
    npm is a Node tool that allows you to download packages from the web, and manage them in a JavaScript project
    Mocha is one of those packages and is used to test other JavaScript code

A JavaScript project is a directory of files. The following command creates a file package.json that can be used to manage packages for the project.

$ npm init

After running this command you will be prompted to enter information about your project. It’s okay to skip some fields if you’re not ready to enter that information.

With your project setup, you can install packages.

$ npm install mocha -D

Here’s what this command means:

    npm install tells npm to install a package from the internet and any other packages it depends on
    mocha is the package you want to download
    -D signifies that this package is a development dependency and will show up under the devDependecies section in package.json. This means that the package will only be included in development mode and will not be included in the production bundle.

Once you npm install packages, you can find the packages and all their dependencies in the node_modules folder. The new directory structure contains the following:

project
|_ node_modules
|___ .bin
|___ mocha
|___ ...
|_ package.json

The ... in the file structure represents other packages that are a dependency for Mocha.


### Install Mocha II

After installing Mocha as a dependency we can run it in two ways.

The first (and more tedious) method is to call it directly from node_modules:

$ ./node_modules/mocha/bin/mocha

The second (and recommended) method is to add a script to package.json. In the scripts object in package.json, set the value of "test" to mocha. It should look like this:

"scripts": {
  "test": "mocha"
}

Now you can call Mocha with the following command:

$ npm test

Instead of manually running each test in the test directory, you can use this command to run the full test suite automatically.




### describe and it blocks

In Mocha we group tests using the describe function and define tests using the it function. These two functions can be used to make your test suite complete, maintainable, and expressive in the following ways:

    Structure your test suite: you can organize tests into nested groups that reflect the structure of your implementation code.

    Provide informative messages: you can define your tests using human-readable strings.

If you are testing a Math object with the method .max, you could use the following test code.

describe('Math', () => {
  describe('.max', () => {
    it('returns the argument with the highest value', () => {
      // Your test goes here
    });
    it('returns -Infinity when no arguments are provided', () => {
      // Your test goes here
    });
  });
});

Both the describe and it functions accept two parameters: a descriptive string and a callback function. Though the functions are flexible, they are commonly used in the structure above: nest describe blocks to resemble the structure of your implementation code and write individual tests in it blocks. This makes your test suite isolated, maintainable, and expressive.




### assert

In the last exercise, you learned how to organize and automate tests using the Mocha test framework. To write the tests themselves, we can use the assert.ok method provided by Node.js.

In programming, a test compares an expected outcome to an actual outcome. For example, we expect the outcome of the following code…

const a = 1 + 2;

…to be: a has a value of 3.

To test the value saved to a with plain JavaScript, you would need to write a conditional statement comparing a to the expected result. Inside the statement, you would construct an error when the actual outcome does not match the expected.

if (a !== 3) {
  throw 'Test failed! a is not 3'
} 

assert.ok() allows you to compare values and throw errors as needed using one function call. The small, human-readable format of the functions will help you make a more expressive test suite.

As a Node module, assert can be imported at the top of your files with

const assert = require('assert');

You call assert functions like this:

assert.ok(a === 3);

In this case a === 3 evaluates to true, so no error is thrown.

If an argument passed to assert.ok() evaluates to false, an AssertionError is thrown. The error communicates to Mocha that a test has failed, and Mocha logs the error message to the console.





### Setup, Exercise, and Verify

In this exercise you will be separating a test into setup, exercise, and verify phases. This distinct and well-defined separation of steps makes your test more reliable, maintainable, and expressive.

The phases are defined as follows:

    Setup - create objects, variables, and set conditions that your test depends on

    Exercise - execute the functionality you are testing

    Verify - check your expectations against the result of the exercise phase. You can use the assert library here

Clear separation of each phase makes a test easier to read, change, and validate.
 



