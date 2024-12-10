import { defineStore } from 'pinia'
import { ref } from 'vue'
import { validateToken, validateKey } from '../api/auth'
import type { ValidationResponse } from '../types/api.types'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const isLoading = ref(true)
  const errorMessage = ref<string | undefined>()

  const checkAuthentication = async (key?: string) => {
    isLoading.value = true
    let response: ValidationResponse

    try {
      const storedToken = localStorage.getItem('tmp_auth_token')
      
      if (storedToken) {
        response = await validateToken(storedToken)
      } else if (key) {
        response = await validateKey(key)
        console.log('Stored token:', response)
        if (response.success && response.data) {
          localStorage.setItem('tmp_auth_token', response.data)
        }
      } else {
        throw new Error('No authentication credentials provided')
      }

      isAuthenticated.value = response.success
      errorMessage.value = response.message
    } catch (error) {
      isAuthenticated.value = false
      errorMessage.value = error instanceof Error ? error.message : 'Authentication failed'
    } finally {
      isLoading.value = false
    }

    return isAuthenticated.value
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