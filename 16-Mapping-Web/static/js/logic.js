// var API_quakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
// console.log (API_quakes)
// var API_plates = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"
// console.log (API_plates)

// function markerSize(magnitude) {
//     return magnitude * 4;
// };


// var earthquakes = new L.LayerGroup();

// d3.json(API_quakes, function (geoJson) {
//     L.geoJSON(geoJson.features, {
//         pointToLayer: function (geoJsonPoint, latlng) {
//             return L.circleMarker(latlng, { radius: markerSize(geoJsonPoint.properties.mag) });
//         },

//         style: function (geoJsonFeature) {
//             return {
//                 fillColor: Color(geoJsonFeature.properties.mag),
//                 fillOpacity: 0.7,
//                 weight: 0.1,
//                 color: 'black'

//             }
//         },

//         onEachFeature: function (feature, layer) {
//             layer.bindPopup(
//                 "<h4 style='text-align:center;'>" + new Date(feature.properties.time) +
//                 "</h4> <hr> <h5 style='text-align:center;'>" + feature.properties.title + "</h5>");
//         }
//     }).addTo(earthquakes);
//     createMap(earthquakes);
// });

// var plateBoundary = new L.LayerGroup();

// d3.json(API_plates, function (geoJson) {
//     L.geoJSON(geoJson.features, {
//         style: function (geoJsonFeature) {
//             return {
//                 weight: 2,
//                 color: 'magenta'
//             }
//         },
//     }).addTo(plateBoundary);
// })


// function Color(magnitude) {
//     if (magnitude > 5) {
//         return 'red'
//     } else if (magnitude > 4) {
//         return 'darkorange'
//     } else if (magnitude > 3) {
//         return 'tan'
//     } else if (magnitude > 2) {
//         return 'yellow'
//     } else if (magnitude > 1) {
//         return 'darkgreen'
//     } else {
//         return 'lightgreen'
//     }
// };

// function createMap() {

//     // var highContrastMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     //     maxZoom: 18,
//     //     id: 'mapbox.high-contrast',
//     //     accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//     // });

//     // var streetMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     //     maxZoom: 18,
//     //     id: 'mapbox.streets',
//     //     accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//     // });

//     // var darkMap = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     //     maxZoom: 18,
//     //     id: 'mapbox.dark',
//     //     accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//     // });
    
//     var graymap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 500,
//         maxZoom: 25,
//         zoomOffset: -1,
//         id: "mapbox/light-v10",
//         accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//       });
//       var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 500,
//         maxZoom: 25,
//         zoomOffset: -1,
//         id: "mapbox/satellite-v9",
//         accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//       });
//       var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 500,
//         maxZoom: 25,
//         zoomOffset: -1,
//         id: "mapbox/outdoors-v11",
//         accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//       });


//     // var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     //     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     //     tileSize: 512,
//     //     maxZoom: 18,
//     //     zoomOffset: -1,
//     //     id: "mapbox/satellite-v9",
//     //     accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//     //   });

//     // var satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//     //     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
//     //     maxZoom: 18,
//     //     id: 'mapbox.satellite',
//     //     accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
//     // });

//     var baseLayers = {
//     //     "High Contrast": highContrastMap,
//     //     "Street": streetMap,
//     //     "Dark": darkMap,
//         "Satellite": satellite
//     };

//     var overlays = {
//         "Earthquakes": earthquakes,
//         "Plate Boundaries": plateBoundary,
//     };

//     var mymap = L.map('mapid', {
//         center: [40, -99],
//         zoom: 4.3,
//         layers: [streetMap, earthquakes, plateBoundary]
//     });

//     L.control.layers(baseLayers, overlays).addTo(mymap);
    

//     var legend = L.control({ position: 'bottomright' });

//     legend.onAdd = function (map) {

//         var div = L.DomUtil.create('div', 'info legend'),
//             magnitude = [0, 1, 2, 3, 4, 5],
//             labels = [];

//         div.innerHTML += "<h4 style='margin:4px'>Magnitude</h4>"

//         for (var i = 0; i < magnitude.length; i++) {
//             div.innerHTML +=
//                 '<i style="background:' + Color(magnitude[i] + 1) + '"></i> ' +
//                 magnitude[i] + (magnitude[i + 1] ? '&ndash;' + magnitude[i + 1] + '<br>' : '+');
//         }

//         return div;
//     };
//     legend.addTo(mymap);
// }


