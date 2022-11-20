import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () =>{
  return(
    <div className="flex flex-row items-center justify-between w-full py-6 text-white bg-slate-800 px-14">
      <div>
        <p class=" italic">Copyright © {new Date().getFullYear()} TN Home Improvements</p>
      </div>
      <div class="text-2xl flex flex-row gap-x-6">
        <a href="https://www.facebook.com/profile.php?id=100077605338760" aria-label="go to facebook page"><FontAwesomeIcon icon={['fab', 'facebook']} /></a>
        <a href="https://www.instagram.com/tn_homeimprovements/" aria-label="go to instagram page"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href="" aria-label="go to instagram page"><FontAwesomeIcon icon={['fab', 'tiktok']} /></a>
      </div>
    </div>
  )
}

export default Footer
