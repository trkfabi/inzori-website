import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import LanguageSelector from "./LanguageSelector";
import "../../styles/components/NavbarStyles.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { translations } = useLanguage();

  const handleNavigation = (path: string) => {
    if (path === "/#contact") {
      // If we're on portfolio page, first go to home, then scroll to contact
      if (location.pathname === "/portfolio") {
        navigate("/");
        // Wait for navigation to complete, then scroll to contact
        setTimeout(() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            const navbarHeight = 40; // Height of the navbar
            const elementPosition = contactSection.offsetTop - navbarHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // If already on home page, just scroll to contact
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const navbarHeight = 40; // Height of the navbar
          const elementPosition = contactSection.offsetTop - navbarHeight;
          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    } else if (path === "/") {
      // Handle Home navigation
      if (location.pathname === "/") {
        // If already on home page, scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // If on another page, navigate to home and scroll to top
        navigate("/");
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <button
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/")}
          >
            {translations.nav.home}
          </button>
          <button
            className={`navbar-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/portfolio")}
          >
            {translations.nav.portfolio}
          </button>
          <button
            className="navbar-link"
            onClick={() => handleNavigation("/#contact")}
          >
            {translations.nav.contactUs}
          </button>
          <LanguageSelector />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
