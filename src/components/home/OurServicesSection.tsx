import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import fullstackImage from "../../assets/images/home/services_fullstack_image.jpg";
import aiImage from "../../assets/images/home/services_ai_image.jpg";
import fintechImage from "../../assets/images/home/services_fintech_image.jpg";

const OurServicesSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section our-services-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container-90">
        <div className="our-services-content">
          {/* Header Section */}
          <div className="services-header">
            <h2 className="section-title">{translations.services.title}</h2>
            <div className="services-intro">
              <p>{translations.services.intro.ecosystems}</p>
              <p>{translations.services.intro.platforms}</p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Service 1: Fullstack Solutions */}
            <div className="service-item">
              <div className="service-image">
                <img
                  src={fullstackImage}
                  alt="Fullstack Solutions"
                  className="service-image-real"
                />
              </div>
              <h3 className="service-title">
                {translations.services.fullstack.title}
              </h3>
              <p className="service-description">
                {translations.services.fullstack.description}
              </p>
            </div>

            {/* Service 2: AI-powered */}
            <div className="service-item">
              <div className="service-image">
                <img
                  src={aiImage}
                  alt="AI-powered Services"
                  className="service-image-real"
                />
              </div>
              <h3 className="service-title">
                {translations.services.ai.title}
              </h3>
              <p className="service-description">
                {translations.services.ai.description}
              </p>
            </div>

            {/* Service 3: e-commerce & FinTech */}
            <div className="service-item">
              <div className="service-image">
                <img
                  src={fintechImage}
                  alt="e-commerce & FinTech Services"
                  className="service-image-real"
                />
              </div>
              <h3 className="service-title">
                {translations.services.fintech.title}
              </h3>
              <p className="service-description">
                {translations.services.fintech.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
