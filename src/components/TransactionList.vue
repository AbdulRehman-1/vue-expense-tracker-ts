<template>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      :class="transaction.amount > 0 ? 'plus' : 'minus'"
    >
      {{ transaction.title }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn" @click="deleteTransaction(transaction.id)">x</button>
    </li>
  </ul>
</template>

<script setup>
import { useTransactionStore } from '../stores/TransactionStore'

const transactionStore = useTransactionStore()
const { transactions } = transactionStore

const deleteTransaction = (id) => {
  transactionStore.deleteTransaction(id)
}
</script>
