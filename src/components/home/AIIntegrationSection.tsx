import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import aiSmartImage from "../../assets/images/home/ai_smart_image.jpg";
import aiTestImage from "../../assets/images/home/ai_test_image.jpg";
import aiProcessImage from "../../assets/images/home/ai_process_image.jpg";

const AIIntegrationSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section ai-integration-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container-90">
        <div className="ai-integration-content">
          {/* Header Section */}
          <div className="ai-header">
            <h2 className="section-title">
              {translations.aiIntegration.title}
            </h2>
            <div className="ai-intro">
              <p>{translations.aiIntegration.intro}</p>
            </div>
          </div>

          {/* AI Services Grid */}
          <div className="ai-services-grid">
            {/* Service 1: Smarter Development */}
            <div className="ai-service-item">
              <div className="ai-service-image">
                <img
                  src={aiSmartImage}
                  alt="Smarter Development"
                  className="ai-service-image-real"
                />
              </div>
              <h3 className="ai-service-title">
                {translations.aiIntegration.smart.title}
              </h3>
              <p className="ai-service-description">
                {translations.aiIntegration.smart.description}
              </p>
            </div>

            {/* Service 2: Efficient QA & Testing */}
            <div className="ai-service-item">
              <div className="ai-service-image">
                <img
                  src={aiTestImage}
                  alt="Efficient QA & Testing"
                  className="ai-service-image-real"
                />
              </div>
              <h3 className="ai-service-title">
                {translations.aiIntegration.testing.title}
              </h3>
              <p className="ai-service-description">
                {translations.aiIntegration.testing.description}
              </p>
            </div>

            {/* Service 3: Process Optimization */}
            <div className="ai-service-item">
              <div className="ai-service-image">
                <img
                  src={aiProcessImage}
                  alt="Process Optimization"
                  className="ai-service-image-real"
                />
              </div>
              <h3 className="ai-service-title">
                {translations.aiIntegration.process.title}
              </h3>
              <p className="ai-service-description">
                {translations.aiIntegration.process.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSection;
