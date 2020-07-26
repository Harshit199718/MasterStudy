import React, { Component } from "react";
import CourseHeader from "../../components/Header/CourseHeader/course-header.component";
import CourseSidebar from "../../components/CourseSidebar/course-sidebar.component";
import "./course.styles.scss";
import CourseContent from "../../components/CourseContent/course-content.component";
import CourseFooter from "../../components/CourseFooter/course-footer.component";
import QuestionsSidebar from "../../components/QuestionsSidebar/questions-sidebar.component";
import RightPanel from "../../components/RightPanel/right-panel.component";
import CourseProgressPopup from "../../components/Popups/CourseProgress/course-progress-popup.component";

export class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightSidebar: window.innerWidth<=768?false:true,
      questionsSidebar: false,
      toPlay: "Realistic Graphic on...",
      sectionHead:'Realistic Graphic on...',
      lectureNo:1,
      sectionType:'Introduction',
      courseProgress:false
    };
  }
  render() {
    const { rightSidebar,questionsSidebar, toPlay,lectureNo,sectionType,courseProgress } = this.state;
    console.log(this.state)
    return (
      <div className="course">
        <CourseHeader />
        <main className="d-flex align-items-start">
          <i className="fa fa-question-circle"
            style={toPlay == "Live Stream Lesson"?{display:'none'}:{}}
            onClick={() =>
              this.setState({ questionsSidebar: !this.state.questionsSidebar })
            }
          ></i>
          <div className={`questions-sidebar_container ${toPlay=="Live Stream Lesson"?"d-none":""}`}
            style={
              !questionsSidebar ? { flex: "0", maxWidth: "0" } : { flex: window.innerWidth<576?"0 0 90%":"0 0 25%",maxWidth:window.innerWidth<576?"100%":"25%",width:window.innerWidth<576?"90%":"25%" }
            }
          >
            <QuestionsSidebar/>
          </div>
          <div
            className="ml-auto course-content_container"
            style={
              !rightSidebar && !questionsSidebar ||toPlay=="Live Stream Lesson"
                ? { flex: "0 0 100%", maxWidth: "100%" }
                : !rightSidebar && questionsSidebar||rightSidebar && !questionsSidebar?{ flex: window.innerWidth<768?"0 0 100%":"0 0 75%", maxWidth: window.innerWidth<768?"100%":"75%" }
                :rightSidebar && questionsSidebar?{ flex: window.innerWidth<768?"0 0 100%":"0 0 50%", maxWidth:window.innerWidth<768?"100%":"50%" }:{}
            }
          >

            
            <CourseContent
              VideoTextImages={
                toPlay == "Realistic Graphic on..."|| toPlay == "Video Lesson Engin..." ? true : false
              }
              TextOnly={toPlay == "Nvidea New Technol..."||toPlay=="Text Lesson Design..." ? true : false}
              RayTracing={toPlay == "Ray Tracing"? true : false}
              AssignmentLesson={toPlay == "Assignment Lesson"? true : false}
              LiveStreamLesson={toPlay == "Live Stream Lesson"? true : false}
              Quizz={toPlay == "Final Middle Quiz"||toPlay =="Quiz: Mobile / Native..."?true:false}
              SlideLesson={toPlay=="Slide Lesson GPU for..."?true: false}

              toggleRightSidebar={this.state.rightSidebar}
              sectionHead={toPlay}
              lectureNo={lectureNo}
              sectionType={sectionType}
            />
          </div>
          <div
            className={`${toPlay == "Live Stream Lesson"?"live-stream-sidebar":"course-sidebar_container"}`}
            style={
              !rightSidebar ? { flex: "0", maxWidth: "0" } : { flex: window.innerWidth<576?"0 0 90%":"0 0 25%",maxWidth: window.innerWidth<576?"100%":"25%",width:window.innerWidth<576?"90%":"25%"}
            }
          >
            <CourseSidebar setToPlay={(obj) => this.setState(obj)} />
          </div>
          <div
            className="toggler"
            style={toPlay == "Live Stream Lesson"?{right:'95%',zIndex:'40'}:{}}
            onClick={() =>
              this.setState({ rightSidebar: !this.state.rightSidebar })
            }
          >
            <i className="fa fa-ellipsis-v"></i>
            <i className="fa fa-bars"></i>
          </div>

          
        </main>
        <CourseProgressPopup courseProgress={courseProgress} showProgressPopup={(obj) => this.setState(obj)}/>

      </div>
    );
  }
}

export default Course;
