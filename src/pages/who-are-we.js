import React, { useState, useEffect } from 'react';
import Layout from './layout'
import ButtonWhite from "../components/ButtonWhite";
import PopupForm from '../components/popup';


import { StaticImage } from "gatsby-plugin-image"
import { FaFacebook, FaInstagram } from 'react-icons/fa';


import 'react-responsive-carousel/lib/styles/carousel.min.css';


const WhoAreWe = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');


  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'unset'; // Enable scrolling
    }
  }, [isPopupVisible]); // This effect depends on `isPopupVisible`



  return (
    <div class="bg-white">
      <PopupForm isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} />
    <Layout marginTop={true} hideFinance={true}>
      <div className="flex flex-col px-12 pt-10 md:flex-row gap-x-6">
        <div className="flex-1">

                <div className="flex flex-col items-center justify-center py-16 odd:float-left even:float-right">
                    <StaticImage
                        loading="eager"
                        src={"../images/about-us.jpeg"}
                        alt="TN Home Improvements Banner Image"
                        placeholder="blurred"
                        className=""
                        imgClassName="object-top"
                        width={2400}
                        height={1200}
                      />
                  </div>

        </div>
        <div className="flex-1 py-10">
          <div className="px-8 py-16 text-navy">
            <h1 className="pb-2 m-auto text-4xl text-center border-b-2 text-navy border-gold-100 w-fit font-display">Who Are We</h1>
            <div class="text-2xl flex flex-row gap-x-6 items-center justify-center mt-2">
              <a href="https://www.facebook.com/profile.php?id=100077605338760" aria-label="go to facebook page"><FaFacebook color="#1e283b" size="25" /></a>
              <a href="https://www.instagram.com/tn_homeimprovements/" aria-label="go to instagram page"><FaInstagram color="#1e283b" size="25" /></a>
            </div>
            <p className="pt-6">
            We are a team of three local professionals, combining over 20 years of experience in the construction industry. Our mission is to help you transform your home into a space that perfectly aligns with your vision and needs. Whether it’s a minor update or a comprehensive overhaul, our expertise ensures that every project is handled with meticulous care and precision. We pride ourselves on our collaborative approach, working closely with you to bring your dream home to life. Trust in T&N Home Improvements for a seamless, high-quality renovation experience.
            </p>
          </div>
        </div>
      </div>
    </Layout>
    </div>
  );
};

export default WhoAreWe;
