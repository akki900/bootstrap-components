
function initialize() {

       var latlng = new google.maps.LatLng(19.0760,72.8777);
       var latlng2 = new google.maps.LatLng(19.0760,72.8777);
       var latlng3 = new google.maps.LatLng(19.0760,72.8777);
       var latlng4 = new google.maps.LatLng(19.0760,72.8777);
       var latlng5 = new google.maps.LatLng(19.0760,72.8777);

       var stavanger = new google.maps.LatLng(58.983991,5.734863);
       var amsterdam = new google.maps.LatLng(52.395715,4.888916);
       var london = new google.maps.LatLng(51.508742,-0.120850);

       var myOptions = {
           zoom: 14,
           center: latlng,
           mapTypeId: google.maps.MapTypeId.ROADMAP
       };

       var myOptions2 =  {
           zoom: 15,
           center: latlng2,
           mapTypeId: google.maps.MapTypeId.SATELLITE
       };

        var myOptions3 =  {
           zoom: 15,
           center: latlng3,
           mapTypeId: google.maps.MapTypeId.HYBRID
       };

       var myOptions4 =  {
           zoom: 15,
           center: latlng4,
           mapTypeId: google.maps.MapTypeId.TERRAIN
       };
       var myOptions5 ={
           zoom: 15,
           center: latlng5,
           mapTypeId: google.maps.MapTypeId.HYBRID
       }
       var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
       
       var map2 = new google.maps.Map(document.getElementById("map_canvas_2"), myOptions2);

       var map3 = new google.maps.Map(document.getElementById("map_canvas_3"), myOptions3);

       var map4 = new google.maps.Map(document.getElementById("map_canvas_4"), myOptions4);

       /*----- for map 5--*/
       var mapCanvas = document.getElementById("map_canvas_5");
       var mapOptions = {
       center: new google.maps.LatLng(45.434046,12.340284),
       zoom:18,
       mapTypeId:google.maps.MapTypeId.HYBRID
       };
       var map = new google.maps.Map(mapCanvas,mapOptions);
       map.setTilt(100);
       /*----------polyline------------*/
       var mapCanvas = document.getElementById("map_canvas_6");
       var mapOptions = {center: amsterdam, zoom: 4};
       var map = new google.maps.Map(mapCanvas,mapOptions);

       var flightPath = new google.maps.Polyline({
           path: [stavanger, amsterdam, london],
           strokeColor: "#2798F5",
           strokeOpacity: 0.8,
           strokeWeight: 3
       });
       flightPath.setMap(map);
       /*----------polygon-----------*/

     var mapCanvas = document.getElementById("map_canvas_7");
     var mapOptions = {center: amsterdam, zoom: 4};
     var map = new google.maps.Map(mapCanvas,mapOptions);

     var flightPathpolygon = new google.maps.Polygon({
       path: [stavanger, amsterdam, london],
       strokeColor: "#2798F5",
       strokeOpacity: 0.8,
       strokeWeight: 2,
       fillColor: "#6fb8f3",
       fillOpacity: 0.4
     });
     flightPathpolygon.setMap(map);
       /*----------Dark mode--------*/
       var map = new google.maps.Map(document.getElementById('map_canvas_8'), {
             center: {lat: 19.0760, lng: 72.8777},
             zoom: 12,
             styles: [
               {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
               {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
               {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
               {
                 featureType: 'administrative.locality',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#d59563'}]
               },
               {
                 featureType: 'poi',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#d59563'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'geometry',
                 stylers: [{color: '#263c3f'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#6b9a76'}]
               },
               {
                 featureType: 'road',
                 elementType: 'geometry',
                 stylers: [{color: '#38414e'}]
               },
               {
                 featureType: 'road',
                 elementType: 'geometry.stroke',
                 stylers: [{color: '#212a37'}]
               },
               {
                 featureType: 'road',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#9ca5b3'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'geometry',
                 stylers: [{color: '#746855'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'geometry.stroke',
                 stylers: [{color: '#1f2835'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#f3d19c'}]
               },
               {
                 featureType: 'transit',
                 elementType: 'geometry',
                 stylers: [{color: '#2f3948'}]
               },
               {
                 featureType: 'transit.station',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#d59563'}]
               },
               {
                 featureType: 'water',
                 elementType: 'geometry',
                 stylers: [{color: '#17263c'}]
               },
               {
                 featureType: 'water',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#515c6d'}]
               },
               {
                 featureType: 'water',
                 elementType: 'labels.text.stroke',
                 stylers: [{color: '#17263c'}]
               }
             ]
           });
           /*---------------------------------*/

           

   }
      

   /*google.maps.event.addDomListener(window, 'load', initialize);*/