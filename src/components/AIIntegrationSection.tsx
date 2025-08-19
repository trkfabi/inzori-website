import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import aiSmartImage from "../assets/images/ai_smart_image.jpg";
import aiTestImage from "../assets/images/ai_test_image.jpg";
import aiProcessImage from "../assets/images/ai_process_image.jpg";

const AIIntegrationSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

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
            <h2 className="section-title">AI Integration</h2>
            <div className="ai-intro">
              <p>
                At Inzori, we integrate AI into our daily workflows to
                accelerate development, improve quality, and optimize processes.
                By combining our technical expertise with the latest AI tools,
                we deliver smarter solutions that help our clients innovate
                faster and operate more efficiently.
              </p>
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
              <h3 className="ai-service-title">Smarter Development</h3>
              <p className="ai-service-description">
                AI-assisted coding and architecture design deliver high-quality
                solutions faster and reduce human error.
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
              <h3 className="ai-service-title">Efficient QA & Testing</h3>
              <p className="ai-service-description">
                Automated test generation and bug detection powered by AI
                improve reliability and shorten release cycles.
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
              <h3 className="ai-service-title">Process Optimization</h3>
              <p className="ai-service-description">
                From documentation to project management, AI streamlines
                workflows, saving time and enabling greater focus on innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSection;
