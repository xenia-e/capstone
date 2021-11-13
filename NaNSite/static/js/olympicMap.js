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
	center: [40.21, 2.86],
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
  "Medals won by countries": olympicMedals,
  "Average Athlete": averageWinner,
};

// Then we add a control to the map that will allow the user to change which
// layers are visible.
L.control.layers(baseMaps, overlays).addTo(map);

// Retrieve the GeoJSON data.
d3.json("./NanSite/static/js/mapData.geojson").then(function(data) {

  // This function returns the style data for each of the country we plot on
  // the map. We pass the to games participated into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.5,
      fillColor: getColor(feature.properties.Games),
      color: "#000000",
      radius: getRadius(feature.properties.Games),
      stroke: true,
      weight: 0.5
    };
  }

  // This function determines the color of the marker based on games participated.
  function getColor(Games) {
    if (Games > 40) {
      return "#ea2c2c";
    }
    if (Games > 30) {
      return "#ea822c";
    }
    if (Games > 20) {
      return "#ee9c00";
    }
    if (Games > 10) {
      return "#eecc00";
    }
    if (Games > 5) {
      return "#d4ee00";
    }
    return "#98ee00";
  }

  // This function determines the radius of the country marker based on games participated.
  function getRadius(Games) {
    return Games * 0.7;
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
      layer.bindPopup("<h4>" + feature.properties.CountryName + "</h4>Games participated: " + feature.properties.Games + '</br> Medals earned: ' + feature.properties.totalWins + '</br> Total athletes participated: ' + feature.properties.Athletes);
    }
  }).addTo(olympicCountries);

  // Then we add  layer to our map.
  olympicCountries.addTo(map);

  // Here we create a legend control object.
    let legend = L.control({
      position: "bottomright"
    });
  
    // Then add all the details for the legend
    legend.onAdd = function() {
      let div = L.DomUtil.create("div", "info legend");
      //labels = ['<strong> Games participaded </strong>'];
  
      const games = ['<5', '>5', '>10', '>20', '>30', '>40'];
      const colors = [
        "#98ee00",
        "#d4ee00",
        "#eecc00",
        "#ee9c00",
        "#ea822c",
        "#ea2c2c"
      ];
  
  // Looping through our intervals to generate a label with a colored square for each interval.
    for (var i = 0; i < games.length; i++) {
      div.innerHTML +=        
        "<i style='background: " + colors[i] + "'></i>&nbsp;&nbsp;" +
        games[i] + "</br>";
      
      }
      return div;
    };
  
    // Finally, we our legend to the map.
    legend.addTo(map);
});

// ADDING MEDALS LAYER

d3.json("./NaNSite/static/js/mapData.geojson").then(function(data) {

  // This function returns the style data for each of the country we plot on
  // the map. We pass the to games participated into two separate functions
  // to calculate the color and radius.
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.75,
      fillColor: getColor2(feature.properties.totalWins),
      color: "#000000",
      radius: getRadius2(feature.properties.totalWins),
      stroke: true,
      weight: 0.5
    };
  }
// This function determines the radius of the country marker based on games participated.
  function getRadius2(totalWins) {
    if (totalWins === 0) {
      return 4;
    }
    if (totalWins <= 100) {
      return totalWins*0.08;
    }
    if (totalWins <= 3000) {
      return totalWins*0.03;
    }
    return totalWins*0.01;
  }
  function getColor2(totalWins){
    if (totalWins === 0) {
      return 'grey';
    }
    return "#bf9b30"
  }
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
      		return L.circleMarker(latlng);
        },
    style: styleInfo,
     onEachFeature: function(feature, layer) {
      layer.bindPopup('<h4>' + feature.properties.CountryName + '</h4><hr> Medals earned: ' + feature.properties.totalWins +
       '</br><hr> Gold medals: ' + feature.properties.Medal_Gold +
       '</br> Silver medals: ' + feature.properties.Medal_Silver +
       '</br> Bronze medals: ' + feature.properties.Medal_Bronze
       );
    }
  }).addTo(olympicMedals);

});

// ADDING ATHLETES LAYER

d3.json("./NanSite/static/js/athletes.geojson").then(function(data) {
  function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 0.75,
      fillColor: 'blue',
      color: "#000000",
      radius: 10,
      stroke: true,
      weight: 0.5
    };
  }
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data, {
    	// We turn each feature into a circleMarker on the map.
    	pointToLayer: function(feature, latlng) {
        var trophyIcon = L.icon({
          iconUrl: './NanSite/static/images/trophy.png',
        
          iconSize:     [15, 15], // size of the icon
          iconAnchor:   [17, 38], // point of the icon which will correspond to marker's location
          popupAnchor:  [-3, -3] // point from which the popup should open relative to the iconAnchor
        });
        return L.marker(latlng, {icon: trophyIcon})
        },
    style: styleInfo,
     onEachFeature: function(feature, layer) {
      layer.bindPopup('<h4>' + feature.properties.CountryName + 
      '</h4><hr><h4> Average winner </h4><hr> Age: ' + feature.properties.Age +
       ' </br> Height: ' + Math.round(feature.properties.Height, 2) +
       ' cm</br> Weight: ' + Math.round(feature.properties.Weight, 2) + ' kg'
       );
    }
  }).addTo(averageWinner);

  // Then we add  layer to our map.
averageWinner.addTo(map);

});

