
function add(a, b) {
    return a + b;
}

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

const square = n => n * n;

console.log(add(4, 6));
console.log(factorial(5));
console.log(square(7));
