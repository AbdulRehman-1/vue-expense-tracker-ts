<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ total }}</h1>
</template>

<script setup lang="ts">
import { useTransactionStore } from '../stores/TransactionStore'

const transactionStore = useTransactionStore()
const { total } = transactionStore
</script>
