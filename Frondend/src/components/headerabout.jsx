import React from "react";
import "../css/headerabout.css";

const Headerabout = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-text">
            <span className="about-label">ABOUT GREAMS INTERNATIONAL</span>

            <h1>About Greams International</h1>

            <p>
              Greams International is a growing import and export company based
              in India, focused on delivering reliable, high-quality products
              to international markets with transparency, integrity, and care.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h3>Global</h3>
                <span>Trade Focus</span>
              </div>

              <div className="stat-item">
                <h3>Quality</h3>
                <span>Driven Approach</span>
              </div>

              <div className="stat-item">
                <h3>Trusted</h3>
                <span>Supply Network</span>
              </div>
            </div>
          </div>

          <div className="about-hero-image">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Global Trade Logistics"
            />
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-content-inner">
          <div className="about-content-text">
            <span className="section-label">WHO WE ARE</span>

            <h2>Building Connections Across Global Markets</h2>

            <p>
              We are a growing export company committed to sourcing and
              supplying carefully selected products that meet international
              quality expectations. Our approach is built on learning,
              adaptability, and strong attention to detail.
            </p>

            <p>
              By working closely with reliable suppliers and logistics
              partners, we aim to ensure smooth coordination, timely
              deliveries, and clear communication throughout the trade
              process.
            </p>
          </div>

          <div className="about-content-image">
            <img
              src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
              alt="International Business Collaboration"
            />
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vision-mission">
        <div className="vm-container">
          <div className="vm-card">
            <span className="vm-number">01</span>

            <h3>Our Vision</h3>

            <p>
              To transform global trade through transparency, trust, and
              innovative sourcing solutions. We aim to create a marketplace
              where buyers have access to multiple reliable sourcing options
              and suppliers can connect with the right customers.
            </p>

            <p>
              By promoting quality, fair business practices, and long-term
              partnerships, we strive to make international trade more
              efficient, accessible, and beneficial for everyone involved.
            </p>
          </div>

          <div className="vm-card">
            <span className="vm-number">02</span>

            <h3>Our Mission</h3>

            <p>
              To connect global buyers and suppliers through transparent,
              reliable, and efficient sourcing solutions while ensuring
              quality, trust, and long-term business growth for all
              stakeholders.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Headerabout;