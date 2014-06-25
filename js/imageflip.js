
var flipButton = $("#flipButton");
var effectReady = true;

function flip(photo, speed)  {

	$(photo).animate({ textIndent: 360 }, {
		start:function() {
			flipButton.fadeTo("fast", 0.5);
		},
    step: function(now,fx) {
    		$(this).css('opacity', now/360)
        $(this).css('-webkit-transform',"rotateX(" + now + "deg)");
    },
    duration:speed || 2000,
    complete: function() {
    	$(this).css('-webkit-transform', "rotateX(0deg)");
    	$(this).css('textIndent', "0");
    	flipButton.fadeTo("fast", 1);
    	effectReady = !effectReady;
    }
},'1000');
}



flipButton.click(function() {
	if ( effectReady === true) {
		effectReady = !effectReady;
		var speed = parseInt($("#speed").val());
		var photo = $("#ericGarretPic");
		flip(photo, speed);
	}
});
