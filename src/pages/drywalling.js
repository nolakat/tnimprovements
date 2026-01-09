import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import ReactCompareImage from 'react-compare-image';
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRight, FaHome, FaThermometerHalf, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const features = [
  {
    icon: FaHome,
    title: "Added Living Space",
    description: "Transform unused space into functional rooms"
  },
  {
    icon: FaThermometerHalf,
    title: "Better Insulation",
    description: "Improved comfort and energy efficiency"
  },
  {
    icon: FaLightbulb,
    title: "Modern Lighting",
    description: "Strategic recessed lighting throughout"
  },
  {
    icon: FaCheckCircle,
    title: "Clean Finish",
    description: "Professional drywall with seamless results"
  }
];

const Drywalling = () => {
  return (
    <Layout marginTop={true}>
      <div className="service-detail">
        {/* Hero Section */}
        <section className="service-detail__hero">
          <div className="service-detail__hero-grid">
            <div className="service-detail__hero-content">
              <span className="service-detail__hero-label">Our Services</span>
              <h1 className="service-detail__hero-title">
                Basement
                <span>Refinishing</span>
              </h1>
              <p className="service-detail__hero-description">
                Unlock your home's hidden potential. Our basement finishing
                services create beautiful, functional living spaces that add
                value to your property.
              </p>
            </div>
            <div className="service-detail__hero-compare">
              <ReactCompareImage
                sliderLineColor="#f4c263"
                sliderLineWidth={4}
                aspectRatio="wider"
                leftImage="/drywall_before_help.jpg"
                rightImage="/drywall_after_01.jpg"
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
            <h2 className="service-detail__gallery-title">The Transformation</h2>
          </div>
          <div className="service-detail__gallery-grid">
            {/* Row 1 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/drywall_after_01.jpg"
                  alt="Basement Refinishing - Fresh Drywall Ceiling"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">01</span>
                <h3 className="service-detail__gallery-subtitle">Seamless Ceiling</h3>
                <p className="service-detail__gallery-text">
                  Replaced the exposed ceiling with fresh drywall, creating a
                  seamless and refined finish. Painted bright white to enhance
                  the sense of space and light.
                </p>
              </div>
            </div>

            {/* Row 2 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/drywall_after_02.jpg"
                  alt="Basement Refinishing - Modern Recessed Lighting"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">02</span>
                <h3 className="service-detail__gallery-subtitle">Modern Lighting</h3>
                <p className="service-detail__gallery-text">
                  Installed modern recessed lighting, strategically placed for
                  an even, ambient glow that brings the room to life and makes
                  the space feel open and inviting.
                </p>
              </div>
            </div>

            {/* Row 3 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/drywall_after_03.jpg"
                  alt="Basement Refinishing - Clean Wall Finish"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">03</span>
                <h3 className="service-detail__gallery-subtitle">Clean Wall Finish</h3>
                <p className="service-detail__gallery-text">
                  The walls received new drywall for a clean and insulated
                  environment. Professional taping and finishing ensure a
                  flawless, paint-ready surface.
                </p>
              </div>
            </div>

            {/* Row 4 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/drywall_after_04.jpg"
                  alt="Basement Refinishing - Completed Space"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">04</span>
                <h3 className="service-detail__gallery-subtitle">Ready to Enjoy</h3>
                <p className="service-detail__gallery-text">
                  This makeover provided the basement with a welcoming, finished
                  look that's perfect for entertaining, a home office, or just
                  kicking back and relaxing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="service-detail__features">
          <div className="service-detail__features-header">
            <h2 className="service-detail__features-title">
              Why Finish Your <span>Basement</span>
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
            <h2 className="service-detail__cta-title">Ready to Transform Your Basement?</h2>
            <p className="service-detail__cta-text">
              Let's discuss your basement refinishing project. Get a free
              consultation and see how we can unlock your home's hidden potential.
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

export default Drywalling;
