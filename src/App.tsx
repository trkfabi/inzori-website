import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/InzoriStyles.css";
import HomeSection from "./components/HomeSection";
import AboutUsSection from "./components/AboutUsSection";
import RemoteFirstSection from "./components/RemoteFirstSection";
import OurServicesSection from "./components/OurServicesSection";
import TaglinePortfolioSection from "./components/TaglinePortfolioSection";
import TechnologyStackSection from "./components/TechnologyStackSection";
import AIIntegrationSection from "./components/AIIntegrationSection";
import WhyChooseInzoriSection from "./components/WhyChooseInzoriSection";
import TrustedByGlobalClientsSection from "./components/TrustedByGlobalClientsSection";
import ClientTestimonialsSection from "./components/ClientTestimonialsSection";
import ContactUsSection from "./components/ContactUsSection";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div className="App">
      <HomeSection />
      <AboutUsSection />
      <RemoteFirstSection />
      <OurServicesSection />
      <TaglinePortfolioSection />
      <TechnologyStackSection />
      <AIIntegrationSection />
      <WhyChooseInzoriSection />
      <TrustedByGlobalClientsSection />
      <ClientTestimonialsSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
}

export default App;
