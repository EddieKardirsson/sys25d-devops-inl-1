export function calculateNetSalary(
  grossSalary: number,
  taxRate: number, // in percent, not decimal value
  deductions: number): number {

    if (grossSalary < 0 || taxRate < 0 || deductions < 0) {
      throw new Error('Invalid input: salary, tax rate, and deductions must be non-negative');
    }

    const taxableIncome = Math.max(0, grossSalary - deductions);
    const taxAmount = taxableIncome * (taxRate / 100);
  return grossSalary - taxAmount;
}