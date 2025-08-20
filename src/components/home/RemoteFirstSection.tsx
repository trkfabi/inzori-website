import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import remoteImage from "../../assets/images/home/remote_image.png";

const RemoteFirstSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section remote-first-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={remoteImage}
        alt="Remote Work Background"
        className="remote-background-image"
      />

      <div className="container-90">
        <div className="remote-first-content">
          {/* Title */}
          <h2 className="section-title">{translations.remoteFirst.title}</h2>

          {/* Main Paragraph */}
          <div className="remote-first-text">
            <p>{translations.remoteFirst.description}</p>
          </div>

          {/* Key Points Section */}
          <div className="key-points-section">
            <h3 className="key-points-heading">
              {translations.remoteFirst.keyPoints.title}
            </h3>
            <ul className="key-points-list">
              {translations.remoteFirst.keyPoints.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteFirstSection;
