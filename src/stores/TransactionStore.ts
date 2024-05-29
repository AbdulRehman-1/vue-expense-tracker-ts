import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import type { Transaction } from '../types/transactionTypes'

export const useTransactionStore = defineStore('transactionStore', () => {
  const transactions = ref<Transaction[]>(JSON.parse(localStorage.getItem('transactions') || '[]'))

  watch(
    transactions,
    (newTransactions) => localStorage.setItem('transactions', JSON.stringify(newTransactions)),
    { deep: true }
  )

  const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0)
  })

  const income = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
  })

  const expense = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
  })
  /**
   * Adds a new transaction to the list of transactions.
   *
   * @param {string} title - The title of the transaction.
   * @param {number} amount - The amount of the transaction.
   * @return {void} This function does not return anything.
   */
  const addTransaction = (title: string, amount: number) => {
    transactions.value.push({
      id: transactions.value.length + 1,
      title: title,
      amount: amount
    })
  }

  /**
   * Deletes a transaction from the transactions array based on the provided id.
   *
   * @param {number} id - The id of the transaction to be deleted.
   * @return {void} This function does not return anything.
   */
  const deleteTransaction = (id: number) => {
    const index = transactions.value.findIndex((transaction) => transaction.id === id)
    if (index !== -1) {
      transactions.value.splice(index, 1)
    }
  }

  return { transactions, total, income, expense, addTransaction, deleteTransaction }
})
