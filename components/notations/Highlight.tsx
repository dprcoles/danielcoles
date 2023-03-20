"use client"

import React from "react"
import { RoughNotation } from "react-rough-notation"

interface HighlightProps {
  colour: string
  children: string
  order: number
  show?: boolean
}

const Highlight: React.FC<HighlightProps> = ({ colour, children, order, show }) => {
  const animationDuration = Math.floor(30 * children.length)

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={animationDuration}
      color={colour}
      order={order}
      show={show}
    >
      {children}
    </RoughNotation>
  )
}

export default Highlight
