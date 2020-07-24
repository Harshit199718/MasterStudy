import React, { Component } from "react";
import profile from "../../../assets/profile.png";


export class UserAndCategory extends Component {
  render() {
    return (
      <div className="user-and-category_container d-flex align-items-center">
        <div className="user_container mr-4 d-flex align-items-center">
          <div className="user-img mr-1">
            <img src={profile} alt="" />
          </div>
          <div className="user-type-and-name_container">
            <h5 className="user-type m-0">Teacher</h5>
            <h5 className="username m-0">Demo Instructor</h5>
          </div>
        </div>

        <div className="add-co-instrucor_container">
          {!this.props.insructorAdded ? (
            <div className="co-instructor_container mr-4 d-flex align-items-center">
              <div className="add_container mr-1 d-flex justify-content-center align-items-center">
                <h5 className="add m-0">+</h5>
              </div>
              <div className="user-type-and-name_container">
                <h5 className="user-type m-0">Add co-instructor</h5>
              </div>
            </div>
          ) : (
            <div className="co-instructor_container mr-4 d-flex align-items-center">
              <div className="user-img mr-1">
                <img src={profile} alt="" />
              </div>
              <div className="user-type-and-name_container">
                <h5 className="user-type m-0">Teacher</h5>
                <h5 className="username m-0">Demo Instructor</h5>
              </div>
            </div>
          )}
        </div>

        <div className="category_container d-flex align-items-center">
          <div className="category-icon">
            <i className="fa fa-bookmark-o mr-2"></i>
          </div>
          <div className="category_container">
            <h5 className="category_header m-0">Category</h5>
            <h5 className="category m-0">Apache</h5>
          </div>
        </div>

        <div className="rating_container ml-auto">
          <div className="rating d-flex align-items-center">
            <i className="fa fa-star-o mr-1"></i>
            <i className="fa fa-star-o mr-1"></i>
            <i className="fa fa-star-o mr-1"></i>
            <i className="fa fa-star-o mr-1"></i>
            <i className="fa fa-star-o mr-1"></i>
            <span>0</span>
          </div>
          <h5 className="total-reviews">0 reviews</h5>
        </div>
      </div>
    );
  }
}

export default UserAndCategory;
