import React from "react"
import { FaDrawPolygon, FaCode, FaRegFileCode } from "react-icons/fa"

const AboutMe = () => {
  return (
    <div
      className="dark:bg-gradient-to-b from-gray-800 to-black  dark:text-white md:py-20  "
      name="about"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  ">
        <div className=" pb-5">
          <p className=" text-4xl font-bold  inline border-b-4 border-blue-800">
            About
          </p>
        </div>
        <div>
          <p className=" text-xl mt-15">
            I am Amanuel Tegegne, a dedicated Full Stack Developer with a strong
            foundation in software engineering from Wollo University. My
            expertise lies in the MERN stack (MongoDB, Express.js, React, and
            Node.js), and I have experience working with ORM tools for
            PostgreSQL and MySQL. I specialize in both front-end and back-end
            development, creating seamless web applications.Additionally, I
            possess a solid understanding of UX/UI principles, which allows me
            to enhance the overall user experience in my projects.
          </p>
          <br />
          <div>
            <div className=" pb-5">
              <p className=" text-2xl font-bold  inline ">My Services</p>
            </div>
            <div className="w-full draggable text-gray-900">
              <div className="container flex flex-col items-center gap-16 mx-auto my-10">
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main drop-shadow-lg">
                    <span>
                      <FaDrawPolygon size={35} className=" text-blue-800" />
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">
                      Web Designer
                    </p>
                    <p className="text-base leading-7 text-dark-grey-600">
                      Figma, Adobe XD, Sketch
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main drop-shadow-lg">
                    <span>
                      <FaCode size={35} className=" text-blue-800" />
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">
                      Frontend Developer
                    </p>
                    <p className="text-base leading-7 text-dark-grey-600">
                      HTML, CSS, JavaScript, React,TypeScript
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main drop-shadow-lg">
                    <span>
                      <FaRegFileCode size={35} className=" text-blue-800" />
                    </span>
                    <p className="text-2xl font-extrabold text-dark-grey-900">
                      Backend Developer
                    </p>
                    <p className="text-base leading-7 text-dark-grey-600">
                      Node.js, Express, MongoDB, SQL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
