import NextLink from 'next/link'

export default function navbar() {
  return (
    <header role='banner' className='[ SiteHeader ]'>
      <nav className='[ Navbar ] flex justify-between self-center container mx-auto p-5 text-dc-grey'>
        <div className='[ Navbar__Item ][ Logo ]'>
          <a href='/'>
            <img
              src='/logo.svg'
              height='50px'
              width='50px'
              alt='Daniel Coles Logo'
              className='[ Navbar__Text ]'
            />
          </a>
        </div>
        <ul className='flex flex-row'>
          <li className='[ Navbar__Item ][ Dashboard__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/dashboard'>
              <a className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'>
                Dashboard
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Projects__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/projects'>
              <a className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'>
                Projects
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Experience__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/experience'>
              <a className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'>
                Experience
              </a>
            </NextLink>
          </li>
          <li className='[ Navbar__Item ][ Tech__Link ] md:px-4 px-2 self-center text-center'>
            <NextLink href='/tech'>
              <a className='[ Navbar__Text ] text-base md:text-lg font-roboto font-bold'>
                Tech
              </a>
            </NextLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
