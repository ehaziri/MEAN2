angular.module('app')
  .controller('messageController', 
  	['$scope', '$location', '$routeParams', 'messageFactory', 'AuthService',
  		function($scope, $location, $routeParams, messageFactory, auth){
        $scope.isAuthed = auth.isAuthed();
        $scope.currentUsername = auth.currentUsername();
        if(!auth.isAuthed()){
          return $location.path('/')
        }

        // function setMessages(data){
        //   $scope.messages = data;
        // }

        // messageFactory.index(setMessages);

  			$scope.index = function(){
  				messageFactory.getMessages(function(messages){
  					$scope.messages = messages;
  				});
  			};

        $scope.getComments = function(){
           messageFactory.getComments(function(comments){
            console.log('3');
            $scope.comments = comments;
          });
        }

  			$scope.create = function(){
          $scope.message._user = auth.currentUserId();
   				messageFactory.createMessage($scope.message, function(errors){
            if(errors){
              console.log('Errorat ne create', errors)
              return $scope.errors = errors;
            }
            $scope.message = {};
  					$location.path('/');
  				});
  			};

        $scope.createComment = function(comment, message){
          comment._user = auth.currentUserId();
          comment._message = message._id;
          messageFactory.createComment(comment, function(){
            console.log('ne cont te comment');
            $scope.comment = {};
            $location.path('/');
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

  		}
  	]
);