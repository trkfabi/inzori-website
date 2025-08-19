import React from "react";
import aboutUsImage from "../assets/images/aboutus_image.jpg";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const AboutUsSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

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
          <h2 className="section-title">About us</h2>

          {/* Text Content */}
          <div className="about-text">
            <p>
              Founded in 2013 by Martin Zabala and Fabian Martinez, Inzori is a
              team of seasoned Senior Software Engineers with deep expertise
              across the entire software development lifecycle—from initial
              planning and architecture to deployment and ongoing maintenance.
            </p>
            <p>
              We have successfully delivered tailored solutions in industries
              such as Healthcare, Fintech, Automotive, e-commerce, Fleet
              Management, and Social Applications.
            </p>
            <p>
              With a commitment to exceptional quality and client satisfaction,
              we consistently transform ideas into impactful digital products.
            </p>
          </div>

          {/* Timeline Diagram */}
          <div className="timeline-diagram">
            <div className="timeline-item">
              <div className="timeline-circle timeline-circle-small">
                <span className="timeline-number">2013</span>
              </div>
              <p className="timeline-label">Founded by Martin & Fabian</p>
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
                <span className="timeline-number">10+ years</span>
              </div>
              <p className="timeline-label">Experience Enterprise</p>
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
                <span className="timeline-number">Global clients</span>
              </div>
              <p className="timeline-label">USA & Europe Trusted Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
