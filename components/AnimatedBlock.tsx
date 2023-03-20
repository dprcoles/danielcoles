"use client"

import React from "react"
import { HTMLMotionProps, motion } from "framer-motion"

interface AnimatedBlockProps extends HTMLMotionProps<"div"> {}

const AnimatedBlock: React.FC<AnimatedBlockProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default AnimatedBlock
