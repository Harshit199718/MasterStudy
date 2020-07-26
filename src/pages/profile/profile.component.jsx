import React, { Component } from 'react'
import './profile.styles.scss'
import ProfileSidePanel from '../../components/ProfileSidePanel/profile-side-panel.component'
import InstructorBio from '../../components/InstructorBio/instructor-bio.component'
import Certificates from '../../components/Certificates/certificates.component'
import EditProfile from '../../components/EditProfile/edit-profile.component'
import Assignment from '../../components/Assignment/assignment.component'
import RightPanel from '../../components/RightPanel/right-panel.component'

export class Profile extends Component {

    constructor(props){
        super(props)
        this.state={
            account:true,
            certificate: false,
            editProfile: false,
            assignment: false
        }
    }
    render() {

        const {account,certificate,editProfile,assignment} = this.state
        return (
            <div className='profile_container mx-auto mt-4' style={assignment?{background:"#ddd",boxShadow:"0 0 0 1000px #ddd"}:{}}>
                <a href="#" 
                onClick={(e)=> {
                    e.preventDefault()
                    this.setState({account: true, editProfile: false, certificate: false,assignment: false})}
                } 
                className={`back-to-account ${account?"d-none":"d-block"}`}>
                    <i className="fa fa-arrow-left mr-2 my-3"></i>
                    Back to account
                </a>
                <div className="profile d-flex ">
                    <div className={`profile-side-panel_container ${assignment?"d-none":"d-block"}`}>
                        <ProfileSidePanel showPanel={(obj)=> this.setState(obj)}/>
                    </div>
                    <div className="profile-details_container" style={assignment?{flex:"0 0 100%",maxWidth:"100%"}:{}}>
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
                        {
                            assignment?
                            (

                                <div className="assignments_container mt-3">
                                    <div className="assignments-header_container mb-5 d-flex align-items-center justify-content-between">
                                        <h2 className="assignments_header mb-0">Assignments</h2>
                                        <div className="assignment-search d-flex align-items-center">
                                            <label className="m-0 mr-2" htmlFor="">search assignment</label>
                                            <input type="text" placeholder="Enter assignment name"/>
                                        </div>
                                    </div>
                                    <div className="assignments d-flex flex-wrap">
                                        <div className="col-12 col-md-4 mb-2">
                                            <Assignment assignmentTitle="first assignment"/>
                                        </div>
                                        <div className="col-12 col-md-4 mb-2">
                                            <Assignment assignmentTitle="first assignment"/>
                                        </div>
                                        <div className="col-12 col-md-4 mb-2">
                                            <Assignment assignmentTitle="first assignment"/>
                                        </div>
                                        <div className="col-12 col-md-4 mb-2">
                                            <Assignment assignmentTitle="first assignment"/>
                                        </div>
                                    </div>
                                </div>
                            ):null
                        }
                    </div>
                </div>
        <RightPanel/>

            </div>
        )
    }
}

export default Profile
