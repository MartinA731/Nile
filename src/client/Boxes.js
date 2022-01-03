import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";
import './Client.css';

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

  // The SlideShow for Pending Transactions // 

  var noneOrPassedres = allTransactions(userEmail)["nonePassed"];

  const[noneOrPassedPurchases, setnoneOrPassedPurchases] = useState([]);
  const[currentNonePurchase, setCurrentNonePurchase] = useState("");
  const[previousNonePurchase, setPreviousNonePurchase] = useState("");
  const[nextNonePurchase, setNextNonePurchase] = useState("");
  const[currentNoneIndex, setCurrent] = useState(0);

  useEffect(() => {
    setnoneOrPassedPurchases(noneOrPassedres);
    setCurrentNonePurchase(noneOrPassedres[currentNoneIndex]);
    if (currentNoneIndex > 1){
      setPreviousNonePurchase(noneOrPassedres[currentNoneIndex - 1]);
    }
    else if (/* currentNoneIndex == 0 ||  */noneOrPassedPurchases.length <= 2){
      setPreviousNonePurchase("");
    }
    else{
      setPreviousNonePurchase(noneOrPassedres[noneOrPassedres.length - 1]);
    }
    if (currentNoneIndex === noneOrPassedres.length - 1){
      setNextNonePurchase(noneOrPassedres[0]);
    }
    else if (currentNoneIndex == 0 && noneOrPassedPurchases.length == 1){
      setNextNonePurchase("");
    }
    else{
      setNextNonePurchase(noneOrPassedres[currentNoneIndex + 1]);
    }
  }, [currentNoneIndex]);

  function previousNoneSlide(){
    if (noneOrPassedPurchases.length > 3){
      if (currentNoneIndex > 0){
        setCurrent(currentNoneIndex - 1);
      }
      else{
        setCurrent(noneOrPassedPurchases.length - 1);
      }
    }
  }

  function nextNoneSlide(){
    if (noneOrPassedPurchases.length > 3){
      if (currentNoneIndex === noneOrPassedPurchases.length - 1){
        setCurrent(0);
      }
      else{
        setCurrent(currentNoneIndex + 1);
      }
    }
  }
  
  // The SlideShow for Transactions in Progress // 

  // The SlideShow for finished Transactions // 

  return (
    <div className="placeholder">
      <div className="placeholder">
        {/* header bar */}
        <div>
          <h>Pending Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box1">
            <span className = "text" id= "productBox">{previousNonePurchase}</span> 
          </span>   
          <span className="box1">
            <span className = "text" id= "productBox">{currentNonePurchase}</span> 
          </span>        
          <span className="box1">
            <span className = "text" id= "productBox">{nextNonePurchase}</span> 
          </span>     
          <a class="prev" onClick = {previousNoneSlide}>&#10094;</a>
          <a class="next" onClick= {nextNoneSlide}>&#10095;</a>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Boxes);
