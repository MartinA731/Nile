import React,{ useEffect } from 'react'; //for later security
import { withRouter } from 'react-router-dom';
import './Client.css';
import '../common/Button.css';
import '../common/TopBar.css';
import TopBar from '../common/TopBar';
import Boxes from './Boxes';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import RequestNow from './RequestNow';



function Client(props) {


    return(
        <div>

          {/* top bar */}
          <TopBar></TopBar>
         
          {/* Request now button */}
          <RequestNow></RequestNow>

          {/* Boxes in middle */}
          <Boxes></Boxes>

          {/* Request now first form */}
          <FirstForm></FirstForm>


          {/* Request now second form */}
          <SecondForm></SecondForm>

        </div>
      )
}



export default withRouter(Client);