angular.module('app')
 .controller('AssociationsController', 
 	['$scope', 'playerFactory', 'teamFactory',
 	  function($scope, playerFactory, teamFactory) {
 	
	 	// $scope.associations = [
	 	// 	{
	 	// 		name: "Xona",
	 	// 		team: "Gallata"
	 	// 	}
	 	// ]
	 	$scope.players = [];
	 	$scope.teams = [];
	 	function setPlayers(data){
	 		$scope.players = data;
	 	}
	 	function setTeams(data){
	 		$scope.teams = data;
	 	}

	 	playerFactory.index(setPlayers);
	 	teamFactory.index(setTeams);
	 	
	 	$scope.addPlayerToTeam = function(){
	 		playerFactory.addPlayerToTeam($scope.newAssoc);
	 	}
	 	$scope.delete = function(index){
	 		playerFactory.removePlayerFromTeam(index);
	 	}
	 	// $scope.delete = function(index){
	 	// 	playerFactory.delete(index);
	 	// }
 }])