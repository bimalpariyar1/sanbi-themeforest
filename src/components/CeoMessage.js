import React from "react";
import { Row, Col } from "react-bootstrap";

const ceoImage = require("../assets/images/ceo.png");

const CeoMessage = () => {
  return (
    <div className="ceo-message-wrap p-5">
      <Row className="align-items-center">
        <Col lg={5} className="mb-lg-0 mb-4">
          <div className="ceo-image">
            <img src={ceoImage} alt="Ceo" />
          </div>
        </Col>

        <Col lg={7}>
          <div className="ceo-message-content ms-lg-4">
            <div className="ceo-message-text mb-4">
              “We accept that flawlessness is exaggerated and frequently
              disillusions when the commerce objectives are what checks.”
            </div>
            <div className="meta">
              <div>
                <strong>Bellal Dhar</strong>
              </div>
              <div>Ceo & Founder</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CeoMessage;
