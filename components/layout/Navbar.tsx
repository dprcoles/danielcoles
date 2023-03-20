import React from "react"
import Link from "next/link"
import NavbarLink from "./NavbarLink"
import Logo from "../Logo"
import ThemeToggle from "./ThemeToggle"
import { motion } from "framer-motion"
import { FADE_IN } from "@/utils/variants"

const Navbar: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate">
      <motion.div variants={FADE_IN} className="top-0 z-20 py-2 md:py-6 md:mb-6 px-2 md:px-0 ">
        <div className="container flex mx-auto lg:max-w-4xl items-center justify-between">
          <Link className="flex" href="/" scroll={false}>
            <Logo />
            <span className="px-2">|</span>
            <div className="font-bold">DANIEL COLES</div>
          </Link>
          <div className="flex space-x-4">
            <NavbarLink href="/projects">Projects</NavbarLink>
            <ThemeToggle initial={false} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Navbar
