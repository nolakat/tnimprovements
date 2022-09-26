import * as React from "react";
import Icon from '../icons/phone.svg'


export const contact = () =>{
  const dummy_text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut varius eros. Maecenas enim mi, dignissim sed enim in, rutrum finibus eros. "

  return (
    <section id="contact" class=" py-32 px-5">
      <div class="text-center m-auto w-fit">
        <h3 class="text-4xl pb-4 max-w-prose">Contact Us</h3>
        {/* <p class="text-lg max-w-prose">{ dummy_text }</p> */}

        <div class="pt-6 flex flex-col items-center gap-y-3">
          <a class="text-4xl font-semibold hover:underline" href="emailto:jeff@tnimprovements.com" >jeff@tnimprovements.com</a>
          <div class="flex flex-row pt-2">
              <a href="tel:412-508-5078" class="text-2xl font-semibold text-black">(412) 508-5078</a>
          </div>
        </div>
        {/* <form class="flex flex-col gap-y-4 mt-12">
          <div class="flex flex-row w-full gap-x-8">
            <div class="flex flex-col items-start flex-1">
              <label for="firstName">First Name</label>
              <input class="w-full" type="text" name="firstName" required />
            </div>
            <div class="flex flex-col items-start flex-1">
              <label for="lasttName">Last Name</label>
              <input class="w-full" type="text" name="lastName" required />
            </div>
          </div>
          <div class="flex flex-col items-start">
            <label for="phone">Phone Number</label>
            <input class="w-full" type="tel" name="phone" required/>
          </div>
          <div class="flex flex-col items-start">
            <label for="message">Message</label>
            <textarea class="w-full" type="textarea" name="message" required />
          </div>
          <button type="submit">Submit</button>
        </form> */}
      </div>
    </section>
  )
}

export default contact
