# Javascript and the DOM




## The Document Keyword

The Document Object Model, abbreviated DOM, is a powerful tree-like structure that organizes the elements on a web page and allows scripting languages to access them. This lesson will focus on some of the most useful methods and properties of the DOM interface in JavaScript. This interface is implemented by every modern browser.

First things first! The document object in JavaScript is the door to the DOM structure. The document object allows you to access the root node of the DOM tree. Before you can access a specific element in the page, first you must access the document structure itself. The document object allows scripts to access children of the DOM as properties.

For example, if you want to access the <body> element from your script, you can access it as a property of the document object by using document.body. This property will return the body element of that DOM.

Similarly, you could access the <title> element with the .title property. Here is a comprehensive list of all document properties.





## Tweak an Element

When using the DOM in your script to access an HTML element, whether it’s an <li> element or the entire <body> element, you also have access to all of that element’s properties.

This includes the ability to modify the contents of the element as well as its attributes and properties, which can range from modifying the text inside a <p> element to assigning a new background color to a <div>. For example, the .innerHTML property allows you to access and set the contents of an element.

Let’s take a look at how we can reassign the contents of the <body> element to the text 'The cat loves the dog':

document.body.innerHTML = 'The cat loves the dog.';

The .innerHTML property can also add any valid HTML elements. The following example replaces the contents of the <body> element by assigning an <h2> element as a child inside the <body> element:

document.body.innerHTML = '<h2>This is a heading</h2>'; 



1. Use the .innerHTML property to modify the content of the <body> element to display an <h1> heading with the text 'This is now the heading of the body element'.

```javascript
document.body.innerHTML = '<h1>This is now the heading of the body element</h1>';
```




## Select and Modify Elements

In the previous exercise, we accessed the <body> element with the document keyword!

What if we wanted to select a specific element besides the entire <body> element? The DOM interface allows us to access a specific element with CSS selectors.

CSS selectors define the elements to which a set of CSS rules apply, but we can also use these same selectors to access DOM elements with JavaScript! Selectors can include a tag name, a class, or an ID.

The .querySelector() method allows us to specify a CSS selector as a string and returns the first element that matches that selector. The following code would return the first paragraph in the document.

document.querySelector('p');

Along with .querySelector(), JavaScript has more targeted methods that select elements based on their class, id, or tag name.

For example, if you want to access an element directly by its id, you can use the aptly named .getElementById() method:

document.getElementById('bio').innerHTML = 'The description';

In this example, we’ve selected the element with an ID of 'bio' and set its .innerHTML to the text 'The description'. Notice that the ID is passed as a string, wrapped in quotation marks (' ').

There are also the .getElementsByClassName() and .getElementsByTagName() methods which return an array of elements, instead of just one element. You can use bracket notation to access individual elements of an array:

// Set first element of .student class as 'Not yet registered'
document.getElementsByClassName('student')[0].innerHTML = 'Not yet registered';
 
// Set second <li> tag as 'Cedric Diggory'
document.getElementsByTagName('li')[1].innerHTML = 'Cedric Diggory`;

In the above example code, the first element with the 'student' class and the second <li> element have had their inner HTML changed.




1. Use the .querySelector() method to select the first 'h1' element. Access that element’s .innerHTML property to change the h1 title to 'Most popular Harry Potter characters'.

```javascript
document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';
```

2. Use the .getElementById() method to access the element with an ID of 'fourth'. Set that element’s inner HTML to read 'Professor Snape'.

```javascript
document.getElementById('fourth').innerHTML = 'Professor Snape';
```

3. Use the .getElementsByClassName() method to access the first element with the class name of 'slytherin'. Replace that element’s inner HTML with the text 'Salazar Slytherin'. 

```javascript
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';
```

4. Use the .getElementsByTagName() method to access the first element with the <li> tag. Access that element’s .innerHTML to replace the content to read 'Dobby'. 

```javascript
document.getElementsByTagName('li')[0].innerHTML = 'Dobby';
```




## Style an Element

Another way to modify an element is by changing its CSS style. The .style property of a DOM element provides access to the inline style of that HTML tag.

The syntax follows an element.style.property format, with the property representing a CSS property. For example, the following code selects the first element with a class of blue and assigns blue as the background-color:

let blueElement = document.querySelector('.blue');
blueElement.style.backgroundColor = 'blue';

Unlike CSS, the DOM .style property does not implement a hyphen such as background-color, but rather camel case notation, backgroundColor. Check out this MDN reference page to see a list of how CSS properties are converted into JavaScript.

The following chaining syntax would also work:

