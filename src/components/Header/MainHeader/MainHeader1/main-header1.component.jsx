import React from "react";
import "./main-header1.styles.scss";

function MainHeader1(props) {
  return (
    <div
      className={`main-header1 ${
        props.path !== "/profile" &&
        props.path !== "/courses" &&
        props.path !== "/quizz" &&
        props.path !== "/add-course" &&
        props.path !== "/view-course"
          ? "d-none"
          : ""
      }`}
    >
      <div className="logo-and-links_container d-flex justify-content-between align-items-center">
        <div className="main-header1-logo_container">
          <img
            src="https://stylemixthemes.com/masterstudy/academy/wp-content/uploads/sites/9/2018/09/MasterStudy-1.svg"
            alt=""
          />
        </div>
        <div className="links_container d-flex align-items-center justify-content-center">
          <div className="link_container text-white text-center art-and-photography">
            <i className="fa fa-camera"></i>
            <h5 className="link-text m-0">Art & Photography</h5>
          </div>
          <div className="link_container text-white text-center business-and-marketing">
            <i className="fa fa-pie-chart"></i>
            <h5 className="link-text m-0">Business & Marketing</h5>

            <div className="sub-menu_container py-5 px-2 d-flex justify-content-between align-items-center">
              <div className="sub-menu-links_container d-flex align-items-center">
                <a href="#">
                  <h5 className="sub-menu-link m-0 mr-5 d-flex align-items-center">
                    <i className="fa fa-arrow-right"></i>
                    <span>3D Printing Concept</span>
                  </h5>
                </a>
              </div>
              <div className="serach-course-input_container d-flex align-items-center">
                <input
                  type="text"
                  className="search-course-input"
                  placeholder="Search Courses"
                />
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>

          <div className="link_container text-white text-center computer-science">
            <i className="fa fa-folder-o"></i>
            <h5 className="link-text m-0">Computer Science</h5>
            <div className="sub-menu_container py-5 px-2 d-flex justify-content-between align-items-center">
              <div className="sub-menu-links_container d-flex align-items-center">
                <a href="#">
                  <h5 className="sub-menu-link m-0 mr-5 d-flex align-items-center">
                    <i className="fa fa-arrow-right"></i>
                    <span>3D Printing Concept</span>
                  </h5>
                </a>
              </div>
              <div className="serach-course-input_container d-flex align-items-center">
                <input
                  type="text"
                  className="search-course-input"
                  placeholder="Search Courses"
                />
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="link_container text-white text-center health-and-fitness">
            <i className="fa fa-heart-o"></i>
            <h5 className="link-text m-0">Health & Fitness</h5>
            <div className="sub-menu_container py-5 px-2 d-flex justify-content-between align-items-center">
              <div className="sub-menu-links_container d-flex align-items-center">
                <a href="#">
                  <h5 className="sub-menu-link m-0 mr-5 d-flex align-items-center">
                    <i className="fa fa-arrow-right"></i>
                    <span>3D Printing Concept</span>
                  </h5>
                </a>
              </div>
              <div className="serach-course-input_container d-flex align-items-center">
                <input
                  type="text"
                  className="search-course-input"
                  placeholder="Search Courses"
                />
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
          <div className="link_container text-white text-center multi-media">
            <i className="fa fa-music"></i>
            <h5 className="link-text m-0">Multi-media</h5>
            <div className="sub-menu_container py-5 px-2 d-flex justify-content-between align-items-center">
              <div className="sub-menu-links_container d-flex align-items-center">
                <a href="#">
                  <h5 className="sub-menu-link m-0 mr-5 d-flex align-items-center">
                    <i className="fa fa-arrow-right"></i>
                    <span>3D Printing Concept</span>
                  </h5>
                </a>
              </div>
              <div className="serach-course-input_container d-flex align-items-center">
                <input
                  type="text"
                  className="search-course-input"
                  placeholder="Search Courses"
                />
                <i className="fa fa-search"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="user_container d-flex justify-content-center align-items-center">
          <div className="search justify-content-center align-items-center">
            <i className="fa fa-search text-white"></i>
          </div>
          <div className="user d-flex justify-content-center align-items-center">
            <i className="fa fa-user-o text-white"></i>
          </div>
        </div>
      </div>
      <div className="directions_container px-5 py-3">
        <h5 className="directions m-0">
          <a href="#" className="direction text-uppercase">
            {" "}
            LMS sites{" "}
          </a>
          <i className="fa fa-angle-right"></i>
          <a href="#" className="direction text-uppercase">
            {" "}
            MASTERSTUDY - ACADEMY WORDPRESS THEME FOR ONLINE EDUCATION{" "}
          </a>
          <i className="fa fa-angle-right"></i>
          <a href="#" className="direction text-uppercase">
            {" "}
            BUSINESS & MARKETING{" "}
          </a>
          <i className="fa fa-angle-right"></i>
          <a href="#" className="direction text-uppercase">
            {" "}
            3D PRINTING CONCEPT
          </a>
        </h5>
      </div>
    </div>
  );
}

export default MainHeader1;
