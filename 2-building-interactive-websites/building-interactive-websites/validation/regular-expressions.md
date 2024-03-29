# Regular Expressions

Data submitted through forms are stored as strings. Strings are a fundamental data type in computer science representing a series of characters “strung” together. As humans, we can intuitively recognize patterns within strings, and this allows us to catch errors. Try to notice what’s wrong in the following examples:

    ABCDEF2GHIJKLMNOPQRSTUVWXYZ
    My zip code is 9021
    The ct meowed
    <h1> Hello, World! </h2>

In the first example, we had the letters of the alphabet presented in order but interrupted by an out of place 2. In the second, we left off the 5th digit of a famous zip code. In the third, we omitted the “a” from the word cat. In the final example, we wrote some HTML with an <h1> opening tag but an unmatching </h2> closing tag. If you picked up on these mistakes, it’s because your brain has been trained to expect patterns in certain types of data.

Unlike humans, who can get this training passively over time, computers have to be precisely programmed to recognize patterns. To specify patterns for the computer to recognize, we use a special language called regular expressions — also known as regex or regexp. A regular expression is a sequence of characters representing a pattern. We can use that pattern to match a string, match parts of a string, confirm that data is formatted acceptably, or even replace parts of strings with different characters.





## Client-side Validation: HTML

The first technique we can use to validate form data is to prevent problematic inputs from being submitted in the first place. This is called client-side validation. The client is the process interacting with the server on behalf of a user—in the case of websites, the web browser is the client. The logic for validating the form is included with the code that displays the form on the user’s device. No interaction with the back-end is required to perform client-side validations.

Since form validation is so common, modern HTML provides some of these validation features built-in. For example, we can use HTML to make parts of a form required and others optional. We can also use HTML to set minimum and maximum values for an input or minimum or maximum lengths for a text input. We can even necessitate that the input match a particular pattern, specified by a regular expression.

If any of the rules laid out in the HTML form validation aren’t followed, the user will not be able to submit their form, and they’ll receive an error message explaining why. With these checks in place, the back-end is less likely to be sent incorrect data. HTML form validation will also benefit the user—the client provides the user immediate feedback, without having to wait for time-consuming communication with the back-end.


## Client-side Validation: JavaScript

Client-side validation has two main advantages. First, it’s a better experience for the user to be alerted to problematic data immediately rather than having to wait for that information to come back from the server and have to fill out the form again. Second, catching mistakes earlier in the process saves the application time and resources as well. But not all issues can be handled with the built-in HTML validations.

In order to truly customize validation or to perform more complex validations, we can incorporate JavaScript form validations. We can do this by either writing the JavaScript ourselves or by incorporating a JavaScript library. If we have unique requirements for usernames on our site, for example, we’ll have to provide these systems of validation ourselves.

If we’re creating a relatively simple website, it makes sense to code the form validation ourselves or use a simple vanilla JavaScript library—just-validate, for example. But most basic validation libraries will involve directly accessing or manipulating the DOM. This can get tricky when working with a framework that relies on a virtual DOM—like React or Vue. In those situations, it might be best to incorporate a library that works well with your specific framework. For example, the formik library is a lightweight library that simplifies validating forms in a React app.


## Back-end Validation

No matter how complete the front-end validation of a website or application seems, validations must also be completed on the back-end or server-side. Front-end validations are easy to bypass—a malicious user can simply turn off JavaScript on their browser, for example. There’s also the potential for middleman attacks in which data is changed after the request is submitted by a user but before it arrives at the server. As a rule, the back-end should never trust the data it receives.

As the developer, once data is in the back-end, we have complete control over it, luckily. Back-end validation has several advantages:

    It enables us to use validation code often on machines with more computing power.
    It allows us to write validation code that a user can’t see—if malicious users can’t see exactly how we validate the data, it’s much more difficult for them to find ways around it.
    We can validate the information against other data the front-end doesn’t have access to—for example, we can check our database to see if a given username is already in use.

There are two main ways to validate inputs on the server-side. The first takes place while the user is still inputting data into the form on the front-end. We can make asynchronous requests to the server with pieces of their data and send feedback directly to the user before they’ve submitted. This is slower than front-end validation and can be a design challenge from a user-experience perspective.

The second is once the form has been submitted. Back-end form validation is our application’s last defense against problematic data, and it’s essential to verify the validity and safety of data before adding it to a database. This is also an opportunity to “sanitize” the data: in order for our database to be useful, it’s important that all data within it is formatted consistently. This means that while we may want to be flexible about the formatting we require from a user, we likely want to transform inputs into a strict format before entering them in the database.


## Review

In this lesson, we’ve explored form validation from many angles. Let’s review what we covered:

    Modern websites require a lot of information from their users and they collect a lot of this information through HTML forms.
    It’s essential to validate the data submitted through forms to keep websites secure and to make sure they function correctly.
    Regular expressions are sequences of characters that define patterns to look for in text. They are an important tool used in validating input.
    Modern HTML comes with useful built-in methods for form validation.
    Custom and complicated client-side validation can be accomplished with JavaScript.
    Asynchronous requests to the server can perform back-end validations before a form has been submitted.
    A final back-end validation of all data is required to ensure an application’s security and sanitize all data.






