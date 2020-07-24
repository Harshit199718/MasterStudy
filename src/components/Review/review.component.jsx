import React, { Component } from 'react'
import './review.styles.scss'
import TextEditor from '../TextEditor/text-editor.component'

export class Review extends Component {
    render() {
        return (
            <div className="review">
                <h5 className="review_header mb-3">Be the first to add a review</h5>
                <TextEditor/>
                <div className="rating_container mt-3">
                    <i className="fa fa-star-o mr-1"></i>
                    <i className="fa fa-star-o mr-1"></i>
                    <i className="fa fa-star-o mr-1"></i>
                    <i className="fa fa-star-o mr-1"></i>
                    <i className="fa fa-star-o mr-1"></i>
                </div>
                <button className="add-review-btn text-uppercase mt-3">Add Review</button>
            </div>
        )
    }
}

export default Review
