import React, { Component } from "react";
import './quizz.styles.scss'
import QuizzDescription from "./QuizzDescription/quizz-description.component";
import Quizzes from "./Quizzes/quizzes.component";

export class Quizz extends Component {
  render() {
    return (
      <div className="quizz">
        <h5 className="quizz-header mb-0 mt-5 ml-auto">Quizzes & Assignments, Quiz 3</h5>
        <QuizzDescription/>
        <Quizzes/>
      </div>
    );
  }
}

export default Quizz;
