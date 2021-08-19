import React from 'react'; //for later security
import './Merchant.css';
import '../common/Button.css';
import '../common/TopBar.css';
import LinkClient from './LinkClient';
import { withRouter } from "react-router-dom";


function Merchant(props) {

  const userEmail = props.location.state.login;


  const adjustClient = (clientObj) => {
    const clientEmail = clientObj.email;
    var oldClient = JSON.parse(localStorage.getItem("toMerch"));
    const length = oldClient.length;
    for(var i = 0; i < length; i++) {
      var request = oldClient[i];
      if(request.email === clientEmail && request.description === clientObj.description) {
        oldClient[i] = clientObj;
      } 
    }
    localStorage.setItem("toMerch", JSON.stringify(oldClient));
  }

  const transactions = (transactionName, clientIndex) => {
    var merchants = JSON.parse(localStorage.getItem("merchants"));
    var length = merchants.length;
    var transactionOffers = [], transactionsProg = [], transactionsDone = [];
    for(var i = 0; i < length; i++) {
      const merch = merchants[i];
      if(merch.id === userEmail) { 
        var thisMerchIndex = i; 
        var allTransactions = merch.value;
        const valueLen = allTransactions.length;
        for(var j = 0; j < valueLen; j++) { //second for loop will only run once
          if(allTransactions[j].accepted === "passed") transactionOffers.push(allTransactions[j].description); //change to allTransactions[j] if you want all the info not just description
          else if(allTransactions[j].accepted === "prog") transactionsProg.push(allTransactions[j].description);
          else if(allTransactions[j].accepted === "done") transactionsDone.push(allTransactions[j].description);
        }
      }
    }
    const possibleReturns = {offers: transactionOffers, inProgress : transactionsProg, doneTran : transactionsDone};
    const returnList = possibleReturns[transactionName];
    if(clientIndex + 1 > returnList.length) return "";
    else if(transactionName === "offers") var returnValue = "Product " + returnList[clientIndex] + ": click to accept";
    else if(transactionName === "inProgress") returnValue = "Product " + returnList[clientIndex] + ": click if order has been picked up by client";
    else if(transactionName === "doneTran") returnValue = "Product " + returnList[clientIndex] + ": transaction is over ";
    return <button class="button_cont example_a" rel="nofollow noopener" type="button" id="merchantBox" onClick={() => moveForward(thisMerchIndex, clientIndex, transactionName)}> {returnValue} </button>
  }
  
  const findIndex = (index, transName, thisMerchant) => {
    const length = thisMerchant.value.length;
    if(transName === "offers") var temp = "passed"; else if (transName === "inProgress") temp = "prog"; else temp = "done";
    var counter = 0;
    for (var i = 0; i < length; i++) {
      if(thisMerchant.value[i].accepted ===  temp) {
        if(counter === index) return i;
        counter++;
      }
    }
  }

  const moveForward = (merchIndex, clientIndex,transactionName) => {
    var merchants = JSON.parse(localStorage.getItem("merchants"));
    var thisMerchant = merchants[merchIndex];
    var realIndex = findIndex(clientIndex, transactionName, thisMerchant);
    var thisClient = thisMerchant.value[realIndex];
    if(thisClient.accepted === "passed") thisClient.accepted = "prog";
    else if(thisClient.accepted === "prog") thisClient.accepted = "done";
    merchants[merchIndex].value[realIndex] = thisClient;
    adjustClient(merchants[merchIndex].value[realIndex]);
    localStorage.setItem("merchants", JSON.stringify(merchants));
    window.location.reload(); 
  }
  console.log(localStorage.getItem("merchants"));
    console.log(localStorage.getItem("toMerch"));
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
              <span className="box">
                <span className="text">{transactions("offers", 0)}</span>
              </span>
              <span className="box">
                <span className="text">{transactions("offers", 1)}</span>
              </span>
              <span className="box">
                <span className="text">{transactions("offers", 2)}</span>
              </span>
            </div>
            {/* header bar */}
            <div>
              <h>Transactions in progress</h>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box">
                <span className="text">{transactions("inProgress", 0)}</span>
              </span>
              <span className="box">
                <span className="text">{transactions("inProgress", 1)}</span>
              </span>
              <span className="box">
                <span className="text">{transactions("inProgress", 2)}</span>
              </span>
            </div>
            {/* header bar */}
            <div>
              <h>Completed Transactions</h>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box">
                <span className="text">{transactions("doneTran", 0)}</span>
              </span>
              <span className="box">
                <span className="text">{transactions("doneTran", 1)}</span>
              </span>
              <span className="box">
                <span className="text">{transactions("doneTran", 2)}</span>
              </span>
            </div>
          </div>
        </div>
      );
}

export default withRouter(Merchant);