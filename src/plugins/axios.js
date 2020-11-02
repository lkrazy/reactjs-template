import axios from 'axios'
import isEmpty from 'lodash/isEmpty'
import localStorageService from '@/utils/localStorageService'

const restClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

restClient.interceptors.request.use((config) => {
  const token = localStorageService.getToken()
  if (!isEmpty(token)) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

restClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // push login
    }
    return Promise.reject(error)
  }
)

export default restClient
