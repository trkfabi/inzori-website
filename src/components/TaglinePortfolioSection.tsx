import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import taglineImage from "../assets/images/tagline_image.jpg";

const TaglinePortfolioSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`section tagline-portfolio-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={taglineImage}
        alt="Tagline Background"
        className="tagline-background-image"
      />

      <div className="container-90">
        <div className="tagline-portfolio-content">
          {/* Main Tagline */}
          <div className="main-tagline">
            <p className="tagline-subtitle">
              Remote-first. AI-powered. Human-driven.
            </p>
            <p className="tagline-subtitle">
              We build products that grow with your business.
            </p>
            <p className="tagline-subtitle">Your vision, built to scale.</p>
          </div>

          {/* Portfolio Button */}
          <div className="portfolio-button-container">
            <button className="portfolio-button">PORTFOLIO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaglinePortfolioSection;
