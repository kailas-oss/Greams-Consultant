import React from "react";
import aboutImg from "../assets/global.jpg";
import "../css/homeDesign.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-left">
          <h2>About Greams Consultant</h2>

          <p>
            Established in 2021, Greams Consultant is a professional research
            and academic support organization with over 5 years of experience
            in helping researchers, scholars, and PhD students achieve their
            academic and research goals.
          </p>

          <p>
            We believe that successful research requires more than just
            technical knowledge—it requires proper guidance, structured
            planning, reliable analysis, and dedicated support. Our goal is to
            assist researchers at every stage of their journey, from research
            proposal development and methodology guidance to coding, data
            analysis, manuscript writing, and journal publication support.
          </p>

          <p>
            At Greams Consultant, we are committed to providing
            high-quality, confidential, ethical, and customized research
            support. With 5 years of experience, we help bridge the gap between
            research ideas and successful publication through expert guidance,
            technical implementation, and continuous support. Our vision is to
            empower researchers and PhD scholars to produce meaningful,
            high-quality research and achieve successful academic outcomes.
          </p>
        </div>

        <div className="about-right">
          <img
            src={aboutImg}
            alt="Greams Consultant Research and Academic Support"
          />
        </div>

      </div>
    </section>
  );
};

export default About;