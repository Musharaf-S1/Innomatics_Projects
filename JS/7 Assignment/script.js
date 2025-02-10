const salaryForm = document.getElementById('salary-form');
const netSalaryPara = document.getElementById('net-salary');

salaryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const basicSalary = parseFloat(document.getElementById('basic-salary').value);
    const allowances = parseFloat(document.getElementById('allowances').value);

    const netSalary = calculateNetSalary(basicSalary, allowances);
    netSalaryPara.textContent = `Net Salary: $${netSalary}`;
});

function calculateNetSalary(basicSalary, allowances) {
    const grossSalary = basicSalary + allowances;
    const tax = grossSalary * 0.1; // 10% tax
    return grossSalary - tax;
}
