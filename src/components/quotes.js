import React, { useState } from "react"
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Next = (idx, setIdx) =>{
   setIdx(idx + 1)
}

const Prev = (idx, setIdx) =>{
  setIdx(idx - 1)
}

const data = [
  {
    text: "I recently had T&N Home Improvement built out a closet in a bedroom for me along with drywall installation and drywall finishing. They kept communication with me throughout the entire process. Very professional and exceptional work. Highly recommend.",
    author: "jackie oehmler",
    link: "https://g.co/kgs/xSBPCE"
  },
  {
    text: "Couldn’t be happier that I hired T&N home improvements. Jeff and Michael remodeled my basement, installed a railing for my basement stairs and also installed a front storm door. Extremely satisfied with the finished product! They were very fast for a very reasonable price, can’t thank them enough!",
    author: "george hartmann",
    link: "https://g.co/kgs/UccFy1"
  },
  {
    text: "T&N top notch service! They came in and fired up the remaining trim on the walls quickly! Looks fantastic! Couldn't be more happy with the quality service they provided.",
    author: "Zachary Maug",
    link: "https://g.co/kgs/L19ks4"
  }
]


const Slide = (props) =>{
  const stars = [];
  for(let i = 0; i < 5; i ++){
    stars.push(<FontAwesomeIcon key={i} icon="star" />)
  }

  return(
    <div className="flex flex-col items-center justify-center px-6 py-16 odd:float-left even:float-right">
      <div className="flex flex-row pb-6 text-lg text-amber-500 gap-x-4">
       { stars }
      </div>
      <p className="text-xl leading-relaxed text-black md:text-2xl max-w-prose">{ props.text }</p>
      <a href={props.link} className="pt-6 text-lg font-semibold underline capitalize" target="_blank">{ props.author }</a>
    </div>
  )
}


const QuoteSlider = () =>{

const slideList = data.map((quote, index) =>
  <Slide key={index} text={quote.text} author={quote.author} link={quote.link} />
);



  const [currentIndex, setIndex] = useState(0)

  return(
    <section id="gallery" className="pb-20 ">
      <div class="hidden md:block">
        {slideList}
      </div>
      <div className="block w-screen md:hidden">
       {/* <button
          className="flex items-center justify-center w-1/4"
          onClick={()=>{ Prev(currentIndex, setIndex)}}
          type="button"
        >
          <FontAwesomeIcon className="w-6" icon="chevron-left" />
        </button> */}
      <div>
         <Carousel
          selectedItem={currentIndex}
          onChange={(index, item)=>{setIndex(index)}}
          showArrows={false}
          emulateTouch={true}
          infiniteLoop={true}
          interval={12000}
          showStatus={false}
          preventMovementUntilSwipeScrollTolerance={true}
          autoPlay>
            { slideList }
          </Carousel>
      </div>
      {/* <button
          className="flex items-center justify-center w-1/4"
          onClick={()=>{ Next(currentIndex, setIndex)}}
          type="button"
        >
          <FontAwesomeIcon className="w-6" icon="chevron-right" />
        </button> */}
        </div>
    </section>
  )
}


export default QuoteSlider
