(function(){

	var app = angular.module("ericularApp", []);

	app.controller("EricularController", function(){

		this.form = "Type here to change the right paragraph!";
		this.text = "Click to change!";
		this.password ="The password is...";
		this.option = false;
		this.changeText = function(){
			this.text = "You triggered a callback!";
			console.log("Form clear callback has been called");
		};

		this.togglePassword = function() {
			if (this.password === "The password is...") {
				this.password ="Angular.js!";
			}
			else {
				this.password = "The password is...";
			}
		};

		this.toggleOption = function() {
			this.option = true;
		}

	});

	app.directive("navBar", function(){
		return {
			restrict:"E",
			templateUrl:"nav-bar.html"
		};
	});

	app.directive("customDirective", function() {
		return {
			restrict:"E",
			templateUrl:"custom-directive.html"
		};
	});

	app.directive("footer", function() {
		return {
			restrict:"E",
			templateUrl:"footer.html"
		};
	});

	app.directive("indexMain", function() {
		return {
			restrict:"E",
			templateUrl:"indexMain.html"
		};
	});

		app.directive("projectsMain", function() {
		return {
			restrict:"E",
			templateUrl:"projectsMain.html"
		};
	});

})();

