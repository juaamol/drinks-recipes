import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])
  const search = reactive({
    name: '',
    category: ''
  })

  function searchByName(name) {
    search.name = name
  }

  function searchByCategory(category) {
    search.category = category
  }

  function getRecipes() {}

  onMounted(async function () {
    const response = await APIService.getCategories()
    const drinks = response.data.drinks || []
    categories.value = drinks.map((drink) => drink.strCategory)
  })

  return { categories, search, searchByName, searchByCategory, getRecipes }
})
