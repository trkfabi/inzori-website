import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

const TermsOfService: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <div className="legal-page">
      <section
        ref={elementRef}
        className={`section legal-section fade-in-section ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="container-90">
          <div className="legal-content">
            <div className="legal-header">
              <h1 className="legal-title">
                {translations.legal.termsOfService.title}
              </h1>
              <p className="legal-date">
                {translations.legal.termsOfService.lastUpdated}{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="legal-body">
              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.acceptance.title}
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.acceptance
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.useLicense.title}
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.useLicense
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.termsOfService.sections.useLicense.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.disclaimer.title}
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.disclaimer
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.limitations.title}
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.limitations
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.accuracy.title}
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.accuracy
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.links.title}
                </h2>
                <p>
                  {translations.legal.termsOfService.sections.links.description}
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.termsOfService.sections.modifications
                      .title
                  }
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.modifications
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.termsOfService.sections.governingLaw
                      .title
                  }
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.governingLaw
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.termsOfService.sections.contact.title}
                </h2>
                <p>
                  {
                    translations.legal.termsOfService.sections.contact
                      .description
                  }
                </p>
                <p>
                  {translations.legal.termsOfService.sections.contact.email}
                </p>
                <p>
                  {translations.legal.termsOfService.sections.contact.address}
                </p>
              </div>
            </div>

            <div className="legal-footer">
              <Link to="/" className="back-to-home-link">
                {translations.legal.backToHome}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
