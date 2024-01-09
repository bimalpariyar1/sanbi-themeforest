import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

const ContactForm = () => {
  const [contactFormData, setContactFormData] = useState({
    firstName: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactFormData((preValues) => {
      return {
        ...preValues,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Field Values", contactFormData);
    setContactFormData({
      firstName: "",
      lastname: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <div className="contact-form">
        <div className="mb-4">
          <div className="mb-2">
            <h4>Leave us a message</h4>
          </div>
          <p>And we will get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6} className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={contactFormData.firstName}
              />
            </Col>
            <Col md={6} className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                name="lastname"
                onChange={handleChange}
                value={contactFormData.lastname}
              />
            </Col>
            <Col md={12} className="mb-4">
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={handleChange}
                value={contactFormData.email}
              />
            </Col>
            <Col md={12} className="mb-4">
              <textarea
                placeholder="Your Message..."
                name="message"
                onChange={handleChange}
                value={contactFormData.message}
              ></textarea>
            </Col>
          </Row>
          <div className="submit-wrap">
            <button type="submit" className="button button-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
