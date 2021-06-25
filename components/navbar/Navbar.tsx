import React, { useState } from 'react'
import NextLink from 'next/link'
import { FaSun, FaMoon, FaBars } from 'react-icons/fa'
import Logo from './Logo'

interface NavbarProps {
  theme: string | undefined
  setTheme: (theme: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ theme, setTheme }) => {
  const [menuIsActive, setMenuIsActive] = useState(false)

  return (
    <header
      role="banner"
      className="[ SiteHeader ] flex flex-wrap self-center container mx-auto p-5 text-dc-grey dark:text-white bg-white dark:bg-dc-grey md:bg-transparent md:dark:bg-transparent shadow-md md:shadow-none border-b-2 md:border-none dark:border-white border-dc-grey"
    >
      <button
        className="[ Navbar__Item ][ Hamburger ] md:hidden self-center"
        type="button"
        aria-label="Navbar Menu"
        title="Navbar Menu"
        onClick={() => setMenuIsActive(!menuIsActive)}
      >
        <FaBars />
      </button>
      <div className="[ Navbar__Item ][ Logo ] mx-auto md:mr-auto md:ml-0">
        <a href="/" aria-label="Daniel Coles Logo" title="Daniel Coles Logo">
          <Logo />
        </a>
      </div>
      <button
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        type="button"
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="self-center p-2 md:hidden"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
      <div
        className={`[ Navbar ] md:flex w-full md:w-auto hidden ${
          menuIsActive ? 'active pt-8' : ''
        }`}
      >
        <nav>
          <ul
            id="NavbarMenu"
            className="[ Navbar__Menu ] self-center text-dc-grey dark:text-white md:flex md:flex-row"
          >
            <li className="[ Navbar__Item ][ Dashboard__Link ] md:px-4 py-2 self-center text-left md:text-center">
              <NextLink href="/dashboard">
                <a
                  className="[ Navbar__Text ] text-base md:text-lg font-bold"
                  aria-label="Go to Dashboard"
                >
                  Dashboard
                </a>
              </NextLink>
            </li>
            <li className="[ Navbar__Item ][ Projects__Link ] md:px-4 py-2 self-center text-left md:text-center">
              <NextLink href="/projects">
                <a
                  className="[ Navbar__Text ] text-base md:text-lg font-bold"
                  aria-label="Go to Projects"
                >
                  Projects
                </a>
              </NextLink>
            </li>
            <li className="[ Navbar__Item ][ Experience__Link ] md:px-4 py-2 self-center text-left md:text-center">
              <NextLink href="/experience">
                <a
                  className="[ Navbar__Text ] text-base md:text-lg font-bold"
                  aria-label="Go to Experience"
                >
                  Experience
                </a>
              </NextLink>
            </li>
            <li className="[ Navbar__Item ][ Tech__Link ] md:px-4 py-2 self-center text-left md:text-center">
              <NextLink href="/tech">
                <a
                  className="[ Navbar__Text ] text-base md:text-lg font-bold"
                  aria-label="Go to Tech"
                >
                  Tech
                </a>
              </NextLink>
            </li>
            <li className="[ Navbar__Item ][ Tech__Link ] md:px-4 py-2 self-center text-left md:text-center">
              <button
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                type="button"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                className="self-center p-2 hidden md:flex"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
