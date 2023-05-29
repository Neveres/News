export const baseURL = 'https://newsapi.org/v2/top-headlines?'

export const defaultParams = {
  country: 'tw',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
}
