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
			templateUrl:"../layouts/nav-bar.html"
		};
	});

	app.directive("customDirective", function() {
		return {
			restrict:"E",
			templateUrl:"../custom-directive.html"
		};
	});

	app.directive("footer", function() {
		return {
			restrict:"E",
			templateUrl:"../layouts/footer.html"
		};
	});

	app.controller("BodyController", function() {
		this.main = "index";

		this.setIndex = function() {
			this.main = "index";
		}
		this.setProjects = function() {
			this.main = "projects";
		}
		this.index = function() {
			return this.main === "index";
		}
		this.projects = function() {
			return this.main === "projects";
		}
	});

	app.directive("indexMain", function() {
		return {
			restrict:"E",
			templateUrl:"../indexMain.html"
		};
	});

		app.directive("projectsMain", function() {
		return {
			restrict:"E",
			templateUrl:"../projectsMain.html"
		};
	});

})();

