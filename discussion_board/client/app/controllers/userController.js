angular.module('app')
  .controller('userController', ['$scope', '$location', '$routeParams', 'AuthService', 'UserService', 
    'dashboardFactory', 'userFactory',
  	function($scope, $location, $routeParams, auth, userService, dashboardFactory, userFactory) {
      $scope.isAuthed = auth.isAuthed();
      $scope.currentUserId = auth.currentUserId();
      $scope.currentUsername = auth.currentUsername();

      $scope.topics = [];

  		if(!auth.isAuthed()){
          return $location.path('/')
        }

      $scope.getUser = function(){
        userFactory.getUser($routeParams.id, function(user){
          $scope.user = user;
        })
      }
      $scope.logout = function(){
          auth.logout()
           .then(function(response){
            $location.path('/');
           })
           .catch(function(errorResponse){
              console.log("There's an error", errorResponse);
           });
        }

}])