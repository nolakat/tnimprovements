import * as React from "react"

const AboutUs = () =>{

  const dummy_text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut varius eros. Maecenas enim mi, dignissim sed enim in, rutrum finibus eros. "

  return (
    <section class="pt-20 text-center flex flex-col items-center justify-center">
      <h2 class="text-5xl mb-4 font-normal px-5">Over A Decade of Experience</h2>
      <p class="text-xl max-w-4xl font-light px-5">{ dummy_text } </p>
      <div class="mt-14 w-full">
        <TripleImages />
      </div>
    </section>
  )
}

const TripleImages = () =>{
  return(
    <div class="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-x-5 relative px-5 gap-y-5">
      <TripleImage  image={'/tn_jeff_01.jpg'} alt="TN Home Improvement Contractor Jeff in action" />
      <TripleImage  image={'/tn_turk_01.jpg'} alt="TN Home Imrpovement Contractor Mike in action" />
      <TripleImage  image={ '/tn_van_01.jpg'} alt="TN Home Improvement Van parked in driveway" />
      <div id="services" class="bg-stone-600 absolute w-full h-1/2 -z-10 bottom-0"></div>
    </div>
  )
}

const TripleImage = ( props ) =>{
  return(
    <div class="relative h-96">
      <div class="absolute w-full h-full from-slate-900/70 via-slate-50/0 to-zinc-50/0 bg-gradient-to-t z-20"></div>
      <img class="w-full h-full object-cover z-10" src={props.image} />
    </div>
  )
}

const BeforeAfter = () =>{
  return(
    <div>

    </div>
  )
}

export default AboutUs
