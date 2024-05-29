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
import { useToast } from 'vue-toastification'
import { useTransactionStore } from '@/stores/transactionStore'
import { ref } from 'vue'

const title = ref('')
const amount = ref('')

const toast = useToast()

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
