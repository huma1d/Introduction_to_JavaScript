
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function(input) {
    const n = Number(input);

    if (n > 0) {
        console.log("Positive");
    } else if (n < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }

    console.log(n % 2 === 0 ? "Even" : "Odd");

    rl.close();
});
