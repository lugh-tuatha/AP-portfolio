'use client'
import { useTheme } from 'next-themes'
import React from 'react'

function Header() {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>

        <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
          {resolvedTheme === 'dark' ? 'light' : 'dark'}
        </button>
      </nav>
    </header>
  )
}

export default Header