import React from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiContants';
import logo from "../../common/NileLogo.png";
import './Header.css';

function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    const str = "Account";
    if(props.location.pathname === '/') {
        title = 'Register'
    }
    function renderAccount() {
        const URL = props.location.pathname;

        if(URL === '/client' || URL === '/merchant') {
            return(
                <div className="account" >
                    <span className="avatar">{str[0]}</span>
                    <span>{str}</span>
                    <div className="dropdown">
                        <span className="dropDown-button"onClick={handleSettings}>Settings</span>
                        <span className="dropDown-button" onClick={handleLogout}>Log Out</span>
                    </div>
                </div>
            )
        }
        if(URL === "/Settings") {
            return(
                <div className="account">
                    <span className="avatar">{str[0]}</span>
                    <span>{str}</span>
                    <div className="dropdown">
                        <span className="dropDown-button"onClick={handleBack}>Back</span>
                        <span className="dropDown-button" onClick={handleLogout}>Log Out</span>
                    </div>
                </div>
            )
        }
        //adds a spacer if the acccount button dddoesn't exist for the right flex element
        return (
            <img src={logo} alt="" className="hidden" aria-hidden="true"/>
        )
    }
    function handleSettings() {
        props.history.push('/Settings')
    }
    function handleBack() {
        props.history.goBack();
    }
    function handleLogout() {
        window.location.reload(); 
        localStorage.removeItem(ACCESS_TOKEN_NAME)
        props.history.push('/login')
    }
    //adds a spacer if the acccount button exist for the left flex element
    function spacer() {
        if(props.location.pathname === '/client' || props.location.pathname === '/merchant') {
            return(
                <span className="hidden" aria-hidden="true">{str}</span>
            )
        }
    }
    return(
        <nav className="navbar-custom">
            <div>
                <img src={logo} alt="logo"/>
                {spacer()}
            </div>
            <h4 className="page">{props.title || title}</h4>
            {renderAccount()}
        </nav>
    )
}
export default withRouter(Header);