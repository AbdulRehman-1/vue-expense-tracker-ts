<template>
  <AppHeader />
  <div class="container">
    <AppBalance />
    <IncomeExpense />
    <TransactionList />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
</script>
