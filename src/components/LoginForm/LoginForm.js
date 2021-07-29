import React, {useState} from 'react';
import axios from 'axios';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";
import "../../common/Security.css";

function LoginForm(props) {
    const [state , setState] = useState({
        email : "",
        password : "",
        successMessage: null,
        client : false,
        merchant : false
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const redirectToClient = () => {
        props.updateTitle('Client')
        props.history.push('/client');
    }
    const redirectToMerchant = () => {
        props.updateTitle('Merchant')
        props.history.push('/merchant');
    }
    const handleClient = () => {
        //Only select if client is unselected
        if(state.client === false) {
            state.client = true;
            state.merchant = false;

            document.getElementById("client").className = "left selected-button";
            document.getElementById("merchant").className = "right unselected-button";
        }
    } 
    const handleMerchant = () => {
        //Do nothing if merchant is already selected
        if(state.merchant === false) {
            state.merchant = true;
            state.client = false;
            
            document.getElementById("merchant").className = "right selected-button";
            document.getElementById("client").className = "left unselected-button";
        }
    } 
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.client === false && state.merchant === false) {
            props.showError('Please select client or merchant');
        }
        else {
        const payload={
            "email":state.email,
            "password":state.password,
        }
        axios.post(API_BASE_URL+'/user/login', payload)
            .then(function (response) {
                if(response.status === 200){
                    setState(prevState => ({
                        ...prevState,
                        'successMessage' : 'Login successful. Redirecting to home page..'
                    }))
                    localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                    if(state.client) {
                        redirectToClient();
                        }
                    else if(state.merchant) {
                        redirectToMerchant();
                    }
                    props.showError(null)
                }
                else if(response.code === 204){
                    props.showError("Username and password do not match");
                }
                else{
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }}
    const redirectToRegister = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }
    return(
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="Password"
                       value={state.password}
                       onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <div className="btnContainer">
                    <span id="client" className="left unselected-button"
                        onClick={handleClient}>
                    Client</span>

                    <span id="merchant" className="right unselected-button"
                        onClick={handleMerchant}>
                    Merchant</span>
                </div>

            <br></br>
            <br></br>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Submit</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span> 
            </div>
        </div>
    )
}

export default withRouter(LoginForm);
