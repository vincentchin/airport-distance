// https://github.com/njj/haversine with ES6 syntax

const haversine = (start, end, options) => {

  const toRad = (num) => num * Math.PI / 180

  const radii = {
    km:    6371,
    mile:  3960,
    meter: 6371000,
    nmi:   3440
  }

  const R = options.unit in radii ? radii[options.unit] : radii.km

  let dLat = toRad(end.latitude - start.latitude),
      dLon = toRad(end.longitude - start.longitude),
      lat1 = toRad(start.latitude),
      lat2 = toRad(end.latitude)

  let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))

  if (options.threshold && options.threshold > (R * c)) {
      return options.threshold
  }

  return R * c
}

export default haversine
