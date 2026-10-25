
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, resolve);
    });
}

async function main() {
    const students = [];
    const count = Number(await ask("Number of students: "));

    if (!Number.isInteger(count) || count < 1) {
        console.log("Enter a valid positive number.");
        rl.close();
        return;
    }

    for (let i = 0; i < count; i++) {
        const name = (await ask("Student name: ")).trim();
        const marksInput = await ask("Marks out of 100: ");
        const marks = Number(marksInput);

        if (
            !name ||
            marksInput.trim() === "" ||
            !Number.isFinite(marks) ||
            marks < 0 ||
            marks > 100
        ) {
            console.log("Invalid input. Try this student again.");
            i--;
            continue;
        }

        students.push({ name, marks });
    }

    let total = 0;

    console.log("\n--- Student Report ---");

    for (const student of students) {
        total += student.marks;

        const result = student.marks >= 40 ? "Pass" : "Fail";

        console.log(
            `${student.name}: ${student.marks}/100 - ${result}`
        );
    }

    const average = total / students.length;

    const topper = students.reduce((best, student) =>
        student.marks > best.marks ? student : best
    );

    console.log("Average:", average.toFixed(2));
    console.log("Topper:", topper.name);
    console.log("Highest marks:", topper.marks);

    rl.close();
}

main();
