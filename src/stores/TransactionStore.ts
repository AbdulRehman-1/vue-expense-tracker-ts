import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Transaction } from '../types/transactionTypes'

export const useTransactionStore = defineStore('transactionStore', () => {
  const transactions = ref<Transaction[]>([])

  const total = computed(() => {
    return transactions.value.reduce((acc, transaction) => {
      return acc + transaction.amount
    }, 0)
  })

  const income = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => {
        return acc + transaction.amount
      }, 0)
  })

  const expense = computed(() => {
    return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => {
        return acc + transaction.amount
      }, 0)
  })

  const addTransaction = (title: string, amount: number) => {
    transactions.value.push({
      id: transactions.value.length + 1,
      title: title,
      amount: amount
    })
  }

  return { transactions, total, income, expense, addTransaction }
})
