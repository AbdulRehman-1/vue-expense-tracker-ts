<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="title" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input type="text" id="amount" v-model.number="amount" placeholder="Enter amount..." />
    </div>
    <button type="submit" class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { useTransactionStore } from '@/stores/TransactionStore'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const title = ref('')
const amount = ref('')

const toast = useToast()

/**
 * Adds a new transaction to the transaction store if the title and amount fields are filled.
 * Displays an error toast message if either field is empty.
 * Clears the title and amount fields after adding the transaction.
 *
 * @return {void}
 */
const addTransaction = () => {
  if (!title.value || !amount.value) {
    toast.error('Both fields must be filled.')
    return
  }
  const transactionStore = useTransactionStore()
  transactionStore.addTransaction(title.value, parseFloat(amount.value))
  title.value = ''
  amount.value = ''
}
</script>
