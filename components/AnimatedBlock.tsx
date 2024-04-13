"use client"

import { HTMLMotionProps, motion } from "framer-motion"
import React from "react"

interface AnimatedBlockProps extends HTMLMotionProps<"div"> {}

const AnimatedBlock = ({ children, ...props }: AnimatedBlockProps) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default AnimatedBlock
