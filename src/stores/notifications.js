import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', () => {
  const text = ref('')
  const hasError = ref(false)
  const isShown = ref(false)

  return { text, hasError, isShown }
})
