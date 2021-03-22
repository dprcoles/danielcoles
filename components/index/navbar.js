import React from 'react'

export default function navbar() {
  return (
    <header role='banner' className='[ SiteHeader ]'>
      <nav className='[ Navbar ] flex justify-between container mx-auto p-5 text-dc-grey'>
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
          <li className='[ Navbar__Item ][ Dashboard__Link ] pr-4 pl-4 self-center text-center'>
            <a
              href='/dashboard'
              className='[ Navbar__Text ] text-lg font-roboto font-bold'
            >
              Dashboard
            </a>
          </li>
          <li className='[ Navbar__Item ][ Projects__Link ] pr-4 pl-4 self-center text-center'>
            <a
              href='/projects'
              className='[ Navbar__Text ] text-lg font-roboto font-bold'
            >
              Projects
            </a>
          </li>
          <li className='[ Navbar__Item ][ Experience__Link ] pr-4 pl-4 self-center text-center'>
            <a
              href='/experience'
              className='[ Navbar__Text ] text-lg font-roboto font-bold'
            >
              Experience
            </a>
          </li>
          <li className='[ Navbar__Item ][ Tech__Link ] pr-4 pl-4 self-center text-center'>
            <a
              href='/tech'
              className='[ Navbar__Text ] text-lg font-roboto font-bold'
            >
              Tech
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
