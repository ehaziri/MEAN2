angular.module('app')
  .factory('ninjaFactory', ['$http', function($http) { 	
  	 const factory = {};
  	 factory.ninjas = [
       {
        name: 'Ninja1',
        height: 40,
        belt: 'Black',
        weapons: "weap1"
       }
      ];

  	 	factory.getNinjas = function(callback){
  	 		$http.get('/ninjas')
  	 		.then(function(response){
  	 			factory.ninjas = response.data;
  	 			callback(factory.ninjas);
  	 		})
  	 		.catch(console.log);
  	 	};

      factory.getNinja = function(id, callback){
        var ninja = factory.ninjas.find(function(ninja){
          if(ninja._id === id){
            return true;
          }
          else{
            return false;
          }
        })
        if(ninja){
          return callback(ninja)
        }

        $http.get('/ninjas/' + id)
        .then(function(response){
          factory.ninjas.push(response.data);
          callback(response.data);
        })
        .catch(console.log);
      };
    
      factory.createNinja = function(ninja, callback){
        $http.post('/ninjas/', ninja)
        .then(function(response){
          factory.ninjas.push(response.data.ninja);
          console.log("Ne createNinja client: ", response.data)
          callback();
        })
        .catch(function(errorResponse){
          console.log(errorResponse);
          callback(errorResponse.data.errors);
        });
      }
      factory.updateNinja = function(oldNinja, callback){
        $http.put('/ninjas/' + oldNinja._id, oldNinja)
        .then(function(response){
          var ninja = factory.ninjas.find((ninja) => ninja._id === oldNinja._id);
          if(ninja){
            factory.ninjas.splice(factory.ninjas.indexOf(ninja), 1, response.data);
          }
          callback();
          console.log(response.data);
        })
        .catch(console.log);

      }
      factory.deleteNinja = function(id, callback){
        $http.delete('/ninjas/' + id)
        .then(function(response){
          var ninja = factory.ninjas.find((ninja) => ninja._id === id);
          factory.ninjas.splice(factory.ninjas.indexOf(ninja), 1);
          console.log('ninja deleted from factory');
          callback();
        })
        .catch(console.log);
      }

  	 return factory;

  }])