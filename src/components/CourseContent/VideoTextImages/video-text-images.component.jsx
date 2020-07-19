import React, { Component } from "react";
import ReactPlayer from "react-player";
import CourseFooter from "../../CourseFooter/course-footer.component";
// import Introduction from "../../../Promo.mp4";

export class VideoTextImages extends Component {
  render() {
    return (
      <div className='video-text-images ml-auto mr-5'>
        <h5 className="course-section-title text-center mt-5 mb-2">
          Introduction, Lecture 1
        </h5>
        <h5 className="course-section-content-title text-center mb-5">
          Realistic Graphic on UE4
        </h5>
        <ReactPlayer style={{ width:'100%',margin:'0 auto'}} url={"https://www.youtube.com/watch?v=HrUtZ60clrY"} controls={true} />
        {/* <div className="embed-responsive embed-responsive-16by9">
            <iframe controls src={"https://www.youtube.com/embed/watch?v=HrUtZ60clrY"}>
            </iframe>
        </div> */}

        <p className="course-section-description mt-3">
          <span>Lorem ipsum</span> dolor sit amet, consectetur adipisicing elit. Architecto
          qui nobis repellendus totam minima voluptatem, recusandae itaque. Modi
          voluptas dicta dolore odit sequi sapiente dolor, unde, aut,
          perspiciatis fugiat natus explicabo asperiores! Quo error minus illo
          dignissimos! Velit eligendi voluptatem odio unde, error labore
          necessitatibus optio deserunt asperiores corporis doloribus omnis
          molestias temporibus iure a molestiae porro, maxime ab. Minima
          deleniti ducimus adipisci ad rerum enim explicabo earum sapiente
          cupiditate, eius magni dolor atque praesentium, minus corrupti ut
          accusantium laborum aliquid, dolorem commodi velit illo! Saepe, fuga
          ducimus. Esse itaque consequatur libero vitae nisi modi enim a quas
          vero amet.
        </p>

        <CourseFooter/>
      </div>
    );
  }
}

export default VideoTextImages;
