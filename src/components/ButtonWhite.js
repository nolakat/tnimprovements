import * as React from "react"



const ButtonWhite = ({isSmall, isWhite, isPopUpEnabled, setIsPopupVisible, label, isLink, link}) =>{

  const Button = () =>(
    <button  onClick={() => isPopUpEnabled && setIsPopupVisible(true)} className={`${isWhite ? 'text-white' : 'text-gold-100'} ${isSmall ? 'px-4 py-2' : 'px-8 py-4'} block text-lg font-semibold border border-solid border-darkNavy text--uppercase rounded-4xl button-yellow button-white bg-navy border-1 font-body hover:bg-slate-600/50`} >{ label }</button>
  )

  const Link = () =>(
    <a href={link} className={`${isWhite ? 'text-white' : 'text-gold-100'} ${isSmall ? 'px-8 py-2' : 'px-8 py-4'} block text-lg font-semibold border border-solid border-darkNavy text--uppercase rounded-4xl button-yellow button-white bg-navy border-1 font-body hover:bg-slate-600/50`} >{ label }</a>
  )

  return isLink ?(
    <Link />
  ) : (
    <Button />
  )
}

export default ButtonWhite
