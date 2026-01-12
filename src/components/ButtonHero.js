import * as React from "react"

const ButtonHero = (props ) =>{
  return(
    <button onClick={() => props.setIsPopupVisible(true)}  className="block px-8 py-4 text-lg font-semibold border border-white border-solid text--uppercase text-gold-100 rounded-4xl button-yellow bg-navy border-1 font-body hover:bg-slate-600/50">{ props.label }</button>
  )
}

export default ButtonHero
