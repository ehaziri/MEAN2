angular.module('app')
 .factory('playerFactory', function() {
 	var factory = {};

 	var players = [
 		{
 			name: "Xona"
 		}
 	]

 	factory.index = function(callback){
 		callback(players);
 	}

 	factory.create = function(player){
 		players.push(player);
 	}

 	factory.delete = function(index){
 		players.splice(index, 1);
 	}

 	factory.addPlayerToTeam = function(data){
 		players[data.playerIdx].team = data.team;
 	}
 	factory.removePlayerFromTeam = function(index){
 		players[index].team = "";
 	}
 	return factory;
 }
) 	
