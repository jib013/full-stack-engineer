isual Rules
Font Family

If you’ve ever used word processing software, like Microsoft Word or Google Docs, chances are that you probably also used a feature that allowed you to change the font you were typing in. Font refers to the technical term typeface, or font family.

To change the typeface of text on your web page, you can use the font-family property.

h1 {
  font-family: Garamond;
}

In the example above, the font family for all main heading elements has been set to Garamond.

When setting typefaces on a web page, keep the following points in mind:

    The font specified must be installed on the user’s computer or downloaded with the site.
    Web safe fonts are a group of fonts supported across most browsers and operating systems.
    Unless you are using web safe fonts, the font you choose may not appear the same between all browsers and operating systems.
    When the name of a typeface consists of more than one word, it’s a best practice to enclose the typeface’s name in quotes, like so:

h1 {
  font-family: 'Courier New';
}