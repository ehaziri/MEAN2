angular.module('app')
  .factory('beltFactory', ['$http', function($http) { 

  	const factory = { belts: [] };

  	factory.getBelts = function(callback){
  		$http.get('/belts')
   		.then(function(response){
   			factory.belts = response.data;
   			callback(factory.belts);
   		})
   		.catch(console.log);
  	};

  	factory.createBelt = function(belt, callback){
  		$http.post('/belts', belt)
   		.then(function(response){
   			callback();
   		})
   		.catch(console.log);
  	}

  	return factory;

  }
 ]
)	