(function($) { "use strict";
    
    //set your google maps parameters

    $(document).ready(function(){
        var latitude = 22.2953163,
            longitude = 73.1690834,
            map_zoom = 17;

        var locations = [
            ['<div class="infobox"><span>LIC<span></br><span>Email: k110376@gmail.com</span></div>'

            , latitude, longitude, 2]
        ];
    
        var map = new google.maps.Map(document.getElementById('map-canvas'), {
            zoom: map_zoom,
            scrollwheel: false,
            navigationControl: true,
            mapTypeControl: false,
            scaleControl: false,
            draggable: true,
            styles: [{
                elementType: 'geometry',
                stylers: [{
                  color: '#242f3e'
                }]
              },
              {
                elementType: 'labels.text.stroke',
                stylers: [{
                  color: '#242f3e'
                }]
              },
              {
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#746855'
                }]
              },
              {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#d59563'
                }]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#d59563'
                }]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{
                  color: '#263c3f'
                }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#6b9a76'
                }]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{
                  color: '#38414e'
                }]
              },
              {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{
                  color: '#212a37'
                }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#9ca5b3'
                }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{
                  color: '#746855'
                }]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{
                  color: '#1f2835'
                }]
              },
              {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#f3d19c'
                }]
              },
              {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{
                  color: '#2f3948'
                }]
              },
              {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#d59563'
                }]
              },
              {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{
                  color: '#17263c'
                }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{
                  color: '#515c6d'
                }]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{
                  color: '#17263c'
                }]
    }
],
            center: new google.maps.LatLng(latitude, longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    
        var infowindow = new google.maps.InfoWindow();
    
        var marker, i;
    
        for (i = 0; i < locations.length; i++) {  
      
            marker = new google.maps.Marker({ 
                position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
                map: map,
                icon: 'images/Contact/cd-icon-location.png'
            });
        
          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
        
    });

})(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





    