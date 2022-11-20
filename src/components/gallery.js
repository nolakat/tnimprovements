import React, { useState } from "react"
import BeforeAfter from "./beforeAfter"
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    <section id="gallery" className="bg-stone-600 pb-20">
      <div className="flex flex-row">
       <button
          className="flex items-center justify-center w-1/4"
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
                <div>
                  <img src="/ceiling_before_01.jpg" />
                </div>
                <div>
                  <img src="/ceiling_after_01.jpg" />
               </div>
          </Carousel>
      </div>
      <button
          className="flex items-center justify-center w-1/4"
          onClick={()=>{ Next(currentIndex, setIndex)}}
          type="button"
        >
          <FontAwesomeIcon className="w-6" icon="chevron-right" />
        </button>
        </div>
      {/* <BeforeAfter before={'/ceiling_before_01.jpg'} after={'/ceiling_after_01.jpg'} />
      <BeforeAfter before={'/drywall_before_01.jpg'} after={'/drywall_after_01.jpg'} /> */}
    </section>
  )
}


export default Gallery
