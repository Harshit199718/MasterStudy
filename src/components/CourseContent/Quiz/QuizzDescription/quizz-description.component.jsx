import React, { Component } from "react";

export class QuizzDescription extends Component {
  render() {
    return (
      <div className="quizz-description d-flex align-items-center">
        <div className="answered-correctly_container">
          <div>
            <i className="fa fa-thumbs-o-up"></i>
            <h3 className="correct-percentage">80%</h3>
            <h5 className="answered-correctly-text">Answered correctly</h5>
          </div>
        </div>

        <div className="quizz-details_container">
          <h2 className="quizz-details-header">Final Middle Quizz</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            consequuntur repellendus voluptatibus cum totam pariatur dicta, odit
            ratione quas debitis?
          </p>

          <img
            className="w-100 mb-3"
            src="https://stylemixthemes.com/masterstudy/lms-white/wp-content/uploads/sites/7/2018/08/photo-1452802487690-172f769e0332-min-300x225.jpeg"
            alt=""
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia error
            inventore voluptatibus quod assumenda eius saepe provident!
          </p>
        </div>
      </div>
    );
  }
}

export default QuizzDescription;
