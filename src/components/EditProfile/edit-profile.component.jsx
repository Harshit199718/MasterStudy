import React, { Component } from "react";
import "./edit-profile.styles.scss";
import GreyInput from "../Input/GreyInput/grey-input.component";
import InputWithIcon from "../Input/InputWithIcon/input-with-icon.component";

const biography =
  "Demo Biography of Demo Instructor \n\nLorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, omnis? Labore veniam distinctio minus commodi, possimus minima quidem laboriosam eos voluptatibus debitis unde iure, amet necessitatibus quaerat aut animi temporibus?";

export class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Demo",
      surname: "Instructor",
      bio: biography,
      facebookLink:'',
      twitterLink:'',
      googlePlusLink:'',
      instaLink:'',
      newPassword:'',
      confirmPassword:''
    };
  }
  render() {
    const { name, surname, bio, facebookLink,twitterLink,googlePlusLink,instaLink, newPassword, confirmPassword } = this.state;
    return (
      <div className="edit-profile">
        <h2 className="edit-profile_header pb-4">Edit Profile</h2>
        <div className="name-and-surname d-flex align-items-center mt-5">
          <div className="name pr-1">
            <GreyInput
              type="text"
              label="Name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="surname pl-1">
            <GreyInput
              type="text"
              label="Surname"
              placeholder="Enter Surname"
              value={surname}
              onChange={(e) => this.setState({ surname: e.target.value })}
            />
          </div>
        </div>
        <div className="bio mt-3">
          <GreyInput
            type="text"
            label="Bio"
            placeholder="Enter Bio"
            value={bio}
            onChange={(e) => this.setState({ surname: e.target.value })}
            textarea={true}
          />
        </div>

        <div className="social-links mt-3">
          <h5 className="social-links_header">Socials</h5>
          <p className="social-info">
            Add your social profile links. they will be shown on your public
            profile
          </p>

          <div className="inputs_container">
            <div className="inputs d-flex align-items-center">
                <div className="facebook pr-2">
                    <InputWithIcon
                        type="text"
                        label="facebook"
                        placeholder="http://www.facebook.com"
                        value={facebookLink}
                        onChange={(e) => this.setState({ facebookLink: e.target.value })}
                        icon="facebook"                
                    />
                </div>
                <div className="twitter pl-2">
                    <InputWithIcon
                        type="text"
                        label="twitter"
                        placeholder="Enter your Twitter URL"
                        value={twitterLink}
                        onChange={(e) => this.setState({ twitterLink: e.target.value })}
                        icon="twitter"                
                    />
                </div>

                <div className="google-plus pr-2 mt-2">
                    <InputWithIcon
                        type="text"
                        label="Google Plus"
                        placeholder="google.com/home"
                        value={googlePlusLink}
                        onChange={(e) => this.setState({ googlePlusLink: e.target.value })}
                        icon="google-plus"                
                    />
                </div>

                <div className="instagram pl-2 mt-2">
                    <InputWithIcon
                        type="text"
                        label="instagram"
                        placeholder="http://www.instagram.com/"
                        value={instaLink}
                        onChange={(e) => this.setState({ instaLink: e.target.value })}
                        icon="instagram"                
                    />
                </div>
            </div>
          </div>
        </div>

        <div className="change-password mt-3">
          <h5 className="change-password_header">Change Password</h5>

          <div className="inputs_container">
            <div className="inputs d-flex align-items-center">
                <div className="new-password pr-2">
                    <InputWithIcon
                        type="password"
                        label="New Password"
                        placeholder="Enter your new password"
                        value={newPassword}
                        onChange={(e) => this.setState({ newPassword: e.target.value })}
                        icon="key"                
                    />
                </div>
                <div className="re-enter-password pl-2">
                    <InputWithIcon
                        type="password"
                        label="Re-type new password"
                        placeholder="Enter your new password"
                        value={confirmPassword}
                        onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                        icon="key"                
                    />
                </div>
            </div>
          </div>
        </div>

        <button className="save-changes-btn text-uppercase mt-3">Save Changes</button>
      </div>
    );
  }
}

export default EditProfile;
