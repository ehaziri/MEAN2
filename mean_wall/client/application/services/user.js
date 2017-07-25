angular.module('app')
 .service('UserService', ['$http', function($http) {
 	this.login = function(user){
 		return $http.post('/auth/login', user);
 	};

 	// this.register = function(user){
 	// 	return $http.post('/auth/register', user);
 	// };
 }]);