import React, { Component } from "react";
import './text-only.styles.scss'
import CourseFooter from "../../CourseFooter/course-footer.component";

export class TextOnly extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log('......',this.props)
    return (
      <div className={`text-only ${this.props.toggleRightSidebar?'ml-auto mr-5':'mx-auto'}`}>
        <div className="section-title-and-lecture">
          <h5>{this.props.sectionType}, Lecture {this.props.lectureNo} </h5>
        </div>
        <h2 className="section-content-title">
          {this.props.sectionHead}
        </h2>

        <p className="section-content-description mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          temporibus non odio molestias quo excepturi delectus dolorum, in ipsa
          omnis beatae consectetur dolor ab laudantium rerum praesentium animi
          minus sed iusto ullam laboriosam fugit eius porro quasi. Doloremque
          aspernatur, cupiditate, aut animi excepturi alias dicta amet ipsa,
          vitae reiciendis quasi?
        </p>
        <p className="section-content-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          temporibus non odio molestias quo excepturi delectus dolorum, in ipsa
          omnis beatae consectetu.
        </p>
        <p className="section-content-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
          temporibus non odio molestias quo excepturi delectus dolorum, in ipsa
          omnis beatae consectetur dolor ab laudantium rerum praesentium animi
          minus sed iusto ullam laboriosam fugit eius porro quasi. Doloremque
          aspernatur, cupiditate, aut animi excepturi alias dicta amet ipsa,
          vitae reiciendis quasi?
        </p>

        <CourseFooter color={'#000'}/>
      </div>
    );
  }
}

export default TextOnly;
