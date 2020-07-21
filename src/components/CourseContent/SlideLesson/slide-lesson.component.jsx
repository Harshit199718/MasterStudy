import React, { Component } from "react";
import "./slide-lesson.styles.scss";
import CourseFooter from "../../CourseFooter/course-footer.component";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";
import slide4 from "../../../assets/slide4.jpg";

const images = [slide1, slide2, slide3, slide4];

export class SlideLesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    const { selectedIndex } = this.state;
    return (
      <div
        className={`slide-lesson ${
          this.props.toggleRightSidebar ? "ml-auto mr-5" : "mx-auto"
        }`}
      >
        <div className="section-title-and-lecture">
          <h5>
            {this.props.sectionType}, Lecture {this.props.lectureNo}{" "}
          </h5>
        </div>
        <h2 className="section-content-title">{this.props.sectionHead}</h2>

        <div className="slider-images_container">
          <i
            className="fa fa-angle-left"
            onClick={() =>
              this.setState({
                selectedIndex:
                  selectedIndex < 1 ? selectedIndex : selectedIndex - 1,
              })
            }
          ></i>
          {images.map((image) => {
            return (
              <img
                src={image}
                alt=""
                style={{
                  transform: `translateX(-${selectedIndex * 100}%)`,
                  transition: ".5s",
                }}
              />
            );
          })}
          <i
            className="fa fa-angle-right"
            onClick={() =>
              this.setState({
                selectedIndex:
                  selectedIndex < images.length - 1
                    ? selectedIndex + 1
                    : selectedIndex,
              })
            }
          ></i>
        </div>

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

        <CourseFooter color="#000" />
      </div>
    );
  }
}

export default SlideLesson;
