angular.module('app')
 .controller('UsersListController', 
 	['$scope', 'userFactory', 
 	  function($scope, userFactory) {
  		// function setUsers(){
 	  // 		userFactory.getUsers(function(data){
 	  // 			$scope.users = data;
 	  // 		})
 	  // 	}
 	  // 	setUsers();

 	  
 	  function setUsers(data){
 	  	$scope.users = data;
 	  }

 	 userFactory.index(setUsers);

      }
    ]
 );