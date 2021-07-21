import React from "react";
import TableDatePicker from "./dateSelect";
import Location from "./Location";

function SecondForm() {
  const closeSecondForm = () => {
    document.getElementById("secondForm").style.display = "none";
  };
  return (
    <div className="form-popup" id="secondForm">
      <form action="/action_page.php" className="form-container">
        <h1>Request Address</h1>
        <label htmlFor="email">
          <b>Location</b>
        </label>
        <br />
        <br />
        <Location></Location>
        <label htmlFor="email">
          <b>Estimated Delivery Date</b>
        </label>
        <TableDatePicker></TableDatePicker>
        <button type="button" className="btn">
          Next
        </button>
        <button type="button" className="btn cancel" onClick={closeSecondForm}>
          Close
        </button>
      </form>
    </div>
  );
}

export default SecondForm;
