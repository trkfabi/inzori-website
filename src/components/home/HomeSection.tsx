import React from "react";
import logoInzori from "../../assets/images/logo_inzori.png";
import homeVideo from "../../assets/videos/home_video.mp4";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";

const HomeSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section home-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Video for entire section */}
      <video
        src={homeVideo}
        className="home-background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        Tu navegador no soporta el elemento de video.
      </video>
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
                  <p className="logo-subtitle">{translations.home.subtitle}</p>
                </div>
              </div>

              {/* Main Heading */}
              <h2 className="hero-text">{translations.home.tagline}</h2>
            </div>
          </div>

          {/* Right Column - Empty for background video */}
          <div className="col-lg-6 col-md-6">
            <div className="home-image-container">
              {/* Container vacío - el video ahora es fondo de toda la sección */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
