import React, { Component } from 'react'
import './course-sidebar.styles.scss'
import Section from './Section/section.component'

const sections = [{sectionNumber:'1',sectionType:'Introduction'},{sectionNumber:'2',sectionType:'Lesson Types'}]

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
                                <Section sectionNumber={section.sectionNumber} sectionType={section.sectionType} />
                            )
                        })
                    }
                    {/* {
                        sections.map(section => {
                            return(
                            <div className="section">
                                <div onClick={() => this.setState({openSection: !this.state.openSection})} className="section-title d-flex align-items-center justify-content-between">
                                    <div>
                                        <h5 className='section-number'>{section.sectiontNumber} 1</h5>
                                        <h4 className='section-type'>{section.sectionType} </h4>
                                    </div>
                                    <i className="fa fa-caret-down"></i>
                                </div>
                                <div className={`section-content ${openSection?'ht-auto':''}`}>
                                    <div className="content d-flex align-items-center">
                                        <i className="fa fa-play-circle"></i>
                                        <h5 className="content-title m-0">
                                            <span className='s-no'>1</span>
                                            Realistic Graphic on...
                                        </h5>
                                        <div className="completed ml-auto">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>

                                    <div className="content d-flex align-items-center">
                                        <i className="fa fa-play-circle"></i>
                                        <h5 className="content-title m-0">
                                            <span className='s-no'>2</span>
                                            Nvidea New Technol...
                                        </h5>
                                        <h5 className="duration m-0 ml-auto">15 minutes</h5>
                                        <div className="completed ml-1">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>)})

                        } */}

                    {/* <div className="section">
                        <div onClick={() => this.setState({openSection: !this.state.openSection})} className="section-title d-flex align-items-center justify-content-between">
                            <div>
                                <h5 className='section-number'>Section 1</h5>
                                <h4 className='section-type'>Introduction</h4>
                            </div>
                            <i className="fa fa-caret-down"></i>
                        </div>
                        <div className={`section-content ${openSection?'ht-auto':''}`}>
                            <div className="content d-flex align-items-center">
                                <i className="fa fa-play-circle"></i>
                                <h5 className="content-title m-0">
                                    <span className='s-no'>1</span>
                                    Realistic Graphic on...
                                </h5>
                                <div className="completed ml-auto">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>

                            <div className="content d-flex align-items-center">
                                <i className="fa fa-play-circle"></i>
                                <h5 className="content-title m-0">
                                    <span className='s-no'>2</span>
                                    Nvidea New Technol...
                                </h5>
                                <h5 className="duration m-0 ml-auto">15 minutes</h5>
                                <div className="completed ml-1">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default CourseSidebar
