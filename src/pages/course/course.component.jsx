import React, { Component } from 'react'
import CourseHeader from '../../components/Header/CourseHeader/course-header.component'
import CourseSidebar from '../../components/CourseSidebar/course-sidebar.component'
import './course.styles.scss'
import CourseContent from '../../components/CourseContent/course-content.component'
import CourseFooter from '../../components/CourseFooter/course-footer.component'

export class Course extends Component {
    render() {
        return (
            <div className='course'>
                <CourseHeader/>
                <main className='d-flex'>
                    <div className='ml-auto'>
                        <CourseContent VideoTextImages={true}/>
                    </div>
                    <div>
                        <CourseSidebar/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Course
