import React, { useState } from "react"
import Layout from './layout'
import HomeRepairHero from "../components/homeRepairHero";
import ButtonWhite from "../components/ButtonWhite";
import { StaticImage } from "gatsby-plugin-image"
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Next = (idx, setIdx) =>{
  setIdx(idx + 1)
}

const Prev = (idx, setIdx) =>{
 setIdx(idx - 1)
}

const data = [
 {
  src: "../images/doors/home_reno_after_01.jpg"
 }
]


const Slide = (src) =>{

  return(
    <div className="flex flex-col items-center justify-center px-6 py-16 odd:float-left even:float-right">
      <StaticImage
          loading="eager"
          src={"../images/doors/home_reno_after_01.jpg"}
          alt="TN Home Improvements Banner Image"
          placeholder="blurred"
          className=""
          imgClassName="object-top"
          width={2400}
          height={1200}
        />
    </div>
  )
}




const Patios = () => {
  const [currentIndex, setIndex] = useState(0);
  const slideList = data.map((image, index) =>
  < Slide key={index} src={image.src} />
);


  return (
    <div className="bg-navy">

    <Layout marginTop={true}>


    <div className="bg-navy">
          <div className="relative flex items-center justify-start m-auto max-w-screen-2xl md:h-96">
              <StaticImage
                loading="eager"
                src={"../images/patio_cover.jpg"}
                alt="TN Home Improvements Banner Image"
                placeholder="blurred"
                className="!hidden md:!block heroContainer__image "
                imgClassName="object-middle"
                width={2400}
                height={1200}
              />

            <StaticImage
              loading="eager"
              src={"../images/patio_cover.jpg"}
              alt="TN Home Improvements Banner Image"
              placeholder="blurred"
              className=" md:!hidden"
              imgClassName="object-middle"
              width={2400}
              height={1200}
            />


          <div className="!absolute top-0 z-20 p-5 scale-75 rounded-full md:top-auto md:scale-1 ">
          </div>

          <div className="hidden absolute px-8 left-0 z-10 md:flex flex-col items-center justify-center w-full h-full text-white bg-gradient-to-t md:bg-gradient-to-r from-navy from-0%  via-navy/50  to-navy to-100% ">
              <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0">
                <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Patios</h1>
              </div>
            </div>



          </div>
      </div>



<div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start md:hidden">
                <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Patios</h1>
              </div>


      <div className="flex flex-col px-12 md:flex-row gap-x-6">
        <div className="flex-1">
          <Carousel
          key="1"
          showThumbs={false}
          showIndicators={false}
              selectedItem={currentIndex}
              showArrows={false}
              emulateTouch={true}
              infiniteLoop={true}
              interval={12000}
              showStatus={false}
              preventMovementUntilSwipeScrollTolerance={true}
              autoPlay>
                <div className="flex flex-col items-center justify-center py-16 odd:float-left even:float-right">
                    <StaticImage
                        loading="eager"
                        src={"../images/patio_before_01.jpg"}
                        alt="TN Home Improvements Banner Image"
                        placeholder="blurred"
                        className=""
                        imgClassName="object-top"

                      />
                  </div>
                  <div className="flex flex-col items-center justify-center py-16 odd:float-left even:float-right">
                    <StaticImage
                        loading="eager"
                        src={"../images/patio_after_02.jpg"}
                        alt="TN Home Improvements Banner Image"
                        placeholder="blurred"
                        className=""
                        imgClassName="object-top"

                      />
                  </div>
          </Carousel>
        </div>
        <div className="flex-1 py-16">
          <div className="px-8 py-16 text-white">
            <h2 className="pb-6 text-2xl text-gold-100">Patio Building for the Perfect Outdoor Retreat</h2>
            <p>From a humble beginning to a stunning place to unwind, the construction of this patio was all about creating an inviting outdoor retreat. Here’s a quick overview of the work done:</p>
            <ul className="flex flex-col pt-3 list-disc gap-y-1">
                <li>Cleared and prepped the backyard area, removing debris and leveling the ground for a solid foundation.</li>
                <li>Built a spacious wooden deck, using premium materials for durability and longevity.</li>
                <li>Sealed and treated the wood to protect against the elements and to ensure easy maintenance.</li>
                <li>The final touch was the addition of a privacy wall for a cozy, intimate outdoor experience.</li>
            </ul>
            <p>This brand-new patio space is now the perfect backdrop for family barbecues, morning coffees, or simply soaking up some sun.</p>
          </div>
        </div>
      </div>
    </Layout>
    </div>
  );
};

export default Patios;
