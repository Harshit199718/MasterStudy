import React, { Component } from "react";
import './add-course-sidebar.styles.scss'
import DropInput from "../DropInput/drop-input.component";

export class AddCourseSidebar extends Component {
    constructor(props){
        super(props)
        this.state={
            prerequisiteSearch:''
        }
    }
  render() {
      const {prerequisiteSearch} = this.state
    return (
      <div className="add-course-sidebar">
        <div className="add-to-wishlist_container mb-3 d-flex align-items-center">
          <div className="add-to-wishlist-icon mr-2 d-flex align-items-center justify-content-center">
            <i className="fa fa-heart-o"></i>
          </div>
          <h5 className="add-to-wishlist-text m-0">Add to wishlist</h5>
        </div>

        <button className="add-price-btn text-uppercase mb-3">Add Price</button>
        <div className="prerequisite-courses-details_container">
          <h5 className="prerequisite-courses_header mb-3">
            Prerequisites Courses
          </h5>
          <div className="prerequisite-dropdown_container mb-3 d-flex align-items-center">
            <i className="fa fa-plus-circle ml-auto"></i>
            <input
              placeholder="Add"
              type="text"
              className="add-prerequisite-input"
              onChange={(e)=>this.setState({prerequisiteSearch: e.target.value})}
            />
            <i className="fa fa-angle-down ml-auto"></i>
            <ul className="prerequisites-dropdown" style={prerequisiteSearch?{opacity:"1",pointerEvents:'visible'}:{}}>
                <li className="item-1">option 1</li>
                <li className="item-2">option 2</li>
                <li className="item-3">option 3</li>
            </ul>
          </div>
          <h5 className="prerequisite-courses-percentage_header mb-3">
            Prerequisite Courses Passing Percent (%)
          </h5>
          <input type="text" className="prerequisites-percentage-input mb-3" />
        </div>

        <div className="course-details mt-3">
          <div className="disabled-feature d-flex justify-content-between align-items-center">
            <h5 className="detail m-0">
              Enrolled: <span>0 students</span>
            </h5>
            <i className="fa fa-users"></i>
          </div>
          <DropInput
            titleKeyPadding="20px 5px"
            noPlaceHolder={true}
            titleKey="Duration"
            titleSize="1.5em"
            opacity="1"
            noPopupTitle={true}
            padding="5px"
            zIndex="10"
            icon="clock-o"
            iconSize="2.2em"
            iconPadding="5px"
            iconColor="#195EC8"
          />

          <div className="disabled-feature d-flex justify-content-between align-items-center">
            <h5 className="detail m-0">
              Lecture: <span>0</span>
            </h5>
            <i className="fa fa-bullhorn"></i>
          </div>
          <DropInput
            titleKeyPadding="20px 5px"
            noPlaceHolder={true}
            titleKey="Video"
            titleSize="1.5em"
            opacity="1"
            noPopupTitle={true}
            padding="5px"
            zIndex="5"
            icon="video-camera"
            iconSize="2.2em"
            iconPadding="5px"
            iconColor="#195EC8"
          />
          <DropInput
            titleKeyPadding="20px 5px"
            noPlaceHolder={true}
            titleKey="Level"
            titleSize="1.5em"
            opacity="1"
            noPopupTitle={true}
            padding="5px"
            zIndex="1"
            icon="line-chart"
            iconSize="2.2em"
            iconPadding="5px"
            iconColor="#195EC8"
          />
        </div>
      </div>
    );
  }
}

export default AddCourseSidebar;
