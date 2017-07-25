angular.module('app')
  .factory('messageFactory', ['$http', function($http) { 

  	const factory = { messages: [], 
    comments: [] };
    // const messages = [];

    // factory.index = function(callback){
    // callback(messages);
    // }

  	factory.getMessages = function(callback){
  		$http.get('/messages')
   		.then(function(response){
   			factory.messages = response.data;
   			callback(factory.messages);
   		})
   		.catch(console.log);
  	};

    factory.getComments = function(callback){
      console.log('1');
      $http.get('/comments')
      .then(function(response){
        console.log('2');
        factory.comments = response.data;
        callback(factory.comments);
      })
      .catch(console.log);
    };



  	factory.createMessage = function(message, callback){
  		$http.post('/messages', message)
   		.then(function(response){
        factory.messages.push(response.data.message);
   			callback();
   		})
   		.catch(console.log);
      // messages.push(message);
      // callback();
  	}

    factory.createComment = function(comment, callback){ 
      console.log('ne fact');
      $http.post('/comments', comment)
        .then(function(response){
          console.log('e1', response);
          factory.comments.push(response.data.comment);
          callback();
        })
        .catch(console.log);
    }

  	return factory;

  }
 ]
)	