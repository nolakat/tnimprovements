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




const HomeRepairs = () => {
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
              src={"../images/door_cover.jpg"}
              alt="TN Home Improvements Banner Image"
              placeholder="blurred"
              className=" md:hidden"
              imgClassName="object-top"
              width={2400}
              height={1200}
            />


          <div className="absolute top-0 z-20 p-5 scale-75 rounded-full md:top-auto md:scale-1 ">
          </div>

            <div className="hidden absolute px-8 left-0 z-10 md:flex flex-col items-start justify-center w-full h-full text-white bg-gradient-to-t md:bg-gradient-to-r from-navy from-0% via-transparent  to-navy to-100% ">
              {/* <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start">
                <h1 className="pb-2 text-4xl text-white border-b-2 border-gold-100">Home Renovations</h1>
                <p className="mt-4">Lorem Ipusm </p>
              </div> */}
            </div>


          </div>
      </div>

<div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start">
                <h1 className="pb-2 m-auto text-4xl text-center text-white border-b-2 border-gold-100">Home Repairs</h1>
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
            <h2 className="pb-6 text-2xl text-gold-100">Home Repair #1</h2>
            <div>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse px-12 bg-white gap-x-12">
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
          <div className="h-full px-8 py-16 bg-white">
            <h2 className="pb-6 text-2xl">Home Repair #2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis diam luctus, convallis elit vel, dignissim nulla. Curabitur malesuada fermentum quam, vitae blandit elit consectetur et. Sed eget cursus purus, quis finibus ipsum. In faucibus ligula diam, non consequat urna lobortis a. Proin a libero ut lorem faucibus commodo at non diam. Proin commodo congue purus, eget maximus diam efficitur vulputate. Nulla varius efficitur ullamcorper. Aliquam erat volutpat. Nullam fermentum finibus lorem, a laoreet lacus congue consequat. Donec sit amet quam vehicula, ornare mauris eget, molestie massa.</p>
          </div>
        </div>
      </div>




    </Layout>
    </div>
  );
};

export default HomeRepairs;
