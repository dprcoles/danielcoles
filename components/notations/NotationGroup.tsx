"use-client"

import React from "react"
import { RoughNotationGroup, RoughNotationGroupProps } from "react-rough-notation"

const NotationGroup: React.FC<RoughNotationGroupProps> = ({ children, ...props }) => {
  return <RoughNotationGroup {...props}>{children}</RoughNotationGroup>
}

export default NotationGroup
