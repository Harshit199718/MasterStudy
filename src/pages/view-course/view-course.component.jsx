import React, { Component } from "react";
import "./view-course.styles.scss";
import profile from '../../assets/profile.png'
import TabToggle from "../../components/TabToggle/tab-toggle.component";
import ViewCourseDesc from "../../components/Description/ViewCourseDesc/view-course-desc.component";
import ViewCourseCurr from "../../components/Curriculum/ViewCourseCurr/view-course-curr.component";
import ViewCourseFAQ from "../../components/FAQ/ViewCourseFAQ/view-course-faq.component";
import ViewCourseAnnouncement from "../../components/Announcement/ViewCourseAnnouncement/view-course-announcement.component";
import Review from "../../components/Review/review.component";
import ViewCourseSidebar from "../../components/ViewCourseSidebar/view-course-sidebar.component";

const arr=[1,2,3,4,5]

export class ViewCourse extends Component {
    constructor(props){
        super(props)
        this.state={
            descriptionTab: true,
            curriculumTab: false,
            faqTab: false,
            announcementTab: false,
            reviewsTab: false,
        }
    }
  render() {
      const {descriptionTab,curriculumTab,faqTab,announcementTab,reviewsTab} = this.state
    return (
      <div className="view-course d-flex mx-auto mt-5">
        <div className="view-course-details_container">
          <div className="successfully-done-header_container mb-3 d-flex align-items-center">
            <img
              src="https://stylemixthemes.com/masterstudy/white-lms/wp-content/plugins/masterstudy-lms-learning-management-system//assets/img/checkmark.svg"
              alt=""
              className="success-icon mr-2"
            />
            <h5 className="successfully-done_header m-0">Successfully done</h5>
          </div>
          <h2 className="course-title mb-3">Web Coding and Apache Basics</h2>
          <div className="user-and-category_container d-flex align-items-center">
              <div className="user_container mr-4 d-flex align-items-center">
                  <div className="user-img mr-1">
                      <img src={profile} alt=""/>
                  </div>
                  <div className="user-type-and-name_container">
                      <h5 className="user-type m-0">Teacher</h5>
                      <h5 className="username m-0">Demo Instructor</h5>
                  </div>
              </div>
              <div className="category_container d-flex align-items-center">
                    <div className="category-icon">
                        <i className="fa fa-bookmark-o mr-2"></i>
                    </div>
                    <div className="category_container">
                        <h5 className="category_header m-0">Category</h5>
                        <h5 className="category m-0">Apache</h5>
                    </div>
              </div>
          </div>

          {/* Tabs */}
          <div className="tabs_container d-flex mt-4">
              <div className="description-tag_container"
                onClick={()=>this.setState({descriptionTab: true,curriculumTab: false,faqTab: false,announcementTab: false,reviewsTab: false})}
              >
                  <TabToggle active={descriptionTab?true:false} tabTitle="Description"/>
              </div>
              <div className="curriculum-tag_container"
                onClick={()=>this.setState({descriptionTab: false,curriculumTab: true,faqTab: false,announcementTab: false,reviewsTab: false})}

              >
                <TabToggle active={curriculumTab?true:false} tabTitle="Curriculum"/>
              </div>
              <div className="faq-tag_container"
                onClick={()=>this.setState({descriptionTab: false,curriculumTab: false,faqTab: true,announcementTab: false,reviewsTab: false})}

              >
                <TabToggle active={faqTab?true:false} tabTitle="FAQ" />
              </div>
              <div className="announcement-tag_container"
                onClick={()=>this.setState({descriptionTab: false,curriculumTab: false,faqTab: false,announcementTab: true,reviewsTab: false})}

              >
                <TabToggle active={announcementTab?true:false} tabTitle="Announcement" />
              </div>
              <div className="reviews-tag_container"
                onClick={()=>this.setState({descriptionTab: false,curriculumTab: false,faqTab: false,announcementTab: false,reviewsTab: true})}

              >
                <TabToggle active={reviewsTab?true:false} tabTitle="Reviews" />
              </div>
          </div>

          {/* TabDetails */}

            <div className="tab-details_container mb-4">
                {
                    descriptionTab?
                    <ViewCourseDesc/>
                    :null
                }
                {
                    curriculumTab?
                    <ViewCourseCurr/>
                    :null
                }
                {
                    faqTab?
                    <div className="view-course-faq_container mt-3">
                        {
                          arr.map((val)=>{
                            return(
                              <ViewCourseFAQ/>
                            )
                          })
                        }
                    </div>
                    :null
                }
                {
                    announcementTab?
                    <div className="view-course-announcement_container mt-4">
                        <ViewCourseAnnouncement/>
                    </div>
                    :null
                }
                {
                    reviewsTab?
                    <div className="review_container mt-5">
                        <Review/>
                    </div>
                    :null
                }
            </div>
        </div>
        <div className="view-course-sidebar_container">
            <ViewCourseSidebar/>
        </div>
      </div>
    );
  }
}

export default ViewCourse;
