import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', () => {
  const text = ref('')
  const hasError = ref(false)
  const isShown = ref(false)

  function $reset() {
    text.value = ''
    hasError.value = false
    isShown.value = false
  }

  return { text, hasError, isShown, $reset }
})
