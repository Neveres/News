'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { useCallback, useState } from 'react'
import { Navbar, Sidebar } from '@/components'
import { navItems } from '@/config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'News',
  description: "See what's new in Taiwan",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarStatus] = useState(false)
  const onMenuButtonClick = useCallback(() => {
    setSidebarStatus(!isSidebarOpen)
  }, [isSidebarOpen])

  const closeSidbar = useCallback(() => {
    setSidebarStatus(false)
  }, [setSidebarStatus])

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-rows-header">
          <Navbar onMenuButtonClick={onMenuButtonClick} />

          <div className="grid md:grid-cols-sidebar">
            <Sidebar
              open={isSidebarOpen}
              closeSidbar={closeSidbar}
              navItems={navItems}
            />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
