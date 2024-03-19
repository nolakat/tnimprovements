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
          src={"../images/doors/framing_after_01.jpg"}
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




const HomeRenovations = () => {
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
                src={"../images/home_reno_cover.jpg"}
                alt="TN Home Improvements Banner Image"
                placeholder="blurred"
                className="hidden md:block heroContainer__image "
                imgClassName="object-middle"
                width={2400}
                height={1200}
              />

            <StaticImage
              loading="eager"
              src={"../images/home_reno_cover.jpg"}
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
                <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Home Repairs & Renovations</h1>
              </div>
            </div>



          </div>
      </div>




    <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start md:hidden">
                  <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Home Repairs & Renovations</h1>
                </div>


        <div className="flex flex-col px-12 md:flex-row gap-x-6">
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
                          src={"../images/doors/home_reno_before_01.jpg"}
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
                          src={"../images/doors/home_reno_after_01.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-top"
                          width={2400}
                          height={1200}
                        />
                    </div>
            </Carousel>
          </div>
          <div className="flex-1 py-16">
            <div className="px-8 py-16 text-white">
              <h2 className="pb-6 text-2xl text-gold-100">Custom Home Renovation Services</h2>
              <p>This project focused on enhancing the charm and utility of the living space centered around the fireplace. With careful consideration to detail and design, here's what we accomplished:</p>
              <ul className="flex flex-col pt-3 list-disc gap-y-1">
                  <li>Designed and installed custom floating shelves on either side of the fireplace.</li>
                  <li>Constructed and fitted sleek white cabinets for storage beneath the shelves.</li>
                  <li>Ensured the shelves and cabinets matched in style to create a cohesive look.</li>
                  <li>Chose a natural wood finish for the shelves to contrast with the brick fireplace.</li>
                  <li>Optimized the use of space to combine functionality with aesthetic appeal, making the fireplace a focal point.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse px-12 bg-white md:flex-row-reverse gap-x-12">
          <div className="flex-1">
            <Carousel
            key="2"
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
                          src={"../images/home_renovation/home_reno_before_02.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-middle"

                        />
                    </div>
                    <div className="flex flex-col items-center justify-center py-16 odd:float-left even:float-right">
                      <StaticImage
                          loading="eager"
                          src={"../images/home_renovation/home_reno_after_02.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-top"

                        />
                    </div>
            </Carousel>
          </div>
          <div className="flex-1 h-full py-16">
            <div className="h-full px-8 py-16 bg-white text-navy">
            <h2 className="pb-6 text-2xl text-navy">Reliable Home Repair</h2>
            <p>Transforming outdoor spaces is always a rewarding challenge, and the renovation of this covered patio ceiling was no exception. Here’s the rundown of what we did to create a fresh, inviting outdoor area:</p>
            <ul className="flex flex-col pt-3 list-disc gap-y-1">
                <li>Stripped down the old ceiling to the bare bones to ensure a clean slate.</li>
                <li>Installed a new, smooth ceiling with crisp white beadboard paneling for a classic, polished look.</li>
                <li>Incorporated recessed lighting fixtures to provide ample, unobtrusive lighting.</li>
                <li>Painted and finished all surfaces to withstand the elements and ensure long-lasting beauty.</li>
            </ul>
            <p>The result is a bright and welcoming space perfect for evening relaxation or hosting gatherings.</p>
            </div>
          </div>
        </div>




      </Layout>
      </div>
    );
};

export default HomeRenovations;
