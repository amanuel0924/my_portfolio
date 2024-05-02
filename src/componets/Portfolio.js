import React from "react"
import jewelry from "./../asset/portfolio/jewlery.png"
import procafe from "./../asset/portfolio/procafe.png"
import fylo from "./../asset/portfolio/fylo2.png"

const Portfolio = () => {
  const picArray = [
    {
      id: 1,
      src: jewelry,
      title: "Jewelry App",
      git: "https://github.com/amanuel0924/jewlery_app",
      demo: "https://jewlery-app.vercel.app",
    },
    {
      id: 2,
      src: procafe,
      title: "Pro Cafe",
      git: "https://github.com/aman7ph/p_cafe",
      demo: "https://p-cafe.onrender.com",
    },
    {
      id: 3,
      src: fylo,
      title: "Multi file uploader",
      git: "https://github.com/amanuel0924/multiFileUploader",
      demo: "https://multi-file-uploader-eta.vercel.app/",
    },
  ]
  return (
    <section
      name="project"
      className="dark:bg-gradient-to-b from-black to-gray-800 w-full  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-7">
          <p className="text-4xl  font-bold inline border-b-4 border-blue-500 dark:text-white">
            Porojects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {picArray.map(({ id, src, git, demo, title }) => (
            <div
              key={id}
              className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
            >
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-5 bg-white dark:bg-gray-900 ">
                <img
                  className="w-full rounded-xl border-2 border-gray-300"
                  src={src}
                  alt="Project Screenshot"
                  style={{ height: "230px" }}
                />
                <div className="px-3 py-1 dark:text-white">
                  <div className="font-bold text-lg  text-gray-600 dark:text-white">
                    {title}
                  </div>
                </div>

                <div className="pt-4 pb-2 flex justify-start space-x-3 ">
                  <a
                    href={git}
                    className="rounded-full bg-purple-100 px-2.5 py-0.5 text-md text-purple-600"
                  >
                    GitHub
                  </a>
                  <a
                    href={demo}
                    className=" rounded-full bg-purple-100 px-2.5 py-0.5 text-md text-purple-600"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
