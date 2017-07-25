angular.module('app')
  .controller('beltController', 
  	['$scope', '$location', '$routeParams', 'beltFactory', 'AuthService',
  		function($scope, $location, $routeParams, beltFactory, auth){
        $scope.isAuthed = auth.isAuthed();

  			$scope.index = function(){
  				beltFactory.getBelts(function(belts){
  					$scope.belts = belts;
  				});
  			};

  			$scope.createBelt = function(){
  				beltFactory.createBelt($scope.belt, function(){
  					$location.path('/belts');
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