import { baseURL, defaultParams } from 'src/settings'

export const getNews = async <TResponse>(
  category: string,
): Promise<TResponse> => {
  const params = new URLSearchParams({
    ...defaultParams,
    category: category.slice(1),
  })
  const response = await fetch(`${baseURL}${params}`)

  if (!response.ok) {
    throw new Error('Fail to get news')
  }

  return response.json()
}
