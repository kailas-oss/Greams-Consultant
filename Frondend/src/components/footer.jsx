import React from "react";
import "../css/homeDesign.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1: Contact */}
        <div className="footer-col">
          <h3>CONTACT</h3>
          <p>Email: greamsinternational@gmail.com</p>
          <p>Phone: +91 94453 36119</p>
          <p>Location: Pammam, India</p>
        </div>

        {/* Column 2: Company */}
        <div className="footer-col">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="/">Overview</a></li>
            {/* <li><a href="/about">About Us</a></li>
            <li><a href="/products">Our Services</a></li> */}
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Why Us */}
        <div className="footer-col">
          <h3>WHY US</h3>
          <ul>
            <li><p>5+ Years of Experience</p></li>
            <li><p>Confidential Support</p></li>
            <li><p>Ethical Research Practices</p></li>
            <li><p>Expert Research Guidance</p></li>
            <li><p>Timely Delivery</p></li>
          </ul>
        </div>

        {/* Column 4: Our Services */}
        <div className="footer-col">
          <h3>OUR SERVICES</h3>
          <ul>
            <li><p>Research Consultation</p></li>
            <li><p>Coding & Implementation</p></li>
            <li><p>Data Analysis & Visualization</p></li>
            <li><p>Manuscript Writing & Editing</p></li>
            <li><p>Journal Publication Support</p></li>
            <li><p>PhD & Academic Support</p></li>
          </ul>
        </div>

      </div>

      {/* Social Media */}
      <div className="footer-social">
        <h4>SOCIAL MEDIA</h4>
        <div className="social-icons">
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Greams Consultant. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;