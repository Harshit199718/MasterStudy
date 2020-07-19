import React, { Component } from 'react'



export class Section extends Component {

    constructor(props){
        super(props)
        this.state={
            openSection: false
        }
    }

    render() {
        const {openSection} = this.state
        return (
            <div className="section">
                                <div onClick={() => this.setState({openSection: !this.state.openSection})} className="section-title d-flex align-items-center justify-content-between">
                                    <div>
                                        <h5 className='section-number'>Section {this.props.sectionNumber}</h5>
                                        <h4 className='section-type'>{this.props.sectionType} </h4>
                                    </div>
                                    <i className="fa fa-caret-down"></i>
                                </div>
                                <div className={`section-content ${openSection?'ht-auto':'ht-0'}`}>
                                    <div className="content d-flex align-items-center">
                                        <i className={`fa fa-${this.props.QuizzSection?'file':'play-circle'}`}></i>
                                        <h5 className="content-title m-0">
                                            <span className='s-no'>1</span>
                                            Realistic Graphic on...
                                        </h5>
                                        <div className="completed ml-auto">
                                            <i className="fa fa-check"></i>
                                        </div>
                                    </div>

                                    <div className="content d-flex align-items-center">
                                        <i className={`fa fa-${this.props.QuizzSection?'file':'play-circle'}`}></i>
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
                            </div>
        )
    }
}

export default Section
