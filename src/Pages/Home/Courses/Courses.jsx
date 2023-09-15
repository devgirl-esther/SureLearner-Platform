import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./courses.css";
import CourseCard from "../../../components/CourseCard/CourseCard";
import coursesData from "../../../Data/coursesData";
import { useNavigate } from "react-router-dom";


const Courses = () => {
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
                <p>
                In a rapidly evolving world, the key to success is continuous learning and growth. Our top-rated courses empower you to unlock your full potential and reach new heights in your personal and professional journey.
                </p>
              </div>

              <div className="w-50 text-end">
                <button className="btn" onClick={()=> navigate("/courses")}>See All</button>
              </div>
            </div>
          </Col>
          {coursesData.slice(0,3).map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;