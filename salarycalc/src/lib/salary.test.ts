import { describe, expect, test } from 'vitest';
import { calculateNetSalary} from "./salary.ts";

describe("calculateNetSalary", () => {
  test("should calculate net salary correctly", () => {
    const grossSalary = 50000;
    const deductions = 0;
    const taxRate = 32;
    const expectedNetSalary = 34000;

    const netSalary = calculateNetSalary(grossSalary, taxRate, deductions);

    expect(netSalary).toBe(expectedNetSalary);
  });

  test("should return full salary when tax is zero", () => {
    const grossSalary = 50000;
    const deductions = 0;
    const taxRate = 0;
    const expectedNetSalary = grossSalary;

    const netSalary = calculateNetSalary(grossSalary, taxRate, deductions);

    expect(netSalary).toBe(expectedNetSalary);
  });

  test("should take tax deductions into account", () => {
    const grossSalary = 50000;
    const deductions = 5000;
    const taxRate = 32;
    const expectedNetSalary = 35600;

    const netSalary = calculateNetSalary(grossSalary, taxRate, deductions);

    expect(netSalary).toBe(expectedNetSalary);
  })

  test("should handle negative gross salary gracefully", () => {
    const grossSalary = -10000;
    const deductions = 0;
    const taxRate = 32;

    expect(() => calculateNetSalary(grossSalary, taxRate, deductions))
      .toThrow('Invalid input: salary, tax rate, and deductions must be non-negative');
  });
});