// Valid Anagram
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

let s = "anagram";
let t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let arr1 = s.split("");
  let arr2 = t.split("");

  arr1.sort();
  arr2.sort();

  s = arr1.join();
  t = arr2.join();
  return s === t;
};

console.log(isAnagram(s, t));
