var crd;

function success(pos) {
    crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    //creamos un mapa si la funcion success se incia
    var platform = new H.service.Platform({
      'apikey': 'ju8bagx3Ki_uZSYIjrKxeHL2N8T7Lrots5a2BdLUfDc'
    });

    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById('mapContainer'),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: crd.latitude, lng: crd.longitude }
      });

      // Define a variable holding SVG mark-up that defines an icon image:
      var svgMarkup = '<svg width="24" height="24" ' +
      'xmlns="http://www.w3.org/2000/svg">' +
      '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
      'height="22" /><text x="12" y="18" font-size="12pt" ' +
      'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
      'fill="white">YO</text></svg>';

      // Create an icon, an object holding the latitude and longitude, and a marker:
      var icon = new H.map.Icon(svgMarkup),
      coords = {lat: crd.latitude, lng: crd.longitude},
      marker = new H.map.Marker(coords, {icon: icon});

      // Add the marker to the map and center the map at the location of the marker:
      map.addObject(marker);
      map.setCenter(coords);

      // Create the parameters for the routing request:
      var routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        // The start point of the route:
        'origin': `${crd.latitude},${crd.longitude}`,
        // The end point of the route:
        'destination': '36.747867,-3.516106',
        // Include the route shape in the response
        'return': 'polyline'
      };

      // Define a callback function to process the routing response:
      var onResult = function(result) {
        // ensure that at least one route was found
        if (result.routes.length) {
          result.routes[0].sections.forEach((section) => {
              // Create a linestring to use as a point source for the route line
              let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

        // Create a polyline to display the route:
        let routeLine = new H.map.Polyline(linestring, {
          style: { strokeColor: 'blue', lineWidth: 3 }
        });

        // Create a marker for the start point:
        let startMarker = new H.map.Marker(section.departure.place.location);

        // Create a marker for the end point:
        let endMarker = new H.map.Marker(section.arrival.place.location);

        // Add the route polyline and the two markers to the map:
        map.addObjects([routeLine, startMarker, endMarker]);

        // Set the map's viewport to make the whole route visible:
        map.getViewModel().setLookAtData({bounds: routeLine.getBoundingBox()});
    });
  }
};
// Get an instance of the routing service version 8:
var router = platform.getRoutingService(null, 8);

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
  });

}
      
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
navigator.geolocation.getCurrentPosition(success, error);

//calcula la distancia recorrida

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

console.log("la distancia de Granada a Motril es : "+getDistanceFromLatLonInKm(37.186838, -3.605647,36.747867,-3.516106)+" Km");








