import React from 'react';
import { withRouter } from "react-router-dom";
import './Client.css';

// Carousel Package: https://www.npmjs.com/package/react-responsive-carousel
import Carousel from 'react-elastic-carousel';

function allTransactions(userEmail){ 

  // localStorage.getcurrentPurchase("toMerch"), returns array of data that [{accepted: true, email: str, description: str, address: str }, {}, {}, {}]
  // localstorage.getcurrentPurchase("") returns a string

  if(localStorage.getItem("toMerch") === undefined || localStorage.getItem("toMerch") === null) {
    var viableClients = [];
  }
  else viableClients = JSON.parse(localStorage.getItem("toMerch"));
  var length = viableClients.length;
  var noneOrPassed = [], transactionsProg = [], transactionsDone = [];

  for(var i = 0; i < length; i++){
    if(viableClients[i].email === userEmail){
      if(viableClients[i].accepted === "none") noneOrPassed[i] = ("Product [" + (viableClients[i].description) + "]: Waiting for pickup point");
      else if(viableClients[i].accepted === "passed") noneOrPassed.push("Product [" + viableClients[i].description + "]: Offer sent to merchant: waiting for acceptance");
      else if(viableClients[i].accepted === "prog") transactionsProg.push("Product [" + viableClients[i].description + "]: Offer accepted by merchant, pick up from " + 
                                                    viableClients[i].address + " upon delivery");
      else if(viableClients[i].accepted === "done") transactionsDone.push("Product [" + viableClients[i].description + "]: Transaction completed");
    }
  }

  var res = {nonePassed : noneOrPassed, prog : transactionsProg, done : transactionsDone};
  if(!res) return "";
  return res;
  
}

function Boxes(props) {

  const userEmail = props.location.state.login;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  // The side scroller for pending transactions // 
 
  var noneOrPassedres = allTransactions(userEmail)["nonePassed"];

  var noneArray = [];

  for (let i = 0; i < noneOrPassedres.length; i++) {
    noneArray.push(<span className="box">
    <span className="text fadeIn" id= "productBox">{noneOrPassedres[i]}</span> 
  </span>);
  }

  // The side scroller for transactions in progress // 

  var transactionsProgres = allTransactions(userEmail)["prog"];

  var progArray = [];

  for (let i = 0; i < transactionsProgres.length; i++) {
    progArray.push(<span className="box">
    <span className="text fadeIn" id= "productBox">{transactionsProgres[i]}</span> 
  </span>);
  } 

  // The side scroller for finished transactions // 

  var finishedTransactions = allTransactions(userEmail)["done"];

  var finishedArray = [];

  for (let i = 0; i < finishedTransactions.length; i++) {
    finishedArray.push(<span className="box">
    <span className="text fadeIn" id= "productBox">{finishedTransactions[i]}</span> 
  </span>);
  } 

  return (
    <div className="placeholder">
        {/* header bar */}
        <div>
          <h>Pending Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container"> 
          <Carousel breakPoints={breakPoints}>
            {noneArray.map((transaction) => {
                return transaction;
              })}
          </Carousel>
        </div>
        {/* header bar */}
        <div>
          <h>Transactions in Progress</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <Carousel breakPoints={breakPoints}>
            {progArray.map((transaction) => {
                return transaction;
              })}
          </Carousel>   
        </div>
        {/* header bar */}
        <div>
          <h>Completed Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <Carousel breakPoints={breakPoints}>
            {finishedArray.map((transaction) => {
                return transaction;
              })}
          </Carousel>   
        </div>  
    </div>
  );

}

export default withRouter(Boxes);
