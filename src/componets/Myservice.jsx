import React from 'react'
import image from '../asset/design.svg'
import image2 from '../asset/programing.svg'
const Myservice = () => {
  return (
    <div className=" md:px-12 p-4 max-w-screen-2x1 mx-auto mt-24">
        <div className="flex gradiantBg flex-col lg:flex-row justify-between items-start gap-10 rounded-lg p-10">
            <div className="lg:w-1/4">
                 <h3 className='text-3xl font-bold lg:w-1/2 mb3 text-white'>My Services</h3>
                 <p className=' text-base  text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique architecto nostrum dolores aliquam excepturi quidem.</p>
                </div>
                    <div className="lg:w-3/4">
                        
                    <div className='grid md:grid-cols-3 grid-cols-1 items-start md:gap-13 gap-8'>
                    <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 items-center flex justify-center 
                     hover:translate-y-4 transition-all duration-300 cursor-pointer">
                        <div className="text-center">
                            <img src={image} alt="my_image" className="w-45 h-35 " />
                            <h3 className='mt-4 text-lg md:text-2xl font-semibold text-white'>Web Designer</h3>
                            <p className='text-sm font-semibold text-slate-200 px-5 text-center'>
                            Figma, Adobe XD, Sketch
                            </p>

                        </div>
                     </div> 
                     <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90 shadow-3xl p-8 items-center flex justify-center 
                     hover:translate-y-4 transition-all duration-300 cursor-pointer mt-16">
                        <div className="text-center">
                            <img src={image2} alt="my_image" className="w-45 h-35 " />
                            <h3 className='mt-4 text-lg md:text-2xl font-semibold text-white'>  Frontend Developer</h3>
                            <p className='text-sm font-semibold text-slate-200 mt-1 px-5 text-center'>
                            HTML, CSS, JavaScript, React,TypeScript
                            </p>
                        </div>
                     </div> 
                     <div className="bg-[rgba(255,255,255,0.04)] rounded-[35px] h-90  shadow-3xl p-8 items-center flex justify-center 
                     hover:translate-y-4 transition-all duration-300 cursor-pointer">
                        <div className="text-center">
                            <img src={image2} alt="my_image" className="w-45 h-35 " />
                            <h3 className='mt-4 text-lg text-white md:text-2xl font-semibold'>  Backend Developer</h3>
                            <p className='text-sm font-semibold text-slate-200 mt-1 px-5 text-center'>
                            Node.js, Express, MongoDB, SQL
                            </p>
                        </div>
                     </div> 
                    </div>
                    
                   
                </div>
            </div>
       
    </div>
  )
}

export default Myservice