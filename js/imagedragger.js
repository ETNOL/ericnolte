

	var canvas = $('#dragCanvas')[0];
	var ctx = canvas.getContext("2d");
	var img = $('#draggablePic')[0];
	var x = 10;
	var y = 10;
	var picX = 50;
	var picY = 50;
	var timeout;
	ctx.drawImage(img, x, y, 100, 100);


	function onPicture(event) {
		console.log(event.offsetX + " " + picX);
		if (event.offsetX < picX + 100 ){
			return true;
		}
	};

	$("#dragCanvas").mousedown(event, function(event) {
			console.log("mouseDown");
			if ( onPicture(event) ) {
				timeout = setInterval(	function(){
					picX = x + 50;
					picY = y + 50;
		    	ctx.clearRect(0, 0, canvas.width, canvas.height);
			 		ctx.drawImage(img, x, y, 100, 100);
				}, 20);
			};
	    return false;
		});

	$( document ).mousemove(event, function(event) {
	 		x = event.offsetX -50;
			y = event.offsetY - 50;
			return false;
	 });

	$( document ).mouseup(function() {
		clearInterval(timeout);
		console.log("mouseUp");
    return false;
	})



