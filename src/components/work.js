import * as React from "react"
import ButtonYellow from "./ButtonYellow"
import Quotes from './quotes'

export const Work = () =>{
  return(
    <section className="text-center bg-blue-200/20  text-black text-sm px-5 py-20 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-semibold pb-8">Quality Guaranteed</h2>
      <p className="text-xl max-w-3xl px-5 leading-relaxed">T&N is your one stop shop for all your home improvement and property maintenance needs! We hold ourselves to a high standard of quality workmanship  no matter how big or small the job is.</p>
      <div className="pt-16 pb-16">
        <ButtonYellow target="#contact" label="Contact Us Today"/>
      </div>
      <Quotes />
    </section>
  )
}

export default Work
