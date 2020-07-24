import React, { Component } from "react";
import './add-course-curr.styles.scss'
import SectionDetailsAdder from "./SectionAdder/section-details-adder.component";

export class AddCourseCurr extends Component {
    constructor(props){
        super(props)
        this.state={
            section:[]
        }
    }
  render() {
      const {section} = this.state
    return (
      <div className="add-course-curr">
        <div className="upload-scorm-package py-3 px-3 mt-4">
            <h5 className="upload-scorm-package_header">Upload SCORM Package</h5>
            <div className="choose-file-btn d-flex justify-content-center align-items-center">
              <input type="file" name="" id="" />
              <i className="fa fa-paperclip mr-2"></i>
              <h5 className="choose-file text-uppercase m-0">Choose File</h5>
            </div>
            <p className="scorm-package-text mt-2">Course will have one lesson with SCORM package content</p>
        </div>

        <div className="section-adder_container p-3 mt-3">
            {
                section.map((val,i)=>{
                    return(<SectionDetailsAdder sectionNumber={i+1}/>)
                })
            }
            <div
                className="course-section-adder py-2 px-3 mt-3 d-flex align-items-center"
                onClick={() => this.setState({ section: [...section, true] })}
            >
                <div className="course-section-add-icon d-flex justify-content-center align-items-center mr-2">
                <i className="fa fa-plus"></i>
                </div>
                <h5 className="course-section-add-text m-0">New section</h5>
            </div>
        </div>

      </div>
    );
  }
}

export default AddCourseCurr;
