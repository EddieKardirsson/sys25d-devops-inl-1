

 /*
  * 1. Calculate taxable income (grossSalary - deductions)
  * 2. Calculate tax amount (taxableIncome * taxRate)
  * 3. Return net salary (grossSalary - taxAmount)
  */
export function calculateNetSalary(
  grossSalary: number,
  taxRate: number, // in percent, not decimal value
  deductions: number): number {

    //if NaN or Infinity, throw an error
    if (isNaN(grossSalary) || isNaN(taxRate) || isNaN(deductions)) {
      throw new Error('Invalid input: salary, tax rate, and deductions must be numbers');
    }
    if (!isFinite(grossSalary) || !isFinite(taxRate) || !isFinite(deductions)) {
      throw new Error('Invalid input: salary, tax rate, and deductions must be finite numbers');
    }

    if (grossSalary < 0 || taxRate < 0 || deductions < 0) {
      throw new Error('Invalid input: salary, tax rate, and deductions must be non-negative');
    }

    if (taxRate > 100) {
      throw new Error('Invalid input: tax rate must be between 0 and 100');
    }

    const taxableIncome = Math.max(0, grossSalary - deductions);
    const taxAmount = taxableIncome * (taxRate / 100);
  return grossSalary - taxAmount;
}