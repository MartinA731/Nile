import React,{ useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './Client.css';
import '../common/Button.css';
import '../common/TopBar.css';
import logo from '../common/NileLogo.png';


function Client(props) {
    const openForm = () => {
        document.getElementById("myForm").style.display = "block";
    }
    const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
    }
    return(
        <div>
          {/* Rought draft of transaction page ͏*/}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Transaction</title>
          <link rel="stylesheet" href="Client.css" />
          <link rel="stylesheet" href="../Common/Button.css" />
          <link rel="stylesheet" href="../Common/TopBar.css" />
          {/* test */}
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
          <div className="placeholder">
            <div className="placeholder">
              {/* header bar */}
              <div>
                <h>Pending Transaction</h>
              </div>
              {/* offer bar */}
              <div className="flex-container">
                <span className="box" />
                <span className="box" />
                <span className="box" /> 
              </div>
              {/* header bar */}
              <div>
                <h>Completed transaction</h>
              </div>
              {/* offer bar */}
              <div className="flex-container">
                <span className="box" />
                <span className="box" />
                <span className="box" /> 
              </div>
            </div>
            {/* Request now button */}
            <button className="open-button" onclick={openForm}>Request Now</button>
            {/* Request now form */}
            <div className="form-popup" id="myForm">
              <form action="/action_page.php" className="form-container">
                <h1>Request Address</h1>
                <label htmlFor="email"><b>Product Information</b></label>
                <input type="text" placeholder="Enter Product Details or SKU" name="email" required />
                <label htmlFor="psw"><b>Size</b></label>
                <select type="password" placeholder="Enter Password" name="psw" id="size">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <br /><br />
                <label htmlFor="psw"><b>Category</b></label>
                <select type="password" placeholder="Enter Password" name="psw" id="size">
                  <option value="one">Category 1</option>
                  <option value="two">Category 2</option>
                  <option value="three">Category 3</option>
                </select>
                <br /><br />
                <button type="submit" className="btn">Next</button>
                <button type="submit" className="btn cancel" onclick={closeForm}>Close</button>
              </form>
            </div>
          </div></div>
      )
}



export default withRouter(Client);