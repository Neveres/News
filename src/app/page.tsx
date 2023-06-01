import { getNews } from 'src/libraries'
import { pathToLabel, navItems } from 'src/settings'

type Article = {
  author: string
  content?: string
  description?: string
  publishedAt: string
  source: { id: string; name: string }
  title: string
  url: string
  urlToImage?: string
}

export default async function Home({ pathname = navItems[0].href }) {
  const { articles } = await getNews<{
    articles: Article[]
  }>(pathname)

  const News = articles.map(({ source: { name }, title, url, publishedAt }) => {
    return (
      <a
        key={url}
        href={url}
        target="_blank"
        className="block mb-4 pb-2 border-b-2 border-blue-900"
      >
        <div className="text-base">{title}</div>
        <div className="text-sm">
          <span>{name}, </span>
          <span>{new Date(publishedAt).toLocaleDateString('zh-TW')}</span>
        </div>
      </a>
    )
  })

  return (
    <div className="md:max-w-[calc(100vw-300px)] px-[20px]">
      <h1 className="text-xl mb-2">{pathToLabel.get(pathname)}</h1>
      <div>{News}</div>
    </div>
  )
}
