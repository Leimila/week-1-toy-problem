// Import the 'readline-sync' module for taking input from the user
const readlineSync = require('readline-sync');
// Initialize an empty array to store student objects (name, marks, grade)
const students = [];
// Function to print a message indicating the program is about to display students' grades
function getStudentGrades(){
    console.log(" students grades")

}
// Start an infinite loop to continuously ask for student names and marks
while (true) {
    // Prompt the user to enter a student's name or 'done' to stop the input
    let name = readlineSync.question("Enter student name (or type 'done' to finish): ");
    // If the user types 'done', exit the loop
    if (name.toLowerCase()==='done'){
        console.log("user has finished inputting student names.");
         break;
         }
    // Variable to store the student's marks
         let marks;
         // Another loop to validate marks input (ensure marks are between 0 and 100)
    while (true) {
        // Prompt the user to input marks for the current student
        marks = readlineSync.questionInt(`enter marks for ${name} (0 -100):`);
                // Check if the entered marks are within the valid range

        if (marks >= 0 && marks <= 100) {
            break;
        } else{
         console.log("Invalid input. Please enter a number between 0 and 100.")   
        }
    } 
    // Calculate the grade based on the student's marks   
    let grade = calculateGrade(marks);
    // Display the student's name, marks, and grade
    students.push({ name: name, mark: marks, grade: grade });
console.log(`Name: ${name}, Marks: ${marks}, Grade: ${grade}`);
}
// Once the user is done inputting, display the final student grades
console.log("Final Student Grades:");
getStudentGrades(); // Call the function to display student grades
 // Function to calculate the grade based on the marks   
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
return grade;// Return the calculated grade
}
// Display all students' grades by calling the function again
getStudentGrades();
