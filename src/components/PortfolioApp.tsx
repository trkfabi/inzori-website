import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/InzoriStyles.css";
import "../styles/PortfolioStyles.css";
import "../styles/NavbarStyles.css";
import Navbar from "./Navbar";
import PortfolioPage from "./PortfolioPage";
import FooterSection from "./FooterSection";

const PortfolioApp: React.FC = () => {
  return (
    <div className="PortfolioApp">
      <Navbar />
      <PortfolioPage />
      <FooterSection />
    </div>
  );
};

export default PortfolioApp;
