import React from 'react';
import { withRouter } from "react-router-dom";
import './Settings.css';
import "../../common/Button.css";

function Settings() {
    return(
        <div>
            <div className="settings">
                <div className="first setting">
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