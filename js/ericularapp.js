(function(){

	var app = angular.module("ericularApp", []);

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

	app.directive("sideMenu", function() {
			return {
				restrict:"E",
				templateUrl:"../layouts/sidemenu.html"
			}
		});

	app.controller("BodyController", function() {
		var self = this;
		this.main = "index";
		this.sidemenu = "sideMenuClose";

		this.hideMenu = function() {
			if ( self.sidemenu === "sideMenuOpen" ) {
				self.sidemenu = "sideMenuClose";
				console.log("menu closed");
			}
		}

		this.setIndex = function() {
			this.main = "index";
		}
		this.setProjects = function() {
			this.sidemenu = "sideMenuOpen";
			console.log("Menu Open");
		};

		this.index = function() {
			return this.main === "index";
		}
		this.projects = function() {
			this.sidemenu === "sideMenuOpen";
		}

	});


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


})();

