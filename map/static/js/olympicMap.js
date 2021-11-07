// Add console.log to check to see if our code is working.
console.log("working----");
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});


// We create the third tile layer that will be the background of our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
	center: [40.7, -94.5],
	zoom: 3,
	layers: [streets]
});

// Create a base layer that holds all  maps.
let baseMaps = {
  "Streets": streets,
  "Dark": dark
};

// 1. Add a 2nd layer group.
let olympicCountries = new L.LayerGroup();
let olympicMedals = new L.LayerGroup();
let averageWinner = new L.LayerGroup();

// 2. Add a reference to the tectonic plates group to the overlays object.
let overlays = {
  "Olympic Countries": olympicCountries,
  "Medals": olympicMedals,
  "Average Athlete": averageWinner,
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the GeoJSON data.
d3.json("./static/js/mapData.geojson").then(function(data) {

  // This function returns the style data for each of the country we plot on
  // the map. We pass the to games participated into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.5,
      fillColor: getColor(feature.properties.total_Games),
      color: "#000000",
      radius: getRadius(feature.properties.total_Games),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on games participated.
  function getColor(total_Games) {
    if (total_Games > 10) {
      return "#ea2c2c";
    }
    if (total_Games > 5) {
      return "#ea822c";
    }
    return "#98ee00";
  }

  // This function determines the radius of the country marker based on games participated.
  function getRadius(total_Games) {
    return total_Games * 0.5;
  }

  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      		return L.circleMarker(latlng);
        },
      // We set the style for each circleMarker using our styleInfo function.
    style: styleInfo,
     // We create a popup for each circleMarker to display the magnitude and location of the earthquake
     //  after the marker has been created and styled.
     onEachFeature: function(feature, layer) {
      layer.bindPopup("<h4>" + feature.properties.name + "</h4><br>Games participated: " + feature.properties.total_Games);
    }
  }).addTo(olympicCountries);

  // Then we add the earthquake layer to our map.
  olympicCountries.addTo(map);
});