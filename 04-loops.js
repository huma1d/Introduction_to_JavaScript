
const n = 5;

// Factorial
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("Factorial:", factorial);

// Sum of digits
let num = 1234;
let sum = 0;

while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
}

console.log("Digit sum:", sum);

// Prime number check
const number = 17;
let isPrime = number >= 2;

for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(isPrime ? "Prime" : "Not prime");

