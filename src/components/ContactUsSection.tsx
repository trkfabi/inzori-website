import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import contactImage from "../assets/images/contact_image.jpg";

const ContactUsSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`section contact-us-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={contactImage}
        alt="Contact Us Background"
        className="contact-background-image"
      />

      <div className="container-90">
        <div className="contact-content">
          {/* Left Column - Contact Information */}
          <div className="contact-left">
            <div className="contact-info">
              {/* Main Title */}
              <h2 className="contact-main-title">Let's work together!</h2>

              {/* Subtitle */}
              <h3 className="contact-subtitle">Contact Us</h3>

              {/* Inzori Logo */}
              <div className="contact-logo">
                <div className="logo-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="5" fill="currentColor" />
                    <path
                      d="M20 21c0-2.76-2.24-5-5-5H9c-2.76 0-5 2.24-5 5"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="logo-text">inzori</span>
              </div>

              {/* Email Information */}
              <div className="email-info">
                <span className="email-label">EMAIL</span>
                <a href="mailto:contact@inzori.com" className="email-address">
                  contact@inzori.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Empty for background image */}
          <div className="contact-right"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
