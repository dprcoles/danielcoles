import React from "react"
import NextLink from "next/link"

interface NavbarLinkProps {
  children: React.ReactNode
  href: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, href }) => {
  return (
    <NextLink href={href} scroll={false}>
      <a className="md:px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
        {children}
      </a>
    </NextLink>
  )
}

export default NavbarLink
