//prime numbers between 2 and n
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

function isPrime(x) {
  if (x < 2) return false;
  if (x === 2) return true;
  if (x % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(x); i += 2) {
    if (x % i === 0) return false;
  }
  return true;
}

function PrimeBetween2n(n) {
  if (n >= 2) console.log(2);

  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

PrimeBetween2n(n);
