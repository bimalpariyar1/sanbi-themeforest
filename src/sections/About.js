import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import CeoMessage from "../components/CeoMessage";

const aboutBoxes = [
  {
    id: 1,
    icon: "las la-download",
    title: "Download app",
    desc: "When The Going Gets Tough, The Tough Get Download app.",
  },
  {
    id: 2,
    icon: "las la-user-shield",
    title: "Register yourself",
    desc: "If Only Everything in Life was as Reliable as a Register yourself.",
  },
  {
    id: 3,
    icon: "las la-smile-beam",
    title: "Enjoy the app",
    desc: "I Scream, You Scream, We All Scream for Enjoy the app.",
  },
];

const About = () => {
  return (
    <section className="sp-t" id="about">
      <Container>
        <Row>
          <Col lg={8} className="mb-5 mx-auto text-center">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Who we are?</p>
              </div>
              <div className="heading-title">
                <h2>We are market leader</h2>
              </div>
              <div className="heading-description">
                <p>
                  Market leader like business, is better with multiple partners.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        {/* - About Data Display - */}
        <Row>
          {(aboutBoxes || []).map((box) => (
            <Col key={box.id} lg={4} className="mb-lg-0 mb-4 text-center">
              <div className="iconbox-primary">
                <div className="item-icon mb-4">
                  <i className={box.icon}></i>
                </div>
                <div className="item-content">
                  <h3>{box.title}</h3>
                  <p>{box.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* - About Data Display - */}

        {/* - CEO Message - */}
        <Row className="mt-5">
          <Col md={12}>
            <CeoMessage />
          </Col>
        </Row>
        {/* - CEO Message - */}
      </Container>
    </section>
  );
};

export default About;
