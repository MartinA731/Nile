import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './client/Map.js'

export default GoogleApiWrapper({
    apiKey:'AIzaSyB8bb4Id3hNnAmNw_TCHtnR3ldteG1fztM'
  })(MapContainer);
