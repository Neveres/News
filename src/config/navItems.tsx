import React from 'react'
import {
  RocketLaunchIcon,
  BeakerIcon,
  FireIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'
import { NavItem } from '@/components'

export const navItems: NavItem[] = [
  {
    label: 'Breaking News',
    href: '/',
    icon: <FireIcon className="w-6 h-6" />,
  },
  {
    label: 'Business',
    href: '/business',
    icon: <BriefcaseIcon className="w-6 h-6" />,
  },
  {
    label: 'Science',
    href: '/science',
    icon: <BeakerIcon className="w-6 h-6" />,
  },
  {
    label: 'Technology',
    href: '/technology',
    icon: <RocketLaunchIcon className="w-6 h-6" />,
  },
]

export const pathToLabel = (() => {
  const map = new Map()
  navItems.forEach(({ label, href }) => {
    map.set(href, label)
  })

  return map
})()
