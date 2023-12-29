'use client'

import React, { useEffect, useState } from 'react'
import { Toggle } from '../ui/toggle'
import { Circle, CircleDot, Command, Moon, Sun, Terminal } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Topbar() {
    const [ isDarkMode, setIsDarkMode ] = useState<boolean>(true)
    const { setTheme, theme } = useTheme();

    useEffect(() => {
      setTheme(isDarkMode ? 'dark' : 'light')
    }, [isDarkMode])
       
  return (
    <div className='w-full h-16 px-6 justify-between items-center flex'>
        <div className='flex gap-4'>
          <Terminal size={32} />
        </div>
        <Toggle pressed={isDarkMode} onPressedChange={(pressed) => setIsDarkMode(pressed)} variant="outline" aria-label="Toggle italic">
            { isDarkMode ? <Sun color='#aaa' /> : <Moon color='#aaa' />}
        </Toggle>
    </div>
  )
}
