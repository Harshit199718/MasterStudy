import React, { Component } from 'react'
import './questions-sidebar.styles.scss'

export class QuestionsSidebar extends Component {
    render() {
        return (
            <div className="questions-sidebar">
                <h5 className="questions_header mb-3">Questions</h5>

                <div className="search-bar">
                    <input type="text" placeholder='Search here...'/>
                    <div className="search-icon_container">
                        <i className="fa fa-search"></i>
                    </div>
                </div>
                
                <div className="questions_container mt-4">
                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>
                    
                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>

                    <div className="question_container py-2">
                        <p className="question m-0">jjaorb</p>
                        <p className="replies"><i className="fa fa-comment"> 0 replies</i></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionsSidebar
