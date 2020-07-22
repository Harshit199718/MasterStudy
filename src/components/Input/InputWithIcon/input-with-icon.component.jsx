import React, { Component } from "react";
import "./input-with-icon.styles.scss";

export class InputWithIcon extends Component {
  render() {
    const { label, value, placeholder, type, onChange, icon } = this.props;
    return (
      <div className="input-with-icon">
          <form>
                <label htmlFor=""> {label} </label>
                <div className="input-and-icon d-flex align-items center">
                <i className={`fa fa-${icon}`}></i>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e)}
                    autocomplete="new-password"
                />
                </div>
          </form>
      </div>
    );
  }
}

export default InputWithIcon;
