import React, { useState, useEffect } from 'react';

import Hero from '../components/hero'
import AboutUs from "../components/about"
import Work from "../components/work"
import NewGallery from "../components/newgallery"
import NewQuotes from "../components/newquotes"
import Map from "../components/Map"
import CallOut from "../components/callout"



const HomePage = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  useEffect(() => console.log(isPopupVisible), [isPopupVisible]);

  return(
    <div className="scroll-smooth">
        {/* <NavBar /> */}
        <main className="">
          <div className="m-auto max-w-screen-3xl">
            {/* <Hero setIsPopupVisible={setIsPopupVisible} /> */}
            {/* <PopupForm  isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} /> */}

            <AboutUs />
            <Work />
            {/* <Gallery /> */}
            {/* <Quotes /> */}
            <NewGallery />
            <Map />
            <CallOut  setIsPopupVisible={setIsPopupVisible} />
            <NewQuotes />
            {/* <Contact /> */}

          </div>
        </main>
        {/* <Footer /> */}
    </div>
  )
}

export default HomePage
