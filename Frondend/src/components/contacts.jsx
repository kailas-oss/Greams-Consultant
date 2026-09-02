import React, { useState } from "react";
import "../css/contact.css";
import api from "../api";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setShowPopup(false);

    try {
      const res = await api.post("contact/", formData);

      setResponseMessage(
        res.data.message ||
          "Thank you! Your enquiry has been submitted successfully."
      );

      setMessageType("success");
      setShowPopup(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setResponseMessage(
        "Submission failed. Please try again later."
      );

      setMessageType("error");
      setShowPopup(true);
    } finally {
      setLoading(false);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <>
      {/* ================= FULL PAGE LOADER ================= */}
      {loading && (
        <div className="page-loader">
          <div className="loader-content">
            <div className="dot-loader">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>Submitting your enquiry...</p>
          </div>
        </div>
      )}

      {/* ================= POPUP MESSAGE ================= */}
      {showPopup && (
        <div className={`popup ${messageType}`}>
          {responseMessage}
        </div>
      )}

      {/* ================= CONTACT SECTION ================= */}
      <section className="contact-section">

        <div className="contact-heading">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>Let's Start a Conversation</h1>

          <p>
            Have a research or academic support requirement?
            Get in touch with Greams Consultant and let us know
            how we can assist you.
          </p>
        </div>

        <div className="contact-container">

          {/* ================= LEFT CONTACT INFO ================= */}
          <div className="contact-info">

            <div className="contact-info-heading">
              <h2>Contact Information</h2>

              <p>
                Reach out to us for professional research,
                data analysis, coding, manuscript preparation,
                and academic support.
              </p>
            </div>

            {/* ADDRESS */}

            <div className="info-block">
              <div className="icon">
                📍
              </div>

              <div>
                <h3>Greams Consultant</h3>

                <h4>
                  RESEARCH & ACADEMIC SUPPORT
                </h4>

                <p>
                  Pammam, Marthandam, Kanyakumari - 629165
                </p>
              </div>
            </div>

            {/* PHONE */}

            <div className="info-block">
              <div className="icon">
                📞
              </div>

              <div>
                <h3>Call Us</h3>

                <p>
                  +91 94453 36119
                </p>
              </div>
            </div>

            {/* EMAIL */}

            <div className="info-block">
              <div className="icon">
                ✉️
              </div>

              <div>
                <h3>Email Us</h3>

                <p>
                  greamsinternational@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* ================= CONTACT FORM ================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label>
                Full Name <span>*</span>
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>
                Email Address <span>*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>
                Phone / Mobile <span>*</span>
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>
                Your Message / Requirement <span>*</span>
              </label>

              <textarea
                name="message"
                placeholder="Tell us how we can assist you..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading
                ? "Submitting..."
                : "Submit Enquiry →"}
            </button>

          </form>

        </div>
      </section>
    </>
  );
};

export default Contacts;