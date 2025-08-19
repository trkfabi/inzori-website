import React from "react";
import HomeSection from "../components/home/HomeSection";
import AboutUsSection from "../components/home/AboutUsSection";
import RemoteFirstSection from "../components/home/RemoteFirstSection";
import OurServicesSection from "../components/home/OurServicesSection";
import TaglinePortfolioSection from "../components/home/TaglinePortfolioSection";
import TechnologyStackSection from "../components/home/TechnologyStackSection";
import AIIntegrationSection from "../components/home/AIIntegrationSection";
import WhyChooseInzoriSection from "../components/home/WhyChooseInzoriSection";
import TrustedByGlobalClientsSection from "../components/home/TrustedByGlobalClientsSection";
import ClientTestimonialsSection from "../components/home/ClientTestimonialsSection";
import ContactUsSection from "../components/home/ContactUsSection";
import FooterSection from "../components/common/FooterSection";

const HomePage: React.FC = () => {
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
};

export default HomePage;
