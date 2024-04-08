import { faRotateRight } from "@fortawesome/free-solid-svg-icons"
import * as React from "react"

const badgeStyle = {
}

const Badge = () =>{
  return(
    <div className=" md:-scale-1 -rotate-12">
      <a href="https://www.homeadvisor.com/rated.TNHomeImprovementsLLC.121640948.html" className="block m-auto">
        <img alt="Screened HomeAdvisor Pro - T&N Home Improvements LLC" className="block" src="http://www.homeadvisor.com/images/sp-badges/soap-solid-border.png?sp=121640948&key=3865007d68144e088c77553e4752ab62" />
      </a>
    </div>
  )
}

export default Badge
