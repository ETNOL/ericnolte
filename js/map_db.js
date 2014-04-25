var mapOptions = {
  center: new google.maps.LatLng(39.00, -100.00),
  zoom: 4,
};
var PlaceRef = new Firebase('https://amber-fire-3032.firebaseIO.com/');
var Submit = $('#placeForm');
var Confirmation = $('#confirmation');
var map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
PlaceRef.on('value', function(snapshot) {
  locDB = snapshot.val();

  for (key in locDB) {
    var location = locDB[key].location;
    var name = location.name;
    var lat = location.geometry.location.k;
    var long = location.geometry.location.A;
    var comments = locDB[key].comments;
    var submitter = locDB[key].submitter;
    setMarker(lat, long, name, comments, submitter );
  };
});



//google.maps.event.addDomListener(window, 'load', initialize);


$(Submit).submit(function( event ) {
	var Location = $('#searchTextField').val();
	var Submitter = $('#submitter').val();
  var Comments = $('#commentsField').val();
  var place = autocomplete.getPlace();

	var Submission  = PlaceRef.push({
                      location: place,
                      submitter:Submitter,
                      comments:Comments });
	Submit.hide();
	Confirmation.text('Thank you for your submission!');
	event.preventDefault();
	setMarker(place.geometry.location.k, place.geometry.location.A, place.name, Comments, Submitter);
});

var setMarker = function(lat, long, name, comment, submitter) {

  var contentString = '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading"><h3>' + name + '</h3>' +
  '<div id="bodyContent">'+
  '<p>' + comment + '</p>'+
  '<p>Submitted by:' + submitter + '</p>'+
  '</div>'+
  '</div>';

  var myLatlng = new google.maps.LatLng(lat, long);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: name,
    animation: google.maps.Animation.DROP
  });

  var infoWindow = new google.maps.InfoWindow({content: contentString});

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  marker.setMap(map);
};



