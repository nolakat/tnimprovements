import * as React from "react"
import { FaTools, FaDoorOpen, FaPaintRoller, FaUmbrellaBeach, FaHammer } from 'react-icons/fa';
import { MdBuild } from 'react-icons/md';


const AboutBlock = (props) =>{
  return (
    <li className="flex flex-col items-center flex-1 border-solid justify-top border-1 border-white/25">
      <div className="relative">
          {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="174" viewbox="0 0 200 173.20508075688772" className="scale-50">
            <path fill="#f4c263" d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"></path>
          </svg> */}
          <div className="absolute text-4xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-navy">
            {/* {props.icon} */}
            {/* < className="h-12" icon={props.icon} color="#050e1b" size="xl" width="40" /> */}
          </div>
      </div>
      <h3 className="pb-3 capitalize text-md border-gold-100">{ props.title }</h3>
    </li>

  )
}


const AboutUs = () =>{

  return (
    <section id="about" className="flex flex-col items-center justify-center w-full py-8 text-center text-white bg-navy">
      <div className="w-full px-8 m-auto md:px-16 max-w-screen-2xl">
        <h2 className="pb-2 m-auto mb-8 text-2xl font-bold border-b-4 border-gold-100 w-fit">Over 20 Years of Experience</h2>
        <ul className="grid flex-row grid-cols-2 text-lg font-light md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-6">
          <AboutBlock icon={<FaTools />} title="Home Repairs" />
          <AboutBlock icon={<FaPaintRoller />} title="Home Renovation" />
          <AboutBlock icon={<MdBuild />} title="Property Maintanence" />
          <AboutBlock icon={<FaHammer />} title="Drywalling" />
          <AboutBlock icon={<FaDoorOpen />} title="Doors & Framing" />
          <AboutBlock icon={<FaUmbrellaBeach />} title="Patios" />

        </ul>
      </div>
    </section>
  )
}

export default AboutUs
