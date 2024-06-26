import html from "../asset/Experians/html.png"
import css from "../asset/Experians/css.png"
import javascript from "../asset/Experians/javascript.png"
import reactImage from "../asset/Experians/react.png"
import github from "../asset/Experians/github.png"
import tailwind from "../asset/Experians/tailwind.png"

const Experians = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ]

  return (
    <section
      name="experiance"
      className="dark:bg-gradient-to-b from-gray-800  to-black p-12 w-full dark:text-white"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-blue-800 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-lg">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-8 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experians
