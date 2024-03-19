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
    text: "Our home improvement company recently revitalized a local salon, turning a once-dull space into a dynamic, stylish haven."
  },
  {
    text: "Our home improvement company recently revitalized a local salon, turning a once-dull space into a dynamic, stylish haven."
  }
]


const Slide = (props) =>{


  return(
    <div className="flex flex-col items-center justify-center px-6 py-16">
      <p className="text-xl leading-relaxed text-black md:text-2xl max-w-prose">{ props.text }</p>
    </div>
  )
}


const SuccessStories = () =>{

const slideList = data.map((quote, index) =>
  <Slide key={index} text={quote.text} />
);



  const [currentIndex, setIndex] = useState(0)

  return(
    <section className="pb-20 m-auto">

      <div className="block w-screen">

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

        </div>
    </section>
  )
}


export default SuccessStories
