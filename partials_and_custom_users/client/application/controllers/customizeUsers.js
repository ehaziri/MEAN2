angular.module('app')
 .controller('CustomizeUsersController', 
 	['$scope', 'userFactory', '$location',
 	  function($scope, userFactory, $location) {
 	  	$scope.users = [];

 	  	// function setUsers(){
 	  	// 	userFactory.getUsers(function(data){
 	  	// 		$scope.users = data;
 	  	// 	})
 	  	// }
 	  	// setUsers();

 	  	function setUsers(data){
 	  		$scope.users = data;
 	  	}

 	  	userFactory.index(setUsers);

  		$scope.create = function(user){
  			userFactory.create(user);
  			$scope.user={};
  			$location.url('/list');
  		}

  		$scope.delete = function(index){
  			userFactory.delete(index);
  		}



      }
    ]
 );