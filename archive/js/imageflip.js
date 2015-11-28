
var flipButton = $("#flipButton");
var effectReady = true;
// Transform will not apply using animate normally.
// This does a kinda hacky piggyback animation step on top of animating 'placeholder' //
// placeholder only provides the 'now' and 'fx' parameters for the step function //
// RotateX is applied over 'speed' ms for 'degs' amount //
function flip(photo, speed, degs)  {

	$(photo).animate({ placeholder: degs || 360 }, {
		start:function() {
            flipButton.fadeTo("fast", 0.5);
		},
    step: function(now, fx) {
        $(this).css('transform',"rotateX(" + now + "deg)");
        $(this).css('-ms-transform',"rotateX(" + now + "deg)");
        $(this).css('-webkit-transform',"rotateX(" + now + "deg)");

    },
    duration:speed || 1500,
    complete: function() {
        $(this).css('placeholder', "0");
        $(this).css('transform', "rotateX(0deg)");
        $(this).css('-ms-transform', "rotateX(0deg)");
        $(this).css('-webkit-transform', "rotateX(0deg)");
    	flipButton.fadeTo("fast", 1);
    	effectReady = !effectReady;
    }
},'1000');
}


// Click event handler assigned to flip button.  Has a effect ready check to prevent queues from stacking up. //
flipButton.click(function() {
	if ( effectReady === true) {
		effectReady = !effectReady;
		var speed = parseInt($("#speed").val());
        var degs = parseInt($("#degs").val());
		var photo = $("#ericGarretPic");
		flip(photo, speed, degs);
	}
});
