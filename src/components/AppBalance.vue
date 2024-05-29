<template>
  <h4>Your Balance</h4>
  <h1 id="balance">${{ total }}</h1>
</template>

<script setup>
import { useTransactionStore } from '../stores/TransactionStore'
import { storeToRefs } from 'pinia'

const transactionStore = useTransactionStore()
const { total } = storeToRefs(transactionStore)
</script>
