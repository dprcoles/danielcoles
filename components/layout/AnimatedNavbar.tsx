import React from "react"
import NextLink from "next/link"
import NavbarLink from "./NavbarLink"
import AnimatedLogo from "../AnimatedLogo"
import ThemeToggle from "./ThemeToggle"
import { motion } from "framer-motion"
import { FADE_DOWN, STAGGER } from "@/utils/variants"

const AnimatedNavbar: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <div className="top-0 z-20 py-2 md:py-6 md:mb-6 px-2 md:px-0 ">
        <div className="container flex mx-auto lg:max-w-4xl items-center justify-between">
          <NextLink href="/" scroll={false}>
            <a className="flex">
              <AnimatedLogo />
              <motion.span variants={FADE_DOWN} className="px-2">
                |
              </motion.span>
              <motion.div variants={FADE_DOWN} className="font-bold">
                DANIEL COLES
              </motion.div>
            </a>
          </NextLink>
          <motion.div variants={STAGGER} className="flex space-x-4">
            <NavbarLink href="/projects">
              <motion.div variants={FADE_DOWN} key="projects">
                Projects
              </motion.div>
            </NavbarLink>
            {/* <NavbarLink href="/spotify">
              <motion.div variants={FADE_DOWN} key="spotify">
                Spotify
              </motion.div>
            </NavbarLink> */}
            <ThemeToggle initial />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default AnimatedNavbar
