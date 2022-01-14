import React, {useState} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapContainer(props) {

  const mapStyles = {
    width: '20%',
    height: '20%'
  };

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);

        const orderNum = localStorage.getItem("orderNum");
        var oldVal = JSON.parse(localStorage.getItem("clientRequests"));
        var elem = oldVal[orderNum];
        elem.lon = position.coords.longitude;
        elem.lat = position.coords.latitude;
        oldVal[orderNum] =  elem;
        localStorage.setItem("clientRequests", JSON.stringify(oldVal));
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className="App">
      <button type="button" onClick={getLocation} className="share-location">Share Location</button>
      <p>{status}</p>
      {lat && <p className="share-location">Latitude: {lat}</p>}
      {lng && <p className="share-location">Longitude: {lng}</p>}
      <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
      >
          <Marker position={{ lat: lat, lng: lng}}/>
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB8bb4Id3hNnAmNw_TCHtnR3ldteG1fztM'
})(MapContainer);
