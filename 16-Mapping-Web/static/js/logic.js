Creating map object
var map = L.map("map", {
  center: [25.3043, -90.0659],
  zoom: 2
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_day.geojson";

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
function size(feature){
  
return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}
   function getColor(magnitude){
    switch (true) {
      case magnitude > 5:
        return "#ea2c2c";
      case magnitude > 4:
        return "#ea822c";
      case magnitude > 3:
        return "#ee9c00";
      case magnitude > 2:
        return "#eecc00";
      case magnitude > 1:
        return "#d4ee00";
      default:
        return "#98ee00";
      }
   }
   function getRadius(magnitude){
     if (magnitude===0){
       return 1;
     }
     return magnitude * 4;
   }

  // Creating a GeoJSON layer with the retrieved data
  L.geoJson(data,{
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng);
    },
    style: size,
    onEachFeature: function(feature, layer){
      layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
    }
  }).addTo(map);
 
  var legend = L.control({
    position: "bottomleft"
  })
  legend.onAdd = function(){
    var div = L.DomUtil.create("div", "info legend");

   var grades = [0, 1, 2, 3, 4, 5];
   var colors = [
     "#98ee00",
     "#d4ee00",
     "#eecc00",
     "#ee9c00",
     "#ea822c",
     "#ea2c2c"
   ];

   // Looping through our intervals to generate a label with a colored square for each interval.
   for (var i = 0; i < grades.length; i++) {
     div.innerHTML +=
       "<i style='background: " + colors[i] + "></i> " +
       grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
   }
   return div;
  };
  legend.addTo(map);
});