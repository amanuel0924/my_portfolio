import React, { useState } from "react"
import { IoCallSharp } from "react-icons/io5"

const Contact = () => {
  const [info, setInfo] = useState({ email: "", name: "", message: "" })
  const userDataChangeHandler = (e) => {
    setInfo((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  const onbutClick = (e) => {
    setInfo({ email: "", name: "", message: "" })
  }

  return (
    <>
      <section className="w-full " name="contact">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <h2 className="font-heading mb-4 font-bold tracking-tight text-primary dark:text-secondary text-3xl sm:text-4xl">
                Get in Touch
              </h2>
            </div>
          </div>
          <div className="flex items-stretch justify-center ">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                  className aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos. Duis nec ipsum orci.
                  Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounde bg-primary dark:bg-secondary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Address
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded dark:bg-secondary bg-primary text-gray-50">
                      <IoCallSharp size={20} />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Contact
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mobile: +251 924949409
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Mail: amanuel0924@gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5  md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold dark:text-gray-200 ">
                  Ready to Get Started?
                </h2>
                <form
                  id="contactForm"
                  action="https://getform.io/f/7161a76a-4361-49f2-a6ca-ad4a551d232b"
                  method="POST"
                >
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                          value={info.name}
                          onChange={userDataChangeHandler}
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                          value={info.email}
                          onChange={userDataChangeHandler}
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="message"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="message"
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md  border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        value={info.message}
                        onChange={userDataChangeHandler}
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      onClick={onbutClick}
                      className="w-full bg-primary dark:bg-secondary text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
