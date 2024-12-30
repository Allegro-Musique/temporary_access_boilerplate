import api from './axios'
import type { ValidationResponse } from '../types/api.types'

export const validateKey = async (key: string): Promise<ValidationResponse> => {
  try {
    const response = await api.post<ValidationResponse>('/auth/temporary', { key })
    return response.data
  } catch (error) {
    throw new Error('Failed to validate access key')
  }
}