// Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ print “Fizz” instead of the number, for the multiples of ‘5’ print “Buzz” and for multiples of both 5 and 3 print "FizzBuzz"

let n = 10;
let str = "";

for (let i = 1; i <= n; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    str += "FizzBuzz ";
  } else if (i % 3 === 0) {
    str += "Fizz ";
  } else if (i % 5 === 0) {
    str += "Buzz ";
  } else {
    str += "" + i + " ";
  }
}

console.log(str);
