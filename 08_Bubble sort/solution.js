// ## **Bubble sort**
// Given an array A having N positive integers. Sort the array A using bubble sort.

// #### **Sample Input**
// 	input: N = 5
// 	A : 5 1 6 3 7

// #### **Sample Output**
// 	A: 1 3 5 6 7

let n = 5;
let a = [5, 1, 6, 3, 7];

for (let i = 0; i < n - 1; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (a[j] > a[j + 1]) {
      let temp = a[j];
      a[j] = a[j + 1];
      a[j + 1] = temp;
    }
  }
}
// console.log(a);
let str = a.join(" ");

console.log(str);
