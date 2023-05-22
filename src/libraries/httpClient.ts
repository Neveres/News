import axios from 'axios'
import { baseURL, defaultParams } from 'src/settings'

axios.defaults.baseURL = baseURL
axios.defaults.params = {
  ...axios.defaults.params,
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  ...defaultParams,
}

export const httpClient = axios
