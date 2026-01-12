import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from '../images/tn_logo.svg'
import { FaPhone, FaFacebookF, FaInstagram, FaChevronDown } from 'react-icons/fa';

const serviceLinks = [
  { to: "/commercial-remodel", label: "Commercial Remodeling" },
  { to: "/drywalling", label: "Basement Refinishing" },
  { to: "/doors-framing", label: "Doors & Framing" },
  { to: "/home-renovation", label: "Home Renovation" },
  { to: "/patios", label: "Patios & Outdoor" },
];

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleMobileMenu();
    }
  };

  return (
    <nav className="nav">
      {/* Top Bar */}
      <div className="nav__wrapper">
        <div className="nav__container">
          {/* Logo */}
          <Link to="/" className="nav__logo">
            <img src={Logo} alt="TN Home Improvements Logo" />

          </Link>

          {/* Contact Info - Desktop */}
          <div className="nav__contact">
            <a href="tel:412-508-5078" className="nav__phone">
              <FaPhone style={{ transform: 'scaleX(-1)' }} />
              (412) 508-5078
            </a>
            <div className="nav__social">
              <a
                href="https://www.facebook.com/profile.php?id=100077605338760"
                className="nav__social-link"
                aria-label="Go to Facebook page"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/tn_homeimprovements/"
                className="nav__social-link"
                aria-label="Go to Instagram page"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="wrap">
            <div
              onClick={toggleMobileMenu}
              role="button"
              tabIndex="0"
              onKeyDown={handleKeyPress}
              className={`burger ${mobileMenuOpen ? "active" : ""}`}
            >
              <div className="strip burger-strip-2">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Menu Bar */}
        <div className="nav__menu-bar">
          <div className="nav__menu-container">
            <ul className="nav__menu">
              {/* Services Dropdown */}
              <li className="nav__menu-item">
                <Link to="/services">
                  Services
                  <FaChevronDown />
                </Link>
                <div className="nav__dropdown">
                  <div className="nav__dropdown-content">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        className="nav__dropdown-item"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="nav__dropdown-footer">
                      <Link to="/services" className="nav__dropdown-view-all">
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav__menu-item">
                <Link to="/steps">Our Process</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/who-are-we">Who Are We</Link>
              </li>
              <li className="nav__menu-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`nav__mobile-menu ${mobileMenuOpen ? 'nav__mobile-menu--open' : ''}`}>
        <ul className="nav__mobile-list">
          {/* Services Accordion */}
          <li className="nav__mobile-item">
            <div className="nav__mobile-accordion">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={servicesOpen ? 'open' : ''}
              >
                Services
                <FaChevronDown />
              </button>
              {servicesOpen && (
                <div className="nav__mobile-submenu">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={closeMobileMenu}
                      className="nav__mobile-sublink"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    onClick={closeMobileMenu}
                    className="nav__mobile-sublink nav__mobile-sublink--highlight"
                  >
                    View All Services
                  </Link>
                </div>
              )}
            </div>
          </li>
          <li className="nav__mobile-item">
            <Link to="/steps" onClick={closeMobileMenu} className="nav__mobile-link">
              Our Process
            </Link>
          </li>
          <li className="nav__mobile-item">
            <Link to="/who-are-we" onClick={closeMobileMenu} className="nav__mobile-link">
              Who Are We
            </Link>
          </li>
          <li className="nav__mobile-item">
            <Link to="/contact" onClick={closeMobileMenu} className="nav__mobile-link">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Contact */}
        <div className="nav__mobile-contact">
          <a href="tel:412-508-5078" className="nav__mobile-phone">
            <FaPhone style={{ transform: 'scaleX(-1)' }} />
            (412) 508-5078
          </a>
          <div className="nav__mobile-social">
            <a
              href="https://www.facebook.com/profile.php?id=100077605338760"
              className="nav__mobile-social-link"
              aria-label="Go to Facebook page"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/tn_homeimprovements/"
              className="nav__mobile-social-link"
              aria-label="Go to Instagram page"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
