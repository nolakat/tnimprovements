import * as React from "react"

const Hero = () =>{
  return(
    <div class="heroContainer">
        <img class="heroContainer__image object-right" src={ '/tn_company01.jpg' } alt="TN Home Improvements Banner Image" />
      <div class="flex flex-col items-start justify-center text-white  h-full w-full from-slate-900/95 to-slate-800/30 md:to-zinc-50/5 z-10 bg-gradient-to-t md:bg-gradient-to-r">
        <div class="pl-5 pr-5 md:pr-0 md:pl-8 flex items-center md:items-start flex-col">
          <h1 class=" text-5xl lg:text-8xl font-display font-bold text-center md:text-left">TN<br/>Home Improvements</h1>
          <hr class="my-6 hidden md:block w-full"></hr>
          <p class="text-xl font-body mb-14 font-extralight text-center md:text-left">Locally Owned & Operated <span class="opacity-60 font-thin text-3xl px-2">|</span> Affordable Pricing <span class="font-thin opacity-60 text-3xl px-2 hidden md:inline-block">|</span> Licensed & Fully Insuranced </p>
          <a href="#contact" class=" border border-solid border-amber-400 bg-amber-400 text-slate-900 font-body rounded-full hover:bg-amber-400 text-lg py-4 px-8 font-semibold">Get Your Free Estimate</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
