import React from "react"
import Link from "next/link"

interface NavbarLinkProps {
  children: React.ReactNode
  href: string
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, href }) => {
  return (
    <Link
      href={href}
      scroll={false}
      className="md:px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
    >
      {children}
    </Link>
  )
}

export default NavbarLink
