function init(){
	//alert('it works');
	var el = document.getElementById('canvas');
	var myLocation = new google.maps.LatLng(41.878741, -87.635943);
	var mapOptions = {
		center: myLocation,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	var myMap = new google.maps.Map(el, mapOptions);

	var marker = new google.maps.Marker({
		position: myLocation,
		map: myMap,
		animation: google.maps.Animation.BOUNCE,
	
	});

	var contentString = '<h1>Willis Tower</h1><img src="images/skydeck_chi.jpg"><p>This is the tallet building of chicago located in downtown. This is one of the major attraction of chicago. </p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);




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
     

