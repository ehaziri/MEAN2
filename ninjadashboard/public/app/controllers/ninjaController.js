angular.module('app')
  .controller('ninjaController', 
  	['$scope', '$location', '$routeParams', 'ninjaFactory', 'AuthService', 'beltFactory',
  		function($scope,$location, $routeParams, ninjaFactory, auth, beltFactory){
        $scope.isAuthed = auth.isAuthed();
        if(!auth.isAuthed()){
          return $location.path('/')
        }

        $scope.ninjas = [];
        $scope.ninja = {};
  			$scope.getNinjas = function(){
  				ninjaFactory.getNinjas(function(ninjas){
            console.log('Data in controller', ninjas)
  					$scope.ninjas = ninjas;
  				});
  			};

        $scope.createNinja = function(){
          $scope.ninja._user = auth.currentUserId();
          ninjaFactory.createNinja($scope.ninja, function(errors){
            if(errors){
              return $scope.errors = errors;
            }
            $scope.ninja = {};
            $location.path('/ninjas');
          })
        };

        $scope.getNinja = function(){
          ninjaFactory.getNinja($routeParams.id, function(ninja){
            $scope.ninja = ninja;
          });
        };

        $scope.updateNinja = function(ninja){
          ninjaFactory.updateNinja(ninja, function(){
            // $location.path('/ninjas/' + ninja._id);
             $location.path('/ninjas');
          })
        };

        $scope.deleteNinja = function(id){
          ninjaFactory.deleteNinja(id, function(){
            alert("Deleted Ninja");
             $location.path('/ninjas');
          })
        };

        beltFactory.getBelts(belts => {
          $scope.belts = belts
        });

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
  )