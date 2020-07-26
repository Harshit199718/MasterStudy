import React, { Component } from "react";
import "./section-curr.styles.scss";

export class SectionCurr extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-curr mt-4">
        <h5 className="section-title-and-number">
          {`Section ${this.props.sectionNumber}: ${this.props.sectionTitle}`}
        </h5>
        {this.props.contents.map((content, i) => {
          return (
            <div className="section-content px-2 py-2 mb-1 video-content d-flex align-items-center justify-content-between">
              <h5 className="content-title d-flex align-items-center m-0">
                <p className="m-0 ml-2">1</p>
                <i
                  className={`fa fa-${
                    content.contentType == "video"
                      ? "play-circle"
                      : content.contentType == "video-and-text"
                      ? "bandcamp"
                      : content.contentType=="text"
                      ? "file"
                      :"commenting-o"
                  } mx-2`}
                ></i>
                {content.contentTitle}
                {
                    content.dropdown?
                    <i className="fa fa-caret-down ml-2"></i>
                    :null
                }
              </h5>
              {
                  content.contentType!=="quiz"?
                    (<div className="preview-btn_container">
                        {
                            content.duration?
                            <p className="duration m-0 mr-2">15 minutes</p>
                            :null
                        }
                        <button className="preview-btn">Preview</button>
                    </div>)
                    :
                    (
                        <p className="total-questions m-0">10 questions</p>
                    )
              }
            </div>
          );
        })}
      </div>
    );
  }
}

export default SectionCurr;
