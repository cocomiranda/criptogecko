'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="p-1">
      {/* Display Sun icon for light theme, Moon icon for dark theme */}
      {theme === 'light' ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

