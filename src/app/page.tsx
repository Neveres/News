'use client'
import Image from 'next/image'
import { useNews } from 'src/hooks'

export default function Home() {
  const { news } = useNews()

  return <div>{JSON.stringify(news)}</div>
}
