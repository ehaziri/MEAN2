angular.module('app')
  .factory('categoryFactory', ['$http', function($http) { 

  	const factory = { categories: [] };

    factory.index = function(callback){

      $http.get('/categories')
        .then(function(response){
          factory.categories = response.data;
          callback(factory.categories);
        })
        .catch(console.log);
    }
   

  	return factory;

  }
 ]
)	