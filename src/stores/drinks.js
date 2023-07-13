import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])

  onMounted(async () => {
    const url = import.meta.env.VITE_CATEGORIES_URL
    const response = await axios.get(url)
    const drinks = response.data.drinks || []
    categories.value = drinks.map((drink) => drink.strCategory)
  })

  return { categories }
})
