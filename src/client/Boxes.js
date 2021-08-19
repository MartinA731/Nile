import React from "react";
import { withRouter } from "react-router-dom";


function Boxes(props) {
  const userEmail = props.location.state.login;

  var allTransactions = (transactionName, index) => {
    if(localStorage.getItem("toMerch") === undefined || localStorage.getItem("toMerch") === null) {
      var viableClients = [];
    }
    else viableClients = JSON.parse(localStorage.getItem("toMerch"));
    var length = viableClients.length;
    
    var noneOrPassed = [], transactionsProg = [], transactionsDone = [];
    for(var i = 0; i < length; i++){
      if(viableClients[i].email === userEmail){
        if(viableClients[i].accepted === "none") noneOrPassed.push(viableClients[i].description + ": waiting for business");
        else if(viableClients[i].accepted === "passed") noneOrPassed.push(viableClients[i].description + ": offer sent to merchant: waiting for acceptance");
        else if(viableClients[i].accepted === "prog") transactionsProg.push(viableClients[i].description + ": offer accepted by merchant, pick up from " + 
                                                      viableClients[i].address + " upon delivery");
        else if(viableClients[i].accepted === "done") transactionsDone.push(viableClients[i].description + ": transaction completed");
      }
    }
    var res = {nonePassed : noneOrPassed, prog : transactionsProg, done : transactionsDone}
    if(!res[transactionName][index]) return "";
    return res[transactionName][index];
  }
  return (
    <div className="placeholder">
      <div className="placeholder">
        {/* header bar */}
        <div>
          <h>Pending Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box">
            <span className="text">{allTransactions("nonePassed", 0)}</span>
          </span>
          <span className="box">
            <span className="text">{allTransactions("nonePassed", 1)}</span>
          </span>
          <span className="box">
            <span className="text">{allTransactions("nonePassed", 2)}</span>
          </span>
        </div>
        {/* header bar */}
        <div>
          <h>Transactions in Progress</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box">
            <span className="text">{allTransactions("prog", 0)}</span>
          </span>
          <span className="box">
            <span className="text">{allTransactions("prog", 1)}</span>
          </span>
          <span className="box">
            <span className="text">{allTransactions("prog", 2)}</span>
          </span>
        </div>
        {/* header bar */}
        <div>
          <h>Completed Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box">
            <span className="text">{allTransactions("done", 0)}</span>
          </span>
          <span className="box">
            <span className="text">{allTransactions("done", 1)}</span>
          </span>
          <span className="box">
            <span className="text">{allTransactions("done", 2)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Boxes);
