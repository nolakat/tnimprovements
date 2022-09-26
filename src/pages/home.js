import * as React from "react"
import Hero from '../components/hero'
import AboutUs from "../components/about"
import Work from "../components/work"
import Gallery from '../components/gallery'
import Contact from '../components/contact.js'


const HomePage = () => {
  return(
    <div class="max-w-screen-3xl m-auto">
      <Hero />
      <AboutUs />
      <Work />
      <Gallery />
      <Contact />
    </div>
  )
}

export default HomePage
