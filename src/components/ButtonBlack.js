import * as React from "react"

const ButtonBlack = (props) =>{
  return(
    <a href={props.target} className="block px-8 py-4 text-lg font-semibold text-black bg-black border border-black border-solid button-yellow border-1 font-body hover:bg-amber-400">{ props.label }</a>
  )
}

export default ButtonBlack
