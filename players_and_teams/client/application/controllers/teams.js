angular.module('app')
 .controller('TeamsController', 
 	['$scope', 'teamFactory', 
 	  function($scope, teamFactory) {
 	
	 	$scope.teams = [];

	 	function setTeams(data){
	 		$scope.teams = data;
	 	};

	    teamFactory.index(setTeams);

	 	$scope.create = function(team){
	 	teamFactory.create(team);
	 		$scope.team = {};
	 	};
	 	$scope.delete = function(index){
	 	teamFactory.delete(index);
	 	};


 }])