import React from "react";
import  { useState, useEffect,useRef} from 'react';

import "./PartnershipPage.css";
import Header from "../components/Header";

function PartnershipPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showEarnModal, setShowEarnModal] = useState(false);
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const toggleTheme = () => {
      setTheme(currentTheme => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'light';
        localStorage.setItem('theme', newTheme); // Save the new theme choice
        return newTheme;
      });
    };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className={`home-page dor-partner-page light-theme`}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        scrolled={scrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        setShowEarnModal={setShowEarnModal}
      />

      {/* HERO */}
      <section className="dor-partner-hero">

        <div className="dor-hero-bg"></div>
        <div className="dor-hero-overlay"></div>

        <div className="dor-hero-inner">

          <h1 className="dor-hero-title">
            Start Your Own Fashion Business
          </h1>

          <h3 className="dor-hero-subtitle">
            Without the Usual Stress
          </h3>

          <p className="dor-hero-description">
            Since 2018, we have built a successful outfit rental model.
            Now we are expanding across India and looking for the right
            partners to grow with us.
          </p>

          <a
  href="https://wa.me/919764767007?text=Hi%20Dress%20On%20Rent%20Team,%20I%20am%20interested%20in%20becoming%20a%20franchise%20partner."
  target="_blank"
  rel="noopener noreferrer"
  className="dor-partner-btn"
>
  Become a Partner
</a>

        </div>

      </section>


      {/* PARTNERSHIP OVERVIEW */}
      <section className="dor-partner-section dor-section-light">

        <h2 className="dor-section-title">
          Partnership Overview
        </h2>

        <p className="dor-section-subtitle">
          Everything you need to start and grow your fashion rental business.
        </p>

        <div className="dor-partner-overview">

          {/* WHY PARTNER */}
          <div className="dor-overview-card">

            <h3>Why Partner</h3>

            <ul>
              <li>Digital Marketing Support</li>
              <li>Customer Handling & PR</li>
              <li>Customer Calls & Inquiries</li>
              <li>Brand Promotions</li>
            </ul>

          </div>


          {/* WHAT YOU GET */}
          <div className="dor-overview-card">

            <h3>What You Get</h3>

            <ul>
              <li>Complete Outfit Inventory</li>
              <li>Advanced Billing & Booking Software</li>
              <li>End-to-End Training</li>
              <li>Proven Business Model</li>
            </ul>

          </div>


          {/* REQUIREMENTS */}
          <div className="dor-overview-card">

            <h3>Requirements</h3>

            <ul>
              <li>Investment: ₹15L – ₹40L</li>
              <li>Showroom Size: 1000 sq ft</li>
              <li>Royalty: 10% – 40%</li>
            </ul>

          </div>

        </div>

      </section>


      {/* BUSINESS MODELS */}
      <section className="dor-partner-section">

        <h2 className="dor-section-title">
          Business Models
        </h2>

        <p className="dor-section-subtitle">
          Choose the model that suits your business vision.
        </p>

        <div className="dor-model-grid">

          <div className="dor-model-card">

            <h3>FOFO Model</h3>

            <p>
              Franchise Owned, Franchise Operated.
              You manage the showroom operations while using
              our brand, inventory, and support system.
            </p>

          </div>


          <div className="dor-model-card">

            <h3>FOCO Model</h3>

            <p>
              Franchise Owned, Company Operated.
              You invest in the business while our team
              handles operations and business growth.
            </p>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="dor-partner-cta">

        <h2>
          Let’s Grow Together
        </h2>

        <p>
          Start your own fashion business with a strong brand
          and full operational support.
        </p>

        <a
href="https://wa.me/919764767007?text=Hi%20Dress%20On%20Rent%20Team,%20I%20want%20more%20information%20about%20the%20franchise."
target="_blank"
rel="noopener noreferrer"
className="dor-partner-btn dor-partner-btn-large"
>
Contact Us
</a>

      </section>

    </div>
  );
}

export default PartnershipPage;