// USGS endpoint for 'All Earthqukes from the Past 7 Days'
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Pull data from USGS endpoint and call .features 
d3.json(queryUrl, function(data) {
    // Call createFeatures with data.features
    createFeatures(data.features);
    // console.log(data.features);
}); 

// Create function to create features for data.features
function createFeatures(earthquakeDataFeatures){

    function onEachFeature(feature, circle) {
        // if statement to filter out any null values
        if (feature.properties.place && feature.properties.time && feature.properties.mag && feature.geometry.coordinates[1] && feature.geometry.coordinates[0] && feature.geometry.coordinates[2] !== null) {            
        
            // Set up pop up with place, mag, depth, and time data
            circle.bindPopup("<h3>" + feature.properties.place + "<h3><p>" +
            feature.properties.mag + " magnitudes</p><p>" + feature.geometry.coordinates[2] +
            " depth</p><p>" + new Date(feature.properties.time) + "</p>");   
        }      
    }    
    // Create function for radius to return mag * 2000 for better visualization
    function radiusMag(mag) { 
        return mag * 25000;
    }

    // Create function for color scale base on depth value
    function circleColor(depth) {
        // if statement to state range and colors
        if (depth  < -10) {
            return "#fffb2"
        }
        else if (depth < 10) {
            return "#fed976"
        }
        else if (depth < 30) {
            return "#feb24c"
        }
        else if (depth < 50) {
            return "#fd8d3c"
        }
        else if (depth < 70) {
            return "#f03b20"
        }
        else if (depth < 90) {
            return "#bd0026"
        }
    }
    // Create a GeoJSON layer containing the features array on the earthquakeData object
    // Run the onEachFeature function once for each piece of data in the array
    var earthquakes = L.geoJSON(earthquakeDataFeatures, {
        // function to create cirlces
        pointToLayer: function(earthquakeDataFeatures, latlng) {
            // Create circles
            return L.circle(latlng, {
                // Set raidus to magnitude value
                radius: radiusMag(earthquakeDataFeatures.properties.mag),
                // Set colors to depth
                color: circleColor(earthquakeDataFeatures.geometry.coordinates[2]),
                fillColor: circleColor(earthquakeDataFeatures.geometry.coordinates[2]),
                fillOpacity: 0.7
            });
        },
        onEachFeature: onEachFeature
    });
    // Call createMap function with earthquakes 
    createMap(earthquakes);
    // console.log(earthquakes);

    // Start mapping process
    function createMap(earthquakes) {
        
        // Define streetmap layer
        var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/streets-v11",
            accessToken: "pk.eyJ1IjoidGF5d29sZmY5MyIsImEiOiJja2pxMGxxYWgwa2E3MnRuNWJ4aTdyaTlrIn0.mRTKBbsYjjhzNQvlLpO5pA"
        });

        // Create baseMaps object to hold our base layers
        var baseMaps = {
            "Street Map": streetmap
        };

        // Create overlay object to hold our overlay layer
        var overlayMaps = {
            Earthquakes: earthquakes
        };

        // Create map with streetmap and earthquakes layers to display when loaded
        var map = L.map("map", {
            center: [32.7767, -96.7970],
            zoom: 4,
            layers: [streetmap, earthquakes]
        });

        // Create a layer control. Pass in baseMaps and overlayMaps
        // Add the layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(map);

        // // Create legend
        // function for legend colors
        function getColor(c) {
            return  c > 90 ? "#bd0026":
                    c > 70 ? "#f03b20":
                    c > 50 ? "#fd8d3c":
                    c > 30 ? "#feb24c":
                    c > 10 ? "#fed976":
                            "#ffffb2";
        }
        // Set up legend variable to L.control location
        var legend = L.control({position: "bottomright"});

        // Set up legend features
        legend.onAdd = function(map) {
            // Create div for legend
            var div = L.DomUtil.create("div", "info legend");
            // Set legend labels
            var mags = [-10, 10, 30, 50, 70, 90];
            var labels = [];
            // for loop through mag value ranges and use innerHTML to getColor functon for 
            // color parameters
            for (var i = 0; i < mags.length; i++) {
                div.innerHTML +=
                '<i style="background:' + getColor(mags[i] + 1) + '"></i>' +
                mags[i] + (mags[i + 1] ? '&ndash;' + mags[i + 1] + '<br>' : '+');
            }
            return div;
        };
        legend.addTo(map);
    }
}