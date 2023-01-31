
function checkPalindrome(str) {
  let reversedStr = '';

  for(let i = str.length-1; i >= 0; i--) {
    reversedStr += str[i];
  }

  if (str === reversedStr) {
    return `The word "${str}" is a palindrome!`;
  } else {
    return `The word "${str}" is not a palindrome.`;
  }
};

console.log(checkPalindrome('racecar'));

