import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UploadSettings, RecentUpload } from '../types/upload.types'
import { getRecentUploads } from '../api/upload'

export const useUploadStore = defineStore('upload', () => {
  const selectedFiles = ref<File[]>([])
  const settings = ref<UploadSettings>({
    compression: 'high',
    visibility: 'private',
    expiryDays: 7,
    password: '',
    allowDownloads: true,
    notifyOnDownload: false,
    maxDownloads: 10
  })
  const recentUploads = ref<RecentUpload[]>([])
  const isLoading = ref(false)

  const setSelectedFiles = (files: File[]) => {
    selectedFiles.value = files
  }

  const updateSettings = (newSettings: Partial<UploadSettings>) => {
    settings.value = { ...settings.value, ...newSettings }
  }

  const fetchRecentUploads = async () => {
    isLoading.value = true
    try {
      recentUploads.value = await getRecentUploads()
    } catch (error) {
      console.error('Failed to fetch recent uploads:', error)
    } finally {
      isLoading.value = false
    }
  }

  return {
    selectedFiles,
    settings,
    recentUploads,
    isLoading,
    setSelectedFiles,
    updateSettings,
    fetchRecentUploads
  }
})