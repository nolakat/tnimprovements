import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"


export const Work = () =>{
  return(
    <section className="m-auto text-sm text-center text-black py-28 border-1 max-w-screen-2xl">
      <h1 className="pb-12 text-4xl font-semibold ">Over 20 Years of Experience</h1>
      <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-y-20 gap-x-6 ">
        <div className="flex flex-col md:flex-col justify-top items-center">
            <StaticImage
            loading="eager"
              src="../images/icon_crafts.jpg"
              alt="TN Home Improvements Banner Image"
              placeholder="blurred"
              className="rounded-full shadow-lg w-52"
              imgClassName="object-bottom"
              width={400}
              height={400}
            />
          <h2 className="pb-8 mt-6 text-2xl font-semibold">Quality Craftsmanship</h2>
          <p className="max-w-3xl px-5 pb-6 text-lg leading-relaxed">We strive to be your one stop shop for all your home improvement and property maintenance needs. We hold ourselves to a high standard of quality workmanship  no matter how big or small the job is.</p>
          {/* <ButtonYellow target="#" label="See Our Work" /> */}
        </div>
        <div className="flex flex-col justify-top items-center">
          <StaticImage
              loading="eager"
                src="../images/icon_integrity.jpg"
                alt="TN Home Improvements Banner Image"
                placeholder="blurred"
                className="rounded-full shadow-lg w-52"
                imgClassName="object-bottom"
                width={400}
                height={400}
              />
          <h2 className="pb-8 mt-6 text-2xl font-semibold">Integrity and Honesty</h2>
          <p className="max-w-3xl px-5 pb-6 text-lg leading-relaxed">
           Our dedication to doing right by our clients enhances the quality of our work and strengthens the trust we build. In every job, big or small, we're not just serving customers; we're taking care of our neighbors.
          </p>
          {/* <ButtonYellow target="#" label="Contact Us" /> */}
        </div>
        <div className="flex flex-col justify-top items-center">
        <StaticImage
              loading="eager"
                src="../images/icon_satisfaction.jpg"
                alt="TN Home Improvements Banner Image"
                placeholder="blurred"
                className="rounded-full shadow-lg w-52"
                imgClassName="object-bottom"
                width={400}
                height={400}
              />
          <h2 className="pb-8 mt-6 text-2xl font-semibold">Customer Satisfaction and Service</h2>
          <p className="max-w-3xl px-5 pb-6 text-lg leading-relaxed">We go the extra mile to make sure you're happy with every aspect of our work, from start to finish. Whether it’s a small fix or a major renovation, we listen to your needs, keep you in the loop, and ensure the end result is exactly what you envisioned.
          </p>
          {/* <ButtonYellow target="#" label="What Our Clients Say" /> */}
        </div>
      </div>
      {/* <Quotes /> */}
    </section>
  )
}

export default Work
