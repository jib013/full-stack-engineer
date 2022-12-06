Selectors
Descendant Combinator

In addition to chaining selectors to select elements, CSS also supports selecting elements that are nested within other HTML elements, also known as descendants. For instance, consider the following HTML:

<ul class='main-list'>
  <li> ... </li>
  <li> ... </li>
  <li> ... </li>
</ul>

The nested <li> elements are descendants of the <ul> element and can be selected with the descendant combinator like so:

.main-list li {
 
}

In the example above, .main-list selects the element with the.main-list class (the <ul> element). The descendant <li>‘s are selected by adding li to the selector, separated by a space. This results in .main-list li as the final selector.

Selecting elements in this way can make our selectors even more specific by making sure they appear in the context we expect.
