import React, { useState, useRef } from 'react';
import './Merchant.css';
import '../common/Button.css';
import '../common/TopBar.css';
import { withRouter } from "react-router-dom";

function changeValue(storageStr, keyChange, newValue, merchEmail) {
  var val = JSON.parse(localStorage.getItem(storageStr));
  for(var i = 0; i < val.length; i++) {
    if(val[i].id === merchEmail) {
      val[i][keyChange] = newValue
    }
  }
  localStorage.setItem(storageStr, JSON.stringify(val));
  return 0;
}

function getReceiving(storageStr, keyName, merchEmail) {
  var merchants = JSON.parse(localStorage.getItem(storageStr));
  for(var i = 0; i < merchants.length; i++) {
    if(merchants[i].id === merchEmail) {
      var ret = merchants[i][keyName];
      return ret ? "Receiving on" : "Receiving off";
    }
  }
  ret = true;
  return ret ? "Receiving on" : "Receiving off";
}



function LinkClient(props) {
    const receivingBtn = useRef(null);
    var merchEmail = props.location.state.login;
    

    //toggles style of "Receiving on/off" button when clicked
    const toggleBtn = () => {
      const dom = receivingBtn.current;
        if(dom.innerHTML === "Receiving on") {
            changeValue("merchants", "accepting", false, merchEmail);
            //change text
            dom.innerHTML = "Receiving off";
            dom.classList.replace("receivingOn-button", "receivingOff-button");
        }
        else {
            changeValue("merchants", "accepting", true, merchEmail);
            //change text
            dom.innerHTML = "Receiving on";
            dom.classList.replace("receivingOff-button", "receivingOn-button");
        }
    }
  
    function getLocation() {
      if (!navigator.geolocation) {
        alert('Nile needs your location to work. Please allow access to location');
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          changeValue("merchants", "lon", position.coords.longitude, merchEmail);
          changeValue("merchants", "lat", position.coords.latitude, merchEmail);
          //toggleBtn();
        } , () => {
          alert('Nile needs your location to work. Please allow access to location');
        });
      }
    };
    getLocation();

    return (
        <div>
            <span className="receivingOn-button" onClick={toggleBtn} ref={receivingBtn}>{getReceiving("merchants", "accepting", merchEmail)}</span>
        </div>
      );
}

export default withRouter(LinkClient);