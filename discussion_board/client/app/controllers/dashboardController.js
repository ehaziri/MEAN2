angular.module('app')
  .controller('dashboardController', ['$scope', '$location', 'AuthService', 'UserService', 
    'dashboardFactory', 'categoryFactory',
  	function($scope, $location, auth, userService, dashboardFactory, categoryFactory) {
      $scope.isAuthed = auth.isAuthed();
      $scope.currentUserId = auth.currentUserId();
      $scope.currentUsername = auth.currentUsername();

  		if(!auth.isAuthed()){
          return $location.path('/')
      }

      dashboardFactory.getTopics(function(data){
        $scope.topics = data;
        console.log('topics', $scope.topics)
      });
      
      categoryFactory.index(function(data){
        $scope.categories = data;
      });

      $scope.createTopic = function(topic, userId){
        topic._owener = userId;
        topic.category = topic.category.category;
        dashboardFactory.createTopic(topic, function(){
          $scope.topic = {};
          $location.path('/');
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