import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
            Home
          </button>
          <button
            className={`navbar-link ${
              location.pathname === "/portfolio" ? "active" : ""
            }`}
            onClick={() => handleNavigation("/portfolio")}
          >
            Portfolio
          </button>
          <button
            className="navbar-link"
            onClick={() => handleNavigation("/#contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
