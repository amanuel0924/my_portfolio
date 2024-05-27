import React from 'react'
import { RiProfileFill } from "react-icons/ri"

const Banner = ({banner,heading,subheading,btn,anch}) => {
  return (
    <div className='gradiantBg  rounded-xl rounded-br-[80px] md:p-9 px-4 py-9 ' >
       <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-9 '>
       <div>
           <img src={banner} alt="picture1" className='"w-85 h-80 rounded-full border-4 ' /> 
        </div>
        <div className='md:w-3/5'>
        <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
        <p className='text-[#EBEBEB] text-2xl mb-8'>
        {subheading}
        </p>
       {btn&& <button className=' btnPrimery'>{btn}</button>}
        {anch&&<a   href="/resume.pdf"
              download={true}  className=' btnPrimery flex '> <span><RiProfileFill size={25} /></span>{anch}</a>}
        </div>
       </div>
       </div>
  )
}

export default Banner