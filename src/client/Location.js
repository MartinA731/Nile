import React, { useState } from 'react';

const Location = () => {
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
      <button type="button" onClick={getLocation}>Share Location</button>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}
    </div>
  );
}

export default Location;



