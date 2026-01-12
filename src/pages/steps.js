import React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';
import { FaPencilAlt, FaClock, FaComments, FaDollarSign, FaRocket, FaSmileBeam, FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    number: "01",
    icon: FaPencilAlt,
    title: "Drop Us a Line",
    description: "Fill out the quick form on our site with your project's details and how to reach you. We'll review it right away."
  },
  {
    number: "02",
    icon: FaClock,
    title: "Set Up a Chat",
    description: "Pick a time that works for you to have a talk—either at your place or over a call. We're flexible."
  },
  {
    number: "03",
    icon: FaComments,
    title: "Talk Details",
    description: "We'll swing by or call to hear about your vision and what you're after. We take notes and measurements to get it right."
  },
  {
    number: "04",
    icon: FaDollarSign,
    title: "Estimate in Hand",
    description: "Check out the estimate we send over—it'll have all you need to know about costs and timeline. No surprises."
  },
  {
    number: "05",
    icon: FaRocket,
    title: "Kick-off",
    description: "Give us the thumbs up and we'll get the ball rolling, keeping you in the loop as your home transformation begins."
  },
  {
    number: "06",
    icon: FaSmileBeam,
    title: "Enjoy the Results",
    description: "Sit back, relax, and enjoy the results of your home transformation with complete peace of mind."
  }
];

const StepsPage = () => {
  return (
    <Layout marginTop={true}>
      <div className="process-page">
        {/* Hero Section */}
        <section className="process-page__hero">
          <div className="process-page__hero-content">
            <span className="process-page__hero-label">How We Work</span>
            <h1 className="process-page__hero-title">
              From Vision
              <span>To Reality</span>
            </h1>
            <p className="process-page__hero-description">
              A simple, transparent process designed to make your home
              improvement project stress-free from start to finish.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="process-page__content">
          <div className="process-page__intro">
            <h2 className="process-page__intro-title">Our Process</h2>
            <p className="process-page__intro-text">
              We've refined our approach over 20 years to ensure every project
              runs smoothly. Here's what to expect when you work with us.
            </p>
          </div>

          {/* Timeline */}
          <div className="process-page__timeline">
            {steps.map((step, index) => (
              <div key={index} className="process-page__step">
                <div className="process-page__step-number">{step.number}</div>
                <div className="process-page__step-content">
                  <div className="process-page__step-icon">
                    <step.icon />
                  </div>
                  <h3 className="process-page__step-title">{step.title}</h3>
                  <p className="process-page__step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="process-page__cta">
          <div className="process-page__cta-content">
            <h2 className="process-page__cta-title">Ready to Get Started?</h2>
            <p className="process-page__cta-text">
              Take the first step toward your dream home. Contact us today
              for a free consultation and estimate.
            </p>
            <Link to="/contact" className="process-page__cta-button">
              Start Your Project
              <FaArrowRight />
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default StepsPage;
