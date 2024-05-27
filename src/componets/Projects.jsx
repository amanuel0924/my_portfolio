import React from 'react';
import tmovie from "./../asset/portfolio/t-movie.png"
import procafe from "./../asset/portfolio/procafe.png"
import fylo from "./../asset/portfolio/fylo2.png"

const Projets = () => {
    const picArray = [
        {
          id: 1,
          src: tmovie,
          title: "T-Mmovies",
          git: "https://github.com/amanuel0924/T-Movie",
          demo: "https://frontend-delta-self-97.vercel.app/",
          desc:'T-Movie is a responsive web app built with React and Material UI for a sleek dashboard. It features dynamic charts powered by Recharts. The backend uses Node.js, Prisma ORM, and PostgreSQL for robust data management. Real-time updates are enabled via Socket.IO, ensuring a seamless and interactive user experience.'
        },
        {
          id: 2,
          src: procafe,
          title: "Pro Cafe",
          git: "https://github.com/aman7ph/p_cafe",
          demo: "https://p-cafe.onrender.com",
          desc:'Professor Cafe is a web app built with React and Bootstrap for a clean and responsive interface. The backend is powered by Node.js and Express, with MongoDB for efficient data storage and management.'
        },
        {
          id: 3,
          src: fylo,
          title: "Multi file uploader",
          git: "https://github.com/amanuel0924/multiFileUploader",
          demo: "https://multi-file-uploader-eta.vercel.app/",
          desc:'The Multi File Uploader is built with TypeScript, React, and Tailwind CSS for a modern and responsive front end. The backend is powered by Node.js and Express, using Sequelize ORM for efficient data handling with a MySQL database. '
        },
      ]
  return (
    <div className="relative flex flex-col min-w-0 break-words shadow-soft-xl space-y-6 rounded-2xl bg-clip-border  md:px-12 p-4 max-w-screen-2x1 mx-auto mt-24  ">
    <div className='w-full flex justify-center items-center'>
    <h3 className='text-4xl p-4 text-primary dark:text-secondary font-bold lg:w-1/2 mb-3 text-center '>Projects</h3>  
        </div> 
     {
            picArray.map(({id, src, git, demo, title,desc}) => (
                <div key={id} className=" flex-auto  p-4 shadow-3xl  rounded-2xl   ">
        <div className="flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-1/2 lg:flex-none ">
            <div className="flex flex-col h-full">
              <h5 className=" mt-7 font-bold text-lg dark:text-secondary ">{title}</h5>
              <p className="mb-12  leading-relaxed dark:text-third">
               {desc}
              </p>
             <div className='flex flex-row space-x-4 '>
             <a
                className="mt-auto text-primary mb-0 font-semibold leading-normal text-md group dark:text-secondary "
                href={git}
              >
                Github
              </a>
              <a
                className="mt-auto text-primary mb-0 font-semibold leading-normal text-md group dark:text-secondary "
                href={demo}
              >
               Demo
              </a>
             </div>
            </div>
          </div>
          <div className="max-w-full px-3 mt-12 m-0 mx-auto   text-center lg:mt-0 lg:w-5/12 lg:flex-none">
            <div className="h-full bg-white to-pink-500 rounded-xl relative">
              <div className="relative flex items-center  justify-center h-full">
                <img
                  className=" z-20 w-full rounded-lg  "
                  src={src}
                  alt="rocket"
                />
              </div>
            </div>
          </div>
        </div>
        
      </div>
            ))
     }
    </div>
  );
};

export default Projets;
