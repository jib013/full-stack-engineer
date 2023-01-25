# What is an Event?

When you refresh your email inbox, double tap on a post, or scroll through a newsfeed — something cool happens in your browser. These actions are known as events!

Events on the web are user interactions and browser manipulations that you can program to trigger functionality. Some other examples of events are:

    A mouse clicking on a button
    Webpage files loading in the browser
    A user swiping right on an image

When a user does any of the above actions, they’re causing the event to be fired or be triggered. As in, “a click event fired when the button was clicked”. Being able to respond to these events makes your website interactive and therefore dynamic.


## "Firing" Events

After a specific event fires on a specific element in the document object model (or DOM), an event handler function can be created to run as a response. In this lesson, we will learn about event handler functions that modify and update DOM elements after an event fires.

Let’s compare the firing of events to something more familiar: a dog trained to eat when they hear the sound of a bell! (This is known as the Pavlovian conditioning.)

As you can see in the diagram, the ringing of the bell is analogous to a JavaScript event firing. The dog is trained to anticipate the ringing of the bell and this action is analogous to creating an event listener. After the dog hears the bell, it’ll come over and eat its food! This response is like an event handler function that executes code which, in a website, could change an element’s color, text, and much more!”

Most events in the browser take place without being noticed — the events are undetected because there is no event handler associated with the event to execute an action. Event handlers are crucial for creating interactive websites with JavaScript.






## Event Handler Registration

You’re doing great! Now it’s time to dive into using event handler functions to create interactivity.

Using the .addEventListener() method, we can have a DOM element listen for a specific event and execute a block of code when the event is detected. The DOM element that listens for an event is called the event target and the block of code that runs when the event happens is called the event handler.

Let’s take a look at the code below:

let eventTarget = document.getElementById('targetElement');
 
eventTarget.addEventListener('click', function() {
  // this block of code will run when click event happens on eventTarget element
});

Let’s break this down!

    We selected our event target from the DOM using document.getElementById('targetElement').
    We used the .addEventListener() method on the eventTarget DOM element.
    The .addEventListener() method takes two arguments: an event name in string format and an event handler function. We will learn about different values we can use as event names in a later lesson.
    In this example, we used the 'click' event, which fires when the user clicks on eventTarget.
    The code block in the event handler function will execute when the 'click' event is detected.

Instead of using an anonymous function as the event handler, it’s best practice to create a named event handler function. Your code will remain organized and reusable this way, even if your code gets complex. Check out the syntax:

function eventHandlerFunction() {
  // this block of code will run when click event happens
}
 
eventTarget.addEventListener('click', eventHandlerFunction);

The named function eventHandlerFunction is passed as the second argument of the .addEventListener() method instead of defining an anonymous function within the method!


1. Look at the browser and notice that there are two elements, one containing informational text about JavaScript and a button. When the button is clicked, there should be more text that appears. Currently, clicking the button doesn’t seem to do anything. You are going to create an event handler to fix this!

First, create a function called showInfo() which we will use as the event handler function to make the hidden element containing the additional informational text (moreInfo) appear when the 'click' event fires.

Inside the function, create a statement that changes the .display style property of the moreInfo element to 'block'.





```javascript
let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
function showInfo() {
  moreInfo.style.display = 'block';
}

readMore.addEventListener('click', showInfo);
```




## Adding Event Handlers

We looked at registering event handlers using the .addEventListener() method, but there is also another way!

Event Handlers can also be registered by setting an .onevent property on a DOM element (event target). The pattern for registering a specific event is to append an element with .on followed by the lowercased event type name. For instance, if we want to register a click event with this pattern, we would write:

eventTarget.onclick = eventHandlerFunction;

Here, we give the DOM element eventTarget the .onclick property and set its value as the event handler function eventHandlerFunction.

It’s important to know that this .onevent property and .addEventListener() will both register event listeners. With .onevent, it allows for one event handler function to be attached to the event target. However, with the .addEventListener() method , we can add multiple event handler functions. In the later exercises, we’ll be using the .addEventListener() syntax, but we wanted to also introduce the .onevent syntax because both are widely used.





1. Play around with the view and close elements to meet the Codecademy mascot, Codey. Codey is super happy you made it this far and they need your help!

Right now, the open() function makes the codey and close elements visible by changing their .display properties to 'block'. The hide() function hides the same elements by assigning a 'none' value to the .display properties.

Codey wants you to create a function named textChange() that changes the text in the view element to 'Hello, World!'.


```javascript
// Write your code here

// 1
function textChange() {
  view.innerHTML = 'Hello, World!';
}

// 2
function textReturn() {
  view.innerHTML = 'View';
}

// 3
view.onclick = textChange;

// 4
close.onclick = textReturn;
```





## Removing Event Handlers

The .removeEventListener() method is used to reverse the .addEventListener() method. This method stops the event target from “listening” for an event to fire when it no longer needs to. .removeEventListener() also takes two arguments:

    The event type as a string
    The event handler function

Check out the syntax of a .removeEventListener() method with a click event:

eventTarget.removeEventListener('click', eventHandlerFunction);

Because there can be multiple event handler functions associated with a particular event, .removeEventListener() needs both the exact event type name and the name of the event handler you want to remove. If .addEventListener() was provided an anonymous function, then that event listener cannot be removed.





1. Check out this website that shows your daily fortune. But the website is broken! You should only be able to see your daily fortune once, but you will see that you can keep pressing the button to get a new fortune. You need to use the .removeEventListener() method after a fortune is displayed.

Inside the showFortune() function, add a .removeEventListener() to prevent a new fortune from being displayed when a user tries to click the button element.


```javascript
let fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
  "A smile is your personal welcome mat.",
  "All your hard work will soon pay off."
]

let button = document.getElementById('fortuneButton');
let fortune = document.getElementById('fortune');

function fortuneSelector(){
  let randomFortune = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomFortune];
}

function showFortune(){
  fortune.innerHTML = fortuneSelector();
  button.innerHTML = "Come back tomorrow!";
  button.style.cursor = "default";

  //add your code here
  button.removeEventListener('click', showFortune);
}

button.addEventListener('click', showFortune);
```





## Event Object Properties

JavaScript stores events as Event objects with their related data and functionalities as properties and methods. When an event is triggered, the event object can be passed as an argument to the event handler function.

function eventHandlerFunction(event){
   console.log(event.timeStamp);
}
 
eventTarget.addEventListener('click', eventHandlerFunction);

In the example above, when the 'click' event is triggered on the eventTarget, the eventHandlerFunction receives event, the Event object, which has information related to the 'click' event. Then, we log the time it took for the event to be triggered since the document was loaded by accessing the .timeStamp property of the event object.

There are pre-determined properties associated with event objects. You can call these properties to see information about the event, for example:

    the .target property to reference the element that the event is registered to.
    the .type property to access the name of the event.
    the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered.





1. First, add a statement inside the sharePhoto() function that will change the .display property of the event .target to 'none'.

Remember that the event .target is a DOM element and you can access the .display property by referencing the .style property first.

2. Next, add a statement to the sharePhoto function that will modify the text element to state the number of milliseconds from the DOM loading to the event firing.

3. Now, to create functionality for the event object, assign the sharePhoto function to a click event on the share element.

Run your code!


```javascript
let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  // 1 
  event.target.style.display = 'none';
  // 2
  text.innerHTML = 'You shared the puppy photo in ' + event.timeStamp + ' ms.';
}

// 3
share.addEventListener('click', sharePhoto);
```




## Event Types

Beyond the click event, there are all types of DOM events that can fire in a browser! It’s important to know most events in the DOM take place without being noticed because there are no event handlers connected to them.

It’s also important to know some registered events don’t depend on user interactions to fire. For instance, the load event fires after website files completely load in the browser.

Browsers can fire many other events without a user — you can check out a list of events on the MDN Events Reference page.

Many events need user interaction with the DOM to fire. One user interaction event you’ve become familiar with is the click event. A click event fires when the user presses and releases a mouse button on an element in the DOM.
Click Event Image

