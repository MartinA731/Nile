import React from "react";
import TableDatePicker from "./dateSelect";
import Location from './Location';

class SecondForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
  const closeSecondForm = () => {
    const num = JSON.parse(localStorage.getItem("orderNum"));
    localStorage.setItem("orderNum", JSON.parse(num + 1));
    document.getElementById("secondForm").style.display = "none";
    window.formOpen = false;
    window.location.reload();
  };
  const openThirdForm = () => {
    document.getElementById("thirdForm").style.display = "block";
    document.getElementById("secondForm").style.display = "none";
  };
  return (
    <div className="form-popup" id="secondForm">
      <form action="/action_page.php" className="form-container">
        <h4 id="request-address">Request Address</h4>
        <label>
          <b>Location</b>
        </label> <br />
        <Location></Location>
        <label>
          <b>Estimated Delivery Date</b>
        </label>  <br />
        <TableDatePicker></TableDatePicker> <br /> <br />
        <button type="button" className="btn" id="nextTwo" onClick={openThirdForm}>
          Next
        </button>
        <br />
        <button type="button" className="btn cancel" onClick={closeSecondForm}>
          Close
        </button>
      </form>
    </div>
  );
  }
}

export default SecondForm;
