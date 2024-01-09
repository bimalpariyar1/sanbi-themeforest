import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const trustiesList = [
  { id: 1, title: "Notion", image: require("../assets/images/Notion.png") },
  { id: 2, title: "Skype", image: require("../assets/images/Skype.png") },
  { id: 3, title: "VSCode", image: require("../assets/images/VSCode.png") },
  { id: 4, title: "GitHub", image: require("../assets/images/GitHub.png") },
  { id: 5, title: "Spotify", image: require("../assets/images/Spotify.png") },
  {
    id: 6,
    title: "Kickstarter",
    image: require("../assets/images/Kickstarter.png"),
  },
  { id: 7, title: "Xbox", image: require("../assets/images/Xbox.png") },
  { id: 8, title: "Behance", image: require("../assets/images/Behance.png") },
];

const Trusties = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg={4}>
            {/* - Section Heading - */}
            <div className="section-heading mb-5">
              <div className="sub-heading">
                <p>Integrations</p>
              </div>
              <div className="heading-title">
                <h2>Trusted by many companies</h2>
              </div>
              <div className="heading-description">
                <p>
                  Would You Give Someone Your Last Trusted by? Get the Door -
                  It's Trusted by.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>

          <Col lg={8}>
            {/* - Third Parties Logos - */}
            <Row>
              {(trustiesList || []).map((trustie) => (
                <Col key={trustie.id} md={3} sm={4} className="col-4 mb-4">
                  <div className="third-party-logo">
                    <img src={trustie.image} alt={trustie.title} />
                  </div>
                </Col>
              ))}
            </Row>
            {/* - Third Parties Logos - */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Trusties;
