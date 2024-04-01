import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from '../images/tn_logo.svg'
import { FaPhone, FaFacebookF, FaInstagram } from 'react-icons/fa';



const MainMenu = () =>{
  return(
    <ul className="items-center hidden px-5 py-1 rounded-3xl md:flex menuContainer bg-gold-100">
     <li><div className="flex items-center font-semibold" > <FaPhone size="1.2em" style={{ transform: 'scaleX(-1)' }} /> <span className="pl-2">(412) 508-5078</span></div></li>
     <li>
      <div className="flex flex-row text-xl gap-x-4 lg:gap-x-6">
        <a href="https://www.facebook.com/profile.php?id=100077605338760" className="text-navy" aria-label="go to facebook page"><FaFacebookF size="1em" /></a>
        <a href="https://www.instagram.com/tn_homeimprovements/" className="text-navy" aria-label="go to instagram page"><FaInstagram size="1em" /></a>
      </div>
      </li>
    </ul>
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


const MobileTrigger = ({ handleClick, handleKeyPress, active}) =>{

  return(
    <div className="wrap md:hidden">
      <div onClick={handleClick} role="button"  tabIndex="0" onKeyDown={handleKeyPress} className={`burger ${ active ? "active" : "" }`}>
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

  const handleKeyPress = (event) => {
    // Check if the key pressed is 'Enter'
    if (event.key === 'Enter') {
      setActive(!active)
    }
  };


  return(
    <div className="sticky top-0 z-50 block w-full md:absolute bg-navy">
    <div className="sticky top-0 left-0 right-0 z-50 md:absolute">
      <div className="m-auto bg-navy ">
        <div className="flex justify-between row-auto px-8 py-8 m-auto max-w-screen-2xl">
          <Link to="/" className="flex flex-row items-end justify-center h-full text-md gap-x-1">
              <img src={Logo} alt="TN Home Improvements Logo" className="h-10" />
              <h5 className="leading-none text-white">Home<br/>Improvements</h5>
            </Link>
          <MainMenu />
          <MobileTrigger active={active} handleClick={handleClick} onKeyDown={handleKeyPress} role="button"  tabIndex="0"  />
        </div>
        <div className={`w-full h-screen overflow-hidden ${ active ? "block" : "hidden"} `}>
          <div className={`h-screen w-full relative bg-white transition-all ease-in-out duration-200 ${ active ? "-left-0" : "left-full"}`}>
            <MobileMenu handleClick={handleClick} onKeyDown={handleKeyPress} role="button" tabIndex="0"  />
          </div>
        </div>
      </div>
      <div className="flex-row hidden md:flex mx-14">
        <div className="flex-1">

         </div>
        <div className="flex flex-row flex-1 px-5 py-5 uppercase flex-end gap-x-8 bg-navy/75 text-gold">
        <Link to="/services" className="relative cursor-pointer text-gold-100 underline-animation font-display border-" activeClassName="font-display text-gold-100">Services</Link>
        {/* <h5 className="relative cursor-pointer text-gold-100 underline-animation">Gallery</h5> */}
        <Link to="/steps" className="relative cursor-pointer text-gold-100 underline-animation font-display"  activeClassName="font-display text-gold-100">Our Process</Link>
        <Link to="/who-are-we" className="relative cursor-pointer text-gold-100 underline-animation font-display"  activeClassName="font-display text-gold-100">Who Are We</Link>

        <Link to="/contact" className="relative cursor-pointer text-gold-100 underline-animation font-display"  activeClassName="font-display text-gold-100">Contact</Link>
        </div>
      </div>

    </div>

</div>
  )
}



export default NavBar
