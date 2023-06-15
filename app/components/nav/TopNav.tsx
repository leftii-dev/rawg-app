'use client'
import Link from 'next/link'
import NavLink from './NavLink'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TfiClose } from 'react-icons/tfi'
import { useState } from 'react'

export default function TopNav() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return(
    <nav className='flex flex-col bg-primary-200 justify-center md:flex-row md:justify-between'>
      <div id='top-container' className='flex flex-row justify-between items-center p-3'>
        <div id='rawg-home' className='flex flex-grow'>
          <Link href='/' className=''>
            <h1 className='transition-transform ease-in-out font-title text-title text-4xl hover:scale-105'>
              RAWG API
            </h1>
          </Link>
        </div>
        
        <div id='toggle' className='flex ml-auto md:hidden'>
          {
            toggleMenu
            ?
            <TfiClose 
              onClick={() => setToggleMenu(false)}
              className='transition-colors ease-linear text-2xl text-body hover:cursor-pointer hover:text-secondary-100'
            />
            :
            <RxHamburgerMenu 
              onClick={() => setToggleMenu(true)}
              className='transition-colors ease-linear text-2xl text-body hover:cursor-pointer hover:text-secondary-100'
            />
          }
        </div>
      </div>

      <div id='links' className={`${toggleMenu ? 'flex' : 'hidden'} bg-primary-300 md:bg-primary-200 drop-shadow-lg md:drop-shadow-none md:flex md:ml-auto md:p-3`}>
        {/* md: */}
        <ul id='navlink-list' 
            className='flex items-center drop-shadow-lg  text-center w-full'>
          <li className='transition-colors ease-linear border-b border-secondary-200 w-full py-3  hover:bg-secondary-500
                        md:border-none '>
            <NavLink
              href='/games'
              title='Top Games'
            />
          </li>
        </ul>

        {/* sm: */}
      </div>
    </nav>
  )
}