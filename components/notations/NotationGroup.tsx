"use-client"

import React from "react"
import { RoughNotationGroup, RoughNotationGroupProps } from "react-rough-notation"

const NotationGroup = ({ children, ...props }: RoughNotationGroupProps) => {
  return <RoughNotationGroup {...props}>{children}</RoughNotationGroup>
}

export default NotationGroup
