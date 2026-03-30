import React, { useState, useEffect } from "react";
import "./HeroSlider.css";

/* =========================
   SLIDES DATA
   Desktop + Mobile Images
========================= */

const slidesData = [
  {
    image: "/h211.webp",
    mobileImage: "/h1m.webp",
    tagline: "",
    title: (
      <>
        
      </>
    ),
    desc:
      ""
  },

  {
    image: "/h222.webp",
    mobileImage: "/h6m.webp",
    tagline: "",
    title: (
      <>
        
      </>
    ),
    desc:
      ""
  },

  {
    image: "/h111.webp",
    mobileImage: "/h11m.webp",
    tagline: "Pure Moments. Safe Memories.",
    title: (
      <>
        Wrapped in Love<span> Styled in Elegance</span>
      </>
    ),
    desc:
      "Elegant maternity outfits by DOR Dress on Rent, crafted with utmost hygiene, care & comfort for your special journey"
  },

  {
    image: "/h122.webp",
    mobileImage: "/h12m.webp",
    tagline: "More Glam, More Power, More You",
    title: (
      <>
       Dressed to Dazzle <span>at Your Doorstep</span>
      </>
    ),
    desc:
      "From date nights to girls parties, never worry about what to wear for any stylish occasion "
  },

  {
    image: "/h1422.webp",
    mobileImage: "/h14m.webp",
        tagline: "Create Memories, Not Expenses",
    title: (
      <>
      Wear  <span> the Dream</span>
      </>
    ),
    desc:
      "Stunning lehengas by DOR Dress on Rent, made for moments you’ll cherish forever."

  },
  
  {
    image: "/h133.webp",
    mobileImage: "/h13m.webp",
    tagline: "Where Kings Begin Their Forever",
    title: (
      <>
       Crowned for <span>the Big Day</span>
      </>
    ),
    desc:
      "Royal sherwanis by DOR Dress on Rent, crafted for your once-in-a-lifetime moment."
  },


];

/* =========================
   COMPONENT
========================= */

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  /* =========================
     DETECT MOBILE SCREEN
  ========================= */
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () =>
      window.removeEventListener("resize", checkMobile);
  }, []);

  /* =========================
     AUTO SLIDE
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  /* =========================
     NAVIGATION
  ========================= */
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slidesData.length - 1 : prev - 1
    );
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <section className="hero-slider">
      {slidesData.map((slide, i) => {
        /* Choose correct image */
        const bgImage =
          isMobile && slide.mobileImage
            ? slide.mobileImage
            : slide.image;

        return (
          <div
            key={i}
            className={`hero-slide ${
              i === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${bgImage})`
            }}
          >
            {/* Overlay */}
            <div className="hero-overlay" />

            {/* Content */}
            <div className="hero-content">
              {/* Tagline */}
              <p className="hero-tagline animate animate-1">
                {slide.tagline}
              </p>

              {/* Title */}
              <h2 className="hero-title animate animate-2">
                {slide.title}
              </h2>

              {/* Description */}
              <p className="hero-desc animate animate-3">
                {slide.desc}
              </p>

              {/* CTA */}
              {/* <div className="hero-actions animate animate-4">
                <a href="#" className="hero-btn primary">
                  Get Service →
                </a>
              </div> */}
            </div>
          </div>
        );
      })}

      {/* =========================
          ARROWS
      ========================= */}
      <div
        className="hero-nav hero-prev"
        onClick={prevSlide}
      >
        ‹
      </div>

      <div
        className="hero-nav hero-next"
        onClick={nextSlide}
      >
        ›
      </div>

      {/* =========================
          DOTS
      ========================= */}
      <div className="hero-dots">
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={`hero-dot ${
              i === index ? "active" : ""
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
