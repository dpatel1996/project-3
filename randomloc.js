/*var map;
  funtion initMap() 
  {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 41.875672, lng: -87.624347},
      scrollwheel: true,
      zoom: 12
    });
    
    var markskydeck= new google.maps.Marker({
      position: {lat: 41.878741, lng:-87.635943},
      map:map,
      title: 'WillisTower',
      icon : 'images/skydeck_chi.jpg',
      animation: google.maps.Animation.BOUNCE,
    })
    
    var skydeck = new google.maps.InfoWindow({
      content: '<h1> Willis Tower </h1> <p> skydeck is the tallest building of the chicago located in downtown and it is the one of the tourist attraction spot</p>';
    });
      markskydeck.addListener('click',funtion(){
      skydeck.open(map, markskydeck);
      
      setTimeout(funtion() {
      skydeck.close();}, 12000);
    });

    
   
    google.maps.event.addDomListener(window,'load',initialize);
  }*/
  /*lat: 21.705136, lng: 72.995875*/
  
  /* Navy Pier lat: 41.891551 lng: -87.607375 
  
     Millenium Park: 41.882702 lng: -87.619394 */
     
function initMap(){
  
  var chicago = new google.maps.LatLng(41.875672,-87.624347);
  
  var skydeck = new google.maps.LatLng(41.878741, -87.635943);
  
  var navyPier = new google.maps.LatLng(41.891551, -87.607375);
  
  var MilleniumPark = new google.maps.LatLng(41.882702, -87.619394);
  
  var mapId= document.getElementById("map");
  var mapCho = { center: chicago, zoom: 14};
  var map: new.google.maps.Map(mapId,mapCho);
  
  var roadPath = new google.maps.Polygon({
    direction: [skydeck, navyPier, MilleniumPark],
    strokeColor: "#BEEC78",
    strokeOpacity: 1.0,
    strokeWeight: 3;
  })
  roadPath.setMap(map);
}

