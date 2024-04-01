import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"



const data = [
  {
    text: "T&N did my salon (twice) for me. They are the most genuine people. These guys will help you start to finish with your dream project. They are affordable and trustworthy. I would recommend to anyone!!",
    author: "Katie Seder",
    link: "https://g.co/kgs/L19ks4"
  },
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
  },
  {
    text: "I had a great experience with T&N home improvement. I had a list of items to be completed in my home and they were all completed in a day with exceptional quality of work. Jeff Nolan and Travis were great! I will definitely use them again for any work in my home.",
    author: "Cornelia Coles",
    link: "https://g.co/kgs/L19ks4"
  },
  {
    text: "We worked directly with Jeff, and it was a great experience. He was prompt on timing and always kept you in the loop with how the project was moving. I can't recommend this service enough. We had a floor put in the basement and Jeff had the best price by far, of 3 other competitors. Probably one of this nicest people I've met in a long time! Book these guys for your next project, you will not regret it.",
    author: "Lee King",
    link: "https://g.co/kgs/L19ks4"
  },
  {
    text: "Jeff worked wonders and created an amazing deck for my house. Would recommend for any home improvement project.",
    author: "Jimmy's Mom",
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
    <div className="flex flex-col">
            <div className="flex flex-row text-gold-100 gap-x-2">{ stars }</div>

      <div className="flex items-end grid-cols-2 pt-2 grid-flow-dense gap-x-1">
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
        <a href={link} className="relative pl-2 text-lg font-bold capitalize text-gold-100 w-fit top-2" target="_blank" rel="noreferrer">{author}</a>
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
    <section className=" bg-navy">
      <div className="py-20 m-auto max-w-screen-2xl">
       <div className="hidden grid-cols-1 px-8 md:px-16 md:grid md:grid-cols-4 md:grid-rows-2 gap-x-12 gap-y-28">

        <div className="row-span-2">
          <QuoteBlock content={data[0]} />
        </div>
        <div className="row-span-2"><QuoteBlock content={data[1]} /></div>
        <div className="col-start-3 row-span-1 row-start-1">
          <QuoteBlock content={data[2]} />
        </div>
        <div className="col-start-3 row-span-1 row-start-2">
         <QuoteBlock content={data[3]} />
        </div>
        <div className="col-start-4 row-span-1 row-start-1">
          <QuoteBlock content={data[4]} />
        </div>
        <div className="col-start-4 row-span-1 row-start-2">
         <QuoteBlock content={data[5]} />
        </div>
       </div>

       <div className="flex flex-col px-6 md:hidden gap-y-16">
        {AllQuotes}
       </div>


       {/* <div className="flex justify-center pt-20">
          <ButtonYellow label="See All Reviews" target="" />
        </div> */}

      </div>

    </section>
  )
}

export default NewQuotes
