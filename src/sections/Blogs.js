import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    categories: "Marketing, Creative",
    image: require("../assets/images/blog-01.png"),
    title: "Top 6 Membership Sites for Beginners",
    date: "March 19, 2023",
  },
  {
    id: 2,
    categories: "Tutorials Ui/Ux Design",
    image: require("../assets/images/blog-02.png"),
    title: "How to become a web designer in 2023",
    date: "March 25, 2023",
  },
  {
    id: 3,
    categories: "Resources Tutorials",
    image: require("../assets/images/blog-03.png"),
    title: "20 best affiliate programs for online creators in 2023",
    date: "April 04, 2023",
  },
];

const Blogs = () => {
  return (
    <section className="sp-tb" id="blogs">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            {/* - Section Heading - */}
            <div className="section-heading">
              <div className="sub-heading">
                <p>Stay upto date</p>
              </div>
              <div className="heading-title">
                <h2>From the blog and articles</h2>
              </div>
              <div className="heading-description">
                <p>
                  The Best Part of Waking Up is Blog and articles in Your Cup.
                </p>
              </div>
            </div>
            {/* - Section Heading - */}
          </Col>
        </Row>

        {/* - Blog Posts - */}
        <Row>
          {(blogData || []).map((blog) => (
            <Col key={blog.id} lg={4}>
              <div className="blog-single mb-lg-0 mb-4">
                <div className="blog-thumb-image">
                  <Link to="#">
                    <img src={blog.image} alt={blog.title} />
                  </Link>
                </div>
                <div className="mt-5">
                  <div>{blog.categories}</div>
                  <div className="blog-title my-4">
                    <h4>
                      <Link to="#">{blog.title}</Link>
                    </h4>
                  </div>
                  <div>{blog.date}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        {/* - Blog Posts - */}
      </Container>
    </section>
  );
};

export default Blogs;
