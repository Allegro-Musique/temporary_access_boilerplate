export interface ValidationResponse {
  success: boolean
  message?: string
  data?: string
}

export interface ApiError {
  message: string
  status?: number
}