import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "../components/CotactForm";

const contactInfoData = [
  {
    id: 1,
    icon: "las la-envelope",
    title: "Email Us",
    desc: "example@gmail.com",
  },
  {
    id: 2,
    icon: "las la-phone-volume",
    title: "Call Us",
    desc: "+61 0415 685 865",
  },
  {
    id: 3,
    icon: "las la-map",
    title: "Visit Us",
    desc: "2561, Victoria Market, Melbourne VIC, 3000",
  },
];

const Contact = () => {
  return (
    <section className="sp-tb" id="contact">
      <Container>
        <Row>
          <Col lg={6}>
            {/* - Section Heading - */}
            <div className="section-heading mb-5">
              <div className="sub-heading">
                <p>Contact Us</p>
              </div>
              <div className="heading-title">
                <h2>Get in Touch</h2>
              </div>
              <div className="heading-description">
                <p>When you say Get in touch you've said it all.</p>
              </div>
            </div>
            {/* - Section Heading - */}

            {/* - Contact Info - */}
            <div className="contact-infos mt-5">
              {(contactInfoData || []).map((info) => (
                <div className="iconbox-secondary mb-4" key={info.id}>
                  <div className="item-icon me-4">
                    <i className={info.icon}></i>
                  </div>
                  <div className="item-content">
                    <h4>{info.title}</h4>
                    <p>{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* - Contact Info - */}
          </Col>
          <Col lg={6}>
            {/* - Contact Form - */}
            <ContactForm />
            {/* - Contact Form - */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
