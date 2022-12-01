import React, { useState } from "react"
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"


import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Next = (idx, setIdx) =>{
   setIdx(idx + 1)
}

const Prev = (idx, setIdx) =>{
  setIdx(idx - 1)
}

const Gallery = () =>{

  const [currentIndex, setIndex] = useState(0)

  return(
    <section id="gallery" className="px-5 pt-10 bg-white lg:pt-20">
      <div className="flex flex-row">
       <button
          className="flex items-center justify-center w-1/3"
          onClick={()=>{ Prev(currentIndex, setIndex)}}
          type="button"
        >
          <FontAwesomeIcon className="w-6" icon="chevron-left" />
        </button>
      <div>
         <Carousel
          selectedItem={currentIndex}
          onChange={(index, item)=>{setIndex(index)}}
          showArrows={false}
          emulateTouch={true}
          infiniteLoop={true}
          centerMode={false}
          centerSlidePercentage={75}
          autoPlay>
                <StaticImage
                    loading="lazy"
                    src="../images/IMG_1809.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />
                    <StaticImage
                    loading="lazy"
                    src="../images/IMG_1810.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />
                    <StaticImage
                    loading="lazy"
                    src="../images/IMG_1812.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />
                    <StaticImage
                    loading="lazy"
                    src="../images/IMG_1813.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />
                    <StaticImage
                    loading="lazy"
                    src="../images/IMG_2219.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />
                    <StaticImage
                    loading="lazy"
                    src="../images/IMG_2220.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />
                    <StaticImage
                    loading="lazy"
                    src="../images/IMG_2223.jpg"
                    alt='TN Home Improvement Contractor Jeff in action'
                    placeholder="none"
                    className="z-10 object-cover w-full h-full"
                    fit="cover"
                    width={1600}
                    height={1200}
                  />

          </Carousel>
      </div>
      <button
          className="flex items-center justify-center w-1/3"
          onClick={()=>{ Next(currentIndex, setIndex)}}
          type="button"
        >
          <FontAwesomeIcon className="w-6" icon="chevron-right" />
        </button>
        </div>
    </section>
  )
}


export default Gallery