In the rest of this lesson, you’ll explore more user interaction event types like the mouse and keyboard events. To explore more event types, check out the MDN Events Reference.


1. We made a really cool color generator to help people find different colors — try it out! Uh oh, it seems to be broken. We need you to use your new knowledge to fix the website.

Complete the colorChange() function, which will be used as an event handler function, to randomly change the colors of the buttons when specific events are fired on them.

First, add the following variable to the event handler function:

let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';

2. Add a statement that changes the background color of the event target and set it equal to randomColor.

3. There are two elements that should change color on this web page. First, create an event handler property on the button element that fires when it’s clicked. Use colorChange as the event handler function.

Then run your code and fire the click event.

4. Next, create an event handler property on the mysteryButton element. This property needs an event that fires when you rotate the mouse wheel or slide down on the mousepad. Use the MDN Events Reference page to find the correct event type. Assign the same colorChange event handler function to the event handler property.

Then run your code and fire the event.



```javascript
// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  // 1
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  // 2
  event.target.style.backgroundColor = randomColor;
}

// 3
button.addEventListener('click', colorChange);

// 4
mysteryButton.addEventListener('wheel', colorChange);
```




## Mouse Events

When you use a mouse device on a website, mouse events fire. You’ve seen the click and wheel events, but, there are even more mouse events to explore!

The mousedown event is fired when the user presses a mouse button down. This is different from a click event because mousedown doesn’t need the mouse button to be released to fire.
Mouse Down Event Image

The mouseup event is fired when the user releases the mouse button. This is different from the click and mousedown events because mouseup doesn’t depend on the mouse button being pressed down to fire.
Mouse Up Event Image

The mouseover event is fired when the mouse enters the content of an element.

The mouseout event is fired when the mouse leaves an element.




```javascript
// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here

// 1
function increaseWidth() {
  itemOne.style.width = '500px';
}

// 2
itemOne.addEventListener('mouseover', increaseWidth);

// 3
function changeBackground() {
  itemTwo.style.backgroundColor = 'purple';
}

// 4
itemTwo.addEventListener('mouseup', changeBackground);

// 5
function changeText() {
  itemThree.innerHTML = 'The mouse has left the element';
}

// 6
itemThree.addEventListener('mouseout', changeText);

// 7 
function showItem() {
  itemFive.style.display = 'block';
}

// 8
itemFour.addEventListener('mousedown', showItem);
```





## Keyboard Events
Other popular types of events are keyboard events! keyboard events are triggered by user interaction with keyboard keys in the browser.

The keydown event is fired while a user presses a key down.Key Down Event Image

The keyup event is fired while a user releases a key.Key Up Event Image

The keypress event is fired when a user presses a key down and releases it. This is different from using keydown and keyup events together, because those are two complete events and keypress is one complete event.Key P ress Event Image

Keyboard events have unique properties assigned to their event objects like the .key property that stores the values of the key pressed by the user. You can program the event handler function to react to a specific key, or react to any interaction with the keyboard.




1. Now it’s time to create a game! Program this code to dribble the ball on the platform using any key on a keyboard. When a user presses a key down, it should lift the ball up. When the user releases the key, the ball should drop.

First, make a function named up() that will raise the .bottom position of the ball to '250px'.

2. Next, make a function named down() that will lower the .bottom position of the ball to '50px'.

3. Create an event handler property that runs the up() function when a keydown event fires on the document object, or anywhere on the DOM, as the event target.

4. Create an event handler property that runs the down() function when a keyup event fires on the document.


```javascript

```



# Review
Congrats, you completed the lesson! Now you’ve learned about JavaScript events and you can leverage these events on the DOM to create interactivity with event handlers.

Let’s review what you’ve learned:

You can register events to DOM elements using the addEventListener() method.
The addEventListener() method takes two arguments: an event type and an event handler function.
When an event is triggered on the event target, the registered event handler function executes.
Event handler functions can also be registered as values of onevent properties of their event target.
Event object properties like .target, .type, and .timeStamp are used to provide information about the event.
The addEventListener() method can be used to add multiple event handler functions to a single event.
The removeEventListener() method stops specific event handlers from “listening” for specific events firing.