import React, { Component } from 'react'
import './course-sidebar.styles.scss'
import Section from './Section/section.component'
import CourseProgress from './CourseProgress/course-progress.component'

const sections = [{sectionNumber:'1',sectionType:'Introduction'},{sectionNumber:'2',sectionType:'Lesson Types'},{sectionNumber:'3',sectionType:'Quizzes & Assignments'}]

export class CourseSidebar extends Component {

    render() {

        return (
            <div className='course-sidebar'>
                <div className="course-sidebar-header_container">
                    <h5 className='course-sidebar-header text-uppercase'>Course Sections</h5>
                </div>

                <div className="sections_container">

                    {
                        sections.map(section => {
                            return(
                                <Section QuizzSection={section.sectionType == "Quizzes & Assignments"?true:false} sectionNumber={section.sectionNumber} sectionType={section.sectionType} />
                            )
                        })
                    }
                </div>

                <CourseProgress/>
            </div>
        )
    }
}

export default CourseSidebar
