// Given an integer N. Check whether N is prime or not.

let n = 12;

function checkPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

const res = checkPrime(n);

if (res) {
  console.log("Yes");
} else {
  console.log("No");
}
