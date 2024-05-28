<template>
  <AppHeader />
  <div class="container">
    <AppBalance />
    <IncomeExpense />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
</script>
