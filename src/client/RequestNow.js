import React from "react";

function RequestNow() {
  const openFirstForm = () => {
    document.getElementById("firstForm").style.display = "block";
  };
  return (
    <button className="open-button" onClick={openFirstForm}>
      Request Now
    </button>
  );
}

export default RequestNow;