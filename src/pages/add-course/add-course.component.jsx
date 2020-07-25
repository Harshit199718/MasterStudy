import React, { Component } from "react";
import "./add-course.styles.scss";
import TabToggle from "../../components/TabToggle/tab-toggle.component";
import DropInput from "../../components/DropInput/drop-input.component";
import UserAndCategory from "./UserAndCategory/user-and-category.component";
import AddCourseDesc from "../../components/Description/AddCourseDesc/add-course-desc.component";
import AddCourseFAQ from "../../components/FAQ/AddCourseFAQ/add-course-faq.component";
import AddCourseAnnouncement from "../../components/Announcement/AddCourseAnnouncement/add-course-announcement.component";
import AddCourseCurr from "../../components/Curriculum/AddCourseCurr/add-course-curr.component";
import AddCourseSidebar from "../../components/AddCourseSidebar/add-course-sidebar.component";

export class AddCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionTab: true,
      curriculumTab: false,
      faqTab: false,
      announcementTab: false,
      reviewsTab: false,
      insructorAdded: false,
    };
  }
  render() {
    const {
      descriptionTab,
      curriculumTab,
      faqTab,
      announcementTab,
      insructorAdded
    } = this.state;

    return (
      <div className="add-course d-flex mx-auto mt-5">
        <div className="add-course-details_container pb-4">
          <div className="add-title_container">
            <DropInput />
          </div>
          <div className="mt-3">
              <UserAndCategory insructorAdded={insructorAdded}/>
          </div>

          <div className="tabs_container d-flex mt-4">
            <div
              className="description-tag_container"
              onClick={() =>
                this.setState({
                  descriptionTab: true,
                  curriculumTab: false,
                  faqTab: false,
                  announcementTab: false,
                  reviewsTab: false,
                })
              }
            >
              <TabToggle
                active={descriptionTab ? true : false}
                tabTitle="Description"
              />
            </div>
            <div
              className="curriculum-tag_container"
              onClick={() =>
                this.setState({
                  descriptionTab: false,
                  curriculumTab: true,
                  faqTab: false,
                  announcementTab: false,
                  reviewsTab: false,
                })
              }
            >
              <TabToggle
                active={curriculumTab ? true : false}
                tabTitle="Curriculum"
              />
            </div>
            <div
              className="faq-tag_container"
              onClick={() =>
                this.setState({
                  descriptionTab: false,
                  curriculumTab: false,
                  faqTab: true,
                  announcementTab: false,
                  reviewsTab: false,
                })
              }
            >
              <TabToggle active={faqTab ? true : false} tabTitle="FAQ" />
            </div>
            <div
              className="announcement-tag_container"
              onClick={() =>
                this.setState({
                  descriptionTab: false,
                  curriculumTab: false,
                  faqTab: false,
                  announcementTab: true,
                  reviewsTab: false,
                })
              }
            >
              <TabToggle
                active={announcementTab ? true : false}
                tabTitle="Announcement"
              />
            </div>
          </div>

          {/* Tab Details */}

          <div className="tab-details_container mb-4">
              {
                  descriptionTab?
                  <div className="add-course-description_container mt-5">
                      <AddCourseDesc/>
                  </div>
                  :null
              }
              {
                  curriculumTab?
                  <div className="add-course-curriculum_container mt-5">
                      <AddCourseCurr/>
                  </div>
                  :null
              }
              {
                  faqTab?
                  <div className="add-course-faq_container mt-5">
                      <AddCourseFAQ/>
                  </div>
                  :null
              }
              {
                  announcementTab?
                  <div className="add-course-announcement_container mt-5">
                      <AddCourseAnnouncement/>
                  </div>
                  :null
              }
          </div>
          <button className="publish-course-btn text-uppercase">
              Publish Course
          </button>
        </div>

        {/* Sidebar */}
        <div className="add-course-sidebar_container">
          <AddCourseSidebar/>
        </div>
      </div>
    );
  }
}

export default AddCourse;


