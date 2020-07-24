import React, { Component } from 'react'
import './assignment.styles.scss'

export class Assignment extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="assignment p-3 d-flex flex-column">
                <i className="fa fa-bell d-block text-right"></i>
                <h5 className="assignment-title mt-4 mb-4">{this.props.assignmentTitle}</h5>
                <div className="assignment-details_container mt-auto d-flex align-items-center justify-content-between mt-4">
                    <div className="detail">
                        <i className="fa fa-bars mr-1"></i>
                        0
                    </div>
                    <div className="detail">
                        <i className="fa fa-times-circle-o mr-1"></i>
                        0
                    </div>
                    <div className="detail">
                        <i className="fa fa-check-circle-o mr-1"></i>
                        0
                    </div>
                    <div className="detail">
                        <i className="fa fa-clock-o mr-1"></i>
                        0
                    </div>
                </div>
            </div>
        )
    }
}

export default Assignment
