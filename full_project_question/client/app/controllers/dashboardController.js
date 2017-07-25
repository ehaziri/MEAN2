angular.module('app')
  .controller('dashboardController', 
  	['$scope', '$location', '$routeParams', 'AuthService', 'pollFactory',
  		function($scope, $location, $routeParams, auth, pollFactory){
        $scope.isAuthed = auth.isAuthed();
        $scope.currentUsername = auth.currentUsername();
        $scope.currentUserId = auth.currentUserId();
        // console.log($scope.currentUserId);
        if(!auth.isAuthed()){
          return $location.path('/')
        }

        $scope.getPolls = function(){
          pollFactory.getPolls(function(polls){
            $scope.polls = polls;
          });
        };


        $scope.delete = function(id){
          pollFactory.delete(id, function(){
            $location.path('/');
          })
        };


        $scope.logout = function(){
          auth.logout()
           .then(function(response){
            $location.path('/');
           })
           .catch(function(errorResponse){
              console.log("There's an error", errorResponse);
           });
        }

  		}
  	]
);