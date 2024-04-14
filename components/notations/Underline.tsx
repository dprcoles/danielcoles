"use client"

import React, { PropsWithChildren } from "react"
import { RoughNotation } from "react-rough-notation"

interface UnderlineProps {
  colour: string
  order?: number
  show?: boolean
  duration: number
}

const Underline = ({
  colour,
  children,
  order,
  show,
  duration,
}: PropsWithChildren<UnderlineProps>) => {
  return (
    <RoughNotation
      type="underline"
      multiline={true}
      padding={[0, 2]}
      iterations={2}
      animationDuration={duration}
      color={colour}
      strokeWidth={2}
      order={order}
      show={show}
    >
      {children}
    </RoughNotation>
  )
}

export default Underline
