## Description

This is a web application that calculates the distance (nautical miles) between
two airports in the US. Data was scraped from a list of about 40 major airports
in the US with their IATA codes, names and geographic coordinates. When calculating
distance between airports, it will center on the midpoint and scale the zoom
according to distance. It will also draw a polyline between the two points.

![Alt text](https://github.com/vincentchin/airport-distance/blob/master/public/airport.gif "Airport Distance")

## Requirements

I'm using Node v4.1.0 and NPM v3.5.2. The app generally should need a Google Maps
API KEY for google-map-react but it works without one. It'll just fire off a warning
and limit the map usage. If you do want to use a key, just add it into bootstrapURLKeys
in `src/SimpleMap.js`.

## How to Run

```

  cd airport-distance
  npm install
  npm start

```

## Libraries/Packages/Resources Used

* [Create React App](https://github.com/facebookincubator/create-react-app)
* [google-map-react](https://github.com/istarkov/google-map-react)
* [material-ui](http://www.material-ui.com/)
* [haversine](https://github.com/njj/haversine)
* [midpoint](http://www.movable-type.co.uk/scripts/latlong.html)

## Things To Consider

The web application isn't really responsive since the map and markers are only
useful at max size.
