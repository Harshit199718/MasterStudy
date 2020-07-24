import React, { Component } from 'react'
import TextEditor from '../../TextEditor/text-editor.component'

export class AddCourseAnnouncement extends Component {
    render() {
        return (
            <div className="add-course-announcement">
                <TextEditor height="300px" />
            </div>
        )
    }
}

export default AddCourseAnnouncement
