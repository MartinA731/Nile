import React from "react";


class RequestNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
  const openFirstForm = () => {
    if(window.formOpen === undefined || window.formOpen === false) {
      document.getElementById("firstForm").style.display = "block"; 
      window.formOpen = true;
    }
  };
  return (
    <div> 
      <button className="open-button" onClick={openFirstForm}>
        Request Now
      </button>
    </div>
  );
  }
  
}


export default RequestNow;