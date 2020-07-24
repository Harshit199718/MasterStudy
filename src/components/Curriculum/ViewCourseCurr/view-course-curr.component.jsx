import React, { Component } from "react";
import SectionCurr from "./SectionCurr/section-curr.component";

const sections = [
  {
    sectionTitle: "Intruduction to Unreal Engine 4",
    sectionContent: [
      {
        contentTitle: "Realistic Graphic on UE4",
        contentType: "video",
        dropdown: false,
        duration: false
      },
      {
        contentTitle: "Intro",
        contentType: "video-and-text",
        dropdown: true,
        duration: true
      },
      {
        contentTitle: "Quizz Mobile / Native Apps",
        contentType: "quiz",
        dropdown: false,
        duration: false
      },
    ],
  },
  {
    sectionTitle: "Middle Engine checking",
    sectionContent: [
      {
        contentTitle: "Engine Target Audience",
        contentType: "text",
        dropdown: false,
        duration: false
      },
      {
        contentTitle: "Volta GPU for Optimization",
        contentType: "video-and-text",
        dropdown: true,
        duration: true
      },
      {
        contentTitle: "Final Middle Quiz",
        contentType: "quiz",
        dropdown: false,
        duration: false
      },
    ],
  },
  {
    sectionTitle: "Ray Tracing Overview",
    sectionContent: [
      {
        contentTitle: "Ray Tracing",
        contentType: "text",
        dropdown: true,
        duration: true
      },
      {
        contentTitle: "Design and Visualization with Nvidea",
        contentType: "text",
        dropdown: false,
        duration: false
      },
    ],
  },
];

export class ViewCourseCurr extends Component {
  render() {
    return (
      <div className="view-course-curr mt-5">
          {
              sections.map((section,i)=>{
                  return (<SectionCurr sectionNumber={i+1} sectionTitle={section.sectionTitle} contents={section.sectionContent} />)
              })
          }
      </div>
    );
  }
}

export default ViewCourseCurr;
