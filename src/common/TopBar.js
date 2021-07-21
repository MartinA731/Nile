import React from "react";
import logo from "../common/NileLogo.png";
import '../client/Client.css';
import './Button.css';
import './TopBar.css';

function TopBar() {
  return (
    <div className="topBar">
      <div>
        <img src={logo} alt="logo" />
        <span>Nile</span>
      </div>
      <div>
        <img className="avatar" src={logo} alt="logo" />
        <span>Account</span>
      </div>
    </div>
  );
}

export default TopBar;
