import React, { useState, useEffect } from "react"
import NextLink from "next/link"
import NavbarLink from "./NavbarLink"
import Logo from "../Logo"
import ThemeToggle from "./ThemeToggle"

const Navbar: React.FC = () => {
  return (
    <div className="top-0 z-20 py-2 md:py-6 md:mb-6 px-2 md:px-0 ">
      <div className="container mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <NextLink href="/" scroll={false}>
          <a className="flex">
            <Logo />
            <span className="px-2">|</span>
            <div className="font-bold">DANIEL COLES</div>
          </a>
        </NextLink>
        <div className="flex space-x-4">
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/spotify">Spotify</NavbarLink>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
