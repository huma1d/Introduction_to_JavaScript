const students = [
    { name: "Aman", marks: 85 },
    { name: "Sara", marks: 92 },
    { name: "Ravi", marks: 74 }
];

students.push({ name: "Neha", marks: 89 });

students[0].marks = 90;

for (const student of students) {
    console.log(
        `${student.name}: ${student.marks}`
    );
}

const topper = students.reduce((best, student) =>
    student.marks > best.marks ? student : best
);

console.log("Topper:", topper.name);
