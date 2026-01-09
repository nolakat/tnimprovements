import React, { useState, useEffect } from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import PopupForm from '../components/popup';
import { StaticImage } from "gatsby-plugin-image"
import { FaArrowRight, FaPhone } from 'react-icons/fa';

const services = [
  {
    number: "01",
    title: "Commercial Remodelling",
    description: "Transform your business space with our expert commercial renovation services. We deliver professional-grade results that enhance functionality and impress clients.",
    image: "commercial",
    link: "/commercial-remodel"
  },
  {
    number: "02",
    title: "Basement Refinishing",
    description: "Unlock your home's hidden potential. Our basement finishing services create beautiful, functional living spaces that add value to your property.",
    image: "basement",
    link: "/drywalling"
  },
  {
    number: "03",
    title: "Doors & Framing",
    description: "Precision craftsmanship for every entrance. From interior doors to structural framing, we ensure perfect fits and lasting quality.",
    image: "doors",
    link: "/doors-framing"
  },
  {
    number: "04",
    title: "Property Maintenance",
    description: "Comprehensive care to protect your investment. Regular maintenance services that keep your property in prime condition year-round.",
    image: "maintenance",
    link: null
  },
  {
    number: "05",
    title: "Home Repairs & Renovation",
    description: "From minor repairs to complete transformations. Our skilled team handles projects of any scale with attention to detail and craftsmanship.",
    image: "renovation",
    link: "/home-renovation"
  },
  {
    number: "06",
    title: "Patios & Outdoor Living",
    description: "Extend your living space outdoors. Custom patio designs and installations that create the perfect setting for relaxation and entertainment.",
    image: "patios",
    link: "/patios"
  }
];

const ServiceCard = ({ number, title, description, image, link }) => {
  const CardContent = () => (
    <>
      <div className="services-page__card-image">
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
            src="../images/working_04.jpg"
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
            src="../images/doors/patio_after_01.jpg"
            alt={title}
            placeholder="blurred"
            className="w-full h-full"
          />
        )}
        <div className="services-page__card-overlay" />
        <span className="services-page__card-number">{number}</span>
      </div>
      <div className="services-page__card-body">
        <h3 className="services-page__card-title">{title}</h3>
        <p className="services-page__card-description">{description}</p>
        {link && (
          <span className="services-page__card-link">
            View Details
            <FaArrowRight />
          </span>
        )}
      </div>
    </>
  );

  if (link) {
    return (
      <Link to={link} className="services-page__card">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="services-page__card">
      <CardContent />
    </div>
  );
};

const ServicesPage = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (isPopupVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isPopupVisible]);

  return (
    <Layout marginTop={true}>
      <PopupForm isPopupVisible={isPopupVisible} setIsPopupVisible={setIsPopupVisible} />

      <div className="services-page">
        {/* Hero Section */}
        <section className="services-page__hero">
          <div className="services-page__hero-content">
            <span className="services-page__hero-label">What We Do</span>
            <h1 className="services-page__hero-title">
              Quality Craftsmanship
              <span>For Every Project</span>
            </h1>
            <p className="services-page__hero-description">
              With over 20 years of experience serving Pittsburgh homeowners,
              we bring expertise, integrity, and attention to detail to every job—big or small.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="services-page__content">


          {/* Services Grid */}
          <div className="services-page__grid">
            {services.map((service) => (
              <ServiceCard key={service.number} {...service} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="services-page__cta">
          <div className="services-page__cta-content">
            <h2 className="services-page__cta-title">Ready to Start Your Project?</h2>
            <p className="services-page__cta-text">
              Get a free, no-obligation estimate from our team. We'll discuss your vision,
              assess your needs, and provide transparent pricing.
            </p>
            <a href="#ContactFooter" className="services-page__cta-button">
              Get Your Free Estimate
              <FaArrowRight />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ServicesPage;
