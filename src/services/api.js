import axios from 'axios'
import store from '../store'

const api = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
})

api.interceptors.request.use(config => {
  const clientToken = store.getters.clientToken

  const customConfig = config

  if (clientToken) {
    customConfig.headers.Authorization = `Bearer ${clientToken}`
  }

  return customConfig
}, error => {
  return Promise.reject(error)
})

export default api
