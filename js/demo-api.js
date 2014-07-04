var counter = 0;
var GET_bandNames= "http://rocky-refuge-9609.herokuapp.com/band_names";
var POST_bandName = "";
var APIfail = function() {
	$('#apiResult').text("Woops! Something went wrong!  Try to reloading the page.")
};
var band_names = $.getJSON( GET_bandNames ).done(
		function( json ) {
		band_names = json;
		setBandName(counter, json);
		setInterval(function() {setBandName(counter, band_names)}, 2000);
  	console.log("API request successful");
  	}).fail(APIfail());



function counterAdvance(array) {
	if (array.length -1 > counter) {counter++}
	else { counter = 0}
}

var setBandName = function (arrayCell, json) {
		this.arrayCell = arrayCell;
		this.json = json;
		$('#apiResult').fadeOut('slow', function() {
			$( '#apiResult' ).html( "Band name: "+ json[arrayCell].name +
				"<br> Submitted by: " + json[arrayCell].submitter );
				$('#apiResult').fadeIn('slow');
			 });
		counterAdvance(json);
}




var submitNewName = function () {
	var newName = $("#bandName").val();
	var newSubmitter = $('#submitter').val();
	$.ajax({
		type:"POST",
		url:POST_bandName,
		data: { name:newName, submitter:newSubmitter }
	}).done(function () {
		$("#bandNameForm").hide();
	});
};


