import NextLink from 'next/link'
import { FaSun, FaMoon } from 'react-icons/fa'
import Logo from './logo'

export default function navbar({ theme, setTheme }) {
  return (
    <header role='banner' className='[ SiteHeader ]'>
      <nav className='[ Navbar ] flex justify-between self-center container mx-auto p-5 text-dc-grey dark:text-white'>
        <div className='[ Navbar__Item ][ Logo ]'>
          <a href='/' aria-label='Daniel Coles Logo' title='Daniel Coles Logo'>
            <Logo />
          </a>
        </div>
        <ul className='flex flex-row'>
          <li className='[ Navbar__Item ][ Dashboard__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/dashboard'>
              <a
                className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'
                aria-label='Go to Dashboard'
                label='Go to Dashboard'
              >
                Dashboard
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Projects__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/projects'>
              <a
                className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'
                aria-label='Go to Dashboard'
                label='Go to Projects'
              >
                Projects
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Experience__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/experience'>
              <a
                className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'
                aria-label='Go to Dashboard'
                label='Go to Experience'
              >
                Experience
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Tech__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/tech'>
              <a
                className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'
                aria-label='Go to Dashboard'
                label='Go to Tech'
              >
                Tech
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Tech__Link ] md:px-4 px-2 self-center text-center'>
            <button
              aria-label={`Switch to ${
                theme === 'dark' ? 'light' : 'dark'
              } mode`}
              type='button'
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className='self-center p-2'
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
