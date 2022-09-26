import * as React from "react"


export const Work = () =>{
  //#5a463d
  return(
    <section class="text-center bg-stone-600 text-white text-sm px-5 py-20 flex flex-col items-center justify-center">
      <h2 class="text-6xl font-semibold pb-8">Quality Guaranteed</h2>
      <ul class="grid list-inside w-full md:w-1/2 text-xl font-normal tracking-wide md:grid-cols-2 text-left m-auto md:gap-x-12 gap-y-10 py-5 list-disc">
        <li>Kitchens</li>
        <li>Baths</li>
        <li>Basements</li>
        <li>Interior Painting</li>
      </ul>
      <ul class="grid list-inside w-full md:w-1/2 text-xl font-normal tracking-wide md:grid-cols-2 text-left  m-auto md:gap-x-12 gap-y-10 py-5 list-disc">
        <li>Exterior Painting</li>
        <li>Pastering</li>
        <li>Drywall Installation & Repair</li>
        <li>Commercial & Residentaial</li>
      </ul>
      <div class="pt-16 pb-16">
        <a href="#contact" class=" border border-solid rounded-full bg-white text-black border-white  text-lg py-4 px-6 font-bold uppercase">Contact Us Today</a>
      </div>
    </section>
  )
}

export default Work
