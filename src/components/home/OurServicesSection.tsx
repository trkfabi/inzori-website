import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import fullstackImage from "../../assets/images/home/services_fullstack_image.jpg";
import aiImage from "../../assets/images/home/services_ai_image.jpg";
import fintechImage from "../../assets/images/home/services_fintech_image.jpg";

const OurServicesSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

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
            <h2 className="section-title">Our Services</h2>
            <div className="services-intro">
              <p>
                At Inzori, we go beyond writing code—we build complete digital
                ecosystems.
              </p>
              <p>
                Our team designs and develops scalable SaaS platforms, from
                backend architecture to intuitive mobile and frontend
                applications.
              </p>
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
              <h3 className="service-title">Fullstack Solutions</h3>
              <p className="service-description">
                We specialize in robust backend systems, modern web frontends,
                and cross-platform mobile apps that integrate seamlessly into
                complex business environments.
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
              <h3 className="service-title">AI-powered</h3>
              <p className="service-description">
                Artificial Intelligence is not just a feature for us—it's part
                of our daily workflow. Productivity, Optimization,
                Decision-making, Fast delivering.
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
              <h3 className="service-title">e-commerce & FinTech</h3>
              <p className="service-description">
                Payment Gateways integration, e-commerce custom plugins
                development, IT security. We ensure that every solution is
                scalable, secure, and future-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
