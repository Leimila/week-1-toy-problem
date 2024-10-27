// PAYE (Tax) Calculation
function calculatePAYE(grossSalary){
    let paye =0;
    if(grossSalary <= 24000) {
        paye = grossSalary * 0.1;
    } else if (grossSalary<= 32333){
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else {
        paye = 4275.75 + (grossSalary -32333) * 0.3;
    }
    return paye;
}
// NHIF Deduction based on Gross Salary
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999){
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {  
        return 400; 
    } else if (grossSalary <= 14999) {
        return 500;   
    } else if (grossSalary <= 19999) {
        return 600;   
    } else if (grossSalary <= 24999) {
        return 750;   
    } else if (grossSalary <= 29999) {
        return 850;   
    } else if (grossSalary <= 34999) {
        return 900;   
    } else if (grossSalary <= 39999) {
        return 950;   
    } else if (grossSalary <= 44999) {
        return 1000;   
    } else if (grossSalary <= 49999) {
        return 1100;   
    } else if (grossSalary <= 59999) {
        return 1200;   
    } else if (grossSalary <= 69999) {
        return 1300;  
    } else if (grossSalary <= 79999) {
        return 1400;   
    } else if (grossSalary <= 89999) {
        return 1500;   
    } else if (grossSalary <= 99999) {
        return 1600; 
    } else {
        return 1700; // For gross salary above 100,000 KES, the NHIF deduction is 1700 KES

    }  

}
// NSSF Deduction based on Gross Salary
function calculateNSSF(grossSalary) {
    // NSSF deduction is 6% of gross salary, but capped at a maximum of 1800 KES
    return Math.min(grossSalary * 0.06, 1800);
}
// Function to calculate Net Salary based on basic salary and benefits
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - (paye + nhif + nssf);
    return{
        grossSalary, // Return gross salary
        paye,        // Return PAYE
        nhif,        // Return NHIF deduction
        nssf,        // Return NSSF deduction
        netSalary    // Return net salary 
        
    };

}
// Example Usage
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);
// Output the calculated salary details
console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`PAYE: ${salaryDetails.paye}`);
console.log(`NHIF: ${salaryDetails.nhif}`);
console.log(`NSSF: ${salaryDetails.nssf}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);

    


