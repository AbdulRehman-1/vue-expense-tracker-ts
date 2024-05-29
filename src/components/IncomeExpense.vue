<template>
  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">+${{ income }}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">-${{ expense }}</p>
    </div>
  </div>
</template>

<script setup>
import { useTransactionStore } from '../stores/TransactionStore'
import { storeToRefs } from 'pinia'

const transactionStore = useTransactionStore()
const { income, expense } = storeToRefs(transactionStore)
</script>
