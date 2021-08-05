import React from 'react'; //for later security
import './Merchant.css';
import '../common/Button.css';
import '../common/TopBar.css';


function Merchant(props) {
    //toggles style of "Receiving on/off" button when clicked
    const toggleBtn = () => {
        const btn = document.getElementsByClassName("button")[0];
        if(btn.innerHTML === "Receiving on") {
            //change text
            btn.innerHTML = "Receiving off";
            //change color
            btn.style.setProperty("--r", 171);
            btn.style.setProperty("--g", 171);
            btn.style.setProperty("--b", 171);
        }
        else {
            //change text
            btn.innerHTML = "Receiving on";
            //change color
            btn.style.setProperty("--r", 235);
            btn.style.setProperty("--g", 133);
            btn.style.setProperty("--b", 35);
        }
    }
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Merchant</title>
          <link rel="stylesheet" href="Merchant.css" />
          <link rel="stylesheet" href="../Common/Button.css" />
          <link rel="stylesheet" href="../Common/TopBar.css" />

          <h>{localStorage.getItem("sharedData")}</h>
 
          <div className="placeholder">
            {/* header bar */}
            <div>
              <h>Transaction offers</h>
              <span className="button receiving" onClick={toggleBtn}>Receiving on</span>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box" />
              <span className="box" />
              <span className="box" /> 
            </div>
            {/* header bar */}
            <div>
              <h>Transaction in progress</h>
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
        </div>
      );
}

export default Merchant;

