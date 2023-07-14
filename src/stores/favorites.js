import { computed, ref, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { useDrinksStore } from './drinks'
import { useNotificationsStore } from './notifications'
import { useModalStore } from './modal'

const STORAGE_NAME = `${import.meta.env.VITE_APP_NAME}-favorites`

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref({})
  const drinks = useDrinksStore()
  const notifications = useNotificationsStore()
  const modal = useModalStore()
  const recipes = computed(() => Object.values(favorites.value).filter((value) => value !== null))

  function updateStorage() {
    localStorage.setItem(STORAGE_NAME, JSON.stringify(favorites.value))
  }

  function toggle() {
    modal.toggle()
    const favorite = favorites.value[drinks.recipe.idDrink]
    favorites.value[drinks.recipe.idDrink] = favorite ? null : drinks.recipe

    notifications.isShown = true
    notifications.text = favorite ? 'Removed from favorites' : 'Added to favorites'

    setTimeout(() => notifications.$reset(), 3000)
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
