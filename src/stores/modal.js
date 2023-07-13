import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', () => {
  const isShown = ref(false)

  function toggle() {
    isShown.value = !isShown.value
  }

  return { isShown, toggle }
})
