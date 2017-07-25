angular.module('app')
  .factory('dashboardFactory', ['$http', function($http) { 

  	const factory = { topics: [], 
    comments: [] };

    factory.getTopics = function(callback){
      $http.get('/topics')
        .then(function(response){
          console.log("here", response.data);
          factory.topics = response.data;
          callback(factory.topics);
        })
        .catch(console.log);   
    }

    factory.createTopic = function(topic, callback){ 
      $http.post('/topics/', topic)
        .then(function(response){
          factory.topics.push(response.data);
          console.log("Ne createtopic client: ", response.data)
          callback();
        })
        .catch(function(errorResponse){
          console.log(errorResponse);
          callback(errorResponse.data.errors);
        });
    }
      
    factory.getTopic = function(id, callback){
      var topic = factory.topics.find(function(topic){
        if(topic._id === id){
          return true;
        }
        else{
          return false;
        }
      })
      if(topic){
        return callback(topic);
      }
      $http.get('/topics/' + id)
        .then(function(response){
          factory.topics.push(response.data);
          callback(response.data);
        })
        .catch(console.log);
    };
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