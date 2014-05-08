var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var start = 'howey-in-the-hills, fl';
  var end = 'san francisco, ca';
  var waypts = [
    {location:'mobile, al', stopover:false },
    {location:'new orleans, la', stopover:false},
    {location:'nuevo laredo, mexico', stopover:false},
    {location:'denver, co', stopover:false},
    {location:'grand teton national park, wy', stopover:false},
    {location:'lewis and clark country, wa', stopover:false},
    {location:'portland, or', stopover:false},
    {location:'newport, or', stopover:false},
  ];
  var request = {
    waypoints: waypts,
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING,
    avoidHighways:true
  };

  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    }
  });
}

initialize();
calcRoute();
