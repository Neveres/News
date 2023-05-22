import React from 'react'
import { Bars3Icon, NewspaperIcon } from '@heroicons/react/24/outline'

import classNames from 'classnames'

interface INavbarProps {
  onMenuButtonClick(): void
}

const Navbar: React.FC<INavbarProps> = ({ onMenuButtonClick }) => {
  return (
    <nav
      className={classNames({
        'bg-black text-zinc-500': true,
        'flex items-center': true,
        'w-full fixed z-10 px-4 shadow-sm h-16': true,
      })}
    >
      <div className="font-bold text-lg">
        <NewspaperIcon className="h-6 w-6 inline-block mr-2" />
        See what&apos;s new in Taiwan
      </div>
      <div className="flex-grow"></div>
      <button className="md:hidden" onClick={onMenuButtonClick}>
        <Bars3Icon className="h-6 w-6" />
      </button>
    </nav>
  )
}

export default Navbar
