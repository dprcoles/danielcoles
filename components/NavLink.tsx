"use client"

import classNames from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import React, { useState } from "react"

import { FADE_IN } from "@/utils/variants"

import { Underline } from "./notations"

interface NavLinkProps {
  name: string
  link: string
  icon: React.ReactNode
  active?: boolean
  showText?: boolean
  external: boolean
}

const NavLink = ({ name, icon, link, active, showText, external }: NavLinkProps) => {
  const [showNotation, setShowNotation] = useState<boolean>(false)

  return (
    <Link href={link} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
      <motion.div tabIndex={-1} variants={FADE_IN}>
        <div
          className="group flex items-center"
          onMouseEnter={() => setShowNotation(true)}
          onMouseLeave={() => setShowNotation(false)}
        >
          <div
            className={classNames(
              "bg-gradient-to-tl from-zinc-700/80 to-violet-700/60 h-full flex items-center shadow-lg rounded-lg p-1",
              "transition-all duration-300 ease-out group-hover:scale-[1.05] group-hover:rounded-[10px] group-hover:shadow-violet-500/80",
              active &&
                "ring-2 ring-violet-500/30 ring-offset-1 ring-offset-black/5 shadow-violet-500/80"
            )}
          >
            <div className="transition delay-100 duration-300 ease-out group-hover:scale-105">
              {icon}
            </div>
          </div>
          {showText && (
            <div className="ml-2 font-bold hidden md:block">
              <Underline colour="rgb(139 92 246)" show={showNotation} duration={500}>
                {name}
              </Underline>
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  )
}

export default NavLink
