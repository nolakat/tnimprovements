import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { SEO } from "../components/seo"
import Layout from './layout'
import Badge from '../components/badge'
import GrayscaleMap from '../components/googleMap'
import CountyMap from '../components/countyMap'
import NewGallery from '../components/newgallery'
import { FaArrowRight, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const services = [
  {
    title: "Commercial Remodeling",
    description: "Transform your business space with professional renovations.",
    link: "/commercial-remodel",
    image: "commercial"
  },
  {
    title: "Basement Refinishing",
    description: "Unlock hidden potential with beautiful finished basements.",
    link: "/drywalling",
    image: "basement"
  },
  {
    title: "Doors & Framing",
    description: "Precision craftsmanship for every entrance and structure.",
    link: "/doors-framing",
    image: "doors"
  },
  {
    title: "Home Renovation",
    description: "Complete transformations with attention to every detail.",
    link: "/home-renovation",
    image: "renovation"
  },
  {
    title: "Patios & Outdoor",
    description: "Custom outdoor living spaces for relaxation and entertainment.",
    link: "/patios",
    image: "patios"
  },
  {
    title: "Property Maintenance",
    description: "Keep your property in prime condition year-round.",
    link: "/services",
    image: "maintenance"
  }
];

const ServiceCard = ({ title, description, link, image }) => (
  <Link to={link} className="homepage__service-card">
    <div className="homepage__service-image">
      {image === "commercial" && (
        <StaticImage
          src="../images/doors/commercial_after_01.jpg"
          alt={title}
          placeholder="blurred"
          className="w-full h-full"
        />
      )}
      {image === "basement" && (
        <StaticImage
          src="../images/doors/drywall_after_04.jpg"
          alt={title}
          placeholder="blurred"
          className="w-full h-full"
        />
      )}
      {image === "doors" && (
        <StaticImage
          src="../images/doors/framing_after_02.jpg"
          alt={title}
          placeholder="blurred"
          className="w-full h-full"
        />
      )}
      {image === "renovation" && (
        <StaticImage
          src="../images/home_reno_01.jpg"
          alt={title}
          placeholder="blurred"
          className="w-full h-full"
        />
      )}
      {image === "patios" && (
        <StaticImage
          src="../images/patio_after_02.jpg"
          alt={title}
          placeholder="blurred"
          className="w-full h-full"
        />
      )}
      {image === "maintenance" && (
        <StaticImage
          src="../images/tn_turk_01.jpg"
          alt={title}
          placeholder="blurred"
          className="w-full h-full"
        />
      )}
    </div>
    <div className="homepage__service-overlay" />
    <div className="homepage__service-body">
      <h3 className="homepage__service-title">{title}</h3>
      <p className="homepage__service-description">{description}</p>
    </div>
  </Link>
);

const IndexPage = () => {
  return (
    <Layout topMargin={false} hideFinance={true}>
      <div className="homepage">
        {/* Hero Section */}
        <section className="homepage__hero">
          <div className="homepage__hero-bg">
            <StaticImage
              src="../images/tn_company01.jpg"
              alt="T&N Home Improvements"
              placeholder="blurred"
              className="w-full h-full"
              imgClassName="object-cover object-center"
            />
          </div>
          <div className="homepage__hero-content">
            <span className="homepage__hero-label">Pittsburgh's Trusted Contractor</span>
            <h1 className="homepage__hero-title">
              Building Pittsburgh Dreams, <span>One Home At A Time.</span>
            </h1>
            <div className="homepage__hero-tagline">
              <span>Locally Owned & Operated</span>
              <span className="homepage__hero-tagline-divider">|</span>
              <span>Affordable Pricing</span>
              <span className="homepage__hero-tagline-divider">|</span>
              <span>Licensed & Fully Insured</span>
            </div>
            <div className="homepage__hero-cta">
              <a href="#ContactFooter" className="homepage__hero-button homepage__hero-button--primary">
                Get Your Free Estimate
                <FaArrowRight />
              </a>
            </div>
            <div className="homepage__hero-stats">
              <div className="homepage__hero-stat">
                <div className="homepage__hero-stat-number">20<span>+</span></div>
                <div className="homepage__hero-stat-label">Years Experience</div>
              </div>
              <div className="homepage__hero-stat">
                <div className="homepage__hero-stat-number">500<span>+</span></div>
                <div className="homepage__hero-stat-label">Projects Done</div>
              </div>
              <div className="homepage__hero-stat">
                <div className="homepage__hero-stat-number">100<span>%</span></div>
                <div className="homepage__hero-stat-label">Satisfaction</div>
              </div>
              <div className="homepage__hero-badge">
                <Badge />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="homepage__services">
          <div className="homepage__services-header">
            <h2 className="homepage__services-title">
              What We <span>Do</span>
            </h2>
            <Link to="/services" className="homepage__services-link">
              View All Services
              <FaArrowRight />
            </Link>
          </div>
          <div className="homepage__services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>

        {/* Before & After Gallery */}
        <NewGallery />

            {/* About Section */}
        <section className="homepage__about">
          <div className="homepage__about-grid">
            <div className="homepage__about-image">
              <StaticImage
                src="../images/about-us.jpeg"
                alt="T&N Home Improvements Team"
                placeholder="blurred"
                className="w-full"
              />
            </div>
            <div className="homepage__about-content">
              <span className="homepage__about-label">About Us</span>
              <h2 className="homepage__about-title">
                Three Craftsmen, One Mission: Your Dream Home
              </h2>
              <p className="homepage__about-text">
                We are a team of three local professionals with over 20 years
                of combined experience in the construction industry. Our mission
                is to help you transform your home into a space that perfectly
                aligns with your vision and needs.
              </p>
              <p className="homepage__about-text">
                Whether it's a minor update or a comprehensive overhaul, our
                expertise ensures that every project is handled with meticulous
                care and precision.
              </p>
              <Link to="/who-are-we" className="homepage__about-button">
                Learn More About Us
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="homepage__service-area">
          <div className="homepage__service-area-content">
            <span className="homepage__service-area-label">
              <FaMapMarkerAlt />
              Service Area
            </span>
            <h2 className="homepage__service-area-title">
              Proudly Serving <span>Pittsburgh</span> & Surrounding Areas
            </h2>
            <p className="homepage__service-area-text">
              From the North Hills to the South Side, we bring quality craftsmanship
              to homeowners across the greater Pittsburgh region.
            </p>

          </div>
          <div className="homepage__service-area-map">
            <CountyMap />
          </div>
        </section>






        {/* CTA Section */}
        <section className="homepage__cta">
          <div className="homepage__cta-content">
            <h2 className="homepage__cta-title">Ready to Start Your Project?</h2>
            <p className="homepage__cta-text">
              Get a free, no-obligation estimate from our team. We'll discuss
              your vision, assess your needs, and provide transparent pricing.
            </p>
            <a href="#ContactFooter" className="homepage__cta-button">
              Get Your Free Estimate
              <FaArrowRight />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

export function Head() {
  return (
    <SEO />
  )
}
