import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { withRouter } from "react-router-dom";

const mapStyles = {
  width: '40%',
  height: '40%',
  left: '32%',
  top:  '-8%'
};



class MapContainer extends Component {
 
  render() {
    var latitude = this.props.dataFromParentLat;
    var longitude = this.props.dataFromParentLng;
    if(!latitude) {
      latitude = 0;
    }
    if(!longitude) {
      longitude = 0;
    }
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: latitude,
              lng: longitude
            }
          }
        >
          <Marker position={{ lat: latitude, lng: longitude}}/>
        </Map>
    );
  }
}

export default withRouter(GoogleApiWrapper({
  apiKey:'AIzaSyB8bb4Id3hNnAmNw_TCHtnR3ldteG1fztM'
})(MapContainer));

