import React, { Component } from "react";
import "./quizz.styles.scss";
import QuizzDescription from "./QuizzDescription/quizz-description.component";
import Quizzes from "./Quizzes/quizzes.component";
import Rating from "./Rating/rating.component";
import CourseFooter from "../../CourseFooter/course-footer.component";

export class Quizz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startQuizz: false,
    };
  }
  render() {
    const {startQuizz} = this.state
    return (
      <div className="quizz mr-5">
        <h5 className="quizz-header mb-0 mt-5 ml-auto">
          {this.props.sectionType}, Quiz {this.props.lectureNo}{" "}
        </h5>
        {
          startQuizz?
          <Rating countDown={true} />:null
        }
        <QuizzDescription
          sectionHead={this.props.sectionHead}
          setStartQuizz={(obj) => this.setState(obj)}
        />

        {startQuizz ? <Quizzes /> : null}
        
        {/* <div className='quizz-footer_container ml-auto'>
          <CourseFooter color="#000" />
        </div> */}
      </div>
    );
  }
}

export default Quizz;
