import React, { Component } from "react";
import "./course-content.styles.scss";
import VideoTextImages from "./VideoTextImages/video-text-images.component";
import Quizz from "./Quiz/quizz.component";
import TextOnly from "./TextOnly/text-only.component";
import SlideLesson from "./SlideLesson/slide-lesson.component";
import RayTracing from "./RayTracing/ray-tracing.component";
import AssignmentLesson from "./AssignmentLesson/assignment-lesson.component";
import LiveStream from "./LiveStream/live-stream.component";
export class CourseContent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="course-content ml-auto"
        style={
          this.props.VideoTextImages
            ? { background: "#1F2326" }
            : { background: "#ddd" }
        }
      >
        {this.props.VideoTextImages ? (
          <VideoTextImages
            toggleRightSidebar={this.props.toggleRightSidebar}
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
            sectionHead={this.props.sectionHead}
          />
        ) : null}
        {this.props.TextOnly ? (
          <TextOnly
            toggleRightSidebar={this.props.toggleRightSidebar}
            sectionHead={this.props.sectionHead}
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
          />
        ) : null}
        
        {this.props.LiveStreamLesson ? (
          <LiveStream
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
            sectionHead={this.props.sectionHead}
          />
        ) : null}

        {this.props.Quizz ? (
          <Quizz
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
            sectionHead={this.props.sectionHead}
          />
        ) : null}

        {this.props.SlideLesson ? (
          <SlideLesson
            toggleRightSidebar={this.props.toggleRightSidebar}
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
            sectionHead={this.props.sectionHead}
          />
        ) : null}

        {this.props.RayTracing ? (
          <RayTracing
            toggleRightSidebar={this.props.toggleRightSidebar}
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
            sectionHead={this.props.sectionHead}
          />
        ) : null}

        {this.props.AssignmentLesson ? (
          <AssignmentLesson
            toggleRightSidebar={this.props.toggleRightSidebar}
            sectionType={this.props.sectionType}
            lectureNo={this.props.lectureNo}
            sectionHead={this.props.sectionHead}
          />
        ) : null}
      </div>
    );
  }
}

export default CourseContent;
