import React, { Component } from "react";
import "./view-course-sidebar.styles.scss";
import slide1 from "../../assets/slide1.jpg";

export class ViewCourseSidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="view-course-sidebar">
        <div className="add-to-wish-list_container mb-3 d-flex align-items-center">
          <div className="wish-list-icon mr-2 d-flex justify-content-center align-items-center">
            <i className="fa fa-heart-o"></i>
          </div>
          <p className="add-to-wishlist m-0">Add to wishlist</p>
        </div>
        <button className="continue-btn text-uppercase">Continue</button>

        <div className="course-score-box p-4 mt-3">
          <p className="score">
            You have completed the course: <span>Score 75%</span>
          </p>

          <div className="completed-feature_container">
            <div className="completed-feature mb-3 mutlimedia-score d-flex align-items-center">
              <i className="fa fa-play-circle mr-4"></i>
              <p className="multimedia feature m-0">
                Multimedia: <span>3/3</span>
              </p>
            </div>
            <div className="completed-feature mb-3 mutlimedia-score d-flex align-items-center">
              <i className="fa fa-question-circle-o mr-4"></i>
              <p className="quizzes feature m-0">
                Quizzes: <span>3/3</span>
              </p>
            </div>
            <div className="completed-feature mb-3 mutlimedia-score d-flex align-items-center">
              <i className="fa fa-file-text-o mr-4"></i>
              <p className="Pages feature m-0">
                Multimedia: <span>3/3</span>
              </p>
            </div>
          </div>
        </div>

        <div className="download-certificate_container px-2 mt-3 d-flex align-items-center justify-content-center">
          <i className="fa fa-cloud-download mr-1"></i>
          <p className="download-certificate m-0">Download your Certificate</p>
        </div>

        <div className="course-details  mt-3">
          <div className="detail enrolled-students_container py-3 d-flex align-items-center justify-content-between">
            <p className="total enrolled-students m-0">
              Enrolled: <span>389 students</span>
            </p>
            <i className="fa fa-users"></i>
          </div>
          <div className="detail duration_container py-3 d-flex align-items-center justify-content-between">
            <p className="total duration m-0">
              Duration: <span>6 hours</span>
            </p>
            <i className="fa fa-clock-o"></i>
          </div>
          <div className="detail lectures_container py-3 d-flex align-items-center justify-content-between">
            <p className="total lectures m-0">
              Lectures: <span>6</span>
            </p>
            <i className="fa fa-bullhorn"></i>
          </div>
          <div className="detail video_container py-3 d-flex align-items-center justify-content-between">
            <p className="total video m-0">
              Video: <span>3 hours</span>
            </p>
            <i className="fa fa-video-camera"></i>
          </div>
          <div className="detail level_container py-3 d-flex align-items-center justify-content-between">
            <p className="total level m-0">
              Level: <span>Beginner</span>
            </p>
            <i className="fa fa-line-chart"></i>
          </div>
        </div>

        <div className="other-courses-and-working-hours_container pt-3 pl-3">
          <div className="other-courses_container">
            <div className="other-course mb-3 d-flex justify-content-between">
              <div className="other-course-thumbnail mr-2">
                <img src={slide1} alt="" />
              </div>
              <div className="other-course-desc">
                <p className="other-course-title m-0">
                  Lorem ipsum dolor sit amet sit amet.
                </p>
                <button className="course-price-btn paid mb-1">$49</button>
                <p className="course-instructor m-0">By William Swafford</p>
              </div>
            </div>
            <div className="other-course mb-3 d-flex justify-content-between">
              <div className="other-course-thumbnail mr-2">
                <img src={slide1} alt="" />
              </div>
              <div className="other-course-desc">
                <p className="other-course-title m-0">
                  Lorem ipsum dolor sit amet sit amet.
                </p>
                <button className="course-price-btn free mb-1">Free</button>
                <p className="course-instructor m-0">By William Swafford</p>
              </div>
            </div>
            <div className="other-course mb-3 d-flex justify-content-between">
              <div className="other-course-thumbnail mr-2">
                <img src={slide1} alt="" />
              </div>
              <div className="other-course-desc">
                <p className="other-course-title m-0">
                  Lorem ipsum dolor sit amet sit amet.
                </p>
                <button className="course-price-btn free mb-1">Free</button>
                <p className="course-instructor m-0">By William Swafford</p>
              </div>
            </div>
          </div>

          <div className="horizontal-target d-flex justify-content-between my-5">
            <div className="small"></div>
            <div className="large"></div>
          </div>

        <div className="archive_container mb-5">
             <h5 className="archive_header mb-3">Archive</h5>

        </div>

          <div className="working-hours_container mb-5">
              <h5 className="working-hours_header mb-3">Working hours</h5>
              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Monday</h5>
                  <h5 className="time m-0">9:30 am - 6:00 pm</h5>
              </div>

              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Tuesday</h5>
                  <h5 className="time m-0">9:30 am - 6:00 pm</h5>
              </div>

              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Wednesday</h5>
                  <h5 className="time m-0">9:30 am - 6:00 pm</h5>
              </div>

              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Thursday</h5>
                  <h5 className="time m-0">9:30 am - 6:00 pm</h5>
              </div>

              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Friday</h5>
                  <h5 className="time m-0">9:30 am - 6:00 pm</h5>
              </div>

              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Saturday</h5>
                  <button className="closed-btn">Closed</button>
              </div>

              <div className="shedule_container py-1 d-flex justify-content-between align-items-center">
                  <h5 className="day m-0">Sunday</h5>
                  <button className="closed-btn">Closed</button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCourseSidebar;
