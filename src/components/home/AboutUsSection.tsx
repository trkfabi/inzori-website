import React from "react";
import aboutUsImage from "../../assets/images/home/aboutus_image.jpg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutUsSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section about-us-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={aboutUsImage}
        alt="About Us Background"
        className="about-background-image"
      />

      <div className="container-90">
        <div className="about-content">
          {/* Title */}
          <h2 className="section-title">{translations.aboutUs.title}</h2>

          {/* Text Content */}
          <div className="about-text">
            <p>{translations.aboutUs.description}</p>
          </div>

          {/* Timeline Diagram */}
          <div className="timeline-diagram">
            <div className="timeline-item">
              <div className="timeline-circle timeline-circle-small">
                <span className="timeline-number">2013</span>
              </div>
              <p className="timeline-label">
                {translations.aboutUs.timeline.founded}
              </p>
            </div>

            <div className="timeline-arrow">
              <svg
                className="Fe_H_Q"
                style={{
                  stroke: "rgb(255, 255, 255)",
                  fill: "rgb(255, 255, 255)",
                  width: "58.704562px",
                  height: "20px",
                }}
                viewBox="0 0 58.704562 20"
              >
                <path
                  d="M0,10L56.70456223524013,10"
                  strokeLinecap="butt"
                  strokeWidth="4"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                ></path>
                <path
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M48.70456223524013,6L56.70456223524013,10L48.70456223524013,14"
                ></path>
              </svg>
            </div>

            <div className="timeline-item">
              <div className="timeline-circle timeline-circle-large">
                <span className="timeline-number">
                  {translations.aboutUs.timeline.years}
                </span>
              </div>
              <p className="timeline-label">
                {translations.aboutUs.timeline.experience}
              </p>
            </div>

            <div className="timeline-arrow">
              <svg
                className="Fe_H_Q"
                style={{
                  stroke: "rgb(255, 255, 255)",
                  fill: "rgb(255, 255, 255)",
                  width: "58.704562px",
                  height: "20px",
                }}
                viewBox="0 0 58.704562 20"
              >
                <path
                  d="M0,10L56.70456223524013,10"
                  strokeLinecap="butt"
                  strokeWidth="4"
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                ></path>
                <path
                  fill="none"
                  stroke="rgb(255, 255, 255)"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M48.70456223524013,6L56.70456223524013,10L48.70456223524013,14"
                ></path>
              </svg>
            </div>

            <div className="timeline-item">
              <div className="timeline-circle timeline-circle-small">
                <span className="timeline-number">
                  {translations.aboutUs.timeline.global}
                </span>
              </div>
              <p className="timeline-label">
                {translations.aboutUs.timeline.trusted}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
