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

  const[currentNonePurchase, setCurrentNonePurchase] = useState("");
  const[nextNonePurchase, setNextNonePurchase] = useState("");
  const[nextNextNonePurchase, setNextNextNonePurchase] = useState("");
  const[currentNoneIndex, setCurrentNoneIndex] = useState(0);

  useEffect(() => {
    setCurrentNonePurchase(noneOrPassedres[currentNoneIndex]);
    if (noneOrPassedres.length >= 2) {
      setNextNonePurchase(noneOrPassedres[currentNoneIndex + 1]);
    }
    if (noneOrPassedres.length >= 3) {
      setNextNextNonePurchase(noneOrPassedres[currentNoneIndex + 2]);
    }
  }, [currentNoneIndex]);

  function previousNoneSlide(){
    if (noneOrPassedres.length >= 3 && currentNoneIndex > 0){
      setCurrentNoneIndex(currentNoneIndex - 1);
    }
  }

  function nextNoneSlide(){
    if (noneOrPassedres.length >= 3 && currentNoneIndex < noneOrPassedres.length - 3){
      setCurrentNoneIndex(currentNoneIndex + 1);
    }
  }

  // The side scroller for Transactions in Progress // 

  var transactionsProgres = allTransactions(userEmail)["prog"];

  const[currentProgPurchase, setCurrentProgPurchase] = useState("");
  const[nextProgPurchase, setNextProgPurchase] = useState("");
  const[nextNextProgPurchase, setNextNextProgPurchase] = useState("");
  const[currentProgIndex, setCurrentProgIndex] = useState(0);

  useEffect(() => {
    setCurrentProgPurchase(transactionsProgres[currentProgIndex]);
    if (transactionsProgres.length >= 2) {
      setNextProgPurchase(transactionsProgres[currentProgIndex + 1]);
    }
    if (transactionsProgres.length >= 3) {
      setNextNextProgPurchase(transactionsProgres[currentProgIndex + 2]);
    }
  }, [currentProgIndex]);

  function previousProgSlide(){
    if (transactionsProgres.length >= 3 && currentProgIndex > 0){
      setCurrentProgIndex(currentProgIndex - 1);
    }
  }

  function nextProgSlide(){
    if (transactionsProgres.length >= 3 && currentProgIndex < transactionsProgres.length - 3){
      setCurrentProgIndex(currentProgIndex + 1);
    }
  }

  // The side scroller for finished Transactions // 

  var finishedTransactions = allTransactions(userEmail)["done"];

  const[currentCompletedPurchase, setCurrentCompletedPurchase] = useState("");
  const[nextCompletedPurchase, setNextCompletedPurchase] = useState("");
  const[nextNextCompletedPurchase, setNextNextCompletedPurchase] = useState("");
  const[currentCompletedIndex, setCurrentCompletedIndex] = useState(0);

  useEffect(() => {
    setCurrentCompletedPurchase(finishedTransactions[currentCompletedIndex]);
    if (finishedTransactions.length >= 2) {
      setNextCompletedPurchase(finishedTransactions[currentCompletedIndex + 1]);
    }
    if (finishedTransactions.length >= 3) {
      setNextNextCompletedPurchase(finishedTransactions[currentCompletedIndex + 2]);
    }
  }, [currentCompletedIndex]);

  function previousCompletedSlide(){
    if (finishedTransactions.length >= 3 && currentCompletedIndex > 0){
      setCurrentCompletedIndex(currentCompletedIndex - 1);
    }
  }

  function nextCompletedSlide(){
    if (finishedTransactions.length >= 3 && currentCompletedIndex < finishedTransactions.length - 3){
      setCurrentCompletedIndex(currentCompletedIndex + 1);
    }
  }

  /////////

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
            <span className = "text fadeIn" id= "productBox">{currentNonePurchase}</span> 
          </span>         
          <span className="box">
            <span className = "text fadeIn" id= "productBox">{nextNonePurchase}</span> 
          </span>
          <span className="box">
            <span className = "text fadeIn" id= "productBox">{nextNextNonePurchase}</span> 
          </span>
          <a className="prev" onClick = {previousNoneSlide}>&#10094;</a>
          <a className="next" onClick = {nextNoneSlide}>&#10095;</a>
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
          <span className="box">
            <span className = "text" id= "productBox">{nextProgPurchase}</span> 
          </span>  
          <span className="box">
            <span className = "text" id= "productBox">{nextNextProgPurchase}</span> 
          </span>      
        </div>
        <a className="prev2" onClick = {previousProgSlide}>&#10094;</a>
        <a className="next2" onClick = {nextProgSlide}>&#10095;</a>
        {/* header bar */}
        <div>
          <h>Completed Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box">
            <span className = "text" id= "productBox">{currentCompletedPurchase}</span> 
          </span> 
          <span className="box">
            <span className = "text" id= "productBox">{nextCompletedPurchase}</span> 
          </span> 
          <span className="box">
            <span className = "text" id= "productBox">{nextNextCompletedPurchase}</span> 
          </span> 
        </div>  
        <a className="prev3" onClick = {previousCompletedSlide}>&#10094;</a>
        <a className="next3" onClick = {nextCompletedSlide}>&#10095;</a>      
      </div>
    </div>
  );

}

export default withRouter(Boxes);
