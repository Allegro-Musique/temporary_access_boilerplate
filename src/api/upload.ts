import api from './axios'
import type { RecentUpload } from '../types/upload.types'

export const getRecentUploads = async (): Promise<RecentUpload[]> => {
  try {
    const response = await api.get<RecentUpload[]>('/uploads/recent')
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch recent uploads')
  }
}

export const uploadFile = async (file: File, settings: any) => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('settings', JSON.stringify(settings))

  try {
    const response = await api.post('/uploads', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    return response.data
  } catch (error) {
    throw new Error('Failed to upload file')
  }
}