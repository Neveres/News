'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import { useNews } from 'src/hooks'
import { pathToLabel } from 'src/settings'

export default function Home() {
  const pathname = usePathname()
  const { news } = useNews(pathname)

  const News = useMemo(
    () =>
      news.map(({ source: { name }, title, url, publishedAt }) => {
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
      }),
    [news],
  )

  return (
    <div className="md:max-w-[calc(100vw-300px)] px-[20px]">
      <h1 className="text-xl mb-2">{pathToLabel.get(pathname)}</h1>
      <div>{News}</div>
    </div>
  )
}
