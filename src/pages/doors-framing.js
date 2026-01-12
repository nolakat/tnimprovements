import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRight, FaDoorOpen, FaRulerCombined, FaSun, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaDoorOpen,
    title: "Custom Fit",
    description: "Precision measurements for perfect installation"
  },
  {
    icon: FaRulerCombined,
    title: "Expert Framing",
    description: "Structural integrity with clean lines"
  },
  {
    icon: FaSun,
    title: "Natural Light",
    description: "Glass options to brighten your space"
  },
  {
    icon: FaShieldAlt,
    title: "Quality Materials",
    description: "Durable doors built to last"
  }
];

const DoorsFraming = () => {
  return (
    <Layout marginTop={true}>
      <div className="service-detail">
        {/* Hero Section */}
        <section className="service-detail__hero">
          <div className="service-detail__hero-grid">
            <div className="service-detail__hero-content">
              <span className="service-detail__hero-label">Our Services</span>
              <h1 className="service-detail__hero-title">
                Doors &
                <span>Framing</span>
              </h1>
              <p className="service-detail__hero-description">
                Precision craftsmanship for every entrance. From interior doors
                to structural framing, we ensure perfect fits and lasting
                quality that transforms your space.
              </p>
            </div>
            <div className="service-detail__hero-compare">
              <StaticImage
                src="../images/doors/framing_after_02.jpg"
                alt="Professional Door Installation"
                placeholder="blurred"
                className="shadow-2xl"
              />
              <div className="service-detail__hero-compare-labels">
                <span>Expert Installation</span>
                <span>Quality Finish</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="service-detail__gallery">
          <div className="service-detail__gallery-header">
            <h2 className="service-detail__gallery-title">Our Craftsmanship</h2>
          </div>
          <div className="service-detail__gallery-grid">
            {/* Row 1 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/framing_after_01.jpg"
                  alt="Doors & Framing - Modern Door Installation"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">01</span>
                <h3 className="service-detail__gallery-subtitle">Modern Door Installation</h3>
                <p className="service-detail__gallery-text">
                  Removed outdated doors and prepared openings for new installations.
                  Modern doors with frosted glass panels allow natural light while
                  maintaining privacy.
                </p>
              </div>
            </div>

            {/* Row 2 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/framing_after_03.jpg"
                  alt="Doors & Framing - Clean Trim Work"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">02</span>
                <h3 className="service-detail__gallery-subtitle">Crisp, Clean Trim</h3>
                <p className="service-detail__gallery-text">
                  Doors trimmed with crisp, white framing for a fresh and clean-lined
                  aesthetic. Every detail is finished to perfection for a polished
                  professional look.
                </p>
              </div>
            </div>

            {/* Row 3 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/framing_after_04.jpg"
                  alt="Doors & Framing - Structural Framing"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">03</span>
                <h3 className="service-detail__gallery-subtitle">Structural Excellence</h3>
                <p className="service-detail__gallery-text">
                  Expert framing ensures structural integrity while creating clean
                  lines. We handle everything from load-bearing walls to simple
                  partition framing.
                </p>
              </div>
            </div>

            {/* Row 4 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/framing_after_05.jpg"
                  alt="Doors & Framing - Completed Project"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">04</span>
                <h3 className="service-detail__gallery-subtitle">Professional Results</h3>
                <p className="service-detail__gallery-text">
                  The finished result brings a more professional and polished
                  atmosphere to any environment. Doors selected to match your
                  design, blending functionality and style.
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
            <h2 className="service-detail__cta-title">Need New Doors or Framing?</h2>
            <p className="service-detail__cta-text">
              Let's discuss your project. Whether it's a single door replacement
              or complete framing work, we deliver precision craftsmanship.
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

export default DoorsFraming;
