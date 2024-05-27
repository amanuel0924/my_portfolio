import React from 'react'
import { FaGithub ,FaNodeJs, FaReact, FaCss3, FaHtml5 } from "react-icons/fa"
import { SiMongodb,SiExpress,SiTypescript,SiJavascript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const LogoList = () => {
  return (
    <div className="w-full draggable">
    <div className="container flex flex-col items-center gap-8 mx-auto my-32">
      <p className=" text-2xl font-bold leading-7 text-center text-primary dark:text-secondary">
      Experienced in
      </p>
      <div className=" mt-10 flex  flex-wrap items-center justify-center w-full gap-6 lg:gap-0 lg:flex-nowrap lg:justify-between">
        <span >
          <FaReact  size={44} className=' text-third'  />
        </span>
        <span>
          <SiTypescript size={44} className=' text-third' />
        </span>
        <span>
          <SiJavascript size={44} className=' text-third' />
        </span>
        <span>
          <FaHtml5 size={44} className=' text-third' /> 
        </span>
        <span>
          <FaCss3 size={44} className=' text-third' /> 
        </span>
        <span>
          <FaGithub size={44} className=' text-third' /> 
        </span>
        <span>
          <FaNodeJs size={44} className=' text-third' /> 
        </span>
        <span>
          < SiExpress size={44} className=' text-third' /> 
        </span>
        <span>
          < SiMongodb size={44} className=' text-third' /> 
        </span>
        <span>
          < BiLogoPostgresql size={44} className=' text-third' />
        </span>
      </div>
    </div>
  </div>
  )
}

export default LogoList