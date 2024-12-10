import api from './axios'
import type { ValidationResponse } from '../types/api.types'

export const validateToken = async (token: string): Promise<ValidationResponse> => {
  try {
    const response = await api.get<ValidationResponse>('/auth/validate-token', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to validate token')
  }
}

export const validateKey = async (key: string): Promise<ValidationResponse> => {
  try {
    const response = await api.post<ValidationResponse>('/auth/validate-key', { key })
    return response.data
  } catch (error) {
    throw new Error('Failed to validate access key')
  }
}