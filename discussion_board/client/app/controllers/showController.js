angular.module('app')
  .controller('showController', ['$scope', '$location', '$routeParams', 'AuthService', 'UserService',
   'dashboardFactory', 'postFactory',
  	function($scope, $location, $routeParams, auth, userService, dashboardFactory, postFactory) {
      $scope.isAuthed = auth.isAuthed();
      $scope.currentUserId = auth.currentUserId();
      $scope.currentUsername = auth.currentUsername();

      $scope.topics = [];

  		if(!auth.isAuthed()){
          return $location.path('/')
        }

      $scope.getTopic = function(){
        dashboardFactory.getTopic($routeParams.id, function(topic){
          $scope.topic = topic;
        });
      };
      
      $scope.createPost = function(post, userId, topicId){
        postFactory.createPost(post, userId, topicId, function(){
          $scope.post = '';
        });
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

}])