import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import { Link } from "react-router-dom";

const CookiePolicy: React.FC = () => {
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
                {translations.legal.cookiePolicy.title}
              </h1>
              <p className="legal-date">
                {translations.legal.cookiePolicy.lastUpdated}{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="legal-body">
              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.cookiePolicy.sections.whatAreCookies
                      .title
                  }
                </h2>
                <p>
                  {
                    translations.legal.cookiePolicy.sections.whatAreCookies
                      .description
                  }
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.cookiePolicy.sections.howWeUse.title}
                </h2>
                <p>
                  {
                    translations.legal.cookiePolicy.sections.howWeUse
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.cookiePolicy.sections.howWeUse.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>{translations.legal.cookiePolicy.sections.types.title}</h2>
                <div className="cookie-types">
                  <div className="cookie-type">
                    <h3>
                      {
                        translations.legal.cookiePolicy.sections.types.session
                          .title
                      }
                    </h3>
                    <p>
                      {
                        translations.legal.cookiePolicy.sections.types.session
                          .description
                      }
                    </p>
                  </div>

                  <div className="cookie-type">
                    <h3>
                      {
                        translations.legal.cookiePolicy.sections.types
                          .persistent.title
                      }
                    </h3>
                    <p>
                      {
                        translations.legal.cookiePolicy.sections.types
                          .persistent.description
                      }
                    </p>
                  </div>

                  <div className="cookie-type">
                    <h3>
                      {
                        translations.legal.cookiePolicy.sections.types
                          .thirdParty.title
                      }
                    </h3>
                    <p>
                      {
                        translations.legal.cookiePolicy.sections.types
                          .thirdParty.description
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.cookiePolicy.sections.specificCookies
                      .title
                  }
                </h2>
                <div className="cookie-list">
                  <div className="cookie-item">
                    <h3>
                      {
                        translations.legal.cookiePolicy.sections.specificCookies
                          .googleAnalytics.title
                      }
                    </h3>
                    <p>
                      {
                        translations.legal.cookiePolicy.sections.specificCookies
                          .googleAnalytics.description
                      }
                    </p>
                  </div>

                  <div className="cookie-item">
                    <h3>
                      {
                        translations.legal.cookiePolicy.sections.specificCookies
                          .essential.title
                      }
                    </h3>
                    <p>
                      {
                        translations.legal.cookiePolicy.sections.specificCookies
                          .essential.description
                      }
                    </p>
                  </div>
                </div>
              </div>

              <div className="legal-section-content">
                <h2>
                  {
                    translations.legal.cookiePolicy.sections.managingPreferences
                      .title
                  }
                </h2>
                <p>
                  {
                    translations.legal.cookiePolicy.sections.managingPreferences
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.cookiePolicy.sections.managingPreferences.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <p>
                  <strong>
                    {
                      translations.legal.cookiePolicy.sections
                        .managingPreferences.note
                    }
                  </strong>
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.cookiePolicy.sections.duration.title}
                </h2>
                <p>
                  {
                    translations.legal.cookiePolicy.sections.duration
                      .description
                  }
                </p>
                <ul>
                  {translations.legal.cookiePolicy.sections.duration.items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.cookiePolicy.sections.updates.title}
                </h2>
                <p>
                  {translations.legal.cookiePolicy.sections.updates.description}
                </p>
              </div>

              <div className="legal-section-content">
                <h2>
                  {translations.legal.cookiePolicy.sections.contact.title}
                </h2>
                <p>
                  {translations.legal.cookiePolicy.sections.contact.description}
                </p>
                <p>{translations.legal.cookiePolicy.sections.contact.email}</p>
                <p>
                  {translations.legal.cookiePolicy.sections.contact.address}
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

export default CookiePolicy;
