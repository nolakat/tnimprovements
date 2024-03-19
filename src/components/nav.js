import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from '../images/tn_logo.svg'
import Icon from '../icons/phone.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


const MainMenu = () =>{
  return(
    <ul className="items-center hidden px-5 py-1 rounded-3xl md:flex menuContainer bg-gold-100">
     <li><div className="flex items-center font-semibold" ><FontAwesomeIcon className="w-6 mr-2 text-navy" icon={faPhone} />(412) 508-5078</div></li>
     <li></li>
      <div class="text-xl flex flex-row gap-x-4 lg:gap-x-6">
        <a href="https://www.facebook.com/profile.php?id=100077605338760" className="text-navy" aria-label="go to facebook page"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href="https://www.instagram.com/tn_homeimprovements/" className="text-navy" aria-label="go to instagram page"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
      </div>
    </ul>
/* <ul className="hidden px-5 py-1 rounded-2xl md:flex menuContainer bg-gold-100">
<li><a className="menuContainer__link scroll-smooth" href="#about">Services</a></li>
<li><a className="menuContainer__link" href="#gallery">Testimonials</a></li>
<li><a className="menuContainer__link" href="#contact">Contact</a></li>
</ul> */
  )
}


const MobileMenu = ({ handleClick }) =>{
  return(
<ul className="flex flex-col items-center h-full p-10 gap-y-10">
  <li>
    <Link to="/services" className="block px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-150 rounded-lg hover:text-gray-600">
      Services
    </Link>
  </li>
  <li>
    <Link to="/steps" className="block px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-150 rounded-lg hover:text-gray-600">
      Our Process
    </Link>
  </li>
  <li>
    <Link to="/who-are-we" className="block px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-150 rounded-lg hover:text-gray-600">
      Who Are We
    </Link>
  </li>
  <li>
    <Link to="/contact" className="block px-4 py-2 text-lg font-medium text-gray-800 transition-colors duration-150 rounded-lg hover:text-gray-600">
      Contact
    </Link>
  </li>
</ul>

  )
}

const CallNow = () =>{
  return(
    <div className="flex flex-row">
      <img src={ Icon} className="h-6 relative top-1.5" />
      <a href="tel:412-508-5078" className="font-thin text-red-500">(412) 508-5078 dfs</a>
    </div>
  )
}

const MobileTrigger = ({ handleClick, active}) =>{

  return(
    <div className="wrap md:hidden">
      <div onClick={handleClick} class={`burger ${ active ? "active" : "" }`}>
        <div className="strip burger-strip-2">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}


const NavBar = () =>{

  const [active, setActive] = useState(false);

  const handleClick =()=> {
    setActive(!active)
  }


  return(
    <div className="sticky top-0 z-50 block w-full md:absolute bg-navy">
    <div className="sticky top-0 left-0 right-0 z-50 md:absolute">
      <div className="m-auto bg-navy ">
        <div className="flex justify-between row-auto px-8 py-8 m-auto max-w-screen-2xl">
          <Link to="/" className="flex flex-row items-end justify-center h-full text-md gap-x-1">
              <img src={Logo} alt="TN Home Improvements Logo" className="h-10" />
              <h5 class="text-white leading-none">Home<br/>Improvements</h5>
            </Link>
          <MainMenu />
          <MobileTrigger active={active} handleClick={handleClick}  />
        </div>
        <div class={`w-full h-screen overflow-hidden ${ active ? "block" : "hidden"} `}>
          <div class={`h-screen w-full relative bg-white transition-all ease-in-out duration-200 ${ active ? "-left-0" : "left-full"}`}>
            <MobileMenu handleClick={handleClick}  />
          </div>
        </div>
      </div>
      <div class="hidden md:flex flex-row mx-14">
        <div class="flex-1">

         </div>
        <div class="flex-1 flex flex-row flex-end gap-x-8 py-5 px-5 bg-navy/75 text-gold uppercase">
        <Link to="/services" class="text-gold-100 cursor-pointer underline-animation relative font-display border-" activeClassName="font-display text-gold-100">Services</Link>
        {/* <h5 class="text-gold-100 cursor-pointer underline-animation relative">Gallery</h5> */}
        <Link to="/steps" class="text-gold-100 cursor-pointer underline-animation relative font-display"  activeClassName="font-display text-gold-100">Our Process</Link>
        <Link to="/who-are-we" class="text-gold-100 cursor-pointer underline-animation relative font-display"  activeClassName="font-display text-gold-100">Who Are We</Link>

        <Link to="/contact" class="text-gold-100 cursor-pointer underline-animation relative font-display"  activeClassName="font-display text-gold-100">Contact</Link>
        </div>
      </div>

    </div>

</div>
  )
}



export default NavBar
