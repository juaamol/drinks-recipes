import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useDrinksStore } from './drinks'

const STORAGE_NAME = `${import.meta.env.VITE_APP_NAME}-favorites`

export const useFavoritesStore = defineStore('favorites', () => {
  const favoritesMap = ref({})
  const drinks = useDrinksStore()
  const favorites = computed(() => Object.values(favoritesMap.value))

  const updateStorage = () => {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(favorites.value))
  }

  function toggle() {
    const favorite = favoritesMap.value[drinks.recipe.idDrink]
    favoritesMap.value[drinks.recipe.idDrink] = favorite ? null : drinks.recipe
  }

  watch(favorites, updateStorage, { deep: true })

  return { favorites, toggle }
})
