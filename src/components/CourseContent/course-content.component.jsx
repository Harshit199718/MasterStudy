import React, { Component } from "react";
import "./course-content.styles.scss";
import VideoTextImages from "./VideoTextImages/video-text-images.component";
import Quizz from "./Quiz/quizz.component";
import TextOnly from "./TextOnly/text-only.component";
export class CourseContent extends Component {

    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="course-content ml-auto" style={this.props.VideoTextImages?{background:'#1F2326'}:{background:'#fff'}}>
          {
              this.props.VideoTextImages?<VideoTextImages/>:null
          }
          {
              this.props.TextOnly?<TextOnly/>:null
          }
          {
              this.props.Quizz?<Quizz/>:null
          }
      </div>
    );
  }
}

export default CourseContent;
