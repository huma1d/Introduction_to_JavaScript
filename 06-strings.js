
let text = "  level  ";

text = text.trim();

console.log("Length:", text.length);
console.log("First character:", text[0]);
console.log("Slice:", text.slice(1, 4));
console.log("Includes v:", text.includes("v"));
console.log("Split:", "red,blue,green".split(","));

const reversed = text.split("").reverse().join("");

console.log("Reversed:", reversed);
console.log("Palindrome:", text === reversed);
console.log(`The word is ${text}`);
