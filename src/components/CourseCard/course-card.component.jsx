import React, { Component } from 'react'
import './course-card.styles.scss'
import slide1 from '../../assets/slide1.jpg'

export class CourseCard extends Component {
    render() {
        return (
            <div className="course-card">
                <div className="course-thumbnail_container">
                    <img className="course-thumbnail" src={slide1} alt=""/>
                </div>

                <div className="course-card-description_container">
                    <div className="course-card-description">
                        <h5 className="course-is-about">3D Printing Concept</h5>
                        <h5 className="course-card-title"><a href="#">Concept Art Printing on 3d Printer</a></h5>
                    </div>
                </div>
                <div className="course-rating-and-price d-flex justify-content-between py-2">
                    <div className="rating">
                        <i className="fa fa-star mr-1"></i>
                        <i className="fa fa-star mr-1"></i>
                        <i className="fa fa-star mr-1"></i>
                        <i className="fa fa-star mr-1"></i>
                        <i className="fa fa-star mr-1"></i>
                        <span className="rating-text">5.0</span>
                    </div>
                    <h5 className="price">Free</h5>
                </div>
            </div>
        )
    }
}

export default CourseCard