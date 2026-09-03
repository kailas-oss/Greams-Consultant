import React from "react";
import "../css/homeDesign.css";
import {
  FaUserGraduate,
  FaCheckCircle,
  FaChartLine,
  FaBookOpen,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="whyus-section">
      <h2 className="whyus-title">Why Choose Us?</h2>

      <div className="whyus-container">

        <div className="whyus-card">
          <div className="icon-circle blue-bg">
            <FaUserGraduate className="whyus-icon" />
          </div>
          <h3>5+ Years of Experience</h3>
          <p>
            With over 5 years of experience, we provide reliable guidance
            and professional support for researchers and PhD scholars.
          </p>
        </div>

        <div className="whyus-card">
          <div className="icon-circle green-bg">
            <FaCheckCircle className="whyus-icon" />
          </div>
          <h3>Ethical & Confidential Support</h3>
          <p>
            We ensure confidentiality, originality, ethical research practices,
            and professional support throughout your research journey.
          </p>
        </div>

        <div className="whyus-card">
          <div className="icon-circle orange-bg">
            <FaChartLine className="whyus-icon" />
          </div>
          <h3>Specialized Research Services</h3>
          <p>
            Get comprehensive assistance with research methodology, coding,
            data analysis, machine learning, and research reporting.
          </p>
        </div>

        <div className="whyus-card">
          <div className="icon-circle darkgreen-bg">
            <FaBookOpen className="whyus-icon" />
          </div>
          <h3>Complete Publication Support</h3>
          <p>
            From manuscript writing and editing to journal selection,
            submission, and revision support, we assist you at every stage.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;