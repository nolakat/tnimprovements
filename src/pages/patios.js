import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import ReactCompareImage from 'react-compare-image';
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRight, FaTree, FaUmbrella, FaHammer, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: FaTree,
    title: "Outdoor Living",
    description: "Extend your living space into the great outdoors"
  },
  {
    icon: FaUmbrella,
    title: "Entertainment Ready",
    description: "Perfect for gatherings and relaxation"
  },
  {
    icon: FaHammer,
    title: "Custom Built",
    description: "Designed to fit your space and style"
  },
  {
    icon: FaShieldAlt,
    title: "Weather Protected",
    description: "Sealed and treated for durability"
  }
];

const Patios = () => {
  return (
    <Layout marginTop={true}>
      <div className="service-detail">
        {/* Hero Section */}
        <section className="service-detail__hero">
          <div className="service-detail__hero-grid">
            <div className="service-detail__hero-content">
              <span className="service-detail__hero-label">Our Services</span>
              <h1 className="service-detail__hero-title">
                Patios &
                <span>Outdoor Living</span>
              </h1>
              <p className="service-detail__hero-description">
                Extend your living space outdoors. Custom patio designs and
                installations that create the perfect setting for relaxation
                and entertainment.
              </p>
            </div>
            <div className="service-detail__hero-compare">
              <ReactCompareImage
                sliderLineColor="#f4c263"
                sliderLineWidth={4}
                aspectRatio="wider"
                leftImage="/patio_before_01.jpg"
                rightImage="/patio_after_02.jpg"
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
            <h2 className="service-detail__gallery-title">The Build Process</h2>
          </div>
          <div className="service-detail__gallery-grid">
            {/* Row 1 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/patio_cover.jpg"
                  alt="Patios - Site Preparation"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">01</span>
                <h3 className="service-detail__gallery-subtitle">Site Preparation</h3>
                <p className="service-detail__gallery-text">
                  Cleared and prepped the backyard area, removing debris and
                  leveling the ground for a solid foundation. Proper preparation
                  ensures a lasting, stable deck.
                </p>
              </div>
            </div>

            {/* Row 2 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/patio_after_01.jpg"
                  alt="Patios - Quality Construction"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">02</span>
                <h3 className="service-detail__gallery-subtitle">Quality Construction</h3>
                <p className="service-detail__gallery-text">
                  Built a spacious wooden deck using premium materials for
                  durability and longevity. Every board is carefully placed
                  for a beautiful, even surface.
                </p>
              </div>
            </div>

            {/* Row 3 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/patio_after_02.jpg"
                  alt="Patios - Finishing Touches"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">03</span>
                <h3 className="service-detail__gallery-subtitle">Sealed & Protected</h3>
                <p className="service-detail__gallery-text">
                  Sealed and treated the wood to protect against the elements
                  and ensure easy maintenance. Your patio will look great for
                  years to come.
                </p>
              </div>
            </div>

            {/* Row 4 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/doors/patio_after_03.jpg"
                  alt="Patios - Completed Outdoor Space"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">04</span>
                <h3 className="service-detail__gallery-subtitle">Your Outdoor Retreat</h3>
                <p className="service-detail__gallery-text">
                  The finished patio is now the perfect backdrop for family
                  barbecues, morning coffees, or simply soaking up some sun
                  in your own private retreat.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="service-detail__features">
          <div className="service-detail__features-header">
            <h2 className="service-detail__features-title">
              Why Build a <span>Patio</span>
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
            <h2 className="service-detail__cta-title">Ready for Your Outdoor Retreat?</h2>
            <p className="service-detail__cta-text">
              Let's design the perfect patio for your home. Get a free
              consultation and see how we can transform your backyard.
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

export default Patios;
