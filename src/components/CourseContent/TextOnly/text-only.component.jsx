import React, { Component } from "react";
import './text-only.styles.scss'
import CourseFooter from "../../CourseFooter/course-footer.component";

export class TextOnly extends Component {
  render() {
    return (
      <div className="text-only mr-5">
        <div className="section-title-and-lecture">
          <h5>Introduction, Lecture 2</h5>
        </div>
        <h2 className="section-content-title">
          Nvidea New Technologies Slides
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

        <CourseFooter/>
      </div>
    );
  }
}

export default TextOnly;
