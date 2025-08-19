import React from "react";
import logoInzori from "../../assets/images/logo_inzori.png";
import homeImage from "../../assets/images/home/home_image.jpg";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

const HomeSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`section home-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container-90">
        <div className="row align-items-center">
          {/* Left Column - Text Content */}
          <div className="col-lg-6 col-md-6">
            <div className="home-content-left">
              {/* Logo */}
              <div className="logo-container">
                <div className="logo-icon">
                  <img
                    src={logoInzori}
                    alt="Inzori Logo"
                    className="logo-image"
                  />
                </div>
                <div className="logo-text-container">
                  <h1 className="logo-text">inzori</h1>
                  <p className="logo-subtitle">
                    AI-powered Software Development
                  </p>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="hero-text">
                Building
                <br />
                innovative
                <br />
                solutions since
                <br />
                2013
              </h2>
            </div>
          </div>

          {/* Right Column - Background Image */}
          <div className="col-lg-6 col-md-6">
            <div className="home-image-container">
              <img
                src={homeImage}
                alt="Home Background"
                className="home-background-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
