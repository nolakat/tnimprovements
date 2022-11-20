import * as React from "react"
import Hero from '../components/hero'
import AboutUs from "../components/about"
import Work from "../components/work"
import Contact from '../components/contact'


const HomePage = () => {
  return(
    <div className="m-auto max-w-screen-3xl">
      <Hero />
      <AboutUs />
      <Work />
      {/* <Quotes /> */}
      <Contact />
    </div>
  )
}

export default HomePage
