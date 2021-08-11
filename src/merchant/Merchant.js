import React from 'react'; //for later security
import './Merchant.css';
import '../common/Button.css';
import '../common/TopBar.css';
import LinkClient from './LinkClient';

function Merchant(props) {

    return (
        <div>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Merchant</title>
          <link rel="stylesheet" href="Merchant.css" />
          <link rel="stylesheet" href="../Common/Button.css" />
          <link rel="stylesheet" href="../Common/TopBar.css" />
 
          <div className="placeholder">
            {/* header bar */}
            <div>
              <h>Transaction offers</h>
              <LinkClient></LinkClient>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box" />
              <span className="box" />
              <span className="box" /> 
            </div>
            {/* header bar */}
            <div>
              <h>Transaction in progress</h>
            </div>
            {/* offer bar */}
            <div className="flex-container">
              <span className="box" />
              <span className="box" />
              <span className="box" /> 
            </div>
            {/* header bar */}
            <div>
              <h>Completed transaction</h>
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

export default Merchant;

