import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import remoteImage from "../assets/images/remote_image.png";

const RemoteFirstSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

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
          <h2 className="section-title">Remote-First Approach</h2>

          {/* Main Paragraph */}
          <div className="remote-first-text">
            <p>
              At Inzori, we thrive in a 100% remote environment, seamlessly
              collaborating with clients and global teams.
            </p>
          </div>

          {/* Key Points Section */}
          <div className="key-points-section">
            <h3 className="key-points-heading">Key points:</h3>
            <ul className="key-points-list">
              <li>Remote work is in our DNA.</li>
              <li>Tools we use daily: Jira, Slack, Zoom, GitHub, Figma.</li>
              <li>
                Agile methodologies (Scrum, Kanban) ensure adaptability and
                high-value delivery.
              </li>
              <li>
                Proven experience working with startups and enterprises
                worldwide.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteFirstSection;
