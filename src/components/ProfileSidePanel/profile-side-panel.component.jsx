import React, { Component } from "react";
import "./profile-side-panel.styles.scss";
import profile from "../../assets/profile.png";
import coin from "../../assets/coin.png";

export class ProfileSidePanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-side-panel">
        <div className="prof-img">
          <div className="profile-img_container">
            <img src={profile} alt="" />
          </div>
        </div>

        <h5 className="username mt-4">Demo Instructor</h5>
        <h5 className="job-type">Teacher</h5>

        <div className="rating">
          <i className="fa fa-star mr-1"></i>
          <i className="fa fa-star mr-1"></i>
          <i className="fa fa-star mr-1"></i>
          <i className="fa fa-star mr-1"></i>
          <i className="fa fa-star mr-1"></i>
          <span className="rating-text">5.0</span>
        </div>

        <h5 className="total-reviews">32 reviews</h5>

        <div className="earning-history_container d-flex align-items-center p-2">
          <img className="coin-icon" src={coin} alt="" />
          <div className="total-coins_container">
            <h5 className="total-coins mb-1">6008 coins</h5>
            <a href="#">Earnings History</a>
          </div>
        </div>

        <div className="my-message-btn_container d-flex align-items-center mt-4">
          <button className="my-message-btn text-uppercase">My Messages</button>
        </div>

        <div className="tabs_container mt-4">
          <ul className="tabs">
            <li className="tab text-uppercase">
              <i className="fa fa-bullhorn mr-2"></i>
              Announcement
            </li>
            <li
              onClick={() =>
                this.props.showPanel({ certificate: true, account: false, editProfile: false })
              }
              className="tab text-uppercase"
            >
              <i className="fa fa-medium mr-2"></i>
              My Certificates
            </li>
            <li className="tab text-uppercase"
              onClick={() =>
                this.props.showPanel({ certificate: false, account: false, editProfile: true })
              }
            >
              <i className="fa fa-cog mr-2"></i>
              Edit Profile
            </li>
            <li className="tab text-uppercase">
              <i className="fa fa-pie-chart mr-2"></i>
              Gradebook
            </li>
            <li className="tab text-uppercase">
              <i className="fa fa-users mr-2"></i>
              Groups
            </li>
            <li className="tab text-uppercase">
              <i className="fa fa-book mr-2"></i>
              Assignments
            </li>
            <li className="tab text-uppercase">
              <i className="fa fa-object-group mr-2"></i>
              Bundles
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfileSidePanel;
