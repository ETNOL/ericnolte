(function(){

	var app = angular.module("ericularApp", []);

	app.directive("navBar", function(){
		return {
			restrict:"E",
			templateUrl:"../layouts/nav-bar.html"
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

	app.directive("sideMenu", function() {
		return {
			restrict:"E",
			templateUrl:"../layouts/sidemenu.html"
		}
	});

	app.directive("googleMap", function() {
		return  {
			restrict:"E",
			templateUrl:"../projects/googlemap.html"
		}
	})

	app.controller("BodyController", function() {
		var self = this;
		this.main = "index";
		this.sidemenu = "sideMenuClose";
		this.fade = "no-fade";
		this.mapLoad = false;

		this.projectsMenu = function() {
			this.sidemenu = "sideMenuOpen";
			this.fade = "fade";
		}

		this.hideMenu = function() {
			if ( self.sidemenu === "sideMenuOpen" ) {
				self.sidemenu = "sideMenuClose";
				this.fade = "no-fade";
			}
		}

		this.setIndex = function() {
			this.main = "index";

		}
		this.index = function() {
			return this.main === "index";
		}

		this.setKeypad = function() {
			this.fade = "no-fade";
			this.main = "keypad";
			this.sidemenu = "sideMenuClose";

		}

		this.keypad = function() {
			return this.main === "keypad";
		}

		this.setGoogleMap = function() {
			this.fade = "no-fade";
			this.main = "googlemap";
			this.sidemenu = "sideMenuClose";
			if (this.mapLoad === false) {
				googleMap();
				this.mapLoad = true;
			};
		}

		this.googleMap = function() {
			return this.main === "googlemap";
		}

	});
})();
