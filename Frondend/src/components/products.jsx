import React from "react";
import "../css/products.css";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <span className="service-number">01</span>
            <h3>Research Consultation</h3>
            <p>
              Professional guidance for research topic selection, problem
              definition, research objectives, proposal development, and
              methodology planning.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">02</span>
            <h3>Coding & Implementation</h3>
            <p>
              Technical implementation support using Python, MATLAB, machine
              learning, deep learning, artificial intelligence, and customized
              research solutions.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">03</span>
            <h3>Data Analysis & Visualization</h3>
            <p>
              Support for data cleaning, statistical analysis, interpretation,
              charts, graphs, visualizations, and research reporting.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">04</span>
            <h3>Manuscript Writing & Editing</h3>
            <p>
              Assistance with manuscript preparation, academic writing,
              proofreading, plagiarism checking, formatting, and reference
              management.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">05</span>
            <h3>Journal Publication Support</h3>
            <p>
              Guidance for journal selection, manuscript submission, reviewer
              comments, revisions, and publication follow-up.
            </p>
          </div>

          <div className="service-card">
            <span className="service-number">06</span>
            <h3>PhD & Academic Support</h3>
            <p>
              Dedicated support for PhD scholars including thesis guidance,
              paper presentation support, synopsis preparation, research
              documentation, and academic assistance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;