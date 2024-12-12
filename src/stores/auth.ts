import { defineStore } from 'pinia'
import { ref } from 'vue'
import { validateKey } from '../api/auth'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const isLoading = ref(false)
  const errorMessage = ref<string | undefined>()

  const checkAuthentication = async (key?: string): Promise<boolean> => {
    isLoading.value = true
    errorMessage.value = undefined
  
    localStorage.removeItem('tmp_auth_token')
    localStorage.removeItem('tmp_auth_to')

    try {
      if (key) {
        const response = await validateKey(key)
        if (response.success && response.data) {
          const token = response.data; // Assuming the response contains the token
          localStorage.setItem('tmp_auth_token', token)
          isAuthenticated.value = true
          return true
        }
      } else {
        console.log('Key is missing');
      }

      return false;
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