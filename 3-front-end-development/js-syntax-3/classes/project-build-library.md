# Build a Library

Congratulations, you’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help. They’re still using index cards to organize their content! Yikes.

But no matter, you know some JavaScript, so let’s get to work modernizing your new digs.

Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:
Book

    Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie

    Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD

    Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
    Getters: all properties have a getter
    Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()





```javascript

//left off at number 19. Brain is tired, leaving it for later. Moving onto something more purely informational

class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(checkedOut) {
    this._isCheckedOut = checkedOut;
  }

  toggleCheckOutStatus() {
    //sets the negative value of the saved boolean. cleaner than an if statement. 
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating(ratingArray) {
    let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    const lengthOfArray = ratingArray.length;
    return ratingSum / lengthOfArray; 
  }

  addRating(newArr) {
    this.ratings.push(newArr)
  }
}

class Book extends Media {
  constructor(author, title, pages) {
  super(title); 
    this._author = author;
    this._pages = 0;
  }

  get author() {
    return this._author; 
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = 0;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }

}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4, 5, 5);
console.log(historyOfEverything.ratings);

historyOfEverything.getAverageRating();
console.log(historyOfEverything.getAverageRating());

```


getAverageRating(ratingArray) {
    let total = 0;
    for (let i = 0; i < ratingArray.length; i++) {
      total += ratingArray[i];
    }
    const averageRating = total / ratingArray.length;
    console.log(this.getAverageRating([5, 5, 5, 4]));
  }