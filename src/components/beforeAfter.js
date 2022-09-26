import * as React from "react"


const BeforeAfter = (props) =>{


 return(
    <div class="px-5 pb-20 flex flex-col md:flex-row gap-6">
      <div class="flex-1 relative">
        <p class="absolute mt-4 ml-4 text-white font-semibold">Before</p>
        <img class="w-full max-h-96 object-cover"  src={ props.before } alt="Before Image" width="100%" height="500" />
      </div>
      <div class="flex-1">
        <p class="absolute mt-4 ml-4 text-white font-semibold">After</p>
        <img class="w-full max-h-96 object-cover" src={ props.after} alt="After Image" width="100%" height="500" />
      </div>
    </div>
 )
}

export default BeforeAfter
