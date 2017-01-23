import React, { Component } from 'react';

import AirportMarker from './AirportMarker';

import GoogleMap from 'google-map-react';

import airports from './constants/airports';
import mapStyles from './constants/mapStyles';

import './SimpleMap.css';

export default class SimpleMap extends Component {

  createMapOptions = (maps) => {
    return {
      styles: mapStyles
    }
  };

  render() {

    const markers = airports
      .map((e, index) => {
        return (
          <AirportMarker
            key={index}
            lat={e.latitude}
            lng={e.longitude}
            text={e.iata_code}
          />
        )
      })

    return (
      <div className="SimpleMap">
        <GoogleMap
          onGoogleApiLoaded={
            ({ map, maps }) => { window.map = map; window.maps = maps; }
          }
          yesIWantToUseGoogleMapApiInternals={true}
          bootstrapURLKeys={{
            language: 'en'
          }}
          center={this.props.center}
          zoom={this.props.zoom}
          options={(maps) => this.createMapOptions()}>
            { markers }
        </GoogleMap>
      </div>
    );
  }
}
