import React, { Component } from "react";
import "./course-sidebar.styles.scss";
import Section from "./Section/section.component";
import CourseProgress from "./CourseProgress/course-progress.component";

const sections = [
  {
    sectionNumber: "1",
    sectionType: "Introduction",
    content: ["Realistic Graphic on...", "Nvidea New Technol..."],
  },
  {
    sectionNumber: "2",
    sectionType: "Lesson Types",
    content: [
      "Text Lesson Design...",
      "Live Stream Lesson",
      "Quiz: Mobile / Native...",
      "Slide Lesson GPU for...",
      "Video Lesson Engin...",
    ],
  },
  {
    sectionNumber: "3",
    sectionType: "Quizzes & Assignments",
    content: ["Ray Tracing", "Assignment Lesson", "Final Middle Quiz"],
  },
];

export class CourseSidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="course-sidebar">
        <div className="course-sidebar-header_container">
          <h5 className="course-sidebar-header text-uppercase">
            Course Sections
          </h5>
        </div>

        <div className="sections_container">
          {sections.map((section) => {
            return (
              <Section
                QuizzSection={
                  section.sectionType == "Quizzes & Assignments" ? true : false
                }
                LessonTypeSection={
                    section.sectionType == "Lesson Types" ? true : false
                  }
                sectionNumber={section.sectionNumber}
                sectionType={section.sectionType}
                content={section.content}
                setToPlay={this.props.setToPlay}
              />
            );
          })}
        </div>

        <CourseProgress />
      </div>
    );
  }
}

export default CourseSidebar;
