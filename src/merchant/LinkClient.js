import React, { useState } from 'react';
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
    var merchEmail = props.location.state.login;
    

    //toggles style of "Receiving on/off" button when clicked
    const toggleBtn = () => {
        const btn = document.getElementsByClassName("button")[0];
        if(btn.innerHTML === "Receiving on") {
            changeValue("merchants", "accepting", false, merchEmail);
            //change text
            btn.innerHTML = "Receiving off";
            //change color
            btn.style.color = "purple";
            btn.style.setProperty("--r", 171);
            btn.style.setProperty("--g", 171);
            btn.style.setProperty("--b", 171);
        }
        else {
            changeValue("merchants", "accepting", true, merchEmail);
            //change text
            btn.innerHTML = "Receiving on";
            //change color
            btn.style.color = "blue";
            btn.style.setProperty("--r", 235);
            btn.style.setProperty("--g", 133);
            btn.style.setProperty("--b", 35);
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
            <span className="button receiving" onClick={toggleBtn}>{getReceiving("merchants", "accepting", merchEmail)}</span>
        </div>
      );
}

export default withRouter(LinkClient);
