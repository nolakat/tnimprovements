import * as React from "react"
import BeforeAfter from "./beforeAfter"


const Gallery = () =>{
  return(
    <section id="gallery" class="bg-stone-600 pb-20">
      <BeforeAfter before={'/ceiling_before_01.jpg'} after={'/ceiling_after_01.jpg'} />
      <BeforeAfter before={'/drywall_before_01.jpg'} after={'/drywall_after_01.jpg'} />
    </section>
  )
}


export default Gallery
