// Power of 2
// Given a positive integer N. Check if it is a power of two or not.

// Sample Input
// input: N = 4
// Sample Output
// Output: Yes

let n = 32;

function checkPower(n) {
  while (n > 1) {
    n = n / 2;
  }
  return n === 1;
}

console.log(checkPower(n));
