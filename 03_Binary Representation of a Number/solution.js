// Binary Representation of a Number
// n = 7;

let n = 17;
let arr = [];
let str = "";
while (n > 0) {
  arr.unshift(n % 2);
  n = Math.floor(n / 2);
}
for (let i = 0; i < 32 - arr.length; i++) {
  str += "" + 0;
}
for (let i = 0; i < arr.length; i++) {
  str += +"" + arr[i];
}
console.log(str);
