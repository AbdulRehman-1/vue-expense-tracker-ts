import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Transaction } from '../types/transactionTypes'

export const useTransactionStore = defineStore('transactionStore', () => {
  const transactions = ref<Transaction[]>([
    {
      id: 1,
      title: 'Transaction 1',
      amount: 1000
    },
    {
      id: 1,
      title: 'Transaction 2',
      amount: -100
    }
  ])

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

  return { transactions, total, income, expense }
})
