import React, { Component } from 'react';

import AutoCompleteInput from './AutoCompleteInput';
import SimpleMap from './SimpleMap';

import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

import haversine from './helpers/haversine';
import midpoint from './helpers/midpoint';
import airports from './constants/airports';

import './App.css';

export default class App extends Component {

  state = {
    start: {},
    end: {},
    distance: '',
    center: [37.1, -95.7],
    zoom: 4,
    polylineEl: ''
  };

  handleStartInput = (searchText) => {
    let start = airports.find((e) => {
      return ( e.name + ' ' + e.iata_code ) === searchText
    })

    this.setState({
      start: start
    })
  };

  handleEndInput = (searchText) => {
    let end = airports.find((e) => {
      return ( e.name + ' ' + e.iata_code ) === searchText
    })

    this.setState({
        end: end
    })
  };

  drawFlightPath = (start, end) => {

    if (this.state.polylineEl) {
      this.state.polylineEl.setMap(null)
    }

    let flightPath = new window.maps.Polyline({
      path: [
        {lat: start.latitude, lng: start.longitude},
        {lat: end.latitude, lng: end.longitude}
      ],
      geodesic: true,
      strokeColor: 'yellow',
      strokeOpacity: 1.0,
      strokeWeight: 3,
    })

    flightPath.setMap(window.map)

    this.setState({
      polyline: flightPath
    })
  };

  scaleZoom = (distance) => {
    if (3000 < distance) {
      return 4
    } else if (1000 < distance) {
      return 5
    } else if (100 < distance) {
      return 6
    } else if (distance < 100) {
      return 8
    } else {
      return 4
    }
  };

  calculateDistance = () => {
    const options = {
      unit: 'nmi',
      threshold: 1
    }

    let distance = Math.round(haversine(this.state.start, this.state.end, options)),
        newCenter = midpoint(this.state.start, this.state.end),
        zoom = this.scaleZoom(distance);

    this.drawFlightPath(this.state.start, this.state.end)

    this.setState({
      distance: distance + ' nmi',
      center: newCenter,
      zoom: zoom
    })
  };

  render() {
    const data = airports.map(e => e.name + ' ' + e.iata_code)

    return (
      <div className="App">
        <Toolbar>
          <ToolbarGroup>
            <AutoCompleteInput labelText={"Starting Airport..."} data={data} onBlurInput={(e) => this.handleStartInput(e)}/>
            <AutoCompleteInput labelText={"Ending Airport..."} data={data} onBlurInput={(e) => this.handleEndInput(e)}/>
            <RaisedButton label="Calculate" primary={true} onTouchTap={() => this.calculateDistance()}/>
            <div style={{ marginLeft: '35px' }}>
              <h1>{this.state.distance}</h1>
            </div>
          </ToolbarGroup>
        </Toolbar>
        <SimpleMap center={this.state.center} zoom={this.state.zoom}/>
      </div>
    );
  }
}
