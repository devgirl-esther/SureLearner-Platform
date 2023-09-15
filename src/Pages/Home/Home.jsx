import React, { Fragment } from "react";
import HeroSection from "./Hero-Section/HeroSection";

import Courses from "./Courses/Courses";
import ChooseUs from "./Choose/ChooseUs"
import Features from "./Feature-Section/Features";
import FreeCourse from "./Free-course-section/FreeCourse";
import Testimonials from "./Testimonial/Testimonials";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};

export default Home;