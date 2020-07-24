import React, { Component } from "react";
import './add-course-faq.styles.scss'
import CourseDetailsAdder from "../../Description/AddCourseDesc/CourseDetailsAdder/course-details-adder.component";

export class AddCourseFAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }
  render() {
    const { questions } = this.state;
    return (
      <div className="add-course-faq">
        {questions.map((val, i) => {
          return <CourseDetailsAdder title1={`Question ${i + 1}`} FAQ={true} placeholder1="Enter FAQ question" placeholder2="Enter FAQ answer" />;
        })}
        <div
          className="course-material-adder py-2 px-3 mt-4 d-flex align-items-center"
          onClick={() =>
            this.setState({ questions: [...questions, true]})
          }
        >
          <div className="course-material-add-icon d-flex justify-content-center align-items-center mr-2">
            <i className="fa fa-plus"></i>
          </div>
          <h5 className="course-material-add-text m-0">New FAQ item</h5>
        </div>
      </div>
    );
  }
}

export default AddCourseFAQ;
