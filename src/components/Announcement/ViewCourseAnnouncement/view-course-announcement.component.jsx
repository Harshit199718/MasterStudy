import React from "react";
import "./view-course-announcement.styles.scss";

function ViewCourseAnnouncement(props) {
  return (
    <div className="view-course-announcement">
      <div className="announcement_container">
        <h3 className="announcement_header">
          Productivity Hacks to Get More Done in 2020
        </h3>
        <h5 className="date-of-announcement mb-2">- 28 February, 2017</h5>
        <div className="announcement-details_container d-flex">
          <p className="announcement-number mr-2">1</p>
          <div className="announcement">
            <h5 className="announcement-heading">
              Vulcan News Feed Eradicator (free chrome extension)
            </h5>
            <p className="announcement-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              perferendis quis officiis consequatur ducimus iusto magnam
              similique amet eius impedit.
            </p>
          </div>
        </div>
        <div className="announcement-details_container d-flex">
          <p className="announcement-number mr-2">2</p>
          <div className="announcement">
            <h5 className="announcement-heading">
              Vulcan News Feed Eradicator (free chrome extension)
            </h5>
            <p className="announcement-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              rem.
            </p>
          </div>
        </div>
      </div>

      <div className="announcement_container">
        <h3 className="announcement_header">
          Continue Your Learning with our 30 Day App Challenge
        </h3>
        <h5 className="date-of-announcement mb-2">- 28 February, 2017</h5>
        <div className="announcement-details_container d-flex">
          <p className="announcement-number mr-2">1</p>
          <div className="announcement">
            <h5 className="announcement-heading">
              So there you have it. 30 days to make and publish your app
            </h5>
            <p className="announcement-description">
              There's never been a better time to get started.
            </p>
          </div>
        </div>
        <div className="announcement-details_container d-flex">
          <p className="announcement-number mr-2">2</p>
          <div className="announcement">
            <h5 className="announcement-heading">
              Good luck and please post your questions to the community.
            </h5>
            <p className="announcement-description">
              Let's all help each other make some great app this month!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCourseAnnouncement;
