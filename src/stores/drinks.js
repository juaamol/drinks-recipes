import { ref, onMounted, reactive } from 'vue'
import { defineStore } from 'pinia'
import APIService from '../services/APIService'
import { useModalStore } from './modal'
import { scrollToMain } from '../utils'

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

    setTimeout(() => scrollToMain(), 250)
  }

  async function getRecipe(id) {
    const response = await APIService.getRecipe(id)
    const drinkDetails = (response.data.drinks || [])[0] || {}
    const ingredients = []

    for (let index = 1; index <= 15; index++) {
      const name = drinkDetails[`strIngredient${index}`]
      const measure = drinkDetails[`strMeasure${index}`]

      if (name) {
        ingredients.push({ name, measure })
      }
    }

    drinkDetails.ingredients = ingredients
    recipe.value = drinkDetails

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
