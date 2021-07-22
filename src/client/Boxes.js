import React from "react";

function Boxes() {
  return (
    <div className="placeholder">
      <div className="placeholder">
        {/* header bar */}
        <div>
          <h>Pending Transactions</h>
        </div>
        {/* offer bar */}
        <div className="flex-container">
          <span className="box" />
          <span className="box" />
          <span className="box" />
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

export default Boxes;
