var map;
  funtion disp() 
  {
    var map = new google.maps.Map(document.getElementById('m'), {
      center: {lat: 40.741895, lng: -73.989308},
      scrollwheel: true,
      zoom: 12
    });
    
    var mark_skydeck= new google.maps.Marker({
      position: {lat: 41.878741, lng:-87.635943},
      map:map,
      title: 'Willis Tower Chicago',
      icon : 'images/skydeck_chi.jpg',
      animation: google.maps.Animation.BOUNCE,
    })
    var detail ='<h1> Willis Tower </h1> <p> skydeck is the tallest building of the chicago located in downtown and it is the one of the tourist attraction spot</p>';
    
    var skydeck = new google.maps.InfoWindow({
      content: detail
    });
      mark_skydeck.addListener('click',funtion(){
      skydeck.open(map,mark_skydeck)
      
      setTimeout(funtion() {
      skydeck.close();}, 12000);
    });

    
   
    google.maps.event.addDomListener(window,'load',disp);
  }
  /*lat: 21.705136, lng: 72.995875*/
  
 