//level 1

//url to GeoJSON. see https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php for more info
url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//function to build map
function mapDisplay () {

    //layers

// Create the map object with options
  var earthQuakeMap = L.map("map", {
    center: [0, 0],
    zoom: 3,
    worldCopyJump: true
  });

  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        tileSize: 512,
        maxZoom: 10,
        zoomOffset: -1,      
        id: "streets-v11",
        accessToken: API_KEY
      }).addTo(earthQuakeMap);

  // // Get request to URL
  d3.json(url, function(data) {
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, markerStyle(feature));
      },
    // Call pop-up for each feature
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h1> Magnitude: " + feature.properties.mag+ "</h1> <hr> <h2>" + feature.properties.place + "</h2>");
      }
    }).addTo(earthQuakeMap);

  mapLegend(earthQuakeMap);
  

  });

};

//function for creating legend
function mapLegend (map) {

  colors = ["#459E22", "#7FB20E", "#BEBE02", "#B19A0F", "#B54C0B", "#C00000"];

  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {

    var div = L.DomUtil.create('div', 'info legend'),
                  categories = ['<1', '1 to <2', '2 to <3', '3 to <4', '4 to <5', '>5'],
                  labels =[];
    
    div.innerHTML += '<strong> Magnitude </strong> <br>'
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < categories.length; i++) {
        div.innerHTML +=
            '<i style="background:' + colors[i] + '"></i> ' +
            categories[i] + '<br>';
    };
    return div;
 };
legend.addTo(map);
};

//function for styling markers
function markerStyle (feature) {
  return {
      fillColor: markerColor(feature.properties.mag),
      radius: 4*feature.properties.mag,
      weight: 2,
      opacity: 1,
      color: markerColor(feature.properties.mag),
      fillOpacity: 0.8   
  };
};

// Function determining the color of marker based on magnitude
function markerColor(magnitude) {
  if (magnitude<1) {
    return "#459E22"}
  else if (magnitude<2) {
     return "#7FB20E"}
  else if (magnitude<3) {
     return "#BEBE02"}
  else if (magnitude<4) {
     return "#B19A0F"}
  else if (magnitude<5) {
     return "#B54C0B"}
  else if (magnitude>=5) {
     return "#C00000"}
  else {
     return "black"}
 };
 
mapDisplay();