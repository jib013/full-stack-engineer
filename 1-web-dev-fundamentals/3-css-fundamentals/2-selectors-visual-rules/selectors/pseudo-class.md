
SELECTORS
Pseudo-class
You may have observed how the appearance of certain elements can change, or be in a different state, after certain user interactions. For instance:

When you click on an <input> element, and a blue border is added showing that it is in focus.
When you click on a blue <a> link to visit to another page, but when you return the link’s text is purple.
When you’re filling out a form and the submit button is grayed out and disabled. But when all of the fields have been filled out, the button has color showing that it’s active.
These are all examples of pseudo-class selectors in action! In fact, :focus, :visited, :disabled, and :active are all pseudo-classes. Factors such as user interaction, site navigation, and position in the document tree can all give elements a different state with pseudo-class.

A pseudo-class can be attached to any selector. It is always written as a colon : followed by a name. For example p:hover.

p:hover {
  background-color: lime;
}
In the above code, whenever the mouse hovers over a paragraph element, that paragraph will have a lime-colored background.