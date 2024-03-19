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




const Drywalling = () => {
  const [currentIndex, setIndex] = useState(0);
  const slideList = data.map((image, index) =>
  < Slide key={index} src={image.src} />
);


  return (
    <div class="bg-navy">

    <Layout marginTop={true}>


    <div class="bg-navy">
          <div className="relative flex items-center justify-start m-auto max-w-screen-2xl md:h-96">
              <StaticImage
                loading="eager"
                src={"../images/drywall_cover_02.jpg"}
                alt="TN Home Improvements Banner Image"
                placeholder="blurred"
                className="hidden md:block heroContainer__image "
                imgClassName="object-middle"
                width={2400}
                height={1200}
              />

            <StaticImage
              loading="eager"
              src={"../images/drywall_cover_02.jpg"}
              alt="TN Home Improvements Banner Image"
              placeholder="blurred"
              className=" md:hidden"
              imgClassName="object-middle"
              width={2400}
              height={1200}
            />


          <div className="absolute top-0 z-20 p-5 scale-75 rounded-full md:top-auto md:scale-1 ">
          </div>

          <div className="hidden absolute px-8 left-0 z-10 md:flex flex-col items-center justify-center w-full h-full text-white bg-gradient-to-t md:bg-gradient-to-r from-navy from-0%  via-navy/50  to-navy to-100% ">
              <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0">
                <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Drywalling</h1>
              </div>
            </div>


          </div>
      </div>


<div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start md:hidden">
                <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Drywalling</h1>
              </div>


      <div className="flex flex-row px-12 gap-x-6">
        <div className="flex-1">
          <Carousel
          key="1"
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
                        src={"../images/drywalling/drywall_before_01.jpg"}
                        alt="TN Home Improvements Banner Image"
                        placeholder="blurred"
                        className=""
                        imgClassName="object-top"
                        width={2400}
                        height={1200}
                      />
                  </div>
                  <div className="flex flex-col items-center justify-center py-16 odd:float-left even:float-right">
                    <StaticImage
                        loading="eager"
                        src={"../images/drywalling/drywall_after_01.jpg"}
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
            <h2 className="pb-6 text-2xl text-gold-100">Tailored Drywall Solutions </h2>
            <p>Turning a basement into a smooth and polished space took a keen eye for detail and a commitment to quality. Here’s a snapshot of the transformation:</p>
            <ul className="pt-3 list-disc ul gap-y-1">
                <li>Replaced the exposed ceiling with fresh drywall, creating a seamless and refined finish.</li>
                <li>Painted the new drywall ceiling with a bright white to enhance the sense of space and light.</li>
                <li>Installed modern recessed lighting, strategically placed for an even, ambient glow that brings the room to life.</li>
                <li>The walls received new drywall as well, for a clean and insulated environment.</li>
            </ul>
            <p>This makeover provided the basement with a welcoming, finished look that’s perfect for entertaining or just kicking back and relaxing.</p>
          </div>
        </div>
      </div>


    </Layout>
    </div>
  );
};

export default Drywalling;
