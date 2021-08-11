import React, {useState} from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import {API_BASE_URL, ACCESS_TOKEN_NAME} from '../../constants/apiContants';
import { withRouter } from "react-router-dom";

function RegistrationForm(props) {

    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        client : false,
        merchant : false,
        successMessage: null
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "email":state.email,
                "password":state.password,
            }
            axios.post(API_BASE_URL+'/user/register', payload)
                .then(function (response) {
                    if(response.status === 200){
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
                        if(state.client) {
                        redirectToClient();
                        }
                        else if(state.merchant) {
                            redirectToMerchant();
                        }

                        props.showError(null)
                    } else{
                        props.showError("Some error ocurred");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToClient = () => {
        props.updateTitle('Client')
        props.history.push('/client');
    }
    const redirectToMerchant = () => {
        props.updateTitle('Merchant')
        props.history.push('/merchant');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
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
        if(state.password !== state.confirmPassword) {
            props.showError('Passwords do not match');
        } 
        else if(state.client === false && state.merchant === false) {
            props.showError('Please select client or merchant');
        }
        else {
            sendDetailsToServer();    
        }
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
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <div className="btnContainer" id="clientMerchButton">
                    <span id="client" className="left unselected-button" onClick={handleClient}>Client</span>

                    <span id="merchant" className="right unselected-button" onClick={handleMerchant}>Merchant</span>
                </div>

                <br></br>
                <br></br>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
}

export default withRouter(RegistrationForm);