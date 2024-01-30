// Given a binary string, output the integer so formed.
// #### **Sample Input**
//     00000000000000000000000000000111

let binary = "00000000000000000000000000001111";

let decimal = 1;
let res = 0;
for (let i = binary.length - 1; i >= 0; i--) {
  let n = binary.charCodeAt(i) - 48;
  res += decimal * n;
  decimal *= 2;
}

console.log(res);
