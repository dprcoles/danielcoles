"use client"

import { AnimatePresence, motion } from "framer-motion"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
