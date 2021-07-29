import React from "react";
import LocaleContext from "../common/LocaleContext";




// class Data extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {}
//     }

//   render() {
//   var toMerchantdata = this.props.propDetails
//   return ( 
//     <div>
//       {toMerchantdata}
//     </div>
//   );
//   }
  
// }


class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    }

  render() {
  var toMerchantdata = this.props.propDetails
  return (
    <LocaleContext.Provider value={this.props.propDetails}>
    </LocaleContext.Provider>
  );
  }
  
}

export default Data;

