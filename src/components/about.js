import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"


const AboutBlock = (props) =>{
  return (
    <li className="flex flex-col items-center justify-center px-4 py-8 gap-y-3">
       <FontAwesomeIcon className="h-12" icon={props.icon} />
       <h5 className="capitalize">{ props.title }</h5>
    </li>
  )
}


const AboutUs = () =>{


  return (
    <section id="about" className="flex flex-col items-center justify-center pt-20 text-center">
      <h2 className="px-5 mb-4 text-5xl font-normal">20+ Years of Experience</h2>
      <p className="max-w-4xl px-5 pt-4 text-2xl leading-relaxed">T&N Home Improvements is made of two hard-working and motivated men with over 20 years experience combined in the construction industry. We offer Property Maintenance, Small Remodel Jobs, and Handyman Services in the city of Pittsburgh and surrounding areas.</p>
      <h3 className="pt-20 pb-8 text-4xl font-semibold">Our Values</h3>
      <ul className="grid grid-cols-2 text-lg font-light md:grid-cols-3 gap-y-6 gap-x-6">
        <AboutBlock icon="clock" title="On time arrivals" />
        <AboutBlock icon="ranking-star" title="The job done right the first time" />
        <AboutBlock icon="handshake" title="An honest Opinion" />
        <AboutBlock icon="broom" title="Clean up the mess we made when the job is done" />
        <AboutBlock icon="circle-check" title="Quality work and craftmanship guarantee" />
      </ul>
      <div className="w-full mt-20">
        <div className="relative grid grid-rows-3 px-5 md:grid-rows-1 md:grid-cols-2 gap-x-5 gap-y-5">



        <div className="relative h-96">
          <div className="absolute z-20 w-full h-full from-slate-900/70 via-slate-50/0 to-zinc-50/0 bg-gradient-to-t"></div>
          <StaticImage
            loading="lazy"
            src="../images/tn_jeff_01.jpg"
            alt='TN Home Improvement Contractor Jeff in action'
            placeholder="blurred"
            className="z-10 object-cover w-full h-full"
            fit="cover"
            width={1600}
            height={1200}
          />
       </div>


       <div className="relative h-96">
          <div className="absolute z-20 w-full h-full from-slate-900/70 via-slate-50/0 to-zinc-50/0 bg-gradient-to-t"></div>
          <StaticImage
            loading="lazy"
            src='../images/tn_turk_01.jpg'
            alt='TN Home Improvement Contractor Micheal in action'
            placeholder="blurred"
            className="z-10 object-cover w-full h-full"
            fit="cover"
            width={800}
            height={600}
          />
       </div>


          <div id="services" className="absolute bottom-0 w-full bg-blue-200/20 h-1/2 -z-10"></div>

        </div>
      </div>
    </section>
  )
}




// const TripleImage = ( props ) =>{

//   const image = images[props.index].image
//   console.log('IMAGE', image);


//   return(
//     <div className="relative h-96">
//       <div className="absolute z-20 w-full h-full from-slate-900/70 via-slate-50/0 to-zinc-50/0 bg-gradient-to-t"></div>
//       <StaticImage
//         loading="lazy"
//         src={ image }
//         alt={ 'hello' }
//         placeholder="blurred"
//         className="z-10 object-cover w-full h-full"
//         fit="cover"
//         width={800}
//         height={600}
//       />
//     </div>
//   )
// }


export default AboutUs
