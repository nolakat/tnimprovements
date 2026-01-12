import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";
import { FaFacebookF, FaInstagram, FaHandshake, FaAward, FaHardHat, FaArrowRight } from 'react-icons/fa';

const values = [
  {
    icon: FaHandshake,
    title: "Integrity First",
    description: "We believe in honest communication, transparent pricing, and doing the right thing—even when no one's watching."
  },
  {
    icon: FaAward,
    title: "Quality Craftsmanship",
    description: "Every nail, every joint, every finish is done with precision. We take pride in work that stands the test of time."
  },
  {
    icon: FaHardHat,
    title: "Local Expertise",
    description: "As Pittsburgh natives, we understand the unique challenges of local homes and bring solutions tailored to our community."
  }
];

const stats = [
  { number: "20", suffix: "+", label: "Years Experience" },
  { number: "500", suffix: "+", label: "Projects Completed" },
  { number: "100", suffix: "%", label: "Satisfaction Rate" },
  { number: "3", suffix: "", label: "Expert Craftsmen" }
];

const WhoAreWe = () => {
  return (
    <Layout marginTop={true} hideFinance={true}>
      <div className="about-page">
        {/* Hero Section */}
        <section className="about-page__hero">
          <div className="about-page__hero-content">
            <span className="about-page__hero-label">About Us</span>
            <h1 className="about-page__hero-title">
              Built on Trust,
              <span>Driven by Craft</span>
            </h1>
            <p className="about-page__hero-description">
              We're a team of dedicated professionals committed to transforming
              Pittsburgh homes with quality workmanship and genuine care.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-page__story">
          <div className="about-page__story-grid">
            <div className="about-page__story-image">
              <StaticImage
                src="../images/about-us.jpeg"
                alt="T&N Home Improvements Team"
                placeholder="blurred"
                className="w-full"
              />
            </div>
            <div className="about-page__story-content">
              <span className="about-page__story-label">Our Story</span>
              <h2 className="about-page__story-title">
                Three Craftsmen, One Mission: Your Dream Home
              </h2>
              <p className="about-page__story-text">
                We are a team of three local professionals, combining over 20 years
                of experience in the construction industry. Our mission is to help
                you transform your home into a space that perfectly aligns with your
                vision and needs.
              </p>
              <p className="about-page__story-text">
                Whether it's a minor update or a comprehensive overhaul, our expertise
                ensures that every project is handled with meticulous care and precision.
                We pride ourselves on our collaborative approach, working closely with
                you to bring your dream home to life.
              </p>
              <p className="about-page__story-text">
                Trust in T&N Home Improvements for a seamless, high-quality renovation
                experience that exceeds expectations.
              </p>
              <div className="about-page__story-social">
                <span>Follow Us</span>
                <a
                  href="https://www.facebook.com/profile.php?id=100077605338760"
                  className="about-page__social-link"
                  aria-label="Visit our Facebook page"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/tn_homeimprovements/"
                  className="about-page__social-link"
                  aria-label="Visit our Instagram page"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-page__values">
          <div className="about-page__values-header">
            <h2 className="about-page__values-title">
              What <span>Sets Us Apart</span>
            </h2>
            <p className="about-page__values-subtitle">
              Our commitment to excellence goes beyond the tools we use. It's about
              the values we bring to every project.
            </p>
          </div>
          <div className="about-page__values-grid">
            {values.map((value, index) => (
              <div key={index} className="about-page__value-card">
                <div className="about-page__value-icon">
                  <value.icon />
                </div>
                <h3 className="about-page__value-title">{value.title}</h3>
                <p className="about-page__value-text">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-page__stats">
          <div className="about-page__stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-page__stat">
                <div className="about-page__stat-number">
                  {stat.number}<span>{stat.suffix}</span>
                </div>
                <div className="about-page__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-page__cta">
          <div className="about-page__cta-content">
            <h2 className="about-page__cta-title">Ready to Work Together?</h2>
            <p className="about-page__cta-text">
              Let's discuss your project and see how we can help bring your
              vision to life. Free consultations, honest estimates.
            </p>
            <Link to="/contact" className="about-page__cta-button">
              Get In Touch
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhoAreWe;
