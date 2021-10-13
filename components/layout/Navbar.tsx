import React from "react"
import { FaSun, FaMoon } from "react-icons/fa"
import { useTheme } from "next-themes"
import NextLink from "next/link"
import NavbarLink from "./NavbarLink"
import Logo from "../Logo"
import Button from "../Button"

const Navbar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="top-0 z-20 py-2 md:py-6 md:mb-6 px-2 md:px-0 ">
      <div className="container mx-auto lg:max-w-4xl md:flex md:items-center md:justify-between">
        <NextLink href="/">
          <a className="flex">
            <Logo />
            <span className="px-2">|</span>
            <div className="font-bold">DANIEL COLES</div>
          </a>
        </NextLink>
        <div className="flex space-x-4">
          <NavbarLink href="/projects">Projects</NavbarLink>
          <NavbarLink href="/spotify">Spotify</NavbarLink>
          <span className="ml-auto">
            <Button
              onClick={e => {
                e.preventDefault()
                setTheme(isDark ? "light" : "dark")
              }}
            >
              {isDark ? <FaSun className="my-1" /> : <FaMoon className="my-1" />}
            </Button>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
