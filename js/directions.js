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
    {location:'mobile, al', stopover:true},
    {location:'new orleans, la', stopover:true},
    {location:'nuevo laredo, mexico', stopover:true},
    {location:'denver, co', stopover:true},
    {location:'grand teton national park, wy', stopover:true},
    {location:'lewis and clark country, wa', stopover:true},
    {location:'portland, or', stopover:true},
    {location:'newport, or', stopover:true},
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
