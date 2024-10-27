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
        return 1700;
    }  

}
function calculateNSSF(grossSalary) {
    return Math.min(grossSalary * 0.06, 2000);
}
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - (paye + nhif + nssf);
    return{
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary
        
    };

}
const basicSalary = 50000;
const benefits = 10000;
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`PAYE: ${salaryDetails.paye}`);
console.log(`NHIF: ${salaryDetails.nhif}`);
console.log(`NSSF: ${salaryDetails.nssf}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);

    


