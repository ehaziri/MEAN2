angular.module('app')
  .controller('mainController', ['$scope', '$location', 'AuthService', 'UserService',
  	function($scope, $location, auth, userService) {

      console.log()

  		if(auth.isAuthed()){
  //*TE SPECIFIKOHET LOKACIONI
  //*
  			// return $location.path('/ninjas');
  		}

  		$scope.login = function(user){
  			userService.login(user)
  			 .then(function(response){
            console.log(response);
//*TE SPECIFIKOHET LOKACIONI
//*
  			 	// $location.path('/ninjas');
  			 })
  			 .catch(console.log);
  		};

  		$scope.register = function(user){
  			userService.register(user)
  			 .then(function(response){
          console.log(response);
//*TE SPECIFIKOHET LOKACIONI
//*
  			 	// $location.path('/ninjas');
  			 })
  			 .catch(console.log);
  		};
  	}])