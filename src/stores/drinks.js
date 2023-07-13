import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])

  return { categories }
})
