import React, { useState } from "react"
import { Link } from "react-scroll"
import { FaBars, FaXmark } from "react-icons/fa6"
import { FaCode, FaSun, FaRegMoon } from "react-icons/fa"
const Hero = ({ dark, handleDark }) => {
  const [menu, setMenu] = useState(true)

  const handleMenu = () => {
    setMenu(!menu)
  }

  return (
    <section className=" dark:bg-black bg-white border-b-2 shadow-lg ">
      <div className=" container max-w-6xl mx-auto py-12 px-6  ">
        <nav className="flex items-center justify-between font-bold dark:text-white text-black">
          <h1 className="text-4xl  font-logo  flex">
            <FaCode className="text-blue-800 " size={30} />
            <span className=" md:flex">Amanuel</span>
          </h1>
          <div className=" hidden h-10 font-OpenSans md:flex md:space-x-8 ">
            <div className="group">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
              <div className=" mx-2 group-hover:border-b dark:group-hover:border-blue-50 group-hover:border-black"></div>
            </div>
            <div className="group">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
              <div className=" mx-2 group-hover:border-b dark:group-hover:border-blue-50 group-hover:border-black"></div>
            </div>
            <div className="group">
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Poroject
              </Link>
              <div className=" mx-2 group-hover:border-b dark:group-hover:border-blue-50 group-hover:border-black"></div>
            </div>
            <div className="group">
              <Link
                to="experiance"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Experience
              </Link>
              <div className=" mx-2 group-hover:border-b dark:group-hover:border-blue-50 group-hover:border-black"></div>
            </div>
            <div className="group">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
              <div className=" mx-2 group-hover:border-b dark:group-hover:border-blue-50 group-hover:border-black"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="focus:outline-none" onClick={() => handleDark()}>
              {dark ? <FaSun size={24} /> : <FaRegMoon size={24} />}
            </button>
          </div>
          <button
            onClick={handleMenu}
            id="hamMenu"
            className=" duration-200 z-40 block md:hidden focus:outline-none"
          >
            {menu ? <FaBars size={32} /> : <FaXmark size={32} />}
          </button>
        </nav>
        {!menu && (
          <div className="dark:text-white text-black text-lg  items-center backdrop-blur-md flex  flex-col  pt-32 space-y-6 w-full min-h-screen   z-30 absolute inset-0  transition-all duration-200 md:hidden ">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="  duration-200 hover:scale-105 hover:underline"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" duration-200 hover:scale-105 hover:underline"
            >
              About
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" duration-200 hover:scale-105 hover:underline"
            >
              Poroject
            </Link>
            <Link
              to="experiance"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" duration-200 hover:scale-105 hover:underline"
            >
              Experience
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className=" duration-200 hover:scale-105 hover:underline"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero
