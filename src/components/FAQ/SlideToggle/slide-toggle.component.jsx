import React from 'react'

function SlideToggle(props) {
    return (
        <div
      className={`view-course-faq ${props.active?"active-faq":""} mt-2 d-flex px-2 py-3`}
      onClick={() => props.setActive(!props.active)}
    >
      <i className="fa fa-angle-down mr-2"></i>
      <div className="question-and-answer">
        <a
          data-toggle="collapse"
          href="#collapseAnswer"
          role="button"
          aria-expanded="false"
          aria-controls="collapseAnswer"
        >
          <h5 className={`question`}>
            What are Unreal Dev Grants?
          </h5>
        </a>
        <div className="collapse" id="collapseAnswer">
          <p className={`answer`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe
            rerum nisi quisquam placeat minus nobis consequatur eaque pariatur,
            error molestias fuga quod consectetur corrupti aliquam asperiores
            dolorem natus ut.
          </p>
        </div>
      </div>
    </div>
    )
}

export default SlideToggle
