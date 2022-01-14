// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import { withRouter } from "react-router-dom";

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

// class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={14}
//         style={mapStyles}
//         initialCenter={
//           {
//             lat: -1.2884,
//             lng: 36.8233
//           }
//         }
//       />
//     );
//   }
// }

// export default withRouter(MapContainer);

import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { withRouter } from "react-router-dom";

const mapStyles = {
  width: '50%',
  height: '50%',
};

class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        >
          <Marker position={{ lat: -1.2884, lng: 36.8233}}/>
        </Map>
    );
  }
}

export default withRouter(GoogleApiWrapper({
  apiKey:'AIzaSyB8bb4Id3hNnAmNw_TCHtnR3ldteG1fztM'
})(MapContainer));
