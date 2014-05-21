(function(){

	var app = angular.module("ericularApp", []);

	var form;

	app.controller("EricularController", function(){

		this.form = "Type here to change the bottom paragraph!";

		this.clearForm = function(){
			this.form = "";
			console.log("Form clear callback has been called");
		};

		this.toggleForm = function() {
			if (this.form === "") {
				this.form ="Here's some free content!";
			}
			else {
				this.form = "";
			}
		};

		this.formEmpty = function() {
			return this.form.length === 0;
		}

	});
})();
