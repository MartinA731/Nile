import React from "react";
import { withRouter } from "react-router-dom";


function Boxes(props) {
  console.log(localStorage.getItem("toMerch"));
  console.log(localStorage.getItem("merchants"));
  const userEmail = props.location.state.login;
  var allTransactions = () => {
    if(localStorage.getItem("toMerch") === undefined || localStorage.getItem("toMerch") === null) {
      var viableClients = [];
    }
    else viableClients = JSON.parse(localStorage.getItem("toMerch"));
    var length = viableClients.length;
    
    var transactions = []
    for(var i = 0; i < length; i++){
      if(viableClients[i].accepted && viableClients[i].email === userEmail){
        transactions.push(viableClients[i].description + ": waiting for business");
      }
    }
    while(transactions.length < 3) {
      transactions.push("");
    }
    
    return transactions;
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
          <span className="box"/> {allTransactions()[0]} 
          <span className="box" /> {allTransactions()[1]}
          <span className="box" /> {allTransactions()[2]} 
        </div>
        {/* header bar */}
        <div>
          <h>Completed Transactions</h>
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

export default withRouter(Boxes);
