import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const genFeatureMainImage = require("../assets/images/feature-mobile-01.png");

const featuresLeft = [
  {
    id: 1,
    icon: "las la-paw",
    title: "Business Data",
    desc: "Feel The Raw Naked business data Of The Road.",
  },
  {
    id: 2,
    icon: "las la-bell",
    title: "Smart Notification",
    desc: "Whenever There's a Snack Gap, smart notification Fits.",
  },
  {
    id: 3,
    icon: "las la-copy",
    title: "Highly Customizable",
    desc: "The highly customizable Sign Means Happy Motoring.",
  },
];

const featuresRight = [
  {
    id: 1,
    icon: "las la-comment-dots",
    title: "Live Chat",
    desc: "Live chat will be for you what you want it to be.",
  },
  {
    id: 2,
    icon: "las la-share-square",
    title: "Social Share",
    desc: "A Finger of Social share is Just Enough to Give Your Kids a Treat.",
  },
  {
    id: 3,
    icon: "las la-layer-group",
    title: "Amazing Resources",
    desc: "Amazing resources quality you can see.",
  },
];

const GeneralFetures = () => {
  return (
    <section className="sp-t" id="features">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Awesome Features</p>
              </div>
              <div className="heading-title">
                <h2>
                  Check out some of our
                  <br />
                  amazingly crafted features
                </h2>
              </div>
              <div className="heading-description">
                <p>Amazing features - If you love Amazing features.</p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* - Features Data Display - */}
          <Col lg={4}>
            {(featuresLeft || []).map((feature) => (
              <div key={feature.id} className="iconbox-secondary mb-4">
                <div className="item-icon me-4">
                  <i className={feature.icon}></i>
                </div>
                <div className="item-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </Col>
          {/* - Features Data Display - */}

          {/* - Features Image - */}
          <Col lg={4} className="my-lg-0 my-5">
            <div className="feature-mobile-image">
              <img src={genFeatureMainImage} alt="Feature 01" />
            </div>
          </Col>
          {/* - Features Image - */}

          {/* - Features Data Display - */}
          <Col lg={4}>
            {(featuresRight || []).map((feature) => (
              <div key={feature.id} className="iconbox-secondary mb-4">
                <div className="item-icon me-4">
                  <i className={feature.icon}></i>
                </div>
                <div className="item-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </Col>
          {/* - Features Data Display - */}
        </Row>
      </Container>
    </section>
  );
};

export default GeneralFetures;
