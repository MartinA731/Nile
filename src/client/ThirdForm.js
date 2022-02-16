<<<<<<< Updated upstream:src/client/ThirdForm.js
import React from "react";

function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

function ThirdForm() {
  const closeThirdForm = () => {
    const num = JSON.parse(localStorage.getItem("orderNum"));
    localStorage.setItem("orderNum", JSON.parse(num + 1));
    document.getElementById("thirdForm").style.display = "none";
    window.formOpen = false;
    window.location.reload();
  };

  const selectMerchant = (client, allClients, cIndex) => {
    var merchants = JSON.parse(localStorage.getItem("merchants"));
    if(!merchants) merchants = [];
    var arrLen = merchants.length;
    var index = -1;
    for(var i = 0; i < arrLen; i++) {
      if(merchants[i].full || (!merchants[i].accepting)) {
        continue;
      }
      const lon = merchants[i].lon;
      const lat = merchants[i].lat;
      var tempDistance = calcCrow(lat,lon,client.lat,client.lon);
      if (i === 0) {
        var distance = tempDistance;
        index = 0;
      }
      else {
        distance = Math.min(distance, tempDistance);
        index = i;
      }
    }
    if(index !== -1) {
      client.accepted = "passed";
      client.address = merchants[index].address;
      merchants[index].value.push(client);
      if(merchants[index].value.length >= 3) {
        merchants[index].full = true;
      }
      allClients[cIndex] = client;
      localStorage.setItem("toMerch", JSON.stringify(allClients));
    }
    localStorage.setItem("merchants", JSON.stringify(merchants));
  }

  const submitClient = () => {
    document.getElementById("thirdForm").style.display = "none";
    window.formOpen = false;
    const num = JSON.parse(localStorage.getItem("orderNum"));
    var newClient = localStorage.getItem("toMerch");
    var oldClient = localStorage.getItem("clientRequests");
    var oldArr = JSON.parse(oldClient);
    if(newClient === undefined || newClient === null) {
      localStorage.setItem("toMerch", JSON.stringify([oldArr[num]]));
      selectMerchant(oldArr[num], JSON.parse(localStorage.getItem("toMerch")), num);
    }
    else {
      newClient = JSON.parse(newClient);
      newClient.push(oldArr[num]);
      localStorage.setItem("toMerch", JSON.stringify(newClient));
      selectMerchant(oldArr[num], JSON.parse(localStorage.getItem("toMerch")), num);
    }
    localStorage.setItem("orderNum", JSON.parse(num + 1));
    window.location.reload();
  };

  const totalCost = "$7.31 for now";
  const payMethod = "Venmo for now";
  const orderID = Math.floor(Math.random() * Date.now());
  return (
    <div className="form-popup" id="thirdForm">
      <form action="/action_page.php" className="form-container">
        <h4>Request Address</h4>
        <label>
            <b>Order Details</b>
        </label>
            <p> <font color={"grey"}> Total: {totalCost} </font> </p>
        <label>
            <b>Payment information</b>
            <p> <font color={"grey"}> Payment Method: {payMethod} </font> </p>
            <p> <font color={"grey"}> Order ID: {orderID} </font> </p>
        </label>
        <br />
        <button type="button" className="btn" id="nextThree" onClick={submitClient}>
          Submit
        </button>
        <button type="button" className="btn cancel" onClick={closeThirdForm}>
          Close
        </button>
      </form>
    </div>
  );
  
}

export default ThirdForm;
=======
import React from "react";
import QrCode from './qrCode';

function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
    return Value * Math.PI / 180;
}

function ThirdForm() {
  const closeThirdForm = () => {
    const num = JSON.parse(localStorage.getItem("orderNum"));
    localStorage.setItem("orderNum", JSON.parse(num + 1));
    document.getElementById("thirdForm").style.display = "none";
    window.formOpen = false;
    window.location.reload();
  };

  const selectMerchant = (client, allClients, cIndex) => {
    var merchants = JSON.parse(localStorage.getItem("merchants"));
    if(!merchants) merchants = [];
    var arrLen = merchants.length;
    var index = -1;
    for(var i = 0; i < arrLen; i++) {
      if(merchants[i].full || (!merchants[i].accepting)) {
        continue;
      }
      const lon = merchants[i].lon;
      const lat = merchants[i].lat;
      var tempDistance = calcCrow(lat,lon,client.lat,client.lon);
      if (i === 0) {
        var distance = tempDistance;
        index = 0;
      }
      else {
        distance = Math.min(distance, tempDistance);
        index = i;
      }
    }
    if(index !== -1) {
      client.accepted = "passed";
      client.address = merchants[index].address;
      merchants[index].value.push(client);
      if(merchants[index].value.length >= 3) {
        merchants[index].full = true;
      }
      allClients[cIndex] = client;
      localStorage.setItem("toMerch", JSON.stringify(allClients));
    }
    localStorage.setItem("merchants", JSON.stringify(merchants));
  }

  const submitClient = () => {
    document.getElementById("thirdForm").style.display = "none";
    window.formOpen = false;
    const num = JSON.parse(localStorage.getItem("orderNum"));
    var newClient = localStorage.getItem("toMerch");
    var oldClient = localStorage.getItem("clientRequests");
    var oldArr = JSON.parse(oldClient);
    if(newClient === undefined || newClient === null) {
      localStorage.setItem("toMerch", JSON.stringify([oldArr[num]]));
      selectMerchant(oldArr[num], JSON.parse(localStorage.getItem("toMerch")), num);
    }
    else {
      newClient = JSON.parse(newClient);
      newClient.push(oldArr[num]);
      localStorage.setItem("toMerch", JSON.stringify(newClient));
      selectMerchant(oldArr[num], JSON.parse(localStorage.getItem("toMerch")), num);
    }
    localStorage.setItem("orderNum", JSON.parse(num + 1));
    window.location.reload();
  };

  const totalCost = "$7.31 for now";
  const payMethod = "Venmo for now";
  const orderID = Math.floor(Math.random() * Date.now());
  return (
    <div className="form-popup" id="thirdForm">
      <form action="/action_page.php" className="form-container">
        <h4>Request Address</h4>
        <label>
            <b>Order Details</b>
        </label>
            <p> <font color={"grey"}> Total: {totalCost} </font> </p>
        <label>
            <b>Payment information</b>
            <p> <font color={"grey"}> Payment Method: {payMethod} </font> </p>
            <p> <font color={"grey"}> Order ID: {orderID} </font> </p>
        </label>
        <br />
        <label>
          <b>QR Code Order Confirmation</b>
        </label>
        <QrCode dataFromParentQR = {orderID}></QrCode>
        <button type="button" className="btn" id="nextThree" onClick={submitClient}>
          Submit
        </button>
        <button type="button" className="btn cancel" onClick={closeThirdForm}>
          Close
        </button> <br />
      </form>
    </div>
  );
  
}

export default ThirdForm;
>>>>>>> Stashed changes:Nile-frontend/src/client/ThirdForm.js
