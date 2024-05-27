import React from 'react'
import Logo from './../asset/code.png'
import { MdLightMode,MdOutlineNightlight } from "react-icons/md";
import { FaBars, FaXmark } from "react-icons/fa6"
import { useState } from 'react';

const Nav = ({dark,handleDark}) => {
   const navItems = [
    {
      id: 1,
      name: "Home",
      href: "/home",
    },
    {
      id: 2,
      name: "About",
      href: "/about",
    },
    {
      id: 3,
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      id: 4,
      name: "Experience",
      href: "/experience",
    },
    ]

    const [menu, setMenu] = useState(true)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <>
    <nav className='fixedNav p-4 bg-white md:px-14 max-w-screen-2xl mx-auto text-primary  fixed top-0 right-0 left-0 dark:bg-gradient-to-b from-black to-gray-800'>
        <div className=' text-lg font-medium container mx-auto flex justify-between items-center'>
            <div className='flex space-x-14'>
                <a href="#home" className='text-2xl flex items-center font-semibold space-x-3 text text-primary dark:text-secondary '>
                    <img src={Logo} alt="logo" className="w-10 inline-block items-center" />
                    <span className="">Amanuel</span>
                </a>
                <ul className='md:flex space-x-14 items-center hidden dark:text-secondary '>
                    {
                        navItems.map(({id, name, href}) => (
                            <a key={id} href={href} className=' block hover:text-gray-300'>{name}</a>
                        ))
                    }
                </ul>
               
                    </div>
                    <div className='space-x-4 items-center flex '>
                    <button className="focus:outline-none" onClick={handleDark}>
              {dark &&<MdLightMode size={24} className='dark:text-secondary' /> }
                {!dark && <MdOutlineNightlight size={24} className='dark:text-secondary' />}
            </button>
                    <button
            onClick={handleMenu}
            id="hamMenu"
            className="  md:hidden focus:outline-none"
          >
            {menu ? <FaXmark size={28} className='text-primary dark:text-secondary' /> : <FaBars size={28} className='text-primary dark:text-secondary' />}
          </button>
                <button className='hidden md:inline-block bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>
                    contact
                </button>
            </div>
        </div>
    </nav>

    <div className={`md:hidden space-y-4 px-4 pt-24 pb-5 bg-secondary ${menu?'block fixed top-0 right-0 left-0':'hidden'}`}>
    {
           navItems.map(({id, name, href}) => (
            <a key={id} href={href} className=' block hover:text-gray-300'>{name}</a>
        ))
        }

    </div>

    </>
  )
}

export default Nav