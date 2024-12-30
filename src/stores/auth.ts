import { defineStore } from 'pinia'
import { ref } from 'vue'
import { validateKey } from '../api/auth'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const errorMessage = ref<string | undefined>()

  const checkAuthentication = async (): Promise<boolean> => {
    isLoading.value = true
    errorMessage.value = undefined
    
    const token = localStorage.getItem('tmp_auth_token')
    if (!token) {
      isAuthenticated.value = false
      return false
    }

    try {
      const response = await validateKey(token)
      if (response.success && response.data) {
        isAuthenticated.value = true
        return true
      }
      return false
    } catch (error) {
      isAuthenticated.value = false
      errorMessage.value = error instanceof Error ? error.message : 'Authentication failed'
      return false
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    localStorage.removeItem('tmp_auth_token')
    isAuthenticated.value = false
    errorMessage.value = undefined
  }

  return {
    isAuthenticated,
    isLoading,
    errorMessage,
    checkAuthentication,
    logout
  }
})