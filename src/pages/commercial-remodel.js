import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import ReactCompareImage from 'react-compare-image';
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRight, FaBuilding, FaClock, FaHandshake, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: FaBuilding,
    title: "Custom Design",
    description: "Tailored solutions for your unique space"
  },
  {
    icon: FaClock,
    title: "Minimal Downtime",
    description: "Efficient work to keep your business running"
  },
  {
    icon: FaHandshake,
    title: "Full Coordination",
    description: "We handle permits and inspections"
  },
  {
    icon: FaCheckCircle,
    title: "Quality Finish",
    description: "Professional results that impress clients"
  }
];

const CommercialRemodel = () => {
  return (
    <Layout marginTop={true}>
      <div className="service-detail">
        {/* Hero Section */}
        <section className="service-detail__hero">
          <div className="service-detail__hero-grid">
            <div className="service-detail__hero-content">
              <span className="service-detail__hero-label">Our Services</span>
              <h1 className="service-detail__hero-title">
                Commercial
                <span>Remodeling</span>
              </h1>
              <p className="service-detail__hero-description">
                Transform your business space with expert commercial renovation
                services. We deliver professional-grade results that enhance
                functionality and impress clients.
              </p>
            </div>
            <div className="service-detail__hero-compare">
              <ReactCompareImage
                sliderLineColor="#f4c263"
                sliderLineWidth={4}
                aspectRatio="wider"
                leftImage="/commercial_before.jpg"
                rightImage="/commercial_after_01.jpg"
              />
              <div className="service-detail__hero-compare-labels">
                <span>Before</span>
                <span>After</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="service-detail__gallery">
          <div className="service-detail__gallery-header">
            <h2 className="service-detail__gallery-title">Project Gallery</h2>
          </div>
          <div className="service-detail__gallery-grid">
            {/* Row 1 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/juicy_studio/juicy_01.jpg"
                  alt="Commercial Remodel - Vibrant New Interior"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">01</span>
                <h3 className="service-detail__gallery-subtitle">A Fresh New Look</h3>
                <p className="service-detail__gallery-text">
                  The transformation began with a complete reimagining of the space.
                  Bold colors and modern finishes replaced the dated interior, creating
                  an inviting atmosphere that reflects the business's vibrant personality.
                </p>
              </div>
            </div>

            {/* Row 2 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/juicy_studio/juicy_02.jpg"
                  alt="Commercial Remodel - Accent Wall Detail"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">02</span>
                <h3 className="service-detail__gallery-subtitle">Statement Accent Wall</h3>
                <p className="service-detail__gallery-text">
                  A lively floral accent wall serves as the focal point, injecting
                  energy and personality into the space. This eye-catching feature
                  creates the perfect backdrop for client interactions.
                </p>
              </div>
            </div>

            {/* Row 3 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/juicy_studio/juicy_03.jpg"
                  alt="Commercial Remodel - Modern Fixtures"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">03</span>
                <h3 className="service-detail__gallery-subtitle">Thoughtful Details</h3>
                <p className="service-detail__gallery-text">
                  Every element was carefully considered, from the fresh pink door
                  that adds a pop of color to the preserved wood flooring that ties
                  the design together seamlessly.
                </p>
              </div>
            </div>

            {/* Row 4 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/juicy_studio/juicy_04.jpg"
                  alt="Commercial Remodel - Final Result"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">04</span>
                <h3 className="service-detail__gallery-subtitle">The Final Result</h3>
                <p className="service-detail__gallery-text">
                  The completed space now welcomes clients with a modern, stylish
                  environment that perfectly represents the brand. A true transformation
                  from plain to extraordinary.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="service-detail__features">
          <div className="service-detail__features-header">
            <h2 className="service-detail__features-title">
              Why Choose <span>T&N</span>
            </h2>
          </div>
          <div className="service-detail__features-grid">
            {features.map((feature, index) => (
              <div key={index} className="service-detail__feature">
                <div className="service-detail__feature-icon">
                  <feature.icon />
                </div>
                <h3 className="service-detail__feature-title">{feature.title}</h3>
                <p className="service-detail__feature-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-detail__cta">
          <div className="service-detail__cta-content">
            <h2 className="service-detail__cta-title">Ready to Transform Your Space?</h2>
            <p className="service-detail__cta-text">
              Let's discuss your commercial remodeling project. Get a free
              consultation and detailed estimate from our expert team.
            </p>
            <Link to="/contact" className="service-detail__cta-button">
              Get Your Free Estimate
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CommercialRemodel;
