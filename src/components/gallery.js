import * as React from "react"
import ImageBeforeOne from '../images/ceiling_before_01.jpg'
import ImageAfterOne from '../images/ceiling_after_01.jpg'
import ImageBeforeTwo from '../images/drywall_before_01.jpg'
import ImageAfterTwo from '../images/drywall_after_01.jpg'
import BeforeAfter from "./beforeAfter"


const Gallery = () =>{
  return(
    <section id="gallery" class="bg-stone-600 pb-20">
      <BeforeAfter before={ImageBeforeOne} after={ImageAfterOne} />
      <BeforeAfter before={ImageBeforeTwo} after={ImageAfterTwo} />
    </section>
  )
}


export default Gallery
