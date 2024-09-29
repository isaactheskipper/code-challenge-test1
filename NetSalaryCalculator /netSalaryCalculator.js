function netsalarycalculator(basicsalary, benefits) {
    function calculateNHIF(grosspay) {
        if (grosspay <= 5999) return 150;
        else if (grosspay <= 7999) return 300;
        else if (grosspay <= 11999) return 400;
        else if (grosspay <= 14999) return 500;
        else if (grosspay <= 19999) return 600;
        else if (grosspay <= 24999) return 750;
        else if (grosspay <= 29999) return 850;
        else if (grosspay <= 34999) return 900;
        else if (grosspay <= 39999) return 950;
        else if (grosspay <= 44999) return 1000;
        else if (grosspay <= 49999) return 1100;
        else if (grosspay <= 59999) return 1200;
        else if (grosspay <= 69999) return 1300;
        else if (grosspay <= 79999) return 1400;
        else if (grosspay <= 89999) return 1500;
        else if (grosspay <= 99999) return 1600;
        else return 1700; 
    }

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

    const NHIFdeductions = calculateNHIF(grosspay);

    const housingLevyRate = 0.015;
    const housingLevy = grosspay * housingLevyRate;

    const totalDeductions = payee + NHIFdeductions + NSSFdeductions + housingLevy;

    const netSalary = grosspay - totalDeductions;

    if (netSalary <= 0) {
        return null;
    }

    return {
        grosspay,
        payee,
        NHIFdeductions,
        NSSFdeductions,
        housingLevy, 
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

    if (result === null) {
        document.getElementById('grossPayOutput').textContent = 'Gross Pay: N/A';
        document.getElementById('payeeOutput').textContent = 'PAYE: N/A';
        document.getElementById('NHIFOutput').textContent = 'NHIF Deductions: N/A';
        document.getElementById('NSSFOutput').textContent = 'NSSF Deductions: N/A';
        document.getElementById('housingLevyOutput').textContent = 'Housing Levy: N/A'; 
        document.getElementById('netSalaryOutput').textContent = 'Net Salary: N/A';
        return;
    }

    document.getElementById('grossPayOutput').textContent = `Gross Pay: Ksh ${result.grosspay.toFixed(2)}`;
    document.getElementById('payeeOutput').textContent = `PAYE: Ksh ${result.payee.toFixed(2)}`;
    document.getElementById('NHIFOutput').textContent = `NHIF Deductions: Ksh ${result.NHIFdeductions}`;
    document.getElementById('NSSFOutput').textContent = `NSSF Deductions: Ksh ${result.NSSFdeductions.toFixed(2)}`;
    document.getElementById('housingLevyOutput').textContent = `Housing Levy: Ksh ${result.housingLevy.toFixed(2)}`; 
    document.getElementById('netSalaryOutput').textContent = `Net Salary: Ksh ${result.netSalary.toFixed(2)}`;
}
