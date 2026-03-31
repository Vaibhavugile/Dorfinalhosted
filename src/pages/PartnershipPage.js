import React from "react";
import "./PartnershipPage.css";

function PartnershipPage() {
  return (
    <div className="dor-partner-page">

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
            Since 2018, we have built a successful and profitable model in the
            outfit rental industry. With a strong foundation and growing demand,
            we are now expanding across Pan India — looking for the right
            partners to grow with us.
          </p>

          <button className="dor-partner-btn dor-hero-btn">
            Become a Partner
          </button>

        </div>

      </section>


      {/* WHY PARTNER */}
      <section className="dor-partner-section">

        <h2 className="dor-section-title">
          Why Partner With Us?
        </h2>

        <p className="dor-section-subtitle">
          We don’t just offer a franchise — we build and run the business with you.
        </p>

        <div className="dor-partner-grid">

          <div className="dor-partner-card">
            <h4>Digital Marketing</h4>
            <p>Complete marketing campaigns handled by our team.</p>
          </div>

          <div className="dor-partner-card">
            <h4>Customer Handling & PR</h4>
            <p>Professional brand communication and support.</p>
          </div>

          <div className="dor-partner-card">
            <h4>Customer Calls & Inquiries</h4>
            <p>We manage customer inquiries while you focus on operations.</p>
          </div>

          <div className="dor-partner-card">
            <h4>Promotions & Brand Building</h4>
            <p>Continuous campaigns to grow your showroom visibility.</p>
          </div>

        </div>

      </section>


      {/* WHAT YOU GET */}
      <section className="dor-partner-section dor-section-light">

        <h2 className="dor-section-title">
          What You Get
        </h2>

        <div className="dor-benefits-grid">

          <div className="dor-benefit-card">
            Complete Outfit Inventory
          </div>

          <div className="dor-benefit-card">
            Advanced Billing & Booking Software
          </div>

          <div className="dor-benefit-card">
            End-to-End Training & Support
          </div>

          <div className="dor-benefit-card">
            Proven Business Model
            <span>(Since 2018)</span>
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
              You run the operations while using our brand,
              inventory and support.
            </p>

          </div>

          <div className="dor-model-card">

            <h3>FOCO Model</h3>

            <p>
              Franchise Owned, Company Operated.
              You invest while we manage operations and business growth.
            </p>

          </div>

        </div>

      </section>


      {/* REQUIREMENTS */}
      <section className="dor-partner-section dor-section-light">

        <h2 className="dor-section-title">
          Key Requirements & Investment
        </h2>

        <div className="dor-requirements-grid">

          <div className="dor-requirement-card">
            <h4>Investment</h4>
            <p>₹15L – ₹40L</p>
          </div>

          <div className="dor-requirement-card">
            <h4>Showroom Size</h4>
            <p>1000 sq ft minimum</p>
          </div>

          <div className="dor-requirement-card">
            <h4>Royalty</h4>
            <p>10% – 40%</p>
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

        <button className="dor-partner-btn dor-partner-btn-large">
          Contact Us
        </button>

      </section>

    </div>
  );
}

export default PartnershipPage;