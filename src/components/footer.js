import React, { useState } from 'react';
import GrayscaleMap from "./googleMap";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram } from 'react-icons/fa';

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

const Footer = ({ hideFinance, hideForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log('TARGET', e.target);

    const formData = new FormData(e.target);

    console.log('FORM DATA', ...formData)
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      }).then((e) => console.log("Form successfully submitted", e))
      ;
      setSubmissionMessage(`Thank you! We've received your message and will be in touch soon.`);
      setTimeout(() => {
        setIsLoading(false);
        setIsSent(true);
      }, 1600);
    } catch (error) {
      setSubmissionMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="bg-white">
      {!hideFinance && (
        <div className="px-10 py-2 text-center bg-gold-100">
          <div className="flex flex-col items-center py-8 text-center text-darkNavy">
            <h4 className="pb-1 m-auto mb-2 border-b-2 text-md border-navy w-fit">???? WTF  Special Financing Available</h4>
            <h2 className="mt-4 text-2xl">Call <span className="font-bold">412-508-5078</span> To Talk About Your Project</h2>
          </div>
        </div>
      )}

      {!hideForm && (
        <div className="flex flex-col pb-10 md:flex-row">
          {isLoading ? (
            <div className="flex items-center justify-center flex-1 py-16 px-14"><Spinner /></div>
          ) : (
            <form id="ContactForm" className="flex-1 py-16 px-14" data-netlify="true" name="ContactForm" onSubmit={handleSubmit}>
              {isSent ? (
                <>{submissionMessage}</>
              ) : (
                <>
                  <h3 className="text-3xl">Get Your Free Estimate</h3>
                  <p className="pt-2 text-lg">by calling <span className="font-bold">412-508-5078</span> or by filling out the form below and we will contact you as soon as possible.</p>
                  <div className="flex flex-col mt-8 md:flex-row gap-x-8 gap-y-4">
                    <div className="flex flex-row flex-1 w-full gap-x-8">
                      <div className="flex flex-col items-start flex-1">
                        <label className="text-lg" htmlFor="name">*Name</label>
                        <input className="w-full border-2" type="text" name="name" required />
                      </div>
                    </div>
                    <div className="flex flex-col items-start flex-1">
                      <label className="text-lg" htmlFor="phone">*Phone Number</label>
                      <input className="w-full border-2" type="tel" name="phone" required/>
                    </div>
                  </div>
                  <div className="flex flex-col items-start mt-7">
                    <label className="text-lg" htmlFor="message">*How Can We Help You?</label>
                    <textarea className="w-full border-2" name="message" required />
                  </div>
                  <button type="submit" className="block px-6 py-2 m-auto text-lg font-semibold mt-7 min-w-44 w-fit bg-gold-100 text-darkNavy rounded-4xl">Submit</button>
                </>
              )}
            </form>
          )}
          <div className="flex-1">
            <GrayscaleMap />
            <div className="flex flex-col pt-4 gap-y-2">
              <div className="flex flex-row items-center">
                <FaEnvelope size="1.2em" /> <span className="pl-2">jeff@tnimprovements.com</span>
              </div>
              <div className="flex flex-row items-center">
                <FaPhone size="1.2em" style={{ transform: 'scaleX(-1)' }} /> <span className="pl-2">(412) 508-5078</span>
              </div>
            </div>
            <div className="pt-2">
              <h5>Office</h5>
              <p>108 Bellpark Dr <br/> Pittsburgh, PA 15229-2120</p>
            </div>
            <div className="pt-2">
              <h5>Hours of Operation</h5>
              <p>Mon - Sun <br/>Open 24 Hours</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-row items-center justify-between w-full py-6 text-white bg-slate-800 px-14">
        <p className="italic">Copyright © {new Date().getFullYear()} TN Home Improvements</p>
        <div className="flex flex-row text-2xl gap-x-6">
          <a href="https://www.facebook.com/profile.php?id=100077605338760" aria-label="Go to Facebook page">
            <FaFacebookF size="1em" />
          </a>
          <a href="https://www.instagram.com/tn_homeimprovements/" aria-label="Go to Instagram page">
            <FaInstagram size="1em" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
