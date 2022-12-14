import * as React from "react"
import Hero from '../components/hero'
import AboutUs from "../components/about"
import Work from "../components/work"
import Gallery from "../components/gallery"
import Contact from '../components/contact'


const HomePage = () => {
  return(
    <div className="m-auto max-w-screen-3xl">
      <Hero />
      <AboutUs />
      <Work />
      <Gallery />
      {/* <Quotes /> */}
      <Contact />
    </div>
  )
}

export default HomePage
