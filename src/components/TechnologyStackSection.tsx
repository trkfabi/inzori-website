import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import techImage from "../assets/images/tech_image.jpg";

const TechnologyStackSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

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
          <h2 className="section-title">Our Technology Stack</h2>

          {/* Introductory Paragraph */}
          <div className="tech-intro">
            <p>
              We deliver scalable backends, intuitive frontends, and seamless
              mobile apps. Using modern frameworks like Node.js, React, and
              React Native, we build reliable, future-ready solutions tailored
              to your business.
            </p>
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
