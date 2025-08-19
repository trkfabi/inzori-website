import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import techImage from "../../assets/images/home/tech_image.jpg";

const TechnologyStackSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section technology-stack-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={techImage}
        alt="Technology Stack Background"
        className="tech-background-image"
      />

      <div className="container-90">
        <div className="tech-stack-content">
          {/* Title */}
          <h2 className="section-title">{translations.techStack.title}</h2>

          {/* Introductory Paragraph */}
          <div className="tech-intro">
            <p>{translations.techStack.description}</p>
          </div>

          {/* Technology Categories */}
          <div className="tech-categories">
            <div className="tech-category">
              <span className="tech-category-name">Backend:</span> Node.js,
              Typescript, Java, Php
            </div>

            <div className="tech-category">
              <span className="tech-category-name">Frontend:</span> React,
              Bootstrap, jQuery, Html, Css
            </div>

            <div className="tech-category">
              <span className="tech-category-name">Mobile:</span> React Native,
              TitaniumSDK, Swift, Objective-C, Java, Kotlin
            </div>

            <div className="tech-category">
              <span className="tech-category-name">e-commerce:</span>{" "}
              WooCommerce, Shopify, Custom Plugins & Apps
            </div>

            <div className="tech-category">
              <span className="tech-category-name">Cloud:</span> AWS, VPS,
              Docker, Kubernates.
            </div>

            <div className="tech-category">
              <span className="tech-category-name">Payments:</span> Stripe,
              Paypal, Apple Pay, Google Pay, PCI DSS
            </div>

            <div className="tech-category">
              <span className="tech-category-name">Standards:</span> HL7, FHIR,
              HIPAA, Rest, GraphQL, PCI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStackSection;
