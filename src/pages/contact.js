import React, { useState } from 'react';
import Layout from './layout';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitSuccess(true);
      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout marginTop={true}>
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-page__hero">
          <div className="contact-page__hero-content">
            <span className="contact-page__hero-label">Get In Touch</span>
            <h1 className="contact-page__hero-title">
              Let's Build
              <span>Something Great</span>
            </h1>
            <p className="contact-page__hero-description">
              Ready to start your next project? We'd love to hear from you.
              Reach out for a free consultation and estimate.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="contact-page__content">
          <div className="contact-page__grid">
            {/* Contact Info */}
            <div className="contact-page__info">
              <h2 className="contact-page__info-title">Contact Information</h2>
              <p className="contact-page__info-text">
                Have questions about your project? Want to schedule an on-site
                consultation? We're here to help. Reach out through any of the
                methods below.
              </p>

              <div className="contact-page__info-items">
                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <FaPhone style={{ transform: 'scaleX(-1)' }} />
                  </div>
                  <div className="contact-page__info-details">
                    <h4>Phone</h4>
                    <a href="tel:412-508-5078">(412) 508-5078</a>
                  </div>
                </div>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-page__info-details">
                    <h4>Email</h4>
                    <a href="mailto:jeff@tnimprovements.com">jeff@tnimprovements.com</a>
                  </div>
                </div>

                <div className="contact-page__info-item">
                  <div className="contact-page__info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-page__info-details">
                    <h4>Location</h4>
                    <p>108 Bellpark Dr<br />Pittsburgh, PA</p>
                  </div>
                </div>
              </div>

              <div className="contact-page__hours">
                <h4>Business Hours</h4>
                <div className="contact-page__hours-list">
                  <div className="contact-page__hours-row">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="contact-page__hours-row">
                    <span>Saturday</span>
                    <span>8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="contact-page__hours-row">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-page__form-container">
              <h3 className="contact-page__form-title">Request a Free Estimate</h3>
              <p className="contact-page__form-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitSuccess ? (
                <div className="py-12 text-center">
                  <div className="mb-4 text-5xl">✓</div>
                  <h4 className="mb-2 text-xl font-display text-charcoal">Thank You!</h4>
                  <p className="text-gray-600">We've received your message and will be in touch soon.</p>
                </div>
              ) : (
                <form
                  className="contact-page__form"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div className="contact-page__form-row">
                    <div className="contact-page__form-group">
                      <label className="contact-page__form-label" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        className="contact-page__form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                      />
                    </div>

                    <div className="contact-page__form-group">
                      <label className="contact-page__form-label" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        className="contact-page__form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="(412) 555-0123"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-page__form-group">
                    <label className="contact-page__form-label" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="contact-page__form-input"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="contact-page__form-group">
                    <label className="contact-page__form-label" htmlFor="service">
                      Service Interested In
                    </label>
                    <select
                      className="contact-page__form-input"
                      id="service"
                      name="service"
                    >
                      <option value="">Select a service...</option>
                      <option value="commercial">Commercial Remodelling</option>
                      <option value="basement">Basement Refinishing</option>
                      <option value="doors">Doors & Framing</option>
                      <option value="maintenance">Property Maintenance</option>
                      <option value="renovation">Home Repairs & Renovation</option>
                      <option value="patios">Patios & Outdoor Living</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="contact-page__form-group">
                    <label className="contact-page__form-label" htmlFor="message">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      className="contact-page__form-textarea"
                      id="message"
                      name="message"
                      placeholder="Describe your project, timeline, and any specific requirements..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-page__form-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>


      </div>
    </Layout>
  );
};

export default ContactPage;
