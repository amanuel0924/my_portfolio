import Home from "./componets/Home"
import Experians from "./componets/Experians"
import Hero from "./componets/Hero"
import AboutMe from "./componets/AboutMe"
import Portfolio from "./componets/Portfolio"
import Contact from "./componets/Contact"
import LeftIcons from "./componets/LeftIcons"
import { useState } from "react"

function App() {
  // add a dark togler state to send to the Hero component
  const [dark, setDark] = useState("dark")
  const handleDark = () => {
    setDark(dark === "dark" ? "" : "dark")
  }

  return (
    <div className={dark}>
      <Hero dark={dark} handleDark={handleDark} />
      <Home />
      <LeftIcons />
      <AboutMe />
      <Portfolio />
      <Experians />
      <Contact />

      {/* <Footer /> */}
    </div>
  )
}

export default App
