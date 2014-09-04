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

	app.directive("keypad", function() {
		return {
			restrict:"E",
			templateUrl:"../projects/keypad.html"
		}
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

	app.directive("ericular", function() {
		return {
			restrict:"E",
			templateUrl:"../projects/ericular.html"
		}
	})

	app.directive("testPage", function() {
		return {
			restrict:"E",
			templateUrl:"../projects/test.html"
		}
	})

	app.directive("imageFlip", function() {
		return {
			restrict:"E",
			templateUrl:"../projects/imageflip.html"
		}
	})

	app.directive("apiDemo", function(){
		return {
			restrict:"E",
			templateUrl:"../projects/APIdemo.html"
		};
	});

	app.directive("btfScripts", function() {
		return {
			restrict:"E",
			templateUrl:"../layouts/btfScripts.html"
		};
	});

	app.directive("myChart", function() {
		return {
			restrict:"E",
			templateUrl:"../projects/myChart.html"
		};
	});

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

		this.setEricular = function() {
			this.fade = "no-fade";
			this.main = "ericular";
			this.sidemenu = "sideMenuClose";
		}

		this.ericular = function() {
			return this.main === "ericular";
		}

		this.setTestPage = function() {
			this.fade = "no-fade";
			this.main = "testpage";
			this.sidemenu = "sideMenuClose";
		}

		this.testPage = function() {
			return this.main === "testpage";
		}

		this.setImageFlip = function() {
				this.fade = "no-fade";
				this.main = "imageflip";
				this.sidemenu = "sideMenuClose";
			}

		this.imageFlip = function() {
			return this.main === "imageflip";
		}

		this.setAPIDemo = function() {
				this.fade = "no-fade";
				this.main = "apidemo";
				this.sidemenu = "sideMenuClose";
			}

		this.apiDemo = function() {
			return this.main === "apidemo";
		}

		this.setMyChart = function() {
			this.fade = "no-fade";
			this.main = "myChart";
			this.sidemenu = "sideMenuClose";
			loadChart();
		}

		this.myChart = function() {
			return this.main === "myChart";
		}
		});


	app.controller("EricularController", function(){

		this.form = "Live preview!";
		this.text = "Content before click...";
		this.password ="The password is...";
		this.option = false;
		this.changeText = function(){
			this.text = "Content after click!";
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

