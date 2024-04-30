//A script to check the total marks of a student in various examinations.

const calculateGrade = (exam, marks) => {
    if (exam === "Final exam") {
        return (marks >= 90);
    }else{
        return (marks >= 89 && marks <= 100);
    }
};

//Test the function.

console.log(calculateGrade("Midterm", 80));
console.log(calculateGrade("Final exam", 95));