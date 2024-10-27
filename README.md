# Week 1 Toy Problems

This repository contains solutions to a series of JavaScript toy problems designed to enhance programming skills. Each challenge is implemented in its own file for clarity and organization.

## Prerequisites

To effectively use this repository, please ensure you have the following:

1. **GitHub Account**: Create a repository on your GitHub account.
2. **JavaScript Environment**: Ensure you have a JavaScript runtime environment (like Node.js) installed to run the programs locally.
3. **Folder Structure**: The repository contains one folder with 3-4 files, each holding a separate solution for the challenges outlined below.
4. **Submission**: Once you have completed the challenges, push your solutions to the GitHub repository and submit the repository link for grading.

## Challenges

### Challenge 1: Student Grade Generator

This program manages student grades by prompting the user to input multiple student names and their corresponding marks (between 0 and 100). It validates input and assigns grades based on the following criteria:

- **A**: Marks greater than 79
- **B**: Marks between 60 and 79 (inclusive)
- **C**: Marks between 50 and 59 (inclusive)
- **D**: Marks between 40 and 49 (inclusive)
- **E**: Marks less than 40

The user can end the input process by typing "done". The program displays each student's name, their marks, and corresponding grades.

### Challenge 2: Speed Detector

This program takes the speed of a car as input. If the speed is less than 70 km/h, it prints “Ok”. For every 5 km/h above the speed limit (70 km/h), it assigns one demerit point. The program outputs the total number of demerit points, and if points exceed 12, it prints “License suspended”.

### Challenge 3: Net Salary Calculator

This program calculates an individual’s net salary by taking inputs for basic salary and benefits. It computes various deductions including PAYE (tax), NHIF, and NSSF contributions based on specified rates from Kenyan tax regulations. The program outputs:

- Gross Salary
- PAYE
- NHIF Deduction
- NSSF Deduction
- Net Salary

## How to Run

1. Clone this repository to your local machine using:
   ```bash
   git clone <repository-link>