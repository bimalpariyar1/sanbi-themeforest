import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    id: 1,
    type: "basic",
    title: "Basic",
    desc: "Small Business who are just starting on their marketing.",
    price: "30.00",
    link: "#",
  },
  {
    id: 2,
    type: "professional",
    title: "Professional",
    desc: "Established Marketing Teams with bigger needs.",
    price: "80.00",
    link: "#",
  },
  {
    id: 3,
    type: "enterprise",
    title: "Enterprise",
    desc: "Agencies who need to manage multiple accounts.",
    price: "120.00",
    link: "#",
  },
];

const PricingPlans = () => {
  return (
    <section className="pricing-plan sp-tb" id="pricing">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Choose as your need</p>
              </div>
              <div className="heading-title">
                <h2>Really Simple Pricing</h2>
              </div>
              <div className="heading-description">
                <p>No hidden fees, no limits</p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>
        {/* - Pricing Boxes - */}
        <Row>
          {(pricingPlans || []).map((plan) => (
            <Col key={plan.id} lg={4} className="mb-lg-0 mb-4">
              <div
                className={`${
                  plan.type === "professional"
                    ? "pricing-plan-single p-5 plan-professional"
                    : "pricing-plan-single p-5"
                }`}>
                <div className="plan-heading mb-5">
                  <h3>{plan.title}</h3>
                  <p>{plan.desc}</p>
                </div>
                <div className="plan-cost mb-5">
                  <span className="price">${plan.price}</span>
                  <span className="schedule">/month</span>
                </div>
                <div className="plan-action">
                  <div className="mb-4">
                    <Link 
                      to="#"
                      className={
                        plan.type === "professional"
                          ? "anchor-button secondary button-lg"
                          : "anchor-button primary button-lg"
                      }>
                      Try free for 30 days
                    </Link>
                  </div>
                  <div className="text-center">No credit card required</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* - Pricing Boxes - */}
      </Container>
    </section>
  );
};

export default PricingPlans;
