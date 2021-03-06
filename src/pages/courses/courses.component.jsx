import React, { Component } from 'react'
import './courses.styles.scss'
import CourseCard from '../../components/CourseCard/course-card.component'
import RightPanel from '../../components/RightPanel/right-panel.component'

export class Courses extends Component {
    render() {
        return (
            <div className="courses p-5">
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                    <div className="col-md-4 col-lg-3 mb-3">
                        <CourseCard/>
                    </div>
                </div>
        <RightPanel/>

            </div>
        )
    }
}

export default Courses
