import React, { useCallback } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export type NavItem = {
  label: string
  href: string
  icon: React.ReactNode
}

interface ISidebarProps {
  open: boolean
  closeSidbar(): void
  navItems: NavItem[]
}

const Sidebar: React.FC<ISidebarProps> = ({ open, closeSidbar, navItems }) => {
  return (
    <div
      className={classNames({
        'flex flex-col justify-between': true,
        'bg-black text-zinc-50': true,
        'md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed': true,
        'md:h-[calc(100vh_-_64px)] h-full w-[300px]': true,
        'transition-transform .3s ease-in-out md:translate-x-0': true,
        '-translate-x-full ': !open,
      })}
      onClick={closeSidbar}
    >
      <nav className="md:sticky top-0 md:top-16">
        <ul className="py-2 flex flex-col gap-2">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <li
                  className={classNames({
                    'text-indigo-100 hover:bg-indigo-900': true,
                    'flex gap-4 items-center ': true,
                    'transition-colors duration-300': true,
                    'rounded-md p-2 mx-2': true,
                  })}
                >
                  {item.icon} {item.label}
                </li>
              </Link>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
export default Sidebar
