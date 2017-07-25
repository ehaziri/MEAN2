angular.module('app')
 .factory('teamFactory', function() {
 	var factory = {};

 	var teams = [
 		{
 			name: "Barcelona"
 		}
 	];

 	factory.index = function(callback){
 		callback(teams);
 	}

 	factory.create = function(team){
 		teams.push(team);
 	}

 	factory.delete = function(index){
 		teams.splice(index, 1);
 	}
 	return factory;
 })