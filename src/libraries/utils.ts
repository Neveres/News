import { baseURL, defaultParams } from 'src/settings'

export const getNews = async <TResponse>(
  category: string,
): Promise<TResponse> => {
  const params = new URLSearchParams({
    ...defaultParams,
    category,
  })
  const response = await fetch(`${baseURL}${params}`)
  console.log(category, `${baseURL}${params}`)

  if (!response.ok) {
    throw new Error('Fail to get news')
  }

  return response.json()
}
