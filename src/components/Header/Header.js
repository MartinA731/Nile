import React from 'react';
import { withRouter } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from '../../constants/apiContants';
import logo from "../../common/logo_transparent.png";
import './Header.css';

function Header(props) {
    const capitalize = (s) => {
        if (typeof s !== 'string') return ''
        return s.charAt(0).toUpperCase() + s.slice(1)
    }
    let title = capitalize(props.location.pathname.substring(1,props.location.pathname.length))
    if(props.location.pathname === '/') {
        title = 'Register'
    }
    function renderLogout() {
        if(props.location.pathname === '/client' || props.location.pathname === '/merchant'){
            return(
                <div className="ml-auto">
                    <button className="btn btn-danger" type="button" onClick={() => handleLogout()}>Logout</button>
                </div>
            )
        }
    }
    function handleLogout() {
        window.location.reload(); 
        localStorage.removeItem(ACCESS_TOKEN_NAME);
        props.history.push('/login');
    }
    return(
        <nav className="navbar navbar-custom">
            <div className="row col-12">
                <img className="img1" src={logo} alt="logo" width="100" height="100"/>
                <span className="h3">{props.title || title}</span>
                <div className="logout"> {renderLogout()} </div>
            </div>
            <div>
                
            </div>
        </nav>
    )
}
export default withRouter(Header);