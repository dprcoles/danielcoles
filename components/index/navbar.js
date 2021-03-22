import React from 'react'

export default function navbar() {
  return (
    <header className='[ Navbar ] container mx-auto p-5 text-dc-grey'>
      <nav className='flex justify-between'>
        <div className='[ Navbar-Content ][ Logo ]'>
          <a href='/'>
            <img
              src='/logo.svg'
              height='50px'
              width='50px'
              alt='Daniel Coles Logo'
            />
          </a>
        </div>
        <ul className='flex flex-row'>
          <li className='[ Navbar-Content ][ Dashboard-Link ] pr-4 pl-4 self-center text-center'>
            <a href='/dashboard' className='text-lg font-roboto font-bold'>
              Dashboard
            </a>
          </li>
          <li className='[ Navbar-Content ][ Projects-Link ] pr-4 pl-4 self-center text-center'>
            <a href='/projects' className='text-lg font-roboto font-bold'>
              Projects
            </a>
          </li>
          <li className='[ Navbar-Content ][ Experience-Link ] pr-4 pl-4 self-center text-center'>
            <a href='/experience' className='text-lg font-roboto font-bold'>
              Experience
            </a>
          </li>
          <li className='[ Navbar-Content ][ Tech-Link ] pr-4 pl-4 self-center text-center'>
            <a href='/tech' className='text-lg font-roboto font-bold'>
              Tech
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
