# What is the DOM?

The Document Object Model, abbreviated DOM, is a powerful tree-like structure that allows programmers to conceptualize hierarchy and access the elements on a web page.

The DOM is one of the better-named acronyms in the field of Web Development. In fact, a useful way to understand what DOM does is by breaking down the acronym but out of order:

    The DOM is a logical tree-like Model that organizes a web page’s HTML Document as an Object.

The DOM is implemented by browsers to allow JavaScript to access, modify, and update the structure of an HTML web page in an organized way.

For this reason, we like to think of the DOM as the link between an HTML web page and scripting languages.





## The DOM as a Tree Structure

Tree-like modeling is used in many fields, including evolutionary science and data analytics. Perhaps you’re already familiar with the concept of family trees: these charts represent the familial relationships amongst the descendants of a given family name.

The DOM tree follows similar logic to that of a family tree. A family tree is made up of family members and their relationships to the family name. In computer science, we would call each family member a node.

We define a node as an intersecting point in a tree that contains data.

In the DOM tree, the top-most node is called the root node, and it represents the HTML document. The descendants of the root node are the HTML tags in the document, starting with the <html> tag followed by the <head> and <body> tags and so on.





## Parent Child Relationships in the DOM

Following the metaphor of a family tree, let’s define some key terminology in the DOM hierarchy:

A parent node is any node that is a direct ancestor of another node.

A child node is a direct descendant of another node, called the parent node.

Knowing these terms will allow you to understand and discuss the DOM as a tree-like structure. In fact, you will also see this terminology used when referring to the nesting structure of HTML code. Programmers refer to elements nested inside other elements as the children elements and parent elements respectively.





## Nodes and Elements in the DOM

As mentioned, a node is the equivalent of each family member in a family tree. A node is an intersecting point in a tree that also contains data.

There are multiple types of node objects in the DOM tree. In our diagram, the node objects with the sharp-edge rectangles are Element nodes, while the rounded edge rectangles are Text nodes, because they represent the text inside the HTML paragraph elements.

When trying to modify a web page, the script will mostly interact with the DOM element nodes and occasionally text nodes.





## Attributes of Element Node

DOM element nodes model elements in an HTML document.

Much like an element in an HTML page, the DOM allows us to access a node’s attributes, such as its class, id, and inline style.

In the diagram to the right, we have highlighted the paragraph element with an id of 'bio' in the HTML document. If we were accessing that element node in our script, the DOM would allow us to tweak each of those attributes, or simply access them to check their value in the code.





## Review

Congratulations on completing our introduction to the Document Object Model, or DOM, as a structure!

Let’s review what you’ve learned so far:

    The DOM is a structural model of a web page that allows for scripting languages to access that page.
    The system of organization in the DOM mimics the nesting structure of an HTML document.
    Elements nested within another are referred to as the children of that element. The element they are nested within is called the parent element of those elements.
    The DOM also allows access to the attributes of an HTML element such as style, id, etc.

With this understanding, you can begin to leverage the power of scripting languages to create, update, and maintain web pages!










