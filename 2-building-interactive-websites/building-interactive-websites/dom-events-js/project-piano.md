# Piano Keys
You’re a web developer who has been hired by a music education company. This client wants you to create an interactive game to help their beginner-level piano students study. Create a piano player with DOM events in JavaScript!

1. At the beginning of the code, we have variable name assignments for the keys array and the notes array. There is also a function looping through the elements of the keys array and pushing them to the notes array.

After the second comment, create a function named keyPlay that changes the background color of the keys when they are pressed down.

Be sure to use the .target property in the function because the target is being modified in this case.

2. Next, create a function named keyReturn that returns the background color of the keys to their default with an empty string '' when the mouse is released on the element. Be sure to use the .target property.

3. Now that you have created two functions that change the color of the key elements, you must assign them as the values of event handler properties.

Create a named function and leave the code block blank for now. This function will be used later on to assign events to the keys, so it should take one parameter — you can call it note.

4. Inside the function, create an event handler that runs the keyPlay as an event handler when a mousedown event fires on any note.

5. Inside the function, create a second event handler property that runs the keyReturn when a mouseup event fires on any note.

6. At the beginning of the code, we have variable name assignments for the keys array and the empty notes array. There is also a function looping through the keys array and pushing the keys elements to the notes array to be assigned a variable name.

Now, you must create a .forEach loop that will pass the elements in the notes array through your event assignment function.

7. Now, the program knows what to do when each piano key has a mousedown or mouseup event fired on it. Run your code and see how it works!

8. Next, there are variables that represent the progress buttons in the song box below that allow students to progress the piano.

The nextOne, nextTwo, nextThree, and startOver change the lyrics and musical notes of the song to help the student play along. In the beginning of the song the only button the student needs is nextOne. Because of this the .hidden properties of the other buttons are assigned the value of true.

Now you must create events on all the progress buttons. First, create an event handler property with a click event on the nextOne element.

9. To begin modifying the song box, you must switch the progress buttons first.

Using an anonymous event handler function, make the following changes to the button that appears after nextOne is clicked:

- Reveal the nextTwo button by changing the .hidden property to make the nextTwo button appear.
- Hide the nextOne button by changing the .hidden property to hide the nextOne button.

10. Next, a click event firing on the nextOne must change the music notes that guide the piano student through the song.

Add the following changes to the nextOne event handler function so the musical notes change when the button is clicked.

- Change the content of the element with an ID of letter-note-five to D.
- Change the content of the element with an ID of letter-note-six to C.

11. Create another event handler property with a click event on the button element called nextTwo. Then assign the property to the value of an anonymous event handler function.

12. Make the following changes to the button that appears when nextTwo is clicked:

- Reveal the nextThree button by changing the .hidden property to make the nextThree button appear.
- Hide the nextTwo button by changing the .hidden property to hide the nextTwo button.

13. Once the student has reached this point of the Happy Birthday song the lyrics changes from HAP-PY BIRTH-DAY TO YOU to HAP-PY BIRTH-DAY DEAR FRI-END.

Make the following changes to the lyrics in the function when the button is clicked:

- Change the content of the element with an ID of word-five to DEAR.
- Change the content of the element with an ID of word-six to FRI-.

14. Now you have the lyrics HAP-PY BIRTH-DAY DEAR FRI-. To finish the line, you must add the -END to the song box under the piano.

The -END element is stored in the lastLyric variable.

Add a statement to the event handler function for nextTwo that changes the display property of lastLyric to 'inline-block'.

15. A click event firing on the second button must also change the music notes to guide the piano student through the song.

Add the following changes to the nextTwo event handler function so the musical notes change when the button is clicked:

- Change the content of the element with an ID of letter-note-three to G.
- Change the content of the element with an ID of letter-note-four to E.
- Change the content of the element with an ID of letter-note-five to C.
- Change the content of the element with an ID of letter-note-six to B.

16. Create an event handler property with a click event on the nextThree element.

17. Using an anonymous event handler function, make the following changes to the button that appears when nextThree is clicked:

- Reveal the startOver button by changing the .hidden property to make the startOver button appear.
- Hide the nextThree button by changing the .hidden property to hide the nextThree button.

18. Add the following changes to the nextThree event handler function so the lyrics change when this button is clicked.

- Change the content of the element with an ID of word-one to HAP-.
- Change the content of the element with an ID of word-two to PY.
- Change the content of the element with an ID of word-three to BIRTH.
- Change the content of the element with an ID of word-four to DAY
- Change the content of the element with an ID of word-five to TO.
- Change the content of the element with an ID of word-six to YOU!.

19. Add the following changes to the nextThree event handler function so the musical notes change when the button is clicked.

- Change the content of the element with an ID of letter-note-one to F.
- Change the content of the element with an ID of letter-note-two to F.
- Change the content of the element with an ID of letter-note-three to E.
- Change the content of the element with an ID of letter-note-four to C.
- Change the content of the element with an ID of letter-note-five to D.
- Change the content of the element with an ID of letter-note-six to C.

20. Now you have the lyricsHAP-PY BIRTH-DAY TO YOU! -END — that couldn’t be right! To finish the line you must get rid of the “-end” in the song box.

Add a statement to the event handler function for nextThree that changes the display property of lastLyric back to 'none'.





```javascript
// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Write named functions that change the color of the keys below
function keyPlay(event) {
  event.target.style.backgroundColor = 'green';
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

// Write a named function with event handler properties
function assignKey(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

// Write a loop that runs the array elements through the function
notes.forEach(assignKey);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
}


// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display = 'inline-block';
  //change music notes
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  //change notes
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
```