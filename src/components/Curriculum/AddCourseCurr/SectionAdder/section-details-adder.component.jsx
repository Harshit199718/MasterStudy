import React, { Component } from "react";
import "./section-details-adder.styles.scss";

export class SectionDetailsAdder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonInput: true,
      quizzInput: false,
      assignmentInput: false,
      searchInput: false,
    };
  }
  render() {
    const {
      lessonInput,
      quizzInput,
      assignmentInput,
      searchInput,
    } = this.state;
    return (
      <div className="section-details-adder p-3 mt-3">
        <div className="section-collapse-and-delete_container mb-2 d-flex align-items-center justify-content-between">
          <h5 className="section-collapse m-0">
            <i className="fa fa-angle-down mr-2"></i>
            Section {this.props.sectionNumber}
          </h5>

          <div className="delete-and-expand d-flex align-items-center">
            <i className="fa fa-trash mr-2"></i>
            <i className="fa fa-th"></i>
          </div>
        </div>
        <input
          type="text"
          className="section-title-input mb-3"
          placeholder="Section title (not required)"
        />
        <div className="section-tabs-container d-flex">
          <button
            className={`section-tab-toggler ${
              lessonInput ? "lesson-tab-toggle" : ""
            }`}
            onClick={() =>
              this.setState({
                lessonInput: true,
                quizzInput: false,
                assignmentInput: false,
                searchInput: false,
              })
            }
          >
            <i className="fa fa-file-text-o mr-2"></i>Lesson
          </button>
          <button
            className={`section-tab-toggler ${
              quizzInput ? "quizz-tab-toggle" : ""
            }`}
            onClick={() =>
              this.setState({
                lessonInput: false,
                quizzInput: true,
                assignmentInput: false,
                searchInput: false,
              })
            }
          >
            <i className="fa fa-question mr-2"></i>Quiz
          </button>
          <button
            className={`section-tab-toggler ${
              assignmentInput ? "assignment-tab-toggle" : ""
            }`}
            onClick={() =>
              this.setState({
                lessonInput: false,
                quizzInput: false,
                assignmentInput: true,
                searchInput: false,
              })
            }
          >
            <i className="fa fa-check-square-o mr-2"></i>Assignment
          </button>
          <button
            className={`section-tab-toggler ${
              searchInput ? "search-tab-toggle" : ""
            }`}
            onClick={() =>
              this.setState({
                lessonInput: false,
                quizzInput: false,
                assignmentInput: false,
                searchInput: true,
              })
            }
          >
            <i className="fa fa-search mr-2"></i>Search
          </button>
        </div>
        <div
          className={`section-title-inputs_container p-2 ${
            lessonInput
              ? "lesson-input_container"
              : quizzInput
              ? "quizz-input_container"
              : assignmentInput
              ? "assignment-input_container"
              : searchInput
              ? "search-input_container"
              : ""
          }`}
        >
          {lessonInput ? (
            <input
              type="text"
              className="lesson-input"
              placeholder="Enter Lesson title"
            />
          ) : null}
          {quizzInput ? (
            <input
              type="text"
              className="quizz-input"
              placeholder="Enter Quizz title"
            />
          ) : null}
          {assignmentInput ? (
            <input
              type="text"
              className="assignment-input"
              placeholder="Enter Assignment title"
            />
          ) : null}
          {searchInput ? (
            <input
              type="text"
              className="search-input"
              placeholder="Enter Search title"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default SectionDetailsAdder;
