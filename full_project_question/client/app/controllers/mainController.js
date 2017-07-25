angular.module('app')
  .controller('mainController', ['$scope', '$location', 'AuthService', 'UserService',
  	function($scope, $location, auth, userService) {

  		if(auth.isAuthed()){
  //*TE SPECIFIKOHET LOKACIONI
  //*
  			return $location.path('/dashboard');
  		}

  		$scope.login = function(user){
  			userService.login(user)
  			 .then(function(response){
            console.log(response);
//*TE SPECIFIKOHET LOKACIONI
//*
  			 	$location.path('/dashboard');
  			 })
  			 .catch(console.log);
  		};

}])