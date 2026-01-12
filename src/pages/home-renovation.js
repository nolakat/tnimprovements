import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import ReactCompareImage from 'react-compare-image';
import { StaticImage } from 'gatsby-plugin-image';
import { FaArrowRight, FaTools, FaPaintRoller, FaCouch, FaHome } from 'react-icons/fa';

const features = [
  {
    icon: FaTools,
    title: "Expert Repairs",
    description: "From minor fixes to major repairs done right"
  },
  {
    icon: FaPaintRoller,
    title: "Custom Finishes",
    description: "Paint, trim, and details that transform"
  },
  {
    icon: FaCouch,
    title: "Living Spaces",
    description: "Functional designs for how you live"
  },
  {
    icon: FaHome,
    title: "Whole Home",
    description: "Interior and exterior renovations"
  }
];

const HomeRenovations = () => {
  return (
    <Layout marginTop={true}>
      <div className="service-detail">
        {/* Hero Section */}
        <section className="service-detail__hero">
          <div className="service-detail__hero-grid">
            <div className="service-detail__hero-content">
              <span className="service-detail__hero-label">Our Services</span>
              <h1 className="service-detail__hero-title">
                Home Repairs &
                <span>Renovation</span>
              </h1>
              <p className="service-detail__hero-description">
                From minor repairs to complete transformations. Our skilled team
                handles projects of any scale with attention to detail and
                craftsmanship you can trust.
              </p>
            </div>
            <div className="service-detail__hero-compare">
              <ReactCompareImage
                sliderLineColor="#f4c263"
                sliderLineWidth={4}
                aspectRatio="wider"
                leftImage="/home_reno_before.jpg"
                rightImage="/home_reno_after_01.jpg"
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
            <h2 className="service-detail__gallery-title">Featured Projects</h2>
          </div>
          <div className="service-detail__gallery-grid">
            {/* Row 1 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/home_reno_01.jpg"
                  alt="Home Renovation - Custom Built-Ins"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">01</span>
                <h3 className="service-detail__gallery-subtitle">Custom Built-Ins</h3>
                <p className="service-detail__gallery-text">
                  Designed and installed custom floating shelves and sleek white
                  cabinets around the fireplace, combining functionality with
                  aesthetic appeal to create a stunning focal point.
                </p>
              </div>
            </div>

            {/* Row 2 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/home_reno_after_01.jpg"
                  alt="Home Renovation - Living Space Transformation"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">02</span>
                <h3 className="service-detail__gallery-subtitle">Living Space Transformation</h3>
                <p className="service-detail__gallery-text">
                  Natural wood finishes contrast beautifully with painted surfaces,
                  creating a cohesive look that enhances your home's character
                  while maximizing storage and display space.
                </p>
              </div>
            </div>

            {/* Row 3 - Image Left */}
            <div className="service-detail__gallery-row">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/home_renovation/home_reno_before_02.jpg"
                  alt="Home Renovation - Patio Ceiling Before"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">03</span>
                <h3 className="service-detail__gallery-subtitle">Outdoor Renovations</h3>
                <p className="service-detail__gallery-text">
                  We don't just work indoors. From covered patio ceilings to
                  exterior repairs, we transform outdoor spaces with the same
                  attention to detail as interior projects.
                </p>
              </div>
            </div>

            {/* Row 4 - Image Right */}
            <div className="service-detail__gallery-row service-detail__gallery-row--reverse">
              <div className="service-detail__gallery-image">
                <StaticImage
                  src="../images/home_renovation/home_reno_after_02.jpg"
                  alt="Home Renovation - Patio Ceiling After"
                  placeholder="blurred"
                />
              </div>
              <div className="service-detail__gallery-content">
                <span className="service-detail__gallery-number">04</span>
                <h3 className="service-detail__gallery-subtitle">Polished Results</h3>
                <p className="service-detail__gallery-text">
                  New beadboard paneling, recessed lighting, and quality finishes
                  create bright, welcoming spaces perfect for relaxation or
                  hosting gatherings with family and friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="service-detail__features">
          <div className="service-detail__features-header">
            <h2 className="service-detail__features-title">
              Complete <span>Home Services</span>
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
            <h2 className="service-detail__cta-title">Ready to Transform Your Home?</h2>
            <p className="service-detail__cta-text">
              Whether it's a repair or a complete renovation, we're here to help.
              Get a free consultation and detailed estimate for your project.
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

export default HomeRenovations;
