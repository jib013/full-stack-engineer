# avaScript Practice: Arrays, Loops, Objects, Iterators

Practice intermediate JavaScript concepts with these 3 code challenges.

In these exercises, you will practice working with intermediate JavaScript concepts. This is helpful if you want to practice implementing loops and working with arrays, objects, and iterators.

Some of these challenges are difficult! Take some time to think about them before starting to code.

You might not get the solution correct on your first try — look at your output, try to find where you’re going wrong, and iterate on your solution.

Finally, if you get stuck, use our solution code! If you “Check Answer” three times with an incorrect solution, you should see an option to get our solution code. However, truly investigate that solution — experiment and play with the solution code until you have a good grasp of how it is working. Good luck!


1. Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function.


```javascript
// Write function below
function factorial (num) {
  let result = num;

  if (num === 0  || num === 1) {
    return 1;
  } 
  while (num > 1) {
    num--;
    result = result * num;
  }
  return result;
}

factorial(6);

```



2. Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

Examples:

subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0

### My solution
```javascript
const subLength = (str, char) => {
  let firstIndex = str.indexOf(char);
  let secondIndex = str.indexOf(char, (firstIndex + 1));
  let thirdIndex = str.indexOf(char, (secondIndex + 1));

  if (firstIndex === 0 ) {
    return 0;
  } else if (secondIndex === -1) {
    return 0;
  } else if (thirdIndex === -1) {
    return (secondIndex - firstIndex + 1) 
  } else {
    return 0;
  }
}

subLength('Saturday', 'a');
```

### Solution
```javascript
const subLength = (str, char) => {
  let charCount = 0;
  let len = -1;
  
  for (let i=0; i<str.length; i++) {
    if (str[i] == char) {
      charCount++;
      if (charCount > 2) {
        return 0;
      }
      if (len == -1) {
        len = i;
      } else {
        len = i - len + 1
      }
    }
  }
  if (charCount < 2) {
    return 0;
  }

  return len;
};
```




3. Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls' 


### My Solution

```javascript
// Write function below
const groceries = arr => {
  let newArr = [];

  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i].item);
  }
  if (newArr.length < 2) {
    return newArr.join('');
  } else {
    let final = newArr.pop();
    return newArr.join(', ') + ' and ' + final;
  }
}

console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}]));
```