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
import { useTransactionStore } from '@/stores/TransactionStore'

const transactionStore = useTransactionStore()
const { transactions } = transactionStore

/**
 * Deletes a transaction with the specified ID.
 *
 * @param {number} id - The ID of the transaction to be deleted.
 * @return {void} This function does not return a value.
 */
const deleteTransaction = (id) => {
  transactionStore.deleteTransaction(id)
}
</script>
