import React from 'react'
import './course-footer.styles.scss'
import {Link} from 'react-router-dom'
 
function CourseFooter() {
    return (
        <div className='course-footer'>
            <Link>
                <i className="fa fa-arrow-left"></i>
                <span className='prev-lesson text-uppercase'>Prev Lesson</span>
            </Link>
            <button>Complete</button>
            <Link>
                <span className='next-lesson text-uppercase'>Next Lesson</span>
                <i className="fa fa-arrow-right"></i>
            </Link>
        </div>
    )
}

export default CourseFooter
