Visual Rules
Background Image

CSS has the ability to change the background of an element. One option is to make the background of an element an image. This is done through the CSS property background-image. Its syntax looks like this:

.main-banner {
  background-image: url('https://www.example.com/image.jpg');
}

    The background-image property will set the element’s background to display an image.
    The value provided to background-image is a url. The url should be a URL to an image. The url can be a file within your project, or it can be a link to an external site. To link to an image inside an existing project, you must provide a relative file path. If there was an image folder in the project, with an image named mountains.jpg, the relative file path would look like below:

.main-banner {
  background-image: url('images/mountains.jpg');
}