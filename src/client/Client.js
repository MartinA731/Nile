import React from 'react'; //for later security
import { withRouter } from 'react-router-dom';
import './Client.css';
import '../common/Button.css';
import '../common/TopBar.css';
import Boxes from './Boxes';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import RequestNow from './RequestNow';




class Client extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }
    render() {
    //localStorage.setItem("sharedData", "FIDOISJODFJOI");
    return(
        <div>
          {localStorage.getItem("sharedData")} <br></br>
          {localStorage.getItem("login_access_token")}
          {/* Request now button */}
          <RequestNow></RequestNow> 

          {/* Boxes in middle */}
          <Boxes></Boxes>

          {/* Request now first form */}
          <FirstForm></FirstForm>

          {/* Request now second form */}
          <SecondForm></SecondForm>

          <ThirdForm></ThirdForm>

          {this.props.location && this.props.location.state && this.props.location.state}

        </div>
      )
    }
}


export default withRouter(Client);