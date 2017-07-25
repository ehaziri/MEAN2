angular.module('app')
 .factory('userFactory', function() {

 	var factory = {};

 	var users = [
 		// {
 		// 	firstname: "Xona",
 		// 	lastname: 'H',
 		// 	language: 'JavaScript'
 		// }

 	]
 	// factory.getUsers = function(callback){
 	// 	callback(users)
 	// }

 	factory.index = function(callback){
 		callback(users);
 	}
 	factory.create = function(user){
 		users.push(user);
 	}
 	factory.delete = function(index){
 		users.splice(index, 1);
 	}
 	return factory;
 });