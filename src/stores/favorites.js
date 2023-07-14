import { computed, ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useDrinksStore } from './drinks'

const STORAGE_NAME = `${import.meta.env.VITE_APP_NAME}-favorites`

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref({})
  const drinks = useDrinksStore()
  const recipes = computed(() => Object.values(favorites.value).filter((value) => value !== null))

  function updateStorage() {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(favorites.value))
  }

  function toggle() {
    const favorite = favorites.value[drinks.recipe.idDrink]
    favorites.value[drinks.recipe.idDrink] = favorite ? null : drinks.recipe
  }

  function isFavorite(id) {
    return !!favorites.value[id]
  }

  onMounted(() => {
    favorites.value = JSON.parse(localStorage.getItem(STORAGE_NAME)) ?? {}
  })

  watch(recipes, () => updateStorage(), { deep: true })

  return { recipes, isFavorite, toggle }
})
