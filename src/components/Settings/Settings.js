import React from 'react';
import { withRouter } from "react-router-dom";
import './Settings.css';
import "../../common/Button.css";
// used as placeholder image
import logo from "../../common/NileLogo.png";

function Settings() {
    return(
        <div>
            {/* placeholder text */}
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt</div>
            <div className="settings">
                <div className="first setting">
                    <span className="name">Photo</span>
                    <div className="flex-container">
                        <span>Add a photo</span>
                        <img src={logo} alt="Profile photo"></img>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Name</span>
                    <div className="flex-container">
                        <span>Name</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Email</span>
                    <div className="flex-container">
                        <span>Email</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Phone Number</span>
                    <div className="flex-container">
                        <span>Phone Number</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Order Payment Method</span>
                    <div className="flex-container">
                        <span>Lorem</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Receiving Payment Method</span>
                    <div className="flex-container">
                        <span>Lorem</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Registerd ID</span>
                    <div className="flex-container">
                        <span>Lorem</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>

                <div className="setting">
                    <span className="name">Address</span>
                    <div className="flex-container">
                        <span>Lorem</span>
                        <span className="white-button">Edit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Settings);
