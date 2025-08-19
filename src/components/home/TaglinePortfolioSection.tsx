import React from "react";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import taglineImage from "../../assets/images/home/tagline_image.jpg";

const TaglinePortfolioSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const navigate = useNavigate();

  const handlePortfolioClick = () => {
    // Navigate to portfolio page using React Router
    navigate("/portfolio");
  };

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
        alt="Tagline Portfolio Background"
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
          <button className="portfolio-button" onClick={handlePortfolioClick}>
            PORTFOLIO
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaglinePortfolioSection;
