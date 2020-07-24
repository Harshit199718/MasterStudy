import React, { Component } from "react";
import "./drop-input.styles.scss";

export class DropInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      titleValue: "",
    };
  }
  render() {
    const { showDropdown, titleValue } = this.state;
    return (
      <div
        className="drop-input_container mb-5"
        tabIndex="1"
            autoFocus={showDropdown ? true : false}
        onClick={()=> this.input.focus()}
        onFocus={() => this.setState({ showDropdown: true })}
        onBlur={() => this.setState({ showDropdown: false })}
      >
        <div className="title_container">
          <h2 className="title py-1 m-0">
            {titleValue ? titleValue : "Your Course title here..."}
          </h2>
        </div>
        <div
          className="dropdown-input py-4 px-3"
          style={
            showDropdown
              ? { opacity: "1", pointerEvents: "visible" }
              : { opacity: "0", pointerEvents: "none" }
          }
        >
          <lable className="input-title mb-2">Course title</lable>
          <input
            type="text"
            ref={(ref)=> this.input = ref}
            value={titleValue}
            onChange={(e) => this.setState({ titleValue: e.target.value })}
          />
        </div>
      </div>
    );
  }
}

export default DropInput;
