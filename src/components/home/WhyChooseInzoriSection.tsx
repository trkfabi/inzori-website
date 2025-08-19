import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import whyChooseImage from "../../assets/images/home/why_choose_image.jpg";

const WhyChooseInzoriSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`section why-choose-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={whyChooseImage}
        alt="Why Choose Inzori Background"
        className="why-choose-background-image"
      />

      <div className="container-90">
        <div className="why-choose-content">
          {/* Title */}
          <h2 className="section-title">Why Choose Inzori</h2>

          {/* Reasons Grid */}
          <div className="reasons-grid">
            {/* Reason 1: Remote-First */}
            <div className="reason-item remote-first">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Remote-First</h3>
              <p className="reason-description">
                Remote-first DNA with global team collaboration.
              </p>
            </div>

            {/* Reason 2: Partnership */}
            <div className="reason-item partnership">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  {/* Left Avatar */}
                  <circle cx="7" cy="7" r="2.5" fill="currentColor" />
                  <rect
                    x="4"
                    y="10"
                    width="6"
                    height="8"
                    rx="3"
                    fill="currentColor"
                  />

                  {/* Right Avatar */}
                  <circle cx="17" cy="7" r="2.5" fill="currentColor" />
                  <rect
                    x="14"
                    y="10"
                    width="6"
                    height="8"
                    rx="3"
                    fill="currentColor"
                  />

                  {/* Connection/Handshake */}
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className="reason-title">Partnership</h3>
              <p className="reason-description">
                Strong focus on quality, innovation and long-term partnerships.
              </p>
            </div>

            {/* Reason 3: Experience */}
            <div className="reason-item experience">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" fill="currentColor" />
                  <path
                    d="M12 16l6-3.3v4.8c0 .4-.2.8-.6 1.1L12 22l-5.4-3.4c-.4-.3-.6-.7-.6-1.1v-4.8L12 16z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Experience</h3>
              <p className="reason-description">
                10+ years of experience delivering end-to-end solutions.
              </p>
            </div>

            {/* Reason 4: Industry XP */}
            <div className="reason-item industry-xp">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Industry XP</h3>
              <p className="reason-description">
                Expertise across healthcare, fintech, retail, automotive, and
                more.
              </p>
            </div>

            {/* Reason 5: Integration */}
            <div className="reason-item integration">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Integration</h3>
              <p className="reason-description">
                Proven ability to integrate payments, AI, cloud, and mobile
                ecosystems.
              </p>
            </div>

            {/* Reason 6: Innovation */}
            <div className="reason-item innovation">
              <div className="reason-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 0 1 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="reason-title">Innovation</h3>
              <p className="reason-description">
                Cutting-edge technology and creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseInzoriSection;
