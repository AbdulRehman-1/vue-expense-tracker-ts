<template>
  <AppHeader />
  <div class="container">
    <AppBalance />
    <IncomeExpense />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppBalance from './components/AppBalance.vue'
import IncomeExpense from './components/IncomeExpense.vue'
</script>
