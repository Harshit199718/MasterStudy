import React from "react";
import "./instructor-bio.styles.scss";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard/course-card.component";

function InstructorBio() {
  return (
    <div className="instructor-bio">
      <div className="instructor-type_container d-flex justify-content-between align-items-center pb-3">
        <h2 className="instructor-type">Demo Instructor</h2>
        <div className="social-links_container d-flex align-items-center">
          <Link>
            <div className="link_container link_container-fb">
              <i className="fa fa-facebook"></i>
            </div>
          </Link>
          <Link>
            <div className="link_container link_container-insta">
              <i className="fa fa-instagram"></i>
            </div>
          </Link>
          <Link>
            <div className="link_container link_container-g-plus">
              <i className="fa fa-google-plus"></i>
            </div>
          </Link>
        </div>
      </div>

      <div className="bio_container">
        <h5 className="bio_header my-3">Bio</h5>
        <p className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          cupiditate quae, et sint voluptatibus, laudantium tempore voluptate
          dolorem beatae aspernatur iure temporibus distinctio, accusamus ut qui
          quo omnis ad explicabo aliquid? Ullam ad aut impedit reprehenderit
          rerum animi dolorem, suscipit corporis ipsum, dolore esse quidem
          soluta repellendus dolores, aliquid eos nobis. Voluptatum corporis
          nulla cumque quisquam aut illum totam dolor. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Consequatur rerum unde optio
          obcaecati porro reprehenderit vero voluptate soluta consectetur culpa.
        </p>
      </div>

      <div className="instructor-courses_container">
          <h5 className="courses_header my-3">Courses</h5>
          <div className="courses d-flex">
              <div className="course">
                  <CourseCard/>
              </div>
              <div className="course">
                  <CourseCard/>
              </div>
              <div className="course">
                  <CourseCard/>
              </div>
              <div className="course">
                  <CourseCard/>
              </div>
              <div className="course">
                  <CourseCard/>
              </div>
              <div className="course">
                  <CourseCard/>
              </div>
          </div>
      </div>
    </div>
  );
}

export default InstructorBio;
