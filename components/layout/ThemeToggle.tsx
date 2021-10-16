import React, { useEffect, useState } from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from ".."

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.span
        key={resolvedTheme}
        initial={{ x: 40, y: 40, rotate: 40, opacity: 0 }}
        animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
        exit={{ x: -40, y: 40, rotate: -40, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Button
          onClick={e => {
            e.preventDefault()
            setTheme(isDark ? "light" : "dark")
          }}
        >
          {mounted && isDark ? <FaSun className="my-1" /> : <FaMoon className="my-1" />}
        </Button>
      </motion.span>
    </AnimatePresence>
  )
}

export default ThemeToggle
