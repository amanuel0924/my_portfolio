import React from "react"
import { RiProfileFill } from "react-icons/ri"
import My_image from "./../asset/my_pic.png"

const Home = () => {
  return (
    <div
      className="dark:bg-gradient-to-b from-black to-gray-800   border-t-2 pt-3 border-white  bg-white "
      name="home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between py-24 px-4 md:flex-row ">
        <div className="flex flex-col h-full justify-center text-center md:text-left">
          <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            I'm a FullStack Developer
          </h2>
          <p className=" dark:text-white text-gray-800 py-4 max-w-md  ">
            As a dedicated full-stack developer, I bring creativity with a
            passion for crafting visually appealing and user-friendly
            interfaces, I specialize in turning design concepts into seamless,
            responsive web applications. Proficient in <strong>HTML</strong>,
            <strong> CSS</strong>,<strong> JavaScript</strong>,
            <strong> MERN</strong> and<strong> Tailwindcss</strong>.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download={true}
              className="flex items-center  text-white w-fit  bg-blue-800 px-6 py-3 my-2 rounded-md cursor-pointer hover:scale-110 duration-200"
            >
              Resume
              <span className=" px-2">
                <RiProfileFill />
              </span>
            </a>
          </div>
        </div>
        <div className="my-10  ">
          <div>
            <img
              src={My_image}
              alt="my_image"
              className="w-60 h-60 rounded-full border-4 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
