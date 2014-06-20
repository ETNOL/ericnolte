
var $button = "<button></button>";
var $keypad = $("#keypad");


for (i=9;i>0;i--) {
	$keypad.prepend( $button );
	var newButton = $keypad.children().first();
	newButton.text(i);
	newButton.addClass(i.toString());
	if (i % 3 === 1) {
		$keypad.prepend("<br/>");
	};
};


$("button").click(
	function( event ) {
	event.preventDefault();
	var entry = $('#entryField').text();
	var value = $(this).text();
	if (value ==="Enter") {
		validate(entry);
	}
	else {
		if (entry.length < 10 ) {
			$('#entryField').text(entry + value);
		}
	}
});

function validate (entry) {
  if (entry ===	 "12345") {
  	$('#entryField').text("Correct!");
  	for (i=1;i < 10;i++) {
  		$('#entryField').fadeOut('fast');
  		$('#entryField').fadeIn('fast');
  	}
  }
  else {
  	$('#entryField').text("Incorrect!").fadeOut("fast", function() {
  		$('#entryField').text("").show()
  	});
  }
}


