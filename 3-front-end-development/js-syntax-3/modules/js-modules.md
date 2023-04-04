# Exports
Using this syntax, the name of each exported resource is listed between curly braces and separated by commas. Below, you can see how this is implemented in the new module file dom-functions.js:

```javascript
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
export { toggleHiddenElement, changeToFunkyColor };
```


### alternatively

```javascript
/* dom-functions.js */
export const toggleHiddenElement = (domElement) => {
  // logic omitted...
}
 
export const changeToFunkyColor = (domElement) => {
  // logic omitted...
}
```




# Imports

The ES6 syntax for importing named resources from modules is similar to the export syntax:

```javascript
import { exportedResourceA, exportedResourceB } from '/path/to/module.js';
```


Let’s update the secret-messages program such that it now imports functionality from dom-functions.js. Doing so requires two important steps. First, update secret-messages.js:

```javascript
/* secret-messages.js */
import { toggleHiddenElement, changeToFunkyColor } from '../modules/dom-functions.js';
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```




# Renaming Imports to Avoid Naming Collisions
Inevitably, you will run into a situation where the resources you wish to import share a name with some other value that already exists in your program (or from another imported module).

For example, suppose you had access to two modules, greeterEspanol.js and greeterFrancais.js. Each exports a function called greet():

```javascript
/* inside greeterEspanol.js */
const greet = () => {
  console.log('hola');
}
export { greet };
 
/* inside greeterFrancais.js */
const greet = () => {
  console.log('bonjour');
}
export { greet };
```

Now, let’s say you wanted to use each of these functions in a program, called main.js, that simulates a conversation between a spanish-speaker and a french-speaker.

```javascript
import { greet } from 'greeterEspanol.js';
import { greet } from 'greeterFrancais.js';
```
The code above will throw an error on line 2 due to the fact that the identifier greet has already been defined on line 1. Thankfully, ES6 includes syntax for renaming imported resources by adding in the keyword as. It looks like this:

```javascript
import { exportedResource as newlyNamedResource } from '/path/to/module'
```

Let’s see how this could work within main.js

```javascript
/* main.js */
import { greet as greetEspanol } from 'greeterEspanol.js';
import { greet as greetFrancais } from 'greeterFrancais.js';
 
greetEspanol(); // Prints: hola
greetFrancais(); // Prints: bonjour
```

Now, both of the imported functions can be called within main.js using their new identifiers, greetEspanol() and greetFrancais().




# Default Exports and Imports

So far, the examples shown have used the named export syntax, in which a module’s resources are exported individually by name. Every module also has the option to export a single value to represent the entire module called the default export. Often, though not always, the default export value is an object containing the entire set of functions and/or data values of a module.

The syntax for exporting a default object looks like this:

```javascript
const resources = { 
  valueA, 
  valueB 
}

export { resources as default };
```

With this syntax, the object containing the module’s resources is first declared and then is exported on the next line. At first glance, it looks like the resources object is being exported as a named export. However, the clause as default renames the exported object to default, a reserved identifier that can only be given to a single exported value.

You may also see this shorthand syntax where the value follows export default is the default value to be exported:

```javascript
const resources = {
  valueA,
  valueB
}

export default resources;
```

Importing default values.
The syntax for importing default exports looks like this:

```javascript
import importedResources from 'module.js';
```

Notice that the curly braces are gone from the import statement. This syntax is actually shorthand for import { default as importedResources } from 'module.js and the imported default value may be given any name the programmer chooses.

It should be noted that if the default export is an object, the values inside cannot be extracted until after the object is imported, like so:

```javascript
// This will work...
import resources from 'module.js'
const { valueA, valueB } = resources;
 
// This will not work...
import { valueA, valueB } from 'module.js'
```

Let’s return to the prior example. The dom-functions.js module from above could be rewritten to use default exports like so:

```javascript
/* dom-functions.js */
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
 
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}
 
const resources = { 
  toggleHiddenElement, 
  changeToFunkyColor
}
export default resources;
```

This default exports object can now be used within secret-messages.js like so:

```javascript
import domFunctions from '../modules/dom-functions.js';
 
const { toggleHiddenElement, changeToFunkyColor } = domFunctions;
 
const buttonElement = document.getElementById('secret-button');
const pElement = document.getElementById('secret-p');
 
buttonElement.addEventListener('click', () => {
  toggleHiddenElement(pElement);
  changeToFunkyColor(buttonElement);
});
```

Notice how toggleHiddenElement() and changeToFunkyColor() are now methods of the imported object called domFunctions and are extracted using ES6 destructuring syntax! It should be noted that the identifier domFunctions can be chosen as the programmer sees fit. If you recall, the syntax used in the snippet above is shorthand for:

```javascript
import { default as domFunctions } from '../modules/dom-functions.js';
```



