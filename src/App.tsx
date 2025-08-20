import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import PrivacyPolicy from "./components/legal/PrivacyPolicy";
import TermsOfService from "./components/legal/TermsOfService";
import CookiePolicy from "./components/legal/CookiePolicy";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
