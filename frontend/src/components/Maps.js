import React, {Component} from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

export class Maps extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={{lat: 11.212497434110691,lng: -74.17728937214468}}
        >
           <Marker position={{lat: 11.212497434110691, lng: -74.17728937214468}} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC7a8FnE7bA7uouwmdMOWcqCOsikJ_cAH0")
})(Maps)
