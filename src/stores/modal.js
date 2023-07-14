import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useFavoritesStore } from './favorites'
import { useDrinksStore } from './drinks'

export const useModalStore = defineStore('modal', () => {
  const isShown = ref(false)
  const favorites = useFavoritesStore()
  const drinks = useDrinksStore()
  const isFavorite = computed(() => favorites.isFavorite(drinks.recipe.idDrink))

  function toggle() {
    isShown.value = !isShown.value
  }

  return { isShown, isFavorite, toggle }
})
