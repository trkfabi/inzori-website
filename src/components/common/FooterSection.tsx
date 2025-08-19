import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import logoInzori from "../../assets/images/logo_inzori.png";

const FooterSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section footer-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container-90">
        <div className="footer-content">
          {/* Footer Grid - 4 Columns */}
          <div className="footer-grid">
            {/* Column 1: Company Info */}
            <div className="footer-column">
              <h3 className="footer-title">inzori</h3>
              <p className="footer-description">
                {translations.footer.description}
              </p>
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <img
                    src={logoInzori}
                    alt="Inzori Logo"
                    className="footer-logo-image"
                  />
                </div>
                <span>inzori</span>
              </div>
            </div>

            {/* Column 2: Services */}
            <div className="footer-column">
              <h4 className="footer-subtitle">Services</h4>
              <ul className="footer-links">
                <li>Full-Stack Development</li>
                <li>AI Integration</li>
                <li>Mobile Applications</li>
                <li>Cloud Solutions</li>
                <li>E-commerce Platforms</li>
                <li>API Development</li>
              </ul>
            </div>

            {/* Column 3: Technologies */}
            <div className="footer-column">
              <h4 className="footer-subtitle">Technologies</h4>
              <ul className="footer-links">
                <li>React & React Native</li>
                <li>Node.js & TypeScript</li>
                <li>Python & AI/ML</li>
                <li>AWS & Cloud Services</li>
                <li>Docker & Kubernetes</li>
                <li>Payment Integrations</li>
              </ul>
            </div>

            {/* Column 4: Contact & Social */}
            <div className="footer-column">
              <h4 className="footer-subtitle">Contact</h4>
              <div className="footer-contact">
                <p>Email: contact@inzori.com</p>
                <p>Remote-First Company</p>
              </div>
              <div className="footer-social">
                <h5>Follow Us</h5>
                <div className="social-links">
                  <span className="social-link">LinkedIn</span>
                  <span className="social-link">GitHub</span>
                  <span className="social-link">Twitter</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-bottom-content">
              <p className="copyright">
                © 2024 Inzori. {translations.footer.rights}
              </p>
              <div className="footer-legal">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
