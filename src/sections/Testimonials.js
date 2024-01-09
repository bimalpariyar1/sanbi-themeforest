import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    image: require("../assets/images/testie-01.png"),
    testimonieText:
      "We're moving to this integration of biomedicine,information technology, wireless and mobile now - anera of digital medicine. Even my stethoscope is now digital. And of course, there's an app for that.",
    avatar: require("../assets/images/Figma.png"),
    testimonieName: "Shane Catson",
    indentity: "CEO, Capital SEO",
  },
  {
    id: 2,
    image: require("../assets/images/testie-02.png"),
    testimonieText:
      "The First Industrial Revolution used water and steam power to mechanize production. The Second used electric power to create mass production. The Third used electronics and information technology to automate production.",
    avatar: require("../assets/images/Dailymotion.png"),
    testimonieName: "Chris Wort",
    indentity: "Designer, Focus Lab",
  },
  {
    id: 3,
    image: require("../assets/images/testie-03.png"),
    testimonieText:
      "The number one benefit of information technology is that it empowers people to do what they want to do. It lets people be creative. It lets people be productive. It lets people learn things they didn't think they could learn before, and so in a sense it is all about potential.",
    avatar: require("../assets/images/Snapchat.png"),
    testimonieName: "Jane Aniston",
    indentity: "QA Engineer, Creative Agency",
  },
];

const Testimonials = () => {
  const [imageSlider, setImageSlider] = useState();
  const [textSlider, setTextSlider] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="testimonials sp-t" id="testimonials">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Our Impact</p>
              </div>
              <div className="heading-title">
                <h2>People who already love us</h2>
              </div>
              <div className="heading-description">
                <p>It's the Bright One, it's the Right One, that's Love us.</p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="testimonials-box p-5">
              <Row>
                <Col lg={5}>
                  {/* - Tesimononie Image Slider - */}
                  <Slider
                    {...settings}
                    asNavFor={textSlider}
                    ref={(slider1) => setImageSlider(slider1)}
                    fade={true}
                    className="testimonie-thumb-slider"
                  >
                    {(testimonialsData || []).map((testimonie) => (
                      <div key={testimonie.id}>
                        <img
                          src={testimonie.image}
                          alt={testimonie.testimonieName}
                        />
                      </div>
                    ))}
                  </Slider>
                  {/* - Tesimononie Image Slider - */}
                </Col>

                <Col lg={7} className="px-lg-5">
                  <div className="testie-quote">
                    <i className="las la-quote-left"></i>
                  </div>
                  {/* - Tesimononie Text Slider - */}
                  <Slider
                    {...settings}
                    asNavFor={imageSlider}
                    ref={(slider2) => setTextSlider(slider2)}
                    className="testimonial-slider"
                    dots={true}
                    focusOnSelect={true}
                    adaptiveHeight={true}
                  >
                    {(testimonialsData || []).map((testimonie) => (
                      <div key={testimonie.id}>
                        <div className="testimonie-text my-4">
                          “{testimonie.testimonieText}”
                        </div>
                        <div className="testimonie-meta d-flex align-items-center">
                          <div className="avatar">
                            <img
                              src={testimonie.avatar}
                              alt={testimonie.testimonieName}
                            />
                          </div>
                          <div className="info ms-4">
                            <strong>{testimonie.testimonieName}</strong>
                            <br />
                            <span>{testimonie.indentity}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  {/* - Tesimononie Text Slider - */}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
