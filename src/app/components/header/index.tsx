'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import * as Md from "react-icons/md";

function Header() {
  const { theme, setTheme } = useTheme()
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>

        <button>
          {theme === 'dark' ? (
            <Md.MdLightMode
              onClick={() => setTheme('light')}
              className='text-2xl cursor-pointer' />
          ) : (
            <Md.MdDarkMode
              onClick={() => setTheme('dark')}
              className='text-2xl cursor-pointer' />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header