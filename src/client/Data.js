import React from "react";
import FirstForm from './FirstForm';


class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    }

  render() {
  const showData = () => {
        console.log(this.props.data)
    };

  return (
    <div> 
      <h> {this.props.data} </h>
      {console.log(this.props.data)}
      <h> {showData()} </h>
    </div>
  );
  }
  
}


export default Data;