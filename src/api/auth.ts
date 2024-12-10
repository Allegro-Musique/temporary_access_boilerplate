import api from './axios'
import type { ValidationResponse } from '../types/api.types'

export const validateToken = async (token: string): Promise<ValidationResponse> => {
  try {
    const response = await api.get<ValidationResponse>('/teacher/relationship_service_number', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to validate token')
  }
}

export const validateKey = async (key: string): Promise<ValidationResponse> => {
  try {
    const response = await api.post<ValidationResponse>('/teacher/auth/temporary', {token: key })
    return response.data
  } catch (error) {
    throw new Error('Failed to validate access key')
  }
}