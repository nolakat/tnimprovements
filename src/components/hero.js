import * as React from "react"
import Badge from './badge'
import { StaticImage } from "gatsby-plugin-image"


const Hero = ({ setIsPopupVisible }) =>{
  return(
    <div className="bg-navy">
      <div className="relative flex items-center justify-start m-auto max-w-screen-2xl md:h-650">
          <StaticImage
          loading="eager"
        src="../images/tn_company01.jpg"
        alt="TN Home Improvements Banner Image"
        placeholder="blurred"
        className="!hidden md:!block heroContainer__image"
        imgClassName="object-bottom"
        width={4800}
        height={2400}
      />

      <StaticImage
          loading="eager"
        src="../images/tn_company01.jpg"
        alt="TN Home Improvements Banner Image"
        placeholder="blurred"
        className="md:!hidden"
        imgClassName="object-bottom"
        width={2400}
        height={1200}
      />


        <div className="hidden absolute px-8 left-0 z-10 md:flex flex-col items-start justify-center w-full h-full text-white bg-gradient-to-t md:bg-gradient-to-r from-navy from-20% via-transparent via-80% to-navy to-100% ">
          <div className="relative flex flex-col items-center pt-20 pr-5 md:pr-0 md:items-start">

            <h1 className="relative flex flex-wrap justify-center pt-5 text-sm font-bold text-center text-gold-100 md:justify-start lg:text-5xl font-display md:text-left">
            <div
                className="absolute z-20 p-5 scale-75 rounded-full md:scale-1 bg-darkNavy/65"
                style={{ top: '-71px', right: '-178px' }}
              >
                  <Badge />
                 </div>

              {/* <span className="block w-full pb-1">Local Remodelling<br/> You Can Trust</span> */}
              <span className="mb-6 text-4xl leading-snug">Building Pittsburgh Dreams,<br/> One Home At A Time.</span>
            </h1>

            <ul className="flex flex-col items-center justify-center text-xl text-center text-white md:items-end md:flex-row gap-y-4 sm:text-xl font-body mb-14 md:text-left-0">

            <li>Locally Owned & Operated
              <span className="hidden px-2 text-3xl font-thin md:inline-block opacity-60">|</span></li>
              <li>Affordable Pricing <span className="hidden px-2 text-3xl font-thin opacity-60 md:inline-block">|</span></li>
              <li>Licensed & Fully Insuranced</li> </ul>
              <div className="relative left-4">
              <a href="#ContactFooter" className="block px-8 py-4 text-lg font-semibold border border-white border-solid text--uppercase text-gold-100 rounded-4xl button-yellow bg-navy border-1 font-body hover:bg-slate-600/50">Get Your Free Estimate</a>

                {/* <ButtonHero setIsPopupVisible={setIsPopupVisible}  label="GET YOUR FREE ESTIMATE" /> */}
              </div>
          </div>
        </div>
      </div>
      <div className="m-auto text-center md:hidden text-gold-100 py-9 w-fit">
        <span className="block mb-12 text-3xl leading-snug">Building Pittsburgh Dreams,<br/> One Home At A Time.</span>
        <a href="#ContactFooter" className="block px-8 py-4 text-lg font-semibold border border-white border-solid text--uppercase text-gold-100 rounded-4xl button-yellow bg-navy border-1 font-body hover:bg-slate-600/50">Get Your Free Estimate</a>


      </div>
    </div>
  )
}

export default Hero
