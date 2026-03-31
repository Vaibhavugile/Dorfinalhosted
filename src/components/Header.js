import React from "react";
import { Menu, Sun, Moon, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import logo1 from "../assets/DOR white.png";
import logo2 from "../assets/DOR black.png";

function Header({
  theme,
  toggleTheme,
  scrolled,
  isMobileMenuOpen,
  toggleMobileMenu,
  setShowEarnModal
}) {
  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">

          {/* Logo */}
          <Link to="/" className="header-logo animate-pulse-custom">
            <div className="logo-3d-container">
              <img
                src={theme === "light" ? logo2 : logo1}
                alt="Dress On Rent"
                className="logo-image"
              />
            </div>
          </Link>

          <div className="header-nav-wrapper">

            {/* Desktop Navigation */}
            <nav className="desktop-nav">

              <Link to="/#men" className="nav-link group">
                Men
                <span className="nav-link-underline"></span>
              </Link>

              <Link to="/#women" className="nav-link group">
                Women
                <span className="nav-link-underline"></span>
              </Link>

              <Link to="/#stores-location" className="nav-link group">
                Stores Location
                <span className="nav-link-underline"></span>
              </Link>

              <Link
                onClick={() => setShowEarnModal(true)}
                className="nav-link group"
              >
                Share Your Wardrobe
                <span className="nav-link-underline"></span>
              </Link>

              <Link to="/#contact" className="nav-link group">
                Contact Us
                <span className="nav-link-underline"></span>
              </Link>

              <Link to="/partner" className="nav-link group">
                Franchise
                <span className="nav-link-underline"></span>
              </Link>

              <Link to="/blog" className="nav-link group">
                Blog
                <span className="nav-link-underline"></span>
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`theme-toggle-button ${
                  theme === "light" ? "light-mode" : "dark-mode"
                }`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* CTA */}
              <Link to="/#men" className="cta-button">
                Rent Now
                <ChevronRight size={18} className="icon-right" />
              </Link>

            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-button ${
                isMobileMenuOpen ? "rotate-90" : ""
              }`}
              onClick={toggleMobileMenu}
            >
              <Menu size={28} />
            </button>

          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">

              <li>
                <Link
                  to="/#men"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Men's Collection
                </Link>
              </li>

              <li>
                <Link
                  to="/#women"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Women's Collection
                </Link>
              </li>

              <li>
                <Link
                  to="/#stores-location"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Our Stores Location
                </Link>
              </li>

              <li>
                <Link
                  to="/#contact"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
              </li>

              <li>
                <button
                  onClick={() => {
                    setShowEarnModal(true);
                    toggleMobileMenu();
                  }}
                  className="mobile-nav-item"
                >
                  Earn with Us
                </button>
              </li>

              <li>
                <button
                  onClick={toggleTheme}
                  className="mobile-nav-item theme-toggle-mobile"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  Switch to {theme === "dark" ? "Light" : "Dark"} Mode
                </button>
              </li>

              <li>
                <Link
                  to="/#men"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                  style={{ color: "#db2777", fontWeight: "bold" }}
                >
                  Rent Now
                </Link>
              </li>

            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;