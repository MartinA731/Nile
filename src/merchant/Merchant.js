import React from 'react'; //for later security
import './Merchant.css';
import '../common/Button.css';
import '../common/TopBar.css';
import LinkClient from './LinkClient';


function Merchant(props) {

  const acceptTransfer = (num, description) => {
    var acceptedTransfers = (localStorage.getItem("acceptedTransfers"));
    var arr = JSON.parse(localStorage.getItem("acceptedTransfers"));
    arr[num] = description;
    console.log(arr);
    localStorage.setItem("acceptedTransfers", JSON.stringify(arr));
    window.location.reload(); 
    console.log(localStorage.getItem("acceptedTransfers"));
  }
  const userEmail = localStorage.getItem("merEmail");

  var transactionOffers = (num) => {
    if(localStorage.getItem("merchants") === undefined || localStorage.getItem("merchants") === null) {
      var viableMerchants = [];
    }
    else viableMerchants = JSON.parse(localStorage.getItem("merchants"));
    var length = viableMerchants.length;
    var transactions = []
    var thisMerchant;
    for(var i = 0; i < length; i++){
      if(viableMerchants[i].id === userEmail){
        thisMerchant = viableMerchants[i];
      }
    }
    if(thisMerchant !== undefined) {
      for(var j = 0; j < thisMerchant.value.length; j++) {
        transactions.push(thisMerchant.value[j].description);
      }
    }
    while(transactions.length < 3) {
      transactions.push("");
    }
    if(transactions[num] === "") var returnValue = "";
    else {
      if(JSON.parse(localStorage.getItem("acceptedTransfers"))[num] !== "") return ""
      else returnValue = transactions[num] + ".    click to accept";
    } 
    return <button type="button" onClick={() => acceptTransfer(num, transactions[num])}> {returnValue} </button>
  }
    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Merchant</title>
          <link rel="stylesheet" href="Merchant.css" />
          <link rel="stylesheet" href="../Common/Button.css" />
          <link rel="stylesheet" href="../Common/TopBar.css" />
 
          <div className="placeholder">
            {/* header bar */}
            <div>
              <h>Transaction offers</h>
              <LinkClient></LinkClient>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box" /> {transactionOffers(0)} 
              <span className="box" /> {transactionOffers(1)} 
              <span className="box" /> {transactionOffers(2)} 
            </div>
            {/* header bar */}
            <div>
              <h>Transaction in progress</h>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box" /> {JSON.parse(localStorage.getItem("acceptedTransfers"))[0]}
              <span className="box" /> {JSON.parse(localStorage.getItem("acceptedTransfers"))[1]}
              <span className="box" /> {JSON.parse(localStorage.getItem("acceptedTransfers"))[2]}
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

