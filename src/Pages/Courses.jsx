import React from "react";
import { Container,Row, Col } from "reactstrap";
import CourseCard from "../components/CourseCard/CourseCard";
import coursesData from "../Data/coursesData";

const AllCourses = () => {
  return (
    <div>
       <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>What are you learning today?</h2>
              </div>

              <div className="w-50 text-end">
               
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
    </div>
  )
};

export default AllCourses;

