import React from "react";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import taglineImage from "../../assets/images/home/tagline_image.jpg";

const TaglinePortfolioSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();
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
            {/* <h2 className="tagline-title">{translations.tagline.title}</h2> */}
            <p className="tagline-subtitle">{translations.tagline.subtitle1}</p>
            <p className="tagline-subtitle">{translations.tagline.subtitle2}</p>
            <p className="tagline-subtitle">{translations.tagline.subtitle3}</p>
          </div>

          {/* Portfolio Button */}
          <button className="portfolio-button" onClick={handlePortfolioClick}>
            {translations.tagline.portfolioButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TaglinePortfolioSection;
