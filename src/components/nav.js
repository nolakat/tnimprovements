import React, { useState } from "react"
import Logo from '../images/tn_logo.svg'
import Icon from '../icons/phone.svg'


const MainMenu = () =>{
  return(
    <ul className="hidden shadow-2xl menuContainer md:flex">
      <li><a className="menuContainer__link scroll-smooth" href="#services">Services</a></li>
      <li><a className="menuContainer__link" href="#gallery">Gallery</a></li>
      <li><a className="menuContainer__link" href="#contact">Contact</a></li>
      {/* <li className="menuContainer__link flex flex-row items-center"><CallNow /></li> */}
    </ul>
  )
}


const MobileMenu = () =>{
  return(
    <ul className="flex flex-col items-center h-full p-10 gap-y-10">
      <li><a className="menuContainer__link" href="#services">Services</a></li>
      <li><a className="menuContainer__link" href="#gallery">Gallery</a></li>
      <li><a className="menuContainer__lin" href="#contact">Contact</a></li>
    </ul>
  )
}

const CallNow = () =>{
  return(
    <div className="flex flex-row">
      <img src={ Icon} className="h-6 relative top-1.5" />
      <a href="tel:412-508-5078" className="font-xl font-semibold text-black">(412) 508-5078</a>
    </div>
  )
}

const MobileTrigger = ({ handleClick, active}) =>{

  return(
    <div className="wrap md:hidden">
      <div className="flex items-center pr-5">
        <CallNow />
      </div>
      {/* <div onClick={handleClick} class={`burger ${ active ? "active" : "" }`}>
        <div className="strip burger-strip-2">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
    </div>
  )
}


const NavBar = () =>{

  const [active, setActive] = useState(false);

  const handleClick =()=> {
    setActive(!active)
  }


  return(
    <div className="sticky top-0 z-50 h-20 bg-white navWrapper">
      <div className="h-20 m-auto navContainer max-w-screen-3xl p-x-12">
        <div className="h-full flex flex-col py-3 justify-center items-start gap-x-1 text-lg">
          <img src={Logo} className="h-full" />
          <h5>Home Improvements</h5>
        </div>
        <MainMenu />
        <MobileTrigger active={active} handleClick={handleClick}  />
      </div>
      <div class={`w-full h-screen overflow-hidden ${ active ? "block" : "hidden"} `}>
        <div class={`h-screen w-full relative bg-white transition-all ease-in-out duration-200 ${ active ? "-left-0" : "left-full"}`}>
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}



export default NavBar
