  import React from "react";
  import "../css/homeDesign.css";

  import homeImg from "../assets/homeimg1.jpg";

  const Home = () => {
    return (
      <section
        className="home-hero"
        id="home"
        aria-label="Greams Consultant - Research and PhD Journal Support"
      >
        <div className="hero-bg">
          <img
            src={homeImg}
            alt=""
            className="home-hero-image"
          />
        </div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
        <div className="hero-orbit orbit-three"></div>

        <div className="hero-text">
          <span className="hero-label">
            RESEARCH • ANALYSIS • PUBLICATION
          </span>

          <h1>
            Empowering Your Research Journey
            <span>From Idea to Publication</span>
          </h1>

          <p>
            Professional research and academic support for researchers,
            scholars, and PhD students. From research planning and coding
            to data analysis, manuscript preparation, and publication support.
          </p>

          <div className="hero-buttons">
            <a href="/contact" className="primary-btn">
              Start Your Research
              <span>↗</span>
            </a>

            <a href="#about" className="secondary-btn">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-features">

          <div className="hero-feature-card">
            <span className="feature-number">01</span>
            <h3>Research Support</h3>
            <p>
              Structured guidance from research ideas to methodology and planning.
            </p>
          </div>

          <div className="hero-feature-card feature-highlight">
            <span className="feature-number">02</span>
            <h3>Data & Coding</h3>
            <p>
              Expert assistance with analysis, programming, AI and machine learning.
            </p>
          </div>

          <div className="hero-feature-card">
            <span className="feature-number">03</span>
            <h3>Manuscript Support</h3>
            <p>
              Professional writing, editing, formatting and research reporting.
            </p>
          </div>

          <div className="hero-feature-card">
            <span className="feature-number">04</span>
            <h3>Publication Guidance</h3>
            <p>
              Journal selection, submission and revision support for researchers.
            </p>
          </div>

        </div>
      </section>
    );
  };

  export default Home;