document.querySelector('.blue').style.fontFamily = 'Roboto';




1. Style the backgroundColor of the <body> element in the blog post to '#201F2E' to match the Codecademy text editor.

```javascript
document.querySelector('body').style.backgroundColor = '#201F2E';
```


2. Next, change the font family of the element with the heading class to 'Roboto'.

```javascript
document.querySelector('.heading').style.fontFamily = 'Roboto';
```




## Traversing the DOM

Let’s recap the parent and children relationship in the DOM hierarchy. A parent node is any node that is a direct ancestor of another node. A child node is a direct descendant of another node, called the parent node.

These relationships follow the nested structure of the HTML code. Elements nested within one HTML element are children of that parent element.

Each element has a .parentNode and .children property. The .parentNode property returns the parent of the specified element in the DOM hierarchy. Note that the document element is the root node so its .parentNode property will return null. The .children property returns an array of the specified element’s children. If the element does not have any children, it will return null.

<ul id='groceries'>
  <li id='must-have'>Toilet Paper</li>
  <li>Apples</li>
  <li>Chocolate</li>
  <li>Dumplings</li>
</ul>

In the HTML code above, we have an <ul> element with the ID of groceries with four <li> elements inside.

let parentElement = document.getElementById('must-have').parentNode; // returns <ul> element
let childElements = document.getElementById('groceries').children; // returns an array of <li> elements

Here, the parentElement variable stores the .parentNode of the <li> element with the ID of must-have, which will be the <ul> element with the ID of groceries. The childElements variable is set to the children of the <ul> element with the ID of groceries, which will be an array of four <li> elements.





1. First, create a variable called first and set it to the first child of the document body.

Then, set the inner HTML of the first element to 'BROWN BEARS ARE AWESOME!'. Take a moment to note which element has been modified.

```javascript
const first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';
```

2. Use the .parentNode property to access the parent element of the variable first and modify its .style.backgroundColor to 'beige'.

Take a moment to notice the change in the web page.

```javascript
//this will change the background color of the parent node of the first variable (h1). The parent node of the H1 is the body tag. 
first.parentNode.style.backgroundColor = 'beige';
```





## Create and Insert Elements

Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones.

The .createElement() method creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.

let paragraph = document.createElement('p');

In the example code above, the .createElement() method takes 'p' as its argument which creates an empty <p> element and stores it as the paragraph variable.

We can assign values to the properties of the newly created element like how we’ve done previously with existing elements.

paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';

Above, we use the .id property to assign 'info' as ID and the .innerHTML property to set 'The text inside the paragraph' as the content of the <p> element.

In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM, referred to as the parent element. We call this process appending. The .appendChild() method will add a child element as the parent element’s last child node. The following code appends the <p> element stored in the paragraph variable to the document body.

document.body.appendChild(paragraph);

The .appendChild() method does not replace the content inside of the parent, in this case, body. Rather, it appends the new element as the last child of that parent.





1. Create a <li> element using the .createElement() method and save it in a variable called newAttraction. 

```javascript
const newAttraction = document.createElement('li');
```

2. On the following line, assign the newAttraction element an id of 'vespa'. 

```javascript
newAttraction.id = 'vespa';
```

3. Next, assign the newAttraction element the text 'Rent a Vespa' as its inner HTML. 

```javascript
newAttraction.innerHTML = 'Rent a Vespa';
```

4. Lastly, append the newAttraction element to the list of top attractions with the ID of italy-attractions. 

```javascript
document.getElementById('italy-attractions').appendChild(newAttraction);
```




## Remove an Element

In addition to modifying or creating an element from scratch, the DOM also allows for the removal of an element. The .removeChild() method removes a specified child from a parent.

let paragraph = document.querySelector('p');
document.body.removeChild(paragraph);

In the above example code, the .querySelector() method returns the first paragraph in the document. Then, the paragraph element is passed as an argument of the .removeChild() method chained to the parent of the paragraph—document.body. This removes the first paragraph from the document body.

If you want to hide an element rather than completely deleting it, the .hidden property allows you to hide it by setting the property as true or false:

document.getElementById('sign').hidden = true;

The code above did not remove the element with ID of 'sign' from the DOM but rather, hid it.




1. First, save the element with the ID of vespa as a variable named elementToRemove.

```javascript
let elementToRemove = document.getElementById('vespa');
```

2. The elementToRemove element is a child of the list of top attractions with the ID of italy-attractions.

Remove the elementToRemove element from its parent.

```javascript
document.getElementById('italy-attractions').removeChild(elementToRemove);
```
