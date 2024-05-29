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
import AddTransaction from './components/AddTransaction.vue'
import AppBalance from './components/AppBalance.vue'
import AppHeader from './components/AppHeader.vue'
import IncomeExpense from './components/IncomeExpense.vue'
import TransactionList from './components/TransactionList.vue'
</script>
