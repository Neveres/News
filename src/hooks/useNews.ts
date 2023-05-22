import { useState, useEffect, useCallback, useMemo } from 'react'
import { httpClient } from 'src/libraries'

type News = {
  author: string
  content?: string
  description?: string
  publishedAt: string
  source: { id: string; name: string }
  title: string
  url: string
  urlToImage?: string
}

export const useNews = (category?: string) => {
  const [news, setNews] = useState<News[]>([])

  useEffect(() => {
    httpClient
      .get('', {
        params: {
          category: category ? category : undefined,
        },
      })
      .then((response) => {
        const {
          data: { articles },
        } = response

        setNews(articles)
      })
  }, [category])

  return { news }
}
