"use client"

import React from "react"
import { RoughNotation } from "react-rough-notation"

interface BracketProps {
  colour: string
  children: string
  order: number
  show?: boolean
  duration: number
}

const Bracket = ({ colour, children, order, show, duration }: BracketProps) => {
  return (
    <RoughNotation
      type="bracket"
      animationDuration={duration}
      color={colour}
      strokeWidth={2}
      brackets={["left", "right"]}
      order={order}
      show={show}
    >
      {children}
    </RoughNotation>
  )
}

export default Bracket
