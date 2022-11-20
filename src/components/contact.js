import * as React from "react";
import Icon from '../icons/phone.svg'


export const contact = () =>{
  const dummy_text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut varius eros. Maecenas enim mi, dignissim sed enim in, rutrum finibus eros. "

  return (
    <section id="contact" className="px-5 py-32 ">
      <div className="m-auto text-center">
        <h3 className="pb-4 text-4xl max-w-prose">Contact Us</h3>
        {/* <p className="text-lg max-w-prose">{ dummy_text }</p> */}

        <div className="flex flex-col items-center pt-6 gap-y-3">
          <a className="text-4xl font-semibold hover:underline" href="emailto:jeff@tnimprovements.com" >jeff@tnimprovements.com</a>
          <div className="flex flex-row pt-2">
              <a href="tel:412-508-5078" className="text-2xl font-semibold text-black">(412) 508-5078</a>
          </div>
        </div>

        <form className="flex flex-col max-w-3xl m-auto mt-12 gap-y-4" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <div class="flex flex-col md:flex-row gap-x-8 gap-y-4">
            <div className="flex flex-row flex-1 w-full gap-x-8">
              <div className="flex flex-col items-start flex-1">
                <label className="text-lg" for="name">Name</label>
                <input className="w-full border-2" type="text" name="firstName" required />
              </div>
            </div>
            <div className="flex flex-col items-start flex-1">
              <label className="text-lg" for="phone">Phone Number</label>
              <input className="w-full border-2" type="tel" name="phone" required/>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg" for="message">Tell Us About Your Project</label>
            <textarea className="w-full border-2" type="textarea" name="message" required />
          </div>

          <button type="submit" className="block px-8 py-4 text-lg font-semibold text-white bg-black border border-black border-solid button-black border-1 font-body">Submit</button>


        </form>
      </div>
    </section>
  )
}

export default contact
