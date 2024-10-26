const readlineSync = require('readline-sync');
const students = [];
function getStudentGrades(){
    console.log(" students grades")

}
while (true) {
    let name = readlineSync.question("Enter student name (or type 'done' to finish): ");
    if (name.toLowerCase()==='done'){
        console.log("user has finished inputting student names.");
         break;
         }
    let marks;
    while (true) {
        marks = readlineSync.questionInt(`enter marks for ${name} (0 -100):`);
        if (marks >= 0 && marks <= 100) {
            break;
        } else{
         console.log("Invalid input. Please enter a number between 0 and 100.")   
        }
    }    
    let grade = calculateGrade(marks);
    students.push({ name: name, mark: marks, grade: grade });
console.log(`Name: ${name}, Marks: ${marks}, Grade: ${grade}`);
}
console.log("Final Student Grades:");
getStudentGrades();
    
function calculateGrade(mark) {
    let grade 
if (mark > 79) {
    grade = "A";
} else if(mark>= 60) {
    grade = "B"
} else if (mark>= 50) {
    grade = "C"
} else if (mark>= 40) {
    grade = "D"
} else {
    grade = "E"
}
return grade;
}
getStudentGrades();
