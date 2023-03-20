"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <ThemeProvider attribute="class">
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      </ThemeProvider>
    </AnimatePresence>
  )
}
