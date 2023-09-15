import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: " With our platform, you'll experience accelerated learning, gaining valuable skills and expertise to propel your personal and professional growth. Embrace the speed of success with our Quick Learning courses.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "Whether you're an early riser or a night owl, our support team is here around the clock, ready to answer your questions, provide guidance, and ensure you have a seamless learning experience.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: " When you earn a certification with us, you're not just adding a credential to your resume; you're demonstrating your mastery of the subject matter to employers, clients, and peers",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;