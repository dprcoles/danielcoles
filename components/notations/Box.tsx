"use client"

import React from "react"
import { RoughNotation } from "react-rough-notation"

interface BoxProps {
  colour: string
  children: React.ReactNode
  order: number
  show?: boolean
  duration: number
}

const Box: React.FC<BoxProps> = ({ colour, children, order, show, duration }) => {
  return (
    <RoughNotation
      type="box"
      animationDuration={duration}
      color={colour}
      strokeWidth={2}
      padding={[8, 8]}
      order={order}
      show={show}
    >
      {children}
    </RoughNotation>
  )
}

export default Box
