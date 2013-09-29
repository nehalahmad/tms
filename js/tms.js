var m = angular.module("tms", ["tms-services", "tms-filters", "tms-directives"]);

m.config(function($routeProvider, $httpProvider) {
	$routeProvider
		.when("/login", { templateUrl: "partials/login.html", controller: "loginCtrl" })
		.otherwise({ redirectTo: "/login" });
});

function tmsCtrl($scope, $location, $http, $routeParams) {
	console.log("coming her...");
}

function loginCtrl($scope, $location, $http, $routeParams) {
	console.log("login html");
}
