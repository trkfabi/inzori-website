import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import trustedImage from "../../assets/images/home/trusted_image.jpg";

const TrustedByGlobalClientsSection: React.FC = () => {
  const { elementRef, isVisible } = useIntersectionObserver();
  const { translations } = useLanguage();

  return (
    <section
      ref={elementRef}
      className={`section trusted-clients-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      {/* Background Image */}
      <img
        src={trustedImage}
        alt="Trusted by Global Clients Background"
        className="trusted-clients-background-image"
      />

      <div className="container-90">
        <div className="trusted-clients-content">
          {/* Title */}
          <h2 className="section-title">{translations.trustedBy.title}</h2>

          {/* Introductory Paragraph */}
          <div className="trusted-intro">
            <p>{translations.trustedBy.description}</p>
          </div>

          {/* Clients List - Two Columns */}
          <div className="clients-list">
            {/* Left Column */}
            <div className="clients-column">
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Kingbee-Vans | UT, USA | kingbee-vans.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Verinext | PA, USA | verinext.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  1-800 Radiator | CA, USA | 1800radiatorhd.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Plexo | Montevideo, Uruguay | plexo.com.uy
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Ember Technology | Glenrothes, Scotland | ember.ltd
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  The Loop Closet | Alicante, Spain | theloopcloset.com
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="clients-column">
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Fluid Truck | CO, USA | fluidtruck.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Canopy Health | CA, USA | canopyhealth.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">Usio | NV, USA | usio.com</span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Good Done Great | SC, USA | gooddonegreat.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  Urban Haus | Montevideo, Uruguay | theurbanhaus.com
                </span>
              </div>
              <div className="client-item">
                <span className="client-bullet"></span>
                <span className="client-info">
                  De Lage Landen (DLL-Group) | Global | www.dllgroup.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByGlobalClientsSection;
