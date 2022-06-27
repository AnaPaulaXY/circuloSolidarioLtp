var formularioI
var formularioD

function forminstituicao(){
    formularioI=document.getElementById("formularioI");

    if(formularioI.style.display === "none"){
        formularioI.style.display="block";
        formularioD.style.display="none";
    }
    else{
        formularioI.style.display="none";
    }
}
function formdoador(){
    formularioD=document.getElementById("formularioD");

    if(formularioD.style.display === "none"){
        formularioD.style.display="block";
        formularioI.style.display="none";
    }
    else{
        formularioD.style.display="none";
    } 
}
function function_text(){
    document.getElementById("funcao_btn").innerHTML = "Esperando confirmação da instituição";
}

var platform = new H.service.Platform({
    'apikey': 'hYk6QRdK546mPMPpD22FRcVM5MsV7-sT7izh3Hr136k'
  });
  // Obtain the default map types from the platform object:
var defaultLayers = platform.createDefaultLayers();

// Instantiate (and display) a map object:
var map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 12,
      center: { lat: -23.533773, lng: -46.625290 }
    });
var ui = H.ui.UI.createDefault(map, defaultLayers);
ui.getControl('zoom').setDisabled(false)

var onResult = function(result){
    var locations = result.Response.View[0].Result,
    position,
    marker;
  
    for (i = 0; i < locations.length; i++) {
        setNewCenter(
            locations[i].Locations.DisplayPosition.Latitude,
            locations[i].Locations.DisplayPosition.Longitude
        )
        position = {
            lat: locations[i].Locations.DisplayPosition.Latitude,
            lng: locations[i].Locations.DisplayPosition.Longitude
        };
        map.setCenter(position)
        marker = new H.map.Marker(item.position);
    }
}

function setNewCenter(lat, long){
    position = {
        lat: lat,
        lng: long
    };
    map.setCenter(position)
    return position;
}

var geocoder = platform.getGeocodingService();
function callback(position){
    setNewCenter(position.coords.latitude, position.coords.longitude);

}

document.getElementById('user-location').addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(callback);
})

var defaultLayers = platform.createDefaultLayers();
var geocodingParams={
    searchText: 'Alameda Santos, 1000, São Paulo, Brasil'
};

var onResult = function(result){
    var locations = result.Response.View[0].Result,
    position,
    marker;
  
    for (i = 0; i < locations.length; i++) {
        position = {
            lat: locations[i].Locations.DisplayPosition.Latitude,
            lng: locations[i].Locations.DisplayPosition.Longitude
        };
        map.setCenter(position)
        marker = new H.map.Marker(item.position);
        map.addObject(marker);
    }
}

const form = document.getElementById('formulario')
form.addEventListener("submit", function(event){
    event.preventDefault();
})