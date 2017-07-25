angular.module('app')
  .factory('userFactory', ['$http', function($http) { 

  	const factory = { users: [] };

    factory.getUser = function(id, callback){
      $http.get('/auth/' + id)
        .then(function(response){
          factory.users.push(response.data);
          callback(response.data);
        })
        .catch(console.log);
    }
      

    //   $http.post('/comments', comment)
    //     .then(function(response){
    //       console.log('e1', response);
    //       factory.comments.push(response.data.comment);
    //       callback();
    //     })
    //     .catch(console.log);

  	return factory;

  }
 ]
)	