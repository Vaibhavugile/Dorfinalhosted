import React from "react";
import { Menu, Sun, Moon, ChevronRight } from "lucide-react";
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
          
          <a href="/" className="header-logo animate-pulse-custom">
            <div className="logo-3d-container">
              <img
                src={theme === "light" ? logo2 : logo1}
                alt="Dress On Rent"
                className="logo-image"
              />
            </div>
          </a>

          <div className="header-nav-wrapper">
            <nav className="desktop-nav">
              <a href="#men" className="nav-link group">
                Men
                <span className="nav-link-underline"></span>
              </a>

              <a href="#women" className="nav-link group">
                Women
                <span className="nav-link-underline"></span>
              </a>

              <a href="#stores-location" className="nav-link group">
                Stores Location
                <span className="nav-link-underline"></span>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setShowEarnModal(true);
                }}
                className="nav-link group"
              >
                Share Your Wardrobe
                <span className="nav-link-underline"></span>
              </a>

              <a href="#contact" className="nav-link group">
                Contact Us
                <span className="nav-link-underline"></span>
              </a>

              <a href="/partner" className="nav-link group">
                Franchise
                <span className="nav-link-underline"></span>
              </a>

              <a href="/blog" className="nav-link group">
                Blog
                <span className="nav-link-underline"></span>
              </a>

              <button
                onClick={toggleTheme}
                className={`theme-toggle-button ${
                  theme === "light" ? "light-mode" : "dark-mode"
                }`}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <a href="#men" className="cta-button">
                Rent Now
                <ChevronRight size={18} className="icon-right" />
              </a>
            </nav>

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

        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              <li>
                <a
                  href="#men"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Men's Collection
                </a>
              </li>

              <li>
                <a
                  href="#women"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Women's Collection
                </a>
              </li>

              <li>
                <a
                  href="#stores-location"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Our Stores Location
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="/blog"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </a>
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
                <a
                  href="#men"
                  className="mobile-nav-item"
                  onClick={toggleMobileMenu}
                  style={{ color: "#db2777", fontWeight: "bold" }}
                >
                  Rent Now
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;