# Introduction: JavaScript Testing

See what’s covered in the JavaScript Testing Unit.

The goal of this unit is to introduce you to the fundamentals of JavaScript testing and different testing methodologies. You’ll use Test Driven Development (TDD) as an example of how testing can influence software development. You will learn about different types of tests and how using tests will catch and identify issues with your code before you deploy it to users.

After this unit, you will be able to:

    State the benefits of testing
    Identify different types of testing and methodologies
    Write tests using Mocha and Chai
    Apply TDD techniques to software development
    Describe how code coverage is used as a metric for testing
    Incorporate mocking and spies into tests

Learning is social. Whatever you’re working on, be sure to connect with the Codecademy community in the forums. Remember to check in with the community regularly, including for things like asking for code reviews on your project work and providing code reviews to others in the projects category, which can help to reinforce what you’ve learned.



This lesson will give you the knowledge and practice to discuss these concepts. By the end of this lesson you will be able to:

    Define an automated test suite
    Describe how a test suite is used in software development
    Explain the benefits of automated testing


In this exercise you have access to a terminal and browser. You can start, stop, and test a web application from here.

    Type npm start into the terminal and hit Enter.
    Reload the page in the browser.

As a user of the Cake Bar site you suspect there are some errors.

    Try to enter your name and click the order button. Your name should be populated at the bottom of the page (you may have to scroll down). Does it work as expected?
    Try to pick a cake type and order. Does this feature work as expected?
    Continue interacting with the website. Can you find any other errors?



## Manual Testing

Software testing is the process of assessing the completeness and quality of computer software. Usually this is done by running a part of a system (like a web application) and comparing the actual behavior to the expected behavior.

One way to perform software testing is manual testing. Manual testing is a form of testing done by a human interacting with a system. With web apps, this might be clicking, dragging, and typing through a webpage. A list of actions and expected behaviors would be given. If the observed behavior doesn’t match the expected behavior, the application has an error.

Errors, like the ones you may have found in the provided web app, are also called bugs. A bug is an error, fault, or flaw in software that makes a system behave in unexpected ways. As you read in the last exercise, these unexpected behaviors can cause harm to users. Ideally testing catches bugs before they are sent to users.


The same application is provided. As a manual test engineer for this app, you have been provided some features to test. Manually test the web app by following the list provided:

    Behavior 1: Run npm start in the terminal and reload the page. Scroll down and expect the webpage to start with a blank order.
    Behavior 2: Type a name and click “Place Order”. Scroll down and expect “Deliver to:” to display the submitted name.
    Behavior 3: A blank name will not overwrite the existing name.
    Behavior 4: Select a cake type and place the order. Expect “Cake” to display the selected cake type.
    Behavior 5: Check some fillings. Expect “Fillings” to display your selected fillings.
    Behavior 6: Choose a stack size. Expect “Pancake Count:” to display the number equivalent to the stack size, e.g. “Double” is “2”.






## Automated Testing

How long did it take to manually test the application in the previous exercise? If you repeated the process 100 times, how often do you think you would make a mistake?

In a company, someone must be paid to do that work, so every hour of manual testing has a cost. The cost of testing can be reduced and the quality can be improved with automated testing.

Automated testing is the use of software to control the execution of tests and the comparison of actual behavior to expected behavior. All the testing you just did (and more) could be performed by a computer program.

Compared to manual testing, automated testing is

    Faster: it tests more of your product in less time.
    More reliable: it’s less prone to error than a human is .
    Maintainable: you can review, edit, and extend a collection of tests.

Rather than hire a testing team at the end of development, professional developers can run their automated tests after every change. The workflow might look like this:

    Write code and corresponding tests
    Enter a command into a terminal to run tests
    If the app behaves as intended, all tests should pass. Development is complete.
    If it does not behave as intended, at least one test should fail. Fix code and return to step 2.


```
$ npm test

> calculator-js@0.0.0 test /home/ccuser/workspace/why-test-automated
> bin/wdio-test

------------------------------------------------------------------
[phantomjs #0-0] Session ID: 3bd5f8a0-da54-11ed-9ec5-337a7cf32287
[phantomjs #0-0] Spec: /home/ccuser/workspace/why-test-automated/test/features/user-visits-index-test.js
[phantomjs #0-0] Running: phantomjs
[phantomjs #0-0]
[phantomjs #0-0] User visits index
[phantomjs #0-0]
[phantomjs #0-0] to post an order
[phantomjs #0-0]   ✓ starts with a blank order (Behavior 1)
[phantomjs #0-0]   ✓ displays the submitted name (Behavior 2)
[phantomjs #0-0]   1) does not overwrite name if blank name submitted (Behavior 3)
[phantomjs #0-0]   2) displays the selected cake type (Behavior 4)
[phantomjs #0-0]   3) displays multiple fillings (Behavior 5)
[phantomjs #0-0]   4) displays the number equivalent to the stack size (Behavior 6)
[phantomjs #0-0]
[phantomjs #0-0]
[phantomjs #0-0] 2 passing (4s)
[phantomjs #0-0] 4 failing
[phantomjs #0-0]
[phantomjs #0-0] 1) to post an order does not overwrite name if blank name submitted (Behavior 3):
[phantomjs #0-0] expected 'DELIVER TO:' to include 'Hungry Person'
[phantomjs #0-0] AssertionError: expected 'DELIVER TO:' to include 'Hungry Person'
[phantomjs #0-0]     at Context.it (/home/ccuser/workspace/why-test-automated/test/features/user-visits-index-test.js:41:14)
[phantomjs #0-0]
[phantomjs #0-0] 2) to post an order displays the selected cake type (Behavior 4):
[phantomjs #0-0] expected 'CAKE:' to include 'Whole Wheat'
[phantomjs #0-0] AssertionError: expected 'CAKE:' to include 'Whole Wheat'
[phantomjs #0-0]     at Context.it (/home/ccuser/workspace/why-test-automated/test/features/user-visits-index-test.js:55:14)
[phantomjs #0-0]
[phantomjs #0-0] 3) to post an order displays multiple fillings (Behavior 5):
[phantomjs #0-0] expected 'FILLINGS: Strawberries' to include 'Banana'
[phantomjs #0-0] AssertionError: expected 'FILLINGS: Strawberries' to include 'Banana'
[phantomjs #0-0]     at Context.it (/home/ccuser/workspace/why-test-automated/test/features/user-visits-index-test.js:72:14)
[phantomjs #0-0]
[phantomjs #0-0] 4) to post an order displays the number equivalent to the stack size (Behavior 6):
[phantomjs #0-0] expected 'PANCAKE COUNT: 0' to include '7'
[phantomjs #0-0] AssertionError: expected 'PANCAKE COUNT: 0' to include '7'
[phantomjs #0-0]     at Context.it (/home/ccuser/workspace/why-test-automated/test/features/user-visits-index-test.js:87:14)
[phantomjs #0-0]

npm ERR! Test failed.  See above for more details.
npm WARN Local package.json exists, but node_modules missing, did you mean to install?
```





## The Test Suite

Tests are written with code, just like the rest of your web app. You can refer to the code defining your app as implementation code, and the code defining your tests as test code.

A collection of tests for a web application is called a test suite. In the last exercise, you ran a test suite with npm test. In that case the test suite contained all tests for the application.

Test code is included with and structured similarly to implementation code. Often times changes to test code are associated with changes to implementation code and vice versa. Both are easier to maintain when they are stored in the same place.

For example, if implementation code is written in index.js then the corresponding test code may be written in index-test.js.






## Tests As Documentation

Imagine explaining this Cake Bar app to someone else. How does it behave? Does it rely on other software? How do you run it on a computer? You could read every line in every file to figure that out. Or you could read the documentation.

Documentation is any content separate from implementation code that explains how it works or how to use it. It may provide more concise summaries and explanation than the implementation code can.

Documentation can come in many forms, including plain text, diagrams…and tests! Tests as documentation provide what many other forms cannot: both human-readable text to describe the application and machine-executable code to confirm the app works as described.

This code block from the Cake Bar app describes and tests the “name” functionality.

it('accepts the customer name', () => {
  const name = 'Hungry Person';
 
  browser.url('/');
  browser.setValue('#name', name);
  browser.click('#submit-order');
  browser.url('/');
 
  assert.include(browser.getText('#deliver-to'), name);
});

You can read the description in plain English terms: it accepts the customer name. You can run the test to confirm the functionality works as described.






## Regression

The new “clear order” button feature has been implemented to satisfy the new test.

When adding a new feature to your product, it’s possible that something will break. If that break occurs within a feature developed earlier, it is called regression. When functionality previously developed and tested stops working, you may say the functionality regressed.

Running an automated test suite is fast and repeatable, which means you can run tests after every change to confirm that old features still work. If they have regressed, the test output should notify you.






