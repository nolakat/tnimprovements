import * as React from "react"


const BeforeAfter = (props) =>{


 return(
    <div className="px-5 pb-20 flex flex-col md:flex-row gap-6">
      <div className="flex-1 relative">
        <p className="absolute mt-4 ml-4 text-white font-semibold">Before</p>
        <img className="w-full max-h-96 object-cover"  src={ props.before } alt="Before Image" width="100%" height="500" />
      </div>
      <div className="flex-1">
        <p className="absolute mt-4 ml-4 text-white font-semibold">After</p>
        <img className="w-full max-h-96 object-cover" src={ props.after} alt="After Image" width="100%" height="500" />
      </div>
    </div>
 )
}

export default BeforeAfter
