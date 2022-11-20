import * as React from "react"

const ButtonYellow = (props) =>{
  return(
    <a href={props.target} className="block px-8 py-4 text-lg font-semibold text-black border border-solid button-yellow border-amber-400 bg-amber-400 border-1 font-body hover:bg-amber-400">{ props.label }</a>
  )
}

export default ButtonYellow
