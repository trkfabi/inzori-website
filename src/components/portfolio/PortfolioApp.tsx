import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/main.css";
import Navbar from "../common/Navbar";
import PortfolioPage from "./PortfolioPage";
import FooterSection from "../common/FooterSection";

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
