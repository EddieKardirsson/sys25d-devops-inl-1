<script setup lang="ts">
  import { ref } from 'vue'
  import { calculateNetSalary } from "../lib/salary.ts";

  const defaultTaxRate = 25;

  const grossSalary = ref<number>(0);
  const taxRate = ref<number>(defaultTaxRate);
  const deductions = ref<number>(0);

  const result = ref<number>(0);
  const error = ref<string | null>(null);

  function onCalculate() {
    result.value = 0;
    error.value = null;

    try {
      result.value = calculateNetSalary(grossSalary.value!, taxRate.value, deductions.value);
    } catch (e) {
      error.value = e instanceof Error ? e.message : String(e);
    }
  }

  function reset() {
    grossSalary.value = 0;
    taxRate.value = defaultTaxRate;
    deductions.value = 0;
    result.value = 0;
    error.value = null;
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat(
        'en-US', {
          style: 'currency',
          currency: 'SEK',
          currencyDisplay: 'symbol',
          maximumFractionDigits: 2 })
        .format(value);
  }
</script>

<template>
  <div class="salary-calculator">
    <h2>Salary Calculator</h2>

    <div class="field">
      <label>Gross Salary:</label>
      <input type="number" v-model.number="grossSalary" min="0" step="1.0" />
    </div>

    <div class="field">
      <label>Tax Rate:</label>
      <input type="number" v-model.number="taxRate" min="0" max="100" step="0.1" />
    </div>

    <div class="field">
      <label>Deductions:</label>
      <input type="number" v-model.number="deductions" min="0" step="1.0" />
    </div>

    <div class="actions">
      <button @click="onCalculate">Calculate</button>
      <button @click="reset">Reset</button>
    </div>

    <div v-if="error" class="error">{{ error }}</div>
    <div v-else class="result">
      Net Salary: <strong>{{ formatCurrency(result) }} kr</strong>
    </div>
  </div>
</template>

<style scoped>
.salary-calculator {
  max-width: 420px;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.field {
  margin-bottom: 0.6rem;
  display: flex;
  flex-direction: column;
}
.field label {
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}
.actions {
  margin-top: 0.6rem;
  display: flex;
  gap: 0.4rem;
}
.error {
  color: #b00020;
  margin-top: 0.6rem;
}
.result {
  margin-top: 0.6rem;
  background: #f6f9ff;
  padding: 0.6rem;
  border-radius: 4px;
}
</style>