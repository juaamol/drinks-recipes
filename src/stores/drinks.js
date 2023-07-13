import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'

export const useDrinksStore = defineStore('drinks', () => {
  const categories = ref([])
  const recipes = ref([])
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

  async function getRecipes() {
    const response = await APIService.searchRecipes(search)
    recipes.value = response.data.drinks || []
  }

  onMounted(async function () {
    const response = await APIService.getCategories()
    const drinks = response.data.drinks || []
    categories.value = drinks.map((drink) => drink.strCategory)
  })

  return { categories, search, recipes, searchByName, searchByCategory, getRecipes }
})
