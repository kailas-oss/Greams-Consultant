import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/navbar.css";

import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <div
          className="logo"
          onClick={() => handleNavigate("/")}
          role="button"
          tabIndex={0}
        >
          <div className="logo-mark">
            <img
              src={logo}
              alt="Greams International Logo"
              className="logo-image"
            />
          </div>

          <div className="logo-text-wrap">
            <span className="logo-text">
              Greams Consultant
            </span>

            <span className="logo-tagline">
              RESEARCH & ACADEMIC SUPPORT
            </span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button onClick={() => handleNavigate("/")}>
            Home
          </button>

          {/* <button onClick={() => handleNavigate("/about")}>
            About
          </button>

          <button onClick={() => handleNavigate("/products")}>
            Products
          </button> */}

          <button
            className="nav-contact-btn"
            onClick={() => handleNavigate("/contact")}
          >
            Contact / Enquiry
          </button>
        </nav>

        {/* MOBILE MENU BUTTON */}
        {/* <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button> */}

      </div>
    </header>
  );
};

export default Navbar;