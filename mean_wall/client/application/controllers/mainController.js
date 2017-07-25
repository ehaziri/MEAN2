angular.module('app')
  .controller('mainController', ['$scope', '$location', 'AuthService', 'UserService',
  	function($scope, $location, auth, userService) {

  		if(auth.isAuthed()){
  			return $location.path('/ninjas');
  		}

  		$scope.login = function(user){
  			userService.login(user)
  			 .then(function(response){
  			 	$location.path('/ninjas');
  			 })
  			 .catch(console.log);
  		};

  		// $scope.register = function(user){
  		// 	userService.register(user)
  		// 	 .then(function(response){
  		// 	 	$location.path('/ninjas');
  		// 	 })
  		// 	 .catch(console.log);
  		// };
  	}])