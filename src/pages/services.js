import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import PopupForm from '../components/popup';

import { FaArrowCircleRight } from 'react-icons/fa';

import { StaticImage } from "gatsby-plugin-image"




import ServiceHero from '../components/servicesHero';
import SuccessStories from '../components/success_stories';

import ButtonWhite from "../components/ButtonWhite"
import ButtonYellow from '../components/ButtonYellow';


const ServicesPage = () => {

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
    <Layout marginTop={true}>
      <PopupForm  isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} />
      <ServiceHero image={"../images/services_hero.jpg"} />
      {/* Introduction Section */}
      <div className="pt-12 pb-4">
        <h1 className="text-3xl font-bold text-center">Our Services</h1>
        <p className="mt-4 text-lg text-center">Explore our wide range of home improvement services tailored to bring your dream home to life.</p>
      </div>

      {/* Services Categorized - Example Category */}
      <div className="px-8 m-auto my-10 pb-14 max-w-screen-2xl md:px-16">
        {/* Detailed Service Listings */}
        <div className="w-full">
          {/* Individual Service */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden border rounded-lg shadow-lg">
              <div className="">
                <StaticImage
                            loading="eager"
                            src={"../images/doors/commercial_after_01.jpg"}
                            alt="TN Home Improvements Banner Image"
                            placeholder="blurred"
                            className="w-full h-60"
                            imgClassName=""
                          />
              </div>
              <div className="px-6 pb-6">
              <h3 className="pt-2 text-xl font-semibold">Commercial Remodelling</h3>
              <p className="mt-2">Expert solutions for all your home repair needs, ensuring durability and quality with every fix.</p>
              <div class="mt-6 w-44 ">
                <Link to="/commercial-remodel" className="flex items-center pb-1 font-bold border-b-2 border-gold-100 w-fit">
                  Learn More
                  <FaArrowCircleRight className="relative ml-2 text-gold-100" />
                </Link>
              </div>
              </div>
            </div>

            <div className="overflow-hidden border rounded-lg shadow-lg ">
            <div className="">
                <StaticImage
                            loading="eager"
                            src={"../images/doors/drywall_after_04.jpg"}
                            alt="TN Home Improvements Banner Image"
                            placeholder="blurred"
                            className="w-full h-60"
                            imgClassName=""
                          />
              </div>
              <div className="px-6 pb-6">
                <h3 className="pt-2 text-xl font-semibold">Drywalling</h3>
                <p className="mt-2">Professional drywall installation and repair services to give your walls a flawless finish.</p>
                <div class="mt-6 w-44">
                  <Link to="/drywalling" className="flex items-center pb-1 font-bold border-b-2 border-gold-100 w-fit">
                    Learn More
                    <FaArrowCircleRight className="relative ml-2 text-gold-100" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border rounded-lg shadow-lg">
            <div className="">
                <StaticImage
                            loading="eager"
                            src={"../images/doors/framing_after_05.jpg"}
                            alt="TN Home Improvements Banner Image"
                            placeholder="blurred"
                            className="w-full h-60"
                            imgClassName=""
                          />
              </div>
              <div className="px-6 pb-6">
                <h3 className="pt-2 text-xl font-semibold">Doors & Framing</h3>
                <p className="mt-2">Enhance the entrance to your space with our door and framing services, tailored for beauty and function.</p>
                <div class="mt-6 w-44">
                  <Link to="/doors-framing" className="flex items-center pb-1 font-bold border-b-2 border-gold-100 w-fit">
                    Learn More
                    <FaArrowCircleRight className="relative ml-2 text-gold-100" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border rounded-lg shadow-lg">
            <div className="">
                <StaticImage
                            loading="eager"
                            src={"../images/tn_turk_01.jpg"}
                            alt="TN Home Improvements Banner Image"
                            placeholder="blurred"
                            className="w-full h-60"
                            imgClassName=""
                          />
              </div>
              <div class="px-6">
                <h3 className="pt-2 text-xl font-semibold">Property Maintenance</h3>
                <p className="mt-2">Comprehensive property maintenance services to keep your home in prime condition all year round.</p>
                <div class="mt-6 w-44">
                  {/* <Link to="/property-maintenance" className="flex items-center pb-1 font-bold border-b-2 border-gold-100 w-fit">
                    Learn More
                    <FaArrowCircleRight className="relative ml-2 text-gold-100" />
                  </Link> */}
                </div>
              </div>
            </div>

            <div className="overflow-hidden border rounded-lg shadow-lg">
            <div className="">
                <StaticImage
                            loading="eager"
                            src={"../images/home_reno_01.jpg"}
                            alt="TN Home Improvements Banner Image"
                            placeholder="blurred"
                            className="w-full h-60"
                            imgClassName=""
                          />
              </div>
              <div className="px-6 pb-6">
                <h3 className="pt-2 text-xl font-semibold">Home Repairs & Renovation</h3>
                <p className="mt-2">Transform your living space with our custom renovation services, from concept to completion.</p>
                <div class="mt-6 w-44">
                  <Link to="/home-renovation" className="flex items-center pb-1 font-bold border-b-2 border-gold-100 w-fit">
                    Learn More
                    <FaArrowCircleRight className="relative ml-2 text-gold-100" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border rounded-lg shadow-lg">
            <div className="">
                <StaticImage
                            loading="eager"
                            src={"../images/patio_after_02.jpg"}
                            alt="TN Home Improvements Banner Image"
                            placeholder="blurred"
                            className="w-full h-60"
                            imgClassName=""
                          />
              </div>
              <div className="px-6">
                <h3 className="pt-2 text-xl font-semibold">Patios</h3>
                <p className="mt-2">Create the perfect outdoor retreat with our custom patio designs and installation services.</p>
                <div class="mt-6 w-44">
                  <Link to="/patios" className="flex items-center pb-1 font-bold border-b-2 border-gold-100 w-fit">
                    Learn More
                    <FaArrowCircleRight className="relative ml-2 text-gold-100" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Repeat for other services */}
        </div>
      </div>

    </Layout>
  );
};

export default ServicesPage;
