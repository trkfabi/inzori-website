import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.css";
import Navbar from "../components/common/Navbar";
import PortfolioPageContent from "../components/portfolio/PortfolioPage";
import FooterSection from "../components/common/FooterSection";

const PortfolioPage: React.FC = () => {
  return (
    <div className="PortfolioApp">
      <Navbar />
      <PortfolioPageContent />
      <FooterSection />
    </div>
  );
};

export default PortfolioPage;
