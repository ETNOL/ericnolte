var mapOptions = {
  center: new google.maps.LatLng(39.00, -100.00),
  zoom: 4,
};
var PlaceRef = new Firebase('https://amber-fire-3032.firebaseIO.com/');
var Submit = $('#placeForm');
var Confirmation = $('#confirmation');
var map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
//Populates map at load //
PlaceRef.once('value', function(snapshot) {
  locDB = snapshot.val();

  for (key in locDB) {
    var location = locDB[key].location;
    var name = locDB[key].name;
    var lat = locDB[key].lat;
    var long = locDB[key].long;
    var comments = locDB[key].comments;
    var submitter = locDB[key].submitter;
    setMarker(lat, long, name, comments, submitter );
  };
});
// Callback to retrieve new entries //
PlaceRef.on('child_added', function(snapshot) {
  var child = snapshot.val();
  var location = child.location;
  var name = child.name;
  var lat = child.lat;
  var long = child.long;
  var comments = child.comments;
  var submitter = child.submitter;
    setMarker(lat, long, name, comments, submitter );

});

//google.maps.event.addDomListener(window, 'load', initialize);
var pushSubmission = function(loc, submittter, comments) {

};

$(Submit).submit(function( event ) {
	var Submitter = $('#submitter').val();
  var Comments = $('#commentsField').val();
  var place = autocomplete.getPlace();
	Submit.hide();
	Confirmation.text('Thank you for your submission!');
	event.preventDefault();
  PlaceRef.push({
                      name:place.name,
                      lat:place.geometry.location.k,
                      long:place.geometry.location.A,
                      submitter:Submitter,
                      comments:Comments });
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
    infoWindow.open(map,marker);
  });

  marker.setMap(map);
};



