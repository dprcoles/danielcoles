"use client"

import React, { PropsWithChildren } from "react"
import { RoughNotationGroup } from "react-rough-notation"
import { motion } from "framer-motion"
import { FADE_IN } from "@/utils/variants"
import { Underline } from "../notations"
import { useTheme } from "next-themes"
import { shuffledColours } from "@/utils/helpers"

interface PageTitleProps {}

const PageTitle: React.FC<PropsWithChildren<PageTitleProps>> = ({ children }) => {
  const { resolvedTheme } = useTheme()
  const { underline } = shuffledColours(resolvedTheme)

  return (
    <RoughNotationGroup show>
      <motion.div variants={FADE_IN} className="text-4xl font-extrabold">
        <Underline colour={underline[0]} order={1} duration={500}>
          {children}
        </Underline>
      </motion.div>
    </RoughNotationGroup>
  )
}

export default PageTitle
