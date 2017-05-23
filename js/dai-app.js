$(function () {




});



$(function(){
  //originHash = window.location.hash;
  //fetch_code('/da/DogOutput/DjangoMango/mysite/storeToDataBase.py');

    
        var videoDom = $('#videoBox > span');
        var map;
        var polyLines = [];
        function initialize() {

          // Create an array of styles.
          var styles = 
          [
              {
                  "featureType": "water",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#d3d3d3"
                      }
                  ]
              },
              {
                  "featureType": "transit",
                  "stylers": [
                      {
                          "color": "#808080"
                      },
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#b3b3b3"
                      }
                  ]
              },
              {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ffffff"
                      },
                      {
                          "weight": 1.8
                      }
                  ]
              },
              {
                  "featureType": "road.local",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#d7d7d7"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#ebebeb"
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "elementType": "geometry",
                  "stylers": [
                      {
                          "color": "#a7a7a7"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#ffffff"
                      }
                  ]
              },
              {
                  "featureType": "landscape",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#efefef"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "color": "#696969"
                      }
                  ]
              },
              {
                  "featureType": "administrative",
                  "elementType": "labels.text.fill",
                  "stylers": [
                      {
                          "visibility": "on"
                      },
                      {
                          "color": "#737373"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "poi",
                  "elementType": "labels",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {
                  "featureType": "road.arterial",
                  "elementType": "geometry.stroke",
                  "stylers": [
                      {
                          "color": "#d6d6d6"
                      }
                  ]
              },
              {
                  "featureType": "road",
                  "elementType": "labels.icon",
                  "stylers": [
                      {
                          "visibility": "off"
                      }
                  ]
              },
              {},
              {
                  "featureType": "poi",
                  "elementType": "geometry.fill",
                  "stylers": [
                      {
                          "color": "#dadada"
                      }
                  ]
              }
          ];
          // Create a new StyledMapType object, passing it the array of styles,
          // as well as the name to be displayed on the map type control.
          var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});

          // Create a map object, and include the MapTypeId to add
          // to the map type control.
          var mapOptions = {
            zoom: 17,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            center: new google.maps.LatLng(24.7899711, 120.9967021),
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
          };
          map = new google.maps.Map(document.getElementById('Location-map'),
            mapOptions);

          //Associate the styled map with the MapTypeId and set it to display.
          map.mapTypes.set('map_style', styledMap);
          map.setMapTypeId('map_style');
        }

        initialize();

        var lineSymbol = {
          path: 'M 0,-1 0,1',
          strokeOpacity: 1,
          scale: 4
        };

        var monitorCoordinates1 = [
            {lat:24.789686160586442, lng:120.9966042183876},
            {lat:24.789798175790296, lng:120.9968796710968},
            {lat:24.789821309352384, lng:120.99669348955154},
            {lat:24.789686160586442, lng:120.9966042183876},
        ];
        console.log(monitorCoordinates1);
        var monitorArea1 = new google.maps.Polyline({
            path: monitorCoordinates1,
            geodesic: true,
            strokeColor: '#000000',
            icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '20px'
            }],
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
/*
        var monitorVertex1_1 = new google.maps.Marker({
            position: monitorCoordinates1[0],
            map: map,
            icon: {
              url: "image/flag1.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex1_2 = new google.maps.Marker({
            position: monitorCoordinates1[1],
            map: map,
            //icon: {
            //  url: "image/flag1.png",
            //  scaledSize: new google.maps.Size(32, 32)
            //}
        });
        var monitorVertex1_3 = new google.maps.Marker({
            position: monitorCoordinates1[2],
            //icon: {
            //  url: "image/flag1.png",
            //  scaledSize: new google.maps.Size(32, 32)
            //},
            map: map
        });
        */
        monitorArea1.setMap(map);


        var monitorCoordinates2 = [
            {lat:24.789596160586442, lng:120.9969042183876},
            {lat:24.789708175790296, lng:120.9971796710968},
            {lat:24.789731309352384, lng:120.99699348955154},
            {lat:24.789596160586442, lng:120.9969042183876}
        ];
        var monitorArea2 = new google.maps.Polyline({
            path: monitorCoordinates2,
            geodesic: true,
            strokeColor: '#000000',
            icons: [{
              icon: lineSymbol,
              offset: '0',
              repeat: '20px'
            }],
            strokeOpacity: 1.0,
            strokeWeight: 2
        });

       /* var monitorVertex2_1 = new google.maps.Marker({
            position: monitorCoordinates2[0],
            map: map,
            icon: {
              //url: "image/flag2.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex2_2 = new google.maps.Marker({
            position: monitorCoordinates2[1],
            map: map,
            icon: {
             // url: "image/flag2.png",
              scaledSize: new google.maps.Size(32, 32)
            }
        });
        var monitorVertex2_3 = new google.maps.Marker({
            position: monitorCoordinates2[2],
            icon: {
             // url: "image/flag2.png",
              scaledSize: new google.maps.Size(32, 32)
            },
            map: map
        });*/

        monitorArea2.setMap(map);

        var receiveTime;
        var id;
        var lat;
        var lng;
        var description;
        var LastLatLng = generate_latLng(24,121);;
        var ThisLastLng;
        
        function rad(x){
            return x*Math.PI/180;
        }
        
        function getDistance(p1, p2) {
            var Earth_R = 6378137; // Earth’s mean radius in meter
            var dLat = rad(p2.lat() - p1.lat());
            var dLong = rad(p2.lng() - p1.lng());
            var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
                    Math.sin(dLong / 2) * Math.sin(dLong / 2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            var d = Earth_R * c;
            return d; // returns the distance in meter
        }
        function generate_latLng(lat,lng)
        {
            var temp = new google.maps.LatLng(lat , lng);
            return temp;
        }
        var posDom = $('#PosSec > span');
        var idDom = $('#IDSec > span');
        var timeDom = $('#TimeSec > span');

        var posDom2 = $('#PosSec2 > span');
        var freqDom = $('#FreqSec > span');

        function IDGeoLoTime_O  (data){

           console.log(data[0]);
           id = data[0].TrackerID;
           lat = parseFloat(data[0].N);
           lng = parseFloat(data[0].E);
           ThisLastLng = generate_latLng(lat,lng);
           receiveTime = data[0].Time;
           var latandlng = "(" + lat + "," + lng + ")";
           if(id == "2")
           {
              posDom2.text(latandlng);
              freqDom.text(receiveTime);
           }
           else
           {
              posDom.text(latandlng);
              idDom.text(id);
              timeDom.text(receiveTime); 
           }
           description = id + ': ' + receiveTime;
           if(id == "0" || id == "2" && getDistance(LastLatLng,ThisLastLng) > 1)
           {
               addMarker(lat, lng, id);
               LastLatLng = generate_latLng(lat,lng);
           }
        }
        

        var polyCoordinates = [];
        var lineColor;
        var linR, linG, linB;
        
        function removeLine() {
          for(var i = 0; i < polyLines.length; i++){
            polyLines[i].setMap(null);
          }
        }
        function addPolyLine(counterID, markerArr, r, g, b){            
            var max = markerArr.length - 1;
            console.log("Max: ", max);
            console.log("CounterID: ", counterID);
            for(var i = 0; i < max; i++){ // Draw 9 lines Max
              console.log("CounterID: ", counterID);

              polyCoordinates = [];
              polyCoordinates.push(markerArr[counterID%10].position);
              counterID--;
              if(counterID == -1)
                counterID = 9;

              polyCoordinates.push(markerArr[counterID%10].position);              
              
              lineColor = "#" + rgbToHex(r,g,b).toString();
              var markersLine = new google.maps.Polyline({
                  path: polyCoordinates,
                  strokeColor: lineColor,
                  strokeOpacity: 1,
                  strokeWeight: 2
                });
              polyLines.push(markersLine);
              
              if(polyLines.length > 10)
              {
                  var temp = [];
                  for(var j=1;j<polyLines.length;j++)
                  {
                      temp.push(polyLines[j]);
                  }
                  polyLines[0].setMap(null);
                  polyLines = temp;
                  polyLines[polyLines.length-1].setMap(map);
                  continue;
              }

              polyLines[polyLines.length-1].setMap(map);
              break;              
            }
        }

        

        function setMapOnAll(map, markerArr, notClearID) {
          for (var i = 0; i < markerArr.length; i++) {
            if(i == notClearID);
            else markerArr[i].setMap(map);
          }
        }

        function clearMarkers(markerArr, notClearID) {
          setMapOnAll(null, markerArr, notClearID);
        }

        var markersID1 = [];
        var markersID2 = [];
        //var counterID1 = 0;
        //var counterID2 = 0;
        var counterIDs = [0, 0]
        function addMarker(lat, lng, id)
        { 
            if(id == "0")
              changepinImage(89,193,84);
            else if (id == "2")
              changepinImage(39,99,157);

            var infowindow = new google.maps.InfoWindow({
              content: description
            });
            var marker = new google.maps.Marker({
                position:{ lat: lat, lng: lng },
                map: map, 
                fillOpacity: 0.4,
                icon: pinImage
                });
            
            marker.addListener('click', function() {
                               infowindow.open(map, marker);
                               });
            //infowindow.open(map,marker);
            if(id == "0")
              markerMotion(markersID1, 0, marker, lat, lng, 89, 193, 84);
            else if (id == "2")
              markerMotion(markersID2, 1, marker, lat, lng, 39, 99, 157);
        }
        

        function markerMotion(markersID, counterID, marker, lat, lng, r, g, b)
        {
          clearMarkers(markersID, counterIDs[counterID]%10);
          counterIDs[counterID] = counterIDs[counterID] % 10;
          markersID[counterIDs[counterID]] = marker;
          addPolyLine(counterIDs[counterID], markersID, r, g, b);
          counterIDs[counterID]++;
          console.log(markersID[counterIDs[counterID]-1].position.lat());
          console.log(lat);
          displayVideo(lat, lng);

        }

        function displayVideo(lat, lng)
        {
            var markerPos = new google.maps.LatLng({ lat: lat, lng: lng });
            var isWithinMonitor1 = google.maps.geometry.poly.containsLocation(markerPos, monitorArea1);
            var isWithinMonitor2 = google.maps.geometry.poly.containsLocation(markerPos, monitorArea2);
            monitorDisplay(isWithinMonitor1, isWithinMonitor2);
        }

        var previousMarker;
        var currentMarker;
        var firstCurrent = true;
        var infowindowAlert;
        var contentString;

        function monitorDisplay(inMonitorArea1, inMonitorArea2)
        {
            if(inMonitorArea1 || inMonitorArea2)
            {

              var monitorPosition;

              if(inMonitorArea1)
              {
                monitorPosition = monitorCoordinates1[1];
                monitorArea1.setOptions({strokeColor:'#FF0000'});
                $('#Video-Display').attr('src','http://admin:5131339@140.113.124.221/video1.mjpg');
                //alert('123');http://140.113.124.221/video1.mjpg
                //monitorArea1.setMap(map);http://www.youtube.com/embed/W5FRUM-AK9k
              }
              else
              {
                monitorPosition = monitorCoordinates2[1];
                monitorArea2.setOptions({strokeColor:'#FF0000'});
                $('#Video-Display').attr('src','http://admin:5131339@140.113.124.220/GetData.cgi?CH=1');
                //alert('456');https://www.youtube.com/embed/jYvVG8D837A
                //monitorArea2.setMap(map);
              }

              changepinImage(177,26,26);
              var markerAlert = new google.maps.Marker({
                  position: monitorPosition,
                  map: map, 
                  fillOpacity: 0.4,
                  icon: pinImage
                  });
              markerAlert.setVisible(false);
              
              contentString = '<div style="padding-left:10px;color: #000000;background: #000000;border-radius:10px 10px 5px 5px;">' +
              '<iframe width="500" height="275" src="https://www.youtube.com/embed/jYvVG8D837A" frameborder="0" allowfullscreen></iframe>'
              + '</div>';
              infowindowAlert = new google.maps.InfoWindow({
                    content: contentString
                });

              if(firstCurrent)
              {
                firstCurrent = false;
                currentMarker = markerAlert;
                if(currentOpen)
                {
                  if(infowindowAlert)
                    infowindowAlert.close();
                  $(videoDom).html('');
                  $(videoDom).append(contentString);
                  infowindowAlert.open(map, currentMarker)
                }
              }
              else
              {
                console.log("tttttttttt")
                
                if(currentOpen)
                {
                 if(infowindowAlert)
                    infowindowAlert.close();
                  previousMarker = currentMarker;
                  console.log(currentMarker);
                  console.log(previousMarker);
                  currentMarker = markerAlert;
                  $(videoDom).html('');
                  $(videoDom).append(contentString);
                  //infowindowAlert.open(map, currentMarker);
                }
                else if(previousOpen)
                {
                  if(infowindowAlert)
                    infowindowAlert.close();
                  previousMarker = currentMarker;
                  console.log(currentMarker);
                  console.log(previousMarker);
                  currentMarker = markerAlert;
                  $(videoDom).html('');
                  $(videoDom).append(contentString);
                  //infowindowAlert.open(map, previousMarker);
                }
              }
            }
            else
            {
                monitorArea1.setOptions({strokeColor:'#000000'});
                monitorArea2.setOptions({strokeColor:'#000000'}); 
                $('#Video-Display').attr('src','');
                //infowindowAlert.close(map, markerAlert);
            }
        }

        function rgbToHex(r, g, b) {
            return componentToHex(r) + componentToHex(g) + componentToHex(b);
        }

        function componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        }

        function changepinImage(r,g,b)
        {
            //console.log('hi');
            //pinR = Math.floor((Math.random() * 255) + 1);
            //pinG = Math.floor((Math.random() * 255) + 1);
            //pinB = Math.floor((Math.random() * 255) + 1);
            pinColor = rgbToHex(r,g,b).toString();
            //console.log(pinColor);
            pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
            new google.maps.Size(21, 34),
            new google.maps.Point(0,0),
            new google.maps.Point(10, 34));
            //console.log(pinImage);
        }

        var currentOpen = false;
        var previousOpen = false;
        //var trackInfoWindow = [];

        $('.showVideo li').on('click', function()
        {
          $('.showVideo li').removeClass('chosen');
          $(this).addClass('chosen');
          if(this.id == "Previous")
          {
            previousOpen = true;
            currentOpen = false;
            if(infowindowAlert)
              infowindowAlert.close();
            if(previousMarker)
            {
              $(videoDom).html('');
              $(videoDom).append(contentString);
              //infowindowAlert.open(map, previousMarker);
            }
            console.log("------------");
            console.log(previousMarker);
            console.log(currentMarker);
            console.log("------------");

          }
          else if(this.id == "Current")
          {
            previousOpen = false;
            currentOpen = true;
            if(infowindowAlert)
              infowindowAlert.close();
            if(currentMarker)
            {
              $(videoDom).html('');
              $(videoDom).append(contentString);
              //infowindowAlert.open(map, currentMarker);
            }
          }
          else
          {
            previousOpen = false;
            currentOpen = false;
            $(videoDom).html('');
            if(infowindowAlert)
              infowindowAlert.close();
          }
        });



        function iot_app(){

            
        }
        
        var profile = {
            'dm_name': 'OutputMap',
            'df_list': [IDGeoLoTime_O],
        }

        var ida = {
            'iot_app': iot_app,
        }; // How iot device receive data (format)
        dai(profile,ida);
       
        
});





