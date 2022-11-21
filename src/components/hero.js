import * as React from "react"
import ButtonYellow from './ButtonYellow'
import { StaticImage } from "gatsby-plugin-image"


const Hero = () =>{
  return(
    <div className="heroContainer">
        <StaticImage
        loading="eager"
      src="../images/tn_company01.jpg"
      alt="TN Home Improvements Banner Image"
      placeholder="blurred"
      className="object-right heroContainer__image"
      imgClassName="object-bottom"
      width={2400}
      height={1200}
    />
      <div className="absolute left-0 z-10 flex flex-col items-start justify-center w-full h-full text-white from-slate-900/95 to-slate-800/30 md:to-zinc-50/5 bg-gradient-to-t md:bg-gradient-to-r">
        <div className="flex flex-col items-center pl-8 pr-5 md:pr-0 md:pl-14 md:items-start">
          <h1 className="flex flex-wrap justify-center pb-6 text-6xl font-bold text-center md:text-7xl md:justify-start lg:text-8xl font-display md:text-left"><span class="block w-full pb-5">Big or Small</span> We Do It All</h1>
          <hr className="w-12 mb-4 border-b-2 border-white border-solid md:hidden" />
          <ul className="flex flex-col items-center justify-center text-lg text-center border-white border-solid md:items-end md:flex-row gap-y-4 sm:text-xl lg:pt-6 lg:border-t font-body mb-14 md:text-left-0">

           <li>Locally Owned & Operated
            <span className="hidden px-2 text-3xl font-thin md:inline-block opacity-60">|</span></li>
            <li>Affordable Pricing <span className="hidden px-2 text-3xl font-thin opacity-60 md:inline-block">|</span></li>
            <li>Licensed & Fully Insuranced</li> </ul>
          <ButtonYellow target="#contact" label="Get Your Free Estimate"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
