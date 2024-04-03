import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faChevronLeft, faChevronRight, faHandshake, faRankingStar, faClock, faBroom, faCircleCheck, faStar, faComment, faWrench, faPaintRoller  } from '@fortawesome/free-solid-svg-icons'
import { SEO } from "../components/seo"
import Layout from './layout'
import Hero from '../components/hero'
import AboutUs from "../components/about"
import Work from "../components/work"
import NewGallery from "../components/newgallery"
import NewQuotes from "../components/newquotes"
import Map from "../components/Map"
import CallOut from "../components/callout"
import PopupForm from "../components/popup"

library.add(fab, faCheckSquare, faCoffee, faChevronLeft, faChevronRight, faHandshake, faRankingStar, faClock, faBroom, faCircleCheck, faStar, faComment, faWrench, faPaintRoller)


const IndexPage = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // useEffect(() => console.log(isPopupVisible), [isPopupVisible]);


  return (
    <Layout topMargin={true} hideFinance={true}>
      <Hero setIsPopupVisible={setIsPopupVisible} />
      <PopupForm  isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} />
      <AboutUs />
      <Work />
      <NewGallery />
      <Map />
      <CallOut  setIsPopupVisible={setIsPopupVisible} />
      <NewQuotes />
    </Layout>
  )
}


export default IndexPage





export function Head() {
  return (
    <title>Hello World</title>
  )
}

// export const Head = () => (
//   <>
//   <SEO />
//   <html lang="en" />
//   </>
// )
