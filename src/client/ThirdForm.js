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
  };
  const selectMerchant = (cLon, cLat) => {
    var merchants = JSON.parse(localStorage.getItem("merchants"));
    var arrLen = merchants.length;
    for(var i = 0; i < arrLen; i++) {
      const lon = JSON.parse(localStorage.getItem("merchants"))[i].lon;
      const lat = JSON.parse(localStorage.getItem("merchants"))[i].lat;
      var tempDistance = calcCrow(lat,lon,cLat,cLon);
      if (i === 0) var distance = tempDistance;
      else distance = Math.min(distance, tempDistance);
    }
    console.log(distance);
    return distance;
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
      selectMerchant(oldArr[num].lon, oldArr[num].lat);
    }
    else {
      newClient = JSON.parse(newClient);
      newClient.push(oldArr[num]);
      localStorage.setItem("toMerch", JSON.stringify(newClient));
      selectMerchant((oldArr[num].lon), (oldArr[num].lat));
    }
    localStorage.setItem("orderNum", JSON.parse(num + 1));
    console.log(localStorage.getItem("clientRequests"));
    console.log(localStorage.getItem("toMerch"));
    console.log(localStorage.getItem("orderNum"));
    console.log(localStorage.getItem("merchants"));
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
