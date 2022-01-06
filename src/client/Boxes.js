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

  // The slide scroller for Pending Transactions // 

  var noneOrPassedres = allTransactions(userEmail)["nonePassed"];

  const[noneOrPassedPurchases, setnoneOrPassedPurchases] = useState([]);
  const[currentNonePurchase, setCurrentNonePurchase] = useState("");
  const[currentNoneIndex, setCurrentNoneIndex] = useState(0);

  useEffect(() => {
    setnoneOrPassedPurchases(noneOrPassedres);
    setCurrentNonePurchase(noneOrPassedres[currentNoneIndex]);
  }, [currentNoneIndex]);

  function previousNoneSlide(){
    if (currentNoneIndex > 0){
      setCurrentNoneIndex(currentNoneIndex - 1);
    }
    else{
      setCurrentNoneIndex(noneOrPassedPurchases.length - 1);
    }
  }

  function nextNoneSlide(){
    if (currentNoneIndex === noneOrPassedPurchases.length - 1){
      setCurrentNoneIndex(0);
    }
    else{
      setCurrentNoneIndex(currentNoneIndex + 1);
    }
  }
  
  // The side scroller for Transactions in Progress // 

  var transactionsProgres = allTransactions(userEmail)["prog"];

  transactionsProgres = ["placeholder1", "placeholder2", "placeholder3", "placeholder4", "placeholder5"];

  const[transactionsProgPurchases, settransactionsProgPurchases] = useState([]);
  const[currentProgPurchase, setCurrentProgPurchase] = useState("");
  const[currentProgIndex, setCurrentProgIndex] = useState(0);

  useEffect(() => {
    settransactionsProgPurchases(transactionsProgres);
    setCurrentProgPurchase(transactionsProgres[currentProgIndex]);
  }, [currentProgIndex]);

  function previousProgSlide(){
    if (currentProgIndex > 0){
      setCurrentProgIndex(currentProgIndex - 1);
    }
    else{
      setCurrentProgIndex(transactionsProgPurchases.length - 1);
    }
  }

  function nextProgSlide(){
    if (currentProgIndex === transactionsProgPurchases.length - 1){
      setCurrentProgIndex(0);
    }
    else{
      setCurrentProgIndex(currentProgIndex + 1);
    }
  }

  // The side scroller for finished Transactions // 

  var finishedTransactions = allTransactions(userEmail)["done"];

  finishedTransactions = ["placeholder1", "placeholder2", "placeholder3", "placeholder4", "placeholder5"];

  const[completedPurchases, setCompletedPurchases] = useState([]);
  const[currentCompletedPurchase, setCurrentCompletedPurchase] = useState("");
  const[currentCompletedIndex, setCurrentCompletedIndex] = useState(0);

  useEffect(() => {
    setCompletedPurchases(finishedTransactions);
    setCurrentCompletedPurchase(finishedTransactions[currentCompletedIndex]);
  }, [currentCompletedIndex]);

  function previousCompletedSlide(){
    if (currentCompletedIndex > 0){
      setCurrentCompletedIndex(currentCompletedIndex - 1);
    }
    else{
      setCurrentCompletedIndex(completedPurchases.length - 1);
    }
  }

  function nextCompletedSlide(){
    if (currentCompletedIndex === completedPurchases.length - 1){
      setCurrentCompletedIndex(0);
    }
    else{
      setCurrentCompletedIndex(currentCompletedIndex + 1);
    }
  }

  /////

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
            <span className = "text" id= "productBox">{currentNonePurchase}</span> 
          </span>         
          <a class="prev" onClick = {previousNoneSlide}>&#10094;</a>
          <a class="next" onClick = {nextNoneSlide}>&#10095;</a>
        </div>
        {/* header bar */}
        <div>
          <h>Transactions in Progress</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box">
            <span className = "text" id= "productBox">{currentProgPurchase}</span> 
          </span>         
        </div>
        <a class="prev2" onClick = {previousProgSlide}>&#10094;</a>
        <a class="next2" onClick = {nextProgSlide}>&#10095;</a>
        {/* header bar */}
        <div>
          <h>Completed Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box">
            <span className = "text" id= "productBox">{currentCompletedPurchase}</span> 
          </span> 
        </div>  
        <a class="prev3" onClick = {previousCompletedSlide}>&#10094;</a>
        <a class="next3" onClick = {nextCompletedSlide}>&#10095;</a>      
      </div>
    </div>
  );
  
}

export default withRouter(Boxes);
