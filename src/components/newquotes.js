import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ButtonYellow from "./ButtonYellow";
import { StaticImage } from "gatsby-plugin-image"



const data = [
  {
    text: "I recently had T&N Home Improvement built out a closet in a bedroom for me along with drywall installation and drywall finishing. They kept communication with me throughout the entire process. Very professional and exceptional work. Highly recommend.",
    author: "jackie oehmler",
    link: "https://g.co/kgs/xSBPCE"
  },
  {
    text: "Couldn’t be happier that I hired T&N home improvements. Jeff and Michael remodeled my basement, installed a railing for my basement stairs and also installed a front storm door. Extremely satisfied with the finished product! They were very fast for a very reasonable price, can’t thank them enough!",
    author: "george hartmann",
    link: "https://g.co/kgs/UccFy1"
  },
  {
    text: "T&N top notch service! They came in and fired up the remaining trim on the walls quickly! Looks fantastic! Couldn't be more happy with the quality service they provided.",
    author: "Zachary Maug",
    link: "https://g.co/kgs/L19ks4"
  }
]



const QuoteBlock = (props) =>{

  const { text, author, link } = props.content
  const stars = [];
  for(let i = 0; i < 5; i ++){
    stars.push(<FontAwesomeIcon key={i} icon="star"  />)
  }

  return(
    <div class="flex flex-col">
            <div className="flex flex-row text-gold-100 gap-x-2">{ stars }</div>

      <div class="flex grid-cols-2 grid-flow-dense pt-2 gap-x-1 items-end">
      <StaticImage
                    loading="lazy"
                    src="../images/google_icon.png"
                    alt='Google Icon'
                    placeholder="none"
                    className="w-5 h-5"
                    fit="cover"
                    width={100}
                    height={100}
                  />
        <a href={link} className="relative pl-2 text-lg font-bold capitalize text-gold-100 w-fit top-2" target="_blank">{author}</a>
        <div className="flex-1 border-b border-1 border-gold-100/50"></div>
      </div>
      <p className="pt-4 text-lg font-light text-white">{text}</p>
      {props.text}
    </div>
  )
}


const NewQuotes = () => {

  const AllQuotes = [];

  for( let i = 0; i < data.length; i++){
    AllQuotes.push(<QuoteBlock content={data[i]} />)
  }

  return(
    <section class=" bg-navy">
      <div class="max-w-screen-2xl m-auto py-20">
       <div class="hidden px-8 md:px-16 md:grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-x-12 gap-y-28">

        <div class="row-span-2">
          <QuoteBlock content={data[0]} />
        </div>
        <div class="row-span-2"><QuoteBlock content={data[1]} /></div>
        <div class="row-span-1 col-start-3 row-start-1">
          <QuoteBlock content={data[2]} />
        </div>
        <div class="row-span-1 col-start-3 row-start-2">
         <QuoteBlock content={data[2]} />
        </div>
        <div class="row-span-1 col-start-4 row-start-1">
          <QuoteBlock content={data[2]} />
        </div>
        <div class="row-span-1 col-start-4 row-start-2">
         <QuoteBlock content={data[2]} />
        </div>
       </div>

       <div className="flex flex-col px-6 md:hidden gap-y-16">
        {AllQuotes}
       </div>


       {/* <div class="flex justify-center pt-20">
          <ButtonYellow label="See All Reviews" target="" />
        </div> */}

      </div>

    </section>
  )
}

export default NewQuotes
