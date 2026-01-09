import React, { useState } from 'react';
import GrayscaleMap from "./googleMap";
import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa';

const Spinner = () => (
  <svg width="80" height="80" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" fill="none" stroke="#f4c263" strokeWidth="3" strokeDasharray="31.4" strokeLinecap="round">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"/>
    </circle>
  </svg>
);

const Footer = ({ hideFinance, hideForm }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      }).then(() => {
        setSubmissionMessage(`Thank you! We've received your message and will be in touch soon.`);
        setTimeout(() => {
          setIsLoading(false);
          setIsSent(true);
        }, 1600);
      })
    } catch (error) {
      setIsLoading(false);
      setIsSent(true);
      setSubmissionMessage('An error occurred. Please try again.');
      console.error(error);
    }
  };

  return (
    <footer className="footer">
      {/* Finance Banner */}
      {!hideFinance && (
        <div className="footer__finance">
          <div className="footer__finance-content">
            <span className="footer__finance-label">Special Financing Available</span>
            <h2 className="footer__finance-title">
              Call <a href="tel:412-508-5078">(412) 508-5078</a> To Talk About Your Project
            </h2>
          </div>
        </div>
      )}

      {/* Contact Section */}
      {!hideForm && (
        <div className="footer__contact" id="ContactFooter">
          {/* Form Side */}
          <div className="footer__form-section">
            {isLoading ? (
              <div className="footer__form-loading">
                <Spinner />
              </div>
            ) : isSent ? (
              <div className="footer__form-wrapper">
                <div className="footer__form-success">
                  <p>{submissionMessage}</p>
                </div>
              </div>
            ) : (
              <div className="footer__form-wrapper">
                <span className="footer__form-label">Free Estimate</span>
                <h3 className="footer__form-title">Get Your Free Estimate</h3>
                <p className="footer__form-subtitle">
                  Call <a href="tel:412-508-5078">(412) 508-5078</a> or fill out the form below and we'll contact you as soon as possible.
                </p>
                <form
                  className="footer__form"
                  data-netlify="true"
                  name="ContactFooter"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="ContactFooter" />
                  <div className="footer__form-row">
                    <div className="footer__form-group">
                      <label className="footer__form-group-label" htmlFor="footer-name">
                        Name *
                      </label>
                      <input
                        className="footer__form-input"
                        type="text"
                        id="footer-name"
                        name="name"
                        required
                      />
                    </div>
                    <div className="footer__form-group">
                      <label className="footer__form-group-label" htmlFor="footer-phone">
                        Phone *
                      </label>
                      <input
                        className="footer__form-input"
                        type="tel"
                        id="footer-phone"
                        name="phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="footer__form-group">
                    <label className="footer__form-group-label" htmlFor="footer-message">
                      How Can We Help? *
                    </label>
                    <textarea
                      className="footer__form-textarea"
                      id="footer-message"
                      name="message"
                      required
                      placeholder="Hi, I'm looking to renovate my basement into a living space. The area is about 800 sq ft and I'd like to add drywall, flooring, and recessed lighting. When would you be available to come take a look?"
                    />
                  </div>
                  <button type="submit" className="footer__form-submit">
                    Submit Request
                    <FaArrowRight />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Info Side */}
          <div className="footer__info-section">
            <div className="footer__map">
              <GrayscaleMap />
            </div>
            <div className="footer__info-grid">
              <div className="footer__info-block">
                <h5>Contact</h5>
                <a href="mailto:jeff@tnimprovements.com">
                  <FaEnvelope />
                  jeff@tnimprovements.com
                </a>
                <a href="tel:412-508-5078">
                  <FaPhone style={{ transform: 'scaleX(-1)' }} />
                  (412) 508-5078
                </a>
              </div>
              <div className="footer__info-block">
                <h5>Office</h5>
                <p>108 Bellpark Dr<br />Pittsburgh, PA 15229-2120</p>
              </div>
              <div className="footer__info-block">
                <h5>Hours</h5>
                <p>Monday - Sunday<br />Open 24 Hours</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          Copyright © {new Date().getFullYear()} T&N Home Improvements. All rights reserved.
        </p>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/profile.php?id=100077605338760"
            className="footer__social-link"
            aria-label="Go to Facebook page"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/tn_homeimprovements/"
            className="footer__social-link"
            aria-label="Go to Instagram page"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
