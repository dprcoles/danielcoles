"use client"

import classNames from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

import { FADE_IN } from "@/utils/variants"

interface HeaderNavLinkProps {
  name: string
  link: string
  icon: React.ReactNode
  active?: boolean
}

const HeaderNavLink = ({ name, icon, link, active }: HeaderNavLinkProps) => {
  return (
    <Link href={link} className="group">
      <motion.div
        variants={FADE_IN}
        className={classNames(
          "h-full shadow-lg shadow-violet-500/5 rounded-lg p-2",
          "transition-all duration-300 ease-out group-hocus:scale-[1.05] group-hocus:rounded-[10px] group-hocus:shadow-violet-500/50 group-hocus:bg-violet-500/10",
          active &&
            "ring-2 ring-violet-500/20 ring-offset-1 ring-offset-black/5 bg-violet-500/5 shadow-violet-500/50"
        )}
      >
        <div className="flex items-center transition delay-100 duration-300 ease-out group-hocus:scale-105">
          {icon}
          <div className="ml-2 font-bold">{name}</div>
        </div>
      </motion.div>
    </Link>
  )
}

export default HeaderNavLink
