import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import "../../styles/components/LanguageSelector.css";

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: "en" | "es") => {
    setLanguage(newLanguage);
  };

  return (
    <div className="language-selector">
      <button
        className={`language-btn ${language === "en" ? "active" : ""}`}
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="language-separator">|</span>
      <button
        className={`language-btn ${language === "es" ? "active" : ""}`}
        onClick={() => handleLanguageChange("es")}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
