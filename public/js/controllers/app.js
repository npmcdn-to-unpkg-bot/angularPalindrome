'use strict'

angular.module("palindrome", [])
angular.module("palindrome").controller("palindromeCtrl", function ($scope, $http) {
	$scope.app = "Palindrome";

	$scope.resultado = '';
	
	$scope.testPalindrome = function(todo){		
		$http.post("http://localhost:3412/palindrome", todo)
			.success(function (data) {
				$scope.resultado = "is a palindrome " + data
			})
			.error(function (data, status, headers, config) {
				$scope.resultado = "is not a palindrome " + data
			})
	}
});