angular.module('app')
  .controller('pollController', 
  	['$scope', '$location', '$routeParams', 'AuthService', 'pollFactory',
  		function($scope, $location, $routeParams, auth, pollFactory){
        $scope.isAuthed = auth.isAuthed();
        $scope.currentUsername = auth.currentUsername();
        if(!auth.isAuthed()){
          return $location.path('/')
        }



        $scope.getPoll = function(){
          pollFactory.getPoll($routeParams.id, function(poll){
          $scope.poll = poll;
          // console.log('ne getPoll', poll);
          });
        }

        $scope.createPoll = function(){
            $scope.poll._user = auth.currentUserId();
            pollFactory.createPoll($scope.poll, function(errors){
              if(errors){
                console.log('Errorat ne create', errors)
                return $scope.errors = errors;
              }
              $scope.poll = {};
              $location.path('/');
          })
        }

        $scope.vote = function(poll, voteOption){
          console.log('ne cont1 te vote', poll);
          pollFactory.vote(poll, voteOption, function(){
            console.log('ne cont2 te vote', poll);
            $location.path('/poll/'+ poll._id);
          })
        }

      }
   ]
);