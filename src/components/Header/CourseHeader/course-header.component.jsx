import React, { Component } from 'react'
import './course-header.styles.scss'
import { Link } from 'react-router-dom'

export class CourseHeader extends Component {
    render() {
        return (
            <div className='course-header'>
                <div className="logo_container">
                    <img src="https://stylemixthemes.com/masterstudy/academy/wp-content/uploads/sites/9/2018/09/MasterStudy-1.svg" alt="Logo"/>
                </div>
                <div className="back-to-dashboard_container">
                    <h5>Universal Course</h5>
                    <Link to='/'>
                        <i className="fa fa-arrow-left"></i>
                        <span>Back to Dashboard</span>
                    </Link>
                </div>
                <div className="right-panel">
                    <div className="user-img_container">
                        <i className="fa fa-user-o"></i>
                    </div>
                    <div className="username_container">
                        <h5>Hey, Demo in...
                        <i className="fa fa-caret-down"></i>
                        </h5>
                    </div>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-cog"></i>
                </div>
            </div>
        )
    }
}

export default CourseHeader
