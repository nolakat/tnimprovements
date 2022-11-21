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
      <div className="z-10 flex flex-col items-start justify-center w-full h-full text-white from-slate-900/95 to-slate-800/30 md:to-zinc-50/5 bg-gradient-to-t md:bg-gradient-to-r">
        <div className="flex flex-col items-center pl-8 pr-5 md:pr-0 md:pl-14 md:items-start">
          <h1 className="text-5xl font-bold text-center lg:text-8xl font-display md:text-left">Big or Small<br/> We Do It All</h1>


          <hr className="hidden w-full my-6 md:block"></hr>
          <p className="text-xl text-center font-body mb-14 md:text-left">Locally Owned & Operated <span className="px-2 text-3xl font-thin opacity-60">|</span> Affordable Pricing <span className="hidden px-2 text-3xl font-thin opacity-60 md:inline-block">|</span> Licensed & Fully Insuranced </p>
          <ButtonYellow target="#contact" label="Get Your Free Estimate"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
