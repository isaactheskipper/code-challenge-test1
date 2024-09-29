 function netsalarycalculator(basicsalary, benefits) {
    const NHIFdeductions = 850;
    const NSSFdeductionrate = 0.06;
    const NSSFdeductions = basicsalary * NSSFdeductionrate;

    const grosspay = basicsalary + benefits;
 
    let payee = 0;
    if (grosspay <= 29000) {
        payee = grosspay * 0.25;
    } else if (grosspay <= 40000) {
        payee = 7250 + (grosspay - 29000) * 0.30;
    } else {
        payee = 7250 + 10550 + (grosspay - 40000) * 0.325;
    }

    const totalDeductions = payee + NHIFdeductions + NSSFdeductions;

    const netSalary = grosspay - totalDeductions;

    return {
        grosspay,
        payee,
        NHIFdeductions,
        NSSFdeductions,
        netSalary
    };
}

function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById('basicSalaryInput').value);
    const benefits = parseFloat(document.getElementById('benefitsInput').value);

    if (isNaN(basicSalary) || isNaN(benefits)) {
        alert('Please enter valid numbers for both fields.');
        return;
    }

    const result = netsalarycalculator(basicSalary, benefits);

    document.getElementById('grossPayOutput').textContent = `Gross Pay: Ksh ${result.grosspay.toFixed(2)}`;
    document.getElementById('payeeOutput').textContent = `PAYE: Ksh ${result.payee.toFixed(2)}`;
    document.getElementById('NHIFOutput').textContent = `NHIF Deductions: Ksh ${result.NHIFdeductions}`;
    document.getElementById('NSSFOutput').textContent = `NSSF Deductions: Ksh ${result.NSSFdeductions.toFixed(2)}`;
    document.getElementById('netSalaryOutput').textContent = `Net Salary: Ksh ${result.netSalary.toFixed(2)}`;
}