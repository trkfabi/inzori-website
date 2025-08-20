import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
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
                {translations.legal.privacyPolicy.title}
              </h1>
              <p className="legal-date">
                {translations.legal.privacyPolicy.lastUpdated}{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="legal-body">
              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.privacyPolicy.sections
                      .informationCollection.title
                  }
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections
                      .informationCollection.description
                  }
                </p>
                <ul>
                  {translations.legal.privacyPolicy.sections.informationCollection.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.privacyPolicy.sections.informationUse
                      .title
                  }
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.informationUse
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.privacyPolicy.sections.informationUse.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.privacyPolicy.sections.informationSharing
                      .title
                  }
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.informationSharing
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.privacyPolicy.sections.informationSharing.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.privacyPolicy.sections.dataSecurity.title}
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.dataSecurity
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.privacyPolicy.sections.yourRights.title}
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.yourRights
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.privacyPolicy.sections.yourRights.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.privacyPolicy.sections.cookies.title}
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.cookies
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.privacyPolicy.sections.changes.title}
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.changes
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.privacyPolicy.sections.contact.title}
                </h2>
                <p>
                  {
                    translations.legal.privacyPolicy.sections.contact
                      .description
                  }
                </p>
                <p>{translations.legal.privacyPolicy.sections.contact.email}</p>
                <p>
                  {translations.legal.privacyPolicy.sections.contact.address}
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

export default PrivacyPolicy;
