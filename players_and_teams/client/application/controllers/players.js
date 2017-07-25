angular.module('app')
 .controller('PlayersController', 
 	['$scope', 'playerFactory', 
 	  function($scope, playerFactory) {
 	
	 	$scope.players = [];

	 	function setPlayers(data){
	 		$scope.players = data;
	 	}

	 	playerFactory.index(setPlayers);

	 	$scope.create = function(player){
	 		playerFactory.create(player);
	 		$scope.player = {};
	 	}
	 	$scope.delete = function(index){
	 		playerFactory.delete(index);
	 	}
 }])