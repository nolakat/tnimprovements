import React, { useState } from 'react';
// Layout component for page structure
import Layout from './layout';
// Component for before/after image comparison
import ReactCompareImage from 'react-compare-image';
// Gatsby's image processing component for optimized images
import { StaticImage } from 'gatsby-plugin-image';
// Carousel component for sliding images
import { Carousel } from 'react-responsive-carousel';
// Carousel styles
import 'react-responsive-carousel/lib/styles/carousel.min.css';


// Main component for the CommercialRemodel page
const CommercialRemodel = () => {

  return (
    <div className="bg-navy">
      <Layout marginTop={true}>
        {/* Hero section with responsive images */}
        <div className="relative m-auto max-w-screen-2xl md:h-96">
          <StaticImage
            loading="eager"
            src="../images/commercial_reno_cover.jpg"
            alt="TN Home Improvements Banner Image"
            placeholder="blurred"
            className="heroContainer__image"
            imgClassName="object-bottom"
            width={2400}
            height={1200}
          />
          {/* Placeholder for potentially interactive elements */}
          <div className="absolute top-0 z-20 p-5 scale-75 rounded-full md:scale-1"></div>
          {/* Page title section */}
          <div className="!absolute top-0 left-0 z-10 hidden w-full h-full px-8 text-white bg-gradient-to-t from-navy via-navy/50 to-navy md:flex md:bg-gradient-to-r md:justify-center md:items-center">
            <h1 className="relative pt-20 pr-5 m-auto text-4xl text-center text-white border-b-2 border-gold-100 md:pr-0">
              Commercial Remodeling
            </h1>
          </div>
        </div>

        {/* Content section with text and images */}
        <div className="flex flex-col px-12 md:flex-row gap-x-6 pt-14 pb-14">
          <div className="flex-1">
            {/* Example image - consider making dynamic */}
            <ReactCompareImage
              sliderLineColor="#f4c263"
              aspectRatio="wider"
              leftImage="commercial_before.jpg"
              rightImage="commercial_after_01.jpg"
            />
          </div>
          <div className="flex-1 py-16">
            {/* Text content */}
            <div className="text-white ">
              <h2 className="pb-6 text-2xl text-gold-100">Bringing Your Commercial Vision to Life</h2>
              <p>
                The remodel of this commercial space has swapped its once plain green interior for a vibrant, stylish look. A lively floral accent wall and a fresh pink door inject energy and personality. The existing wood flooring ties the new design together, creating a modern and welcoming environment for clients.
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-row px-12 gap-x-6 items-center justify-center">
          <div className="w-3/4 ">
            <Carousel
            key="1"
                showArrows={false}
                emulateTouch={true}
                infiniteLoop={true}
                interval={2000}
                showStatus={false}
                preventMovementUntilSwipeScrollTolerance={true}
                autoPlay>
                      <StaticImage
                          loading="eager"
                          src={"../images/juicy_studio/juicy_01.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-top"

                        />
                      <StaticImage
                          loading="eager"
                          src={"../images/juicy_studio/juicy_02.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-cover"

                        />
                        <StaticImage
                          loading="eager"
                          src={"../images/juicy_studio/juicy_03.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-cover"
                        />
                        <StaticImage
                          loading="eager"
                          src={"../images/juicy_studio/juicy_04.jpg"}
                          alt="TN Home Improvements Banner Image"
                          placeholder="blurred"
                          className=""
                          imgClassName="object-cover"

                        />

            </Carousel>
          </div>
        </div>

      </Layout>
    </div>
  );
};

export default CommercialRemodel;
