import React, { Component } from 'react'
import './profile.styles.scss'
import ProfileSidePanel from '../../components/ProfileSidePanel/profile-side-panel.component'
import InstructorBio from '../../components/InstructorBio/instructor-bio.component'
import Certificates from '../../components/Certificates/certificates.component'
import EditProfile from '../../components/EditProfile/edit-profile.component'

export class Profile extends Component {

    constructor(props){
        super(props)
        this.state={
            account:true,
            certificate: false,
            editProfile: false
        }
    }
    render() {

        const {account,certificate,editProfile} = this.state
        return (
            <div className='profile_container mx-auto mt-4'>
                <a href="#" 
                onClick={(e)=> {
                    e.preventDefault()
                    this.setState({account: true, editProfile: false, certificate: false})}
                } 
                className={`back-to-account ${account?"d-none":"d-block"}`}>
                    <i className="fa fa-arrow-left mr-2 my-3"></i>
                    Back to account
                </a>
                <div className="profile d-flex ">
                    <div className="profile-side-panel_container">
                        <ProfileSidePanel showPanel={(obj)=> this.setState(obj)}/>
                    </div>
                    <div className="profile-details_container">
                        {
                            account?
                            <InstructorBio/>
                            :null
                        }
                        {
                            certificate?
                            <Certificates/>
                            :null
                        }
                        {
                            editProfile?
                            <EditProfile/>
                            :null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
