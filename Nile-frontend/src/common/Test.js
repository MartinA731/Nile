import React from "react";
import Data from './Data';

class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
      }
  
    render() {
    return (
        <h>{Data}</h>
    )
    }
    
  }

export default Test