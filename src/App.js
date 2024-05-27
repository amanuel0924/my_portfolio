import Contact from "./componets/Contact"
import Projets from "./componets/Projects"
import LeftIcons from "./componets/LeftIcons"
import { useState } from "react"
import Nav from "./componets/Nav"
import Home from "./componets/Home2"
import About2 from "./componets/About2"
import Myservice from "./componets/Myservice"
import LogoList from "./componets/LogoList"

import "./App.css"
function App() {
  const [dark, setDark] = useState(false)
  const handleDark = () => {
    setDark(!dark)
    console.log(dark)
  }

  return (
    <div className={` ${dark ? "dark" : ""}`}>
      <div className="dark:bg-gradient-to-b from-black to-gray-800 ">
        <Nav dark={dark} handleDark={handleDark} />
        <Home />
        <About2 />
        <Myservice />
        <LogoList />
        <Projets />
        <LeftIcons />
        <Contact />
      </div>
    </div>
  )
}

export default App
