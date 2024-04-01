import React, { useState } from 'react';
import Layout from "./layout"


const Spinner = () => (
  <svg width="100" height="100" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" fill="none" stroke="#f4c263" strokeWidth="4" strokeDasharray="31.4" strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"/>
    </circle>
  </svg>
);

const ContactPage = () => {


  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true); // Start loading

  //   // Simulate an API call
  //   try {
  //     // Here you would replace this setTimeout with your actual API call
  //     await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call delay

  //     // If successful
  //     console.log('successful');
  //     setIsLoading(false);
  //     setIsSent(true);

  //     setSubmissionMessage(`Thank you! We've received your message and will be in touch soon.`);

  //     // setIsPopupVisible(false); // Optionally close the popup on form submission success
  //   } catch (error) {
  //     // If there's an error
  //     console.log('error');
  //     setIsLoading(false);
  //     setSubmissionMessage('An error occurred. Please try again.');
  //     setIsSent(true);

  //   }
  // };

  return (

     <Layout marginTop={true} hideForm={true}>
        <div className="max-w-4xl px-8 pb-20 m-auto pt-28 md:px-16">
        {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="loader"><Spinner /></div> {/* Add your spinner here */}
              </div>
            ) : (
              <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">

{isSent ? (
                <>{submissionMessage}</>
              ) : (

                <>
                <h1 className="mb-8 text-2xl text-center">Get Your Free Estimate</h1>
                <p className="mb-8">Looking for a home upgrade? Fill out the form below to get a free estimate. We'll provide personalized solutions for your project and help turn your vision into reality.</p>

                <input type="hidden" name="form-name" value="contact" />
                <div className="flex flex-col md:flex-row gap-x-8 gap-y-4">
                  <div className="flex flex-row flex-1 w-full gap-x-8">
                    <div className="flex flex-col items-start flex-1">
                      <label className="text-lg" for="name">Name
                      <input className="w-full border-2" type="text" name="firstName" required />
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col items-start flex-1">
                    <label className="text-lg" for="phone">*Phone Number
                    <input className="w-full border-2" type="tel" name="phone" required/>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-7">
                  <label className="text-lg" for="message">*Tell Us About Your Project
                  <textarea className="w-full border-2" type="textarea" name="message" required />
                  </label>
                </div>

                <button type="submit" className="block px-6 py-2 m-auto text-lg font-semibold mt-7 min-w-44 w-fit bg-gold-100 text-darkNavy rounded-4xl font-body">Submit</button>
                </>
              )}
              </form>
            )}
        </div>
      </Layout>
  )
}


export default ContactPage
