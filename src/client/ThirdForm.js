import React from "react";


function ThirdForm() {
  const closeThirdForm = () => {
    document.getElementById("thirdForm").style.display = "none";
  };
  const totalCost = "$7.31 for now";
  const payMethod = "Venmo for now";
  const orderID = Math.floor(Math.random() * Date.now());
  return (
    <div className="form-popup" id="thirdForm">
      <form action="/action_page.php" className="form-container">
        <h1>Request Address</h1>
        <label>
            <b>Order Details</b>
            <p> <font color={"grey"}> Total: {totalCost} </font> </p>
        </label>
        <label>
            <b>Payment information</b>
            <p> <font color={"grey"}> Payment Method: {payMethod} </font> </p>
            <p> <font color={"grey"}> Order ID: {orderID} </font> </p>
        </label>
        <button type="button" className="btn" onClick={closeThirdForm}>
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
