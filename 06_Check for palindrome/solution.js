// Given a string of length N. Check if the given string is a palindrome without using any built-in functionality.

// string: malayalam n =9

// let n = 9;
// let str = "malayalam";
let n = 5;
let str = "masai";

function checkPalindrom(n, str) {
  for (let i = 0, j = n - 1; i < j; i++, j--) {
    if (str.charCodeAt(i) !== str.charCodeAt(j)) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrom(n, str));
