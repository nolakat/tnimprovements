import * as React from "react"
import ButtonYellow from './ButtonYellow'

const Hero = () =>{
  return(
    <div className="heroContainer">
        <img className="heroContainer__image object-right" src={ '/tn_company01.jpg' } alt="TN Home Improvements Banner Image" />
      <div className="flex flex-col items-start justify-center text-white  h-full w-full from-slate-900/95 to-slate-800/30 md:to-zinc-50/5 z-10 bg-gradient-to-t md:bg-gradient-to-r">
        <div className="pl-8 pr-5 md:pr-0 md:pl-14 flex items-center md:items-start flex-col">
          {/* <h1 className=" text-5xl lg:text-8xl font-display font-bold text-center md:text-left">TN<br/>Home Improvements</h1> */}
          <h1 className=" text-5xl lg:text-8xl font-display font-bold text-center md:text-left">Big or Small<br/> We Do It All</h1>


          <hr className="my-6 hidden md:block w-full"></hr>
          <p className="text-xl font-body mb-14 text-center md:text-left">Locally Owned & Operated <span className="opacity-60 font-thin text-3xl px-2">|</span> Affordable Pricing <span className="font-thin opacity-60 text-3xl px-2 hidden md:inline-block">|</span> Licensed & Fully Insuranced </p>
          <ButtonYellow target="#contact" label="Get Your Free Estimate"/>
        </div>
      </div>
    </div>
  )
}

export default Hero
