import axios, { AxiosError } from 'axios'
import { API_CONFIG } from '../config/api.config'
import type { ValidationResponse, ApiError } from '../types/api.types'

const api = axios.create({
  baseURL: API_CONFIG.baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const validateAccessKey = async (key: string): Promise<ValidationResponse> => {
  try {
    const response = await api.post<ValidationResponse>(
      API_CONFIG.endpoints.validateKey,
      { key }
    )
    return response.data
  } catch (error) {
    const apiError: ApiError = {
      message: 'An error occurred while validating the access key'
    }

    if (error instanceof AxiosError) {
      apiError.status = error.response?.status
      apiError.message = error.response?.data?.message || apiError.message
    }

    return {
      valid: false,
      message: apiError.message
    }
  }
}

export default api