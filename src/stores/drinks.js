import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'
import { useModalStore } from './modal'

export const useDrinksStore = defineStore('drinks', () => {
  const modal = useModalStore()
  const categories = ref([])
  const recipes = ref([])
  const recipe = ref({})
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
    const response = await APIService.getRecipes(search)
    recipes.value = response.data.drinks || []
  }

  async function getRecipe(id) {
    const response = await APIService.getRecipe(id)
    recipe.value = (response.data.drinks || [])[0] || {}
    console.log(recipe.value)
    modal.toggle()
  }

  onMounted(async function () {
    const response = await APIService.getCategories()
    const drinks = response.data.drinks || []
    categories.value = drinks.map((drink) => drink.strCategory)
  })

  return {
    categories,
    search,
    recipes,
    recipe,
    searchByName,
    searchByCategory,
    getRecipes,
    getRecipe
  }
})
