import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Newsletter from "./NewsLetter";
import { Link } from "react-router-dom";

const colorLogoImage = require("../assets/images/color-logo.png");

const socialLinks = [
  { id: 1, link: "#", icon: "lab la-facebook" },
  { id: 2, link: "#", icon: "lab la-whatsapp" },
  { id: 3, link: "#", icon: "lab la-twitter" },
  { id: 4, link: "#", icon: "lab la-linkedin" },
  { id: 5, link: "#", icon: "lab la-instagram" },
];

const quickLinks = [
  { id: 1, link: "#", item: "Home" },
  { id: 2, link: "#", item: "About" },
  { id: 3, link: "#", item: "Blogs" },
  { id: 4, link: "#", item: "Pricing" },
  { id: 5, link: "#", item: "Download" },
  { id: 6, link: "#", item: "Features" },
];

const usefulLinks = [
  { id: 1, link: "#", item: "Documentation" },
  { id: 2, link: "#", item: "Developers Only" },
  { id: 3, link: "#", item: "Terms & Conditions" },
  { id: 4, link: "#", item: "Privacy Policy" },
  { id: 5, link: "#", item: "Quick Integrations" },
  { id: 6, link: "#", item: "Code Quality" },
];

const Footer = () => {
  return (
    <>
      <footer className="sp-b">
        <Container>
          <Row>
            <Col lg={3} className="mb-lg-0 mb-5">
              {/* - Footer Info - */}
              <div className="footer-info">
                {/* - Footer Logo - */}
                <div className="footer-info-logo">
                  <img src={colorLogoImage} alt="color-logo" />
                </div>
                {/* - Footer Logo - */}

                <div className="footer-info-text my-4">
                  <p>
                    Professional looking, clean and modern design. Landing page
                    for your business.
                  </p>
                </div>
              </div>

              <div className="footer-social">
                <ul>
                  {(socialLinks || []).map((link) => (
                    <li key={link.id}>
                      <Link to={link.link}><i className={link.icon}></i></Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* - Footer Info - */}
            </Col>

            {/* - Footer Links - */}
            <Col lg={5} className="mb-lg-0 mb-5">
              <Row>
                <Col md={6}>
                  <div className="footer-menu">
                    <div className="menu-heading">
                      <h5>Quick Links</h5>
                    </div>
                    <div className="footer-menu-list">
                      <ul>
                        {(quickLinks || []).map((link) => (
                          <li key={link.id}> 
                            <Link to={link.link}>{link.item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} className="mt-lg-0 mt-5">
                  <div className="footer-menu">
                    <div className="menu-heading">
                      <h5>Useful Links</h5>
                    </div>
                    <div className="footer-menu-list">
                      <ul>
                        {(usefulLinks || []).map((link) => (
                          <li key={link.id}>
                            <Link to={link.link}>{link.item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* - Footer Links - */}

            {/* - Newsletter Form - */}
            <Col lg={4} className="mb-lg-0 mb-5">
              <Newsletter />
            </Col>
            {/* - Newsletter Form - */}
          </Row>

          <Row>
            <Col md={12}>
              {/* - Copyright - */}
              <div className="copy-right text-center mt-5 pt-5">
                Copyright 2023 Sanbi React | Created by bimal-themes
                <br />
                Powered by - Themeforest
              </div>
              {/* - Copyright - */}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
