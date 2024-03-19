import * as React from "react"
import ButtonHero from './ButtonHero'
import Badge from './badge'
import { StaticImage } from "gatsby-plugin-image"


const ProcessHero = ({ setIsPopupVisible }) =>{
  return(
    <div class="bg-navy">
      <div className="relative flex items-center justify-start m-auto max-w-screen-2xl md:h-96">
          <StaticImage
          loading="eager"
        src={"../images/tn_construction_01.jpg"}
        alt="TN Home Improvements Banner Image"
        placeholder="blurred"
        className="!hidden md:!block heroContainer__image"
        imgClassName="object-bottom"
        width={4800}
        height={2400}
      />

<StaticImage
        loading="eager"
        src={"../images/tn_construction_01.jpg"}
        alt="TN Home Improvements Banner Image"
        placeholder="blurred"
        className=" md:!hidden"
        imgClassName="object-middle"
        width={4800}
        height={2400}
      />


      <div className="absolute top-0 z-20 p-5 scale-75 rounded-full md:top-auto md:scale-1 ">
        </div>
        <div className="hidden absolute px-8 left-0 z-10 md:flex flex-col items-start justify-center w-full h-full text-white bg-gradient-to-t md:bg-gradient-to-r from-navy from-10% via-transparent via-80% to-navy to-100% ">
          <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start">

          </div>
        </div>
      </div>

    </div>
  )
}

export default ProcessHero
