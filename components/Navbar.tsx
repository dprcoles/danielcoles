"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

import { links } from "@/lib/info"
import { FADE_DOWN, STAGGER } from "@/utils/variants"

import AnimatedBlock from "./AnimatedBlock"
import AnimatedLogo from "./AnimatedLogo"
import NavLink from "./NavLink"

const Navbar: React.FC = () => {
  const pathname = usePathname()

  return (
    <div className="fixed top-6 z-30 grid w-full grid-cols-[1fr,min(896px,100%),1fr] px-4 mx-auto">
      <motion.div
        variants={FADE_DOWN}
        className="rounded-lg col-start-2 -mx-px bg-zinc-900/90 p-4 will-change-transform backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[5%]"
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="mr-auto">
            <AnimatedLogo />
          </Link>
          <AnimatedBlock variants={STAGGER} className="flex gap-4">
            {links
              .filter(x => x.link !== "/")
              .map(x => (
                <NavLink key={x.name} {...x} showText={!x.external} active={pathname === x.link} />
              ))}
          </AnimatedBlock>
        </div>
      </motion.div>
    </div>
  )
}

export default Navbar
