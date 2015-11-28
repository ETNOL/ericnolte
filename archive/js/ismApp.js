app = angular.module("ismApp", []);
var word = "";
app.directive("ismTitle", function() {
	return {
		restrict:"E",
		templateUrl:"ism/ism-title.html",
		controller:function(){},
		controllerAs:"title"
	};
});

app.directive("dictionaryForm", function() {
	return {
		restrict:"E",
		templateUrl:"ism/dictionary-form.html",
		controller:function(){
			this.author = "";
			this.authorPreview = function(author) {
				if (author === "") {
					return "";
				}
				else {
					return author + "-ism";
				}
			};
			this.wordPreview = function(word, num) {
				if (typeof word === 'undefined') {
					return "";
				}
				else if (word === "") {
					return "";
				}
				else {
					return word + ":";
				}
			};
			this.proPreview = function(word) {
				if (typeof word != "undefined" && word != "") {
					return "(" + word + ")";
				}
			};
		},
		controllerAs:"form"
	};
});

app.directive("dictionaryFormPreview", function() {
	return {
		restrict:"E",
		templateUrl:"ism/dictionary-form-preview.html",
		controller:function(){},
		controllerAs:"preview"
	};
});

app.directive("dictionary", function() {
	return {
		restrict:"E",
		templateUrl:"ism/dictionary.html",
		controller:function(){},
		controllerAs:"dictionary"
	};
});

function StringtoArray(word) {
    var wordArr = [];
    for(letter in word) {
        wordArr.push(word[letter]);
    }
    return wordArr;
}


