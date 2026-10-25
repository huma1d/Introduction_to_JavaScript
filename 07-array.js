const marks = [78, 92, 65, 88];

marks.push(95);
marks.pop();

console.log("Marks:", marks);
console.log("Sum:", marks.reduce((total, mark) => total + mark, 0));
console.log("Maximum:", Math.max(...marks));
console.log("Minimum:", Math.min(...marks));

console.log("Passed:", marks.filter(mark => mark >= 70));
console.log("Doubled:", marks.map(mark => mark * 2));
console.log("First mark above 80:", marks.find(mark => mark > 80));

for (const mark of marks) {
    console.log(mark);
}

marks.forEach(mark => console.log("Score:", mark));
