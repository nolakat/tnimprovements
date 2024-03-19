import React from "react"
import ButtonWhite from "./ButtonWhite"

export const CallOut = ({ setIsPopupVisible }) =>{

  return(
    <div className="py-20 text-center bg-white text-darkNavy">
      <div className="mb-16">
        <h1 class="text-3xl mb-8">Special Financing Available</h1>
        <p className="block max-w-screen-lg m-auto">Unlock your home's potential now with our special financing options! Tailored for affordability, our flexible plans ensure you can start your home improvement projects today without stretching your budget. Ask us how to get started.</p>
      </div>
      <div class=" w-80 m-auto">
        <ButtonWhite isLink={true} link="#ContactForm"  label="GET YOUR FREE ESTIMATE" />
      </div>


    </div>
  )
}


export default CallOut
