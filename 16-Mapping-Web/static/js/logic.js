// Query URL for "Earthqukes from the Past 7 Days"
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Pulling the data from the url query
d3.json(queryUrl, function(data) {
    // createFeatures with data.features
    createFeatures(data.features);
    // console.log(data.features);
}); 

// Creatign the function for the features for data.features
function createFeatures(earthquakeDataFeatures){

    function onEachFeature(feature, circle) {
        if (feature.properties.place && feature.properties.time && feature.properties.mag && feature.geometry.coordinates[1] && feature.geometry.coordinates[0] && feature.geometry.coordinates[2] !== null) {            

            // Setting up the areas of pop-ups data on the place, mag, depth and tiem.
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