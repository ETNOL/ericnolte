var counter = 0;
var bandNamesAPI = "http://rocky-refuge-9609.herokuapp.com/band_names";

var APIfail = function() {
	$('#apiResult').text("Woops! Something went wrong!  Try to reloading the page.")
};

var band_names = $.getJSON( bandNamesAPI ).done(
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
				"<br> Stumbled upon by: " + json[arrayCell].submitter );
				$('#apiResult').fadeIn('slow');
			 });
		counterAdvance(json);
}

$('#band_submit').click(function() {

		if ($("#bandName").val() === "" || $('#stumbler').val() === "" ) {
			return alert("Please fill out all fields!");
		}

    var values = $('#bandNameForm').serialize();
    $.ajax({
        url: bandNamesAPI,
        data: values,
        type:"POST",
        dataType: "JSON"
    }).success(function(json){
    		console.log(json);
        console.log("successful");
        band_names = json;
        counter = json.length - 1;

    });
    return false; // prevents normal behaviour
});
