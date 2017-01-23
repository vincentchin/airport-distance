import React, { Component} from 'react';
import LocalAirport from 'material-ui/svg-icons/maps/local-airport';
import { blue500 } from 'material-ui/styles/colors';

export default class AirportMarker extends Component {
  render() {
    const MARKER_SIZE = 20;
    const markerStyle = {
      position: 'absolute',
      width: MARKER_SIZE,
      height: MARKER_SIZE,
      left: -MARKER_SIZE / 2,
      top: -MARKER_SIZE / 2,
      color: blue500
    }
    return (
      <div style={ markerStyle }>
        <LocalAirport color={ blue500 } />
        {this.props.text}
      </div>
    );
  }
}
