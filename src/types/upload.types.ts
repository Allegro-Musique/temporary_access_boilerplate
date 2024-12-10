export interface UploadSettings {
  compression: 'high' | 'medium' | 'low' | 'none'
  visibility: 'private' | 'public' | 'password'
  expiryDays: number
  password?: string
  allowDownloads: boolean
  notifyOnDownload: boolean
  maxDownloads: number
}

export interface RecentUpload {
  id: number
  filename: string
  size: string
  uploadedAt: string
  downloads: number
  status: 'active' | 'expired'
}