import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useLanguage } from "../../contexts/LanguageContext";
import cEye1 from "../../assets/images/portfolio/c-eye-1.jpeg";
import cEye2 from "../../assets/images/portfolio/c-eye-2.jpeg";
import ft1 from "../../assets/images/portfolio/ft-1.jpeg";
import ft2 from "../../assets/images/portfolio/ft-2.jpeg";
import kb1 from "../../assets/images/portfolio/kb-1.jpeg";
import kb2 from "../../assets/images/portfolio/kb-2.jpeg";
import kb3 from "../../assets/images/portfolio/kb-3.jpeg";
import kb4 from "../../assets/images/portfolio/kb-4.jpeg";
import kb5 from "../../assets/images/portfolio/kb-5.jpeg";
import fluid1 from "../../assets/images/portfolio/fluid-1.jpeg";
import fluid2 from "../../assets/images/portfolio/fluid-2.jpeg";
import fluid3 from "../../assets/images/portfolio/fluid-3.jpeg";
import fluid4 from "../../assets/images/portfolio/fluid-4.jpeg";
import fluid5 from "../../assets/images/portfolio/fluid-5.jpeg";
import mch1 from "../../assets/images/portfolio/mch-1.jpeg";
import mch2 from "../../assets/images/portfolio/mch-2.jpeg";
import dll1 from "../../assets/images/portfolio/dll-1.jpeg";
import dll2 from "../../assets/images/portfolio/dll-2.jpeg";
import dll3 from "../../assets/images/portfolio/dll-3.jpeg";
import dll4 from "../../assets/images/portfolio/dll-4.jpeg";
import akimbo1 from "../../assets/images/portfolio/akimbo-1.jpeg";
import akimbo2 from "../../assets/images/portfolio/akimbo-2.jpeg";
import vib1 from "../../assets/images/portfolio/vib-1.jpeg";
import vib2 from "../../assets/images/portfolio/vib-2.jpeg";
import cfo1 from "../../assets/images/portfolio/cfo-1.jpeg";
import cfo2 from "../../assets/images/portfolio/cfo-2.jpeg";
import hsbc1 from "../../assets/images/portfolio/hsbc-1.jpeg";
import hsbc2 from "../../assets/images/portfolio/hsbc-2.jpeg";
import loog1 from "../../assets/images/portfolio/loog-1.jpeg";
import loog2 from "../../assets/images/portfolio/loog-2.jpeg";
import gdg1 from "../../assets/images/portfolio/gdg-1.jpeg";
import gdg2 from "../../assets/images/portfolio/gdg-2.jpeg";
import fq1 from "../../assets/images/portfolio/fq-1.jpeg";
import fq2 from "../../assets/images/portfolio/fq-2.jpeg";
import tlc1 from "../../assets/images/portfolio/tlc-1.jpeg";
import tlc2 from "../../assets/images/portfolio/tlc-2.jpeg";
import brip1 from "../../assets/images/portfolio/brip-1.jpeg";
import brip2 from "../../assets/images/portfolio/brip-2.jpeg";

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const { translations } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackToHome = () => {
    // Navigate back to home page using React Router
    navigate("/");
  };

  return (
    <div className="portfolio-page">
      {/* Portfolio Header Section */}
      <section className="portfolio-header-section">
        <div className="container-90">
          <div className="portfolio-header-content">
            <h1 className="portfolio-main-title">
              {translations.portfolio.title}
            </h1>
            <p className="portfolio-description">
              {translations.portfolio.subtitle}
            </p>
            <button className="back-to-home-btn" onClick={handleBackToHome}>
              {translations.portfolio.backToHome}
            </button>
          </div>
        </div>
      </section>

      {/* C Eye Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.cEye.title}
        description={translations.portfolio.projects.cEye.description}
        imageCount={2}
        imageDescriptions={[
          "C Eye App - Smartphone Interface",
          "C Eye App - Tablet Interface",
        ]}
        images={[cEye1, cEye2]}
      />

      {/* Facetouch - Photo Studio Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.facetouch.title}
        description={translations.portfolio.projects.facetouch.description}
        imageCount={2}
        imageDescriptions={[
          "Facetouch - Smartphone App",
          "Facetouch - Tablet Grid Layout",
        ]}
        images={[ft1, ft2]}
      />

      {/* Kingbee-Vans Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.kingbeeVans.title}
        description={translations.portfolio.projects.kingbeeVans.description}
        imageCount={5}
        imageDescriptions={[
          "Map Interface",
          "Van List",
          "Van Details",
          "Booking Screen",
          "App Interface",
        ]}
        layout="five-images"
        images={[kb1, kb2, kb3, kb4, kb5]}
      />

      {/* Fluid Truck Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.fluidTruck.title}
        description={translations.portfolio.projects.fluidTruck.description}
        imageCount={5}
        imageDescriptions={[
          "Map Interface",
          "Vehicle Selection",
          "Booking Details",
          "App Interface",
          "Platform Overview",
        ]}
        layout="five-images"
        images={[fluid1, fluid2, fluid3, fluid4, fluid5]}
      />

      {/* My Canopy Health Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.myCanopyHealth.title}
        description={translations.portfolio.projects.myCanopyHealth.description}
        imageCount={2}
        imageDescriptions={["Login/Signup Screen", "Home Training Screen"]}
        images={[mch1, mch2]}
        imageClass="low-res"
      />

      {/* De Lage Landen (DLL Group) Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.dllGroup.title}
        description={translations.portfolio.projects.dllGroup.description}
        imageCount={4}
        imageDescriptions={[
          "Desktop Spreadsheet",
          "Smartphone App 1",
          "Smartphone App 2",
          "Financial Dashboard",
        ]}
        layout="four-images"
        images={[dll1, dll2, dll3, dll4]}
      />

      {/* Akimbo Card Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.akimboCard.title}
        description={translations.portfolio.projects.akimboCard.description}
        imageCount={2}
        imageDescriptions={[
          "Akimbo App - Person Holding",
          "Akimbo App - Hand with Taxi",
        ]}
        images={[akimbo1, akimbo2]}
      />

      {/* Vibrant Economy Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.vibrantEconomy.title}
        description={translations.portfolio.projects.vibrantEconomy.description}
        imageCount={2}
        imageDescriptions={[
          "Smartphone over Desk",
          "Smartphone in Casual Setting",
        ]}
        images={[vib1, vib2]}
      />

      {/* CFO Insights Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.cfoInsights.title}
        description={translations.portfolio.projects.cfoInsights.description}
        imageCount={2}
        imageDescriptions={["Outdoor Charts Display", "Data with Green Header"]}
        images={[cfo1, cfo2]}
      />

      {/* HSBC Cycling Hub Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.hsbcCycling.title}
        description={translations.portfolio.projects.hsbcCycling.description}
        imageCount={2}
        imageDescriptions={[
          "Smartphone near Bicycle",
          "Smartphone with Taxi Background",
        ]}
        images={[hsbc1, hsbc2]}
      />

      {/* Loog Academy Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.loogAcademy.title}
        description={translations.portfolio.projects.loogAcademy.description}
        imageCount={2}
        imageDescriptions={[
          "Tablet with Cartoon Characters",
          "Smartphone with Guitar App",
        ]}
        images={[loog1, loog2]}
      />

      {/* Good Done Great Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.goodDoneGreat.title}
        description={translations.portfolio.projects.goodDoneGreat.description}
        imageCount={2}
        imageDescriptions={[
          "Smartphone over Desk",
          "Green and White App Interface",
        ]}
        images={[gdg1, gdg2]}
      />

      {/* FaceQuiz - Celebrity Trivia Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.faceQuiz.title}
        description={translations.portfolio.projects.faceQuiz.description}
        imageCount={2}
        imageDescriptions={[
          "White Smartphone with Celebrity",
          "Two Smartphones with Game Interface",
        ]}
        images={[fq1, fq2]}
      />

      {/* Brippo - Help Desk Software Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.brippo.title}
        description={translations.portfolio.projects.brippo.description}
        imageCount={2}
        imageDescriptions={["Laptop on Wooden Table", "Help Desk Dashboard"]}
        images={[brip1, brip2]}
      />

      {/* The Loop Closet Section */}
      <PortfolioProjectSection
        title={translations.portfolio.projects.loopCloset.title}
        description={translations.portfolio.projects.loopCloset.description}
        imageCount={2}
        imageDescriptions={["E-commerce Grid Layout", "Product Detail Page"]}
        images={[tlc1, tlc2]}
      />
    </div>
  );
};

// Portfolio Project Section Component
interface PortfolioProjectSectionProps {
  title: string;
  description: string;
  imageCount: number;
  imageDescriptions: string[];
  layout?: string;
  images?: string[]; // Added images prop
  imageClass?: string; // Added image class for specific styling
}

const PortfolioProjectSection: React.FC<PortfolioProjectSectionProps> = ({
  title,
  description,
  imageCount,
  imageDescriptions,
  layout = "",
  images, // Destructure images prop
  imageClass = "", // Destructure image class prop
}) => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section
      ref={elementRef}
      className={`portfolio-project-section fade-in-section ${
        isVisible ? "visible" : ""
      }`}
    >
      <div className="container-90">
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <div className={`project-images ${layout}`}>
            {images
              ? images.map((imageUrl, index) => (
                  <div key={index} className={`project-image ${imageClass}`}>
                    <img src={imageUrl} alt={imageDescriptions[index]} />
                  </div>
                ))
              : imageDescriptions.map((desc, index) => (
                  <div key={index} className={`project-image ${imageClass}`}>
                    <div className="image-placeholder">{desc}</div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
