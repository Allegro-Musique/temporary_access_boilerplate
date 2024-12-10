export interface ValidationResponse {
  valid: boolean
  message?: string
  token?: string
}

export interface ApiError {
  message: string
  status?: number
}