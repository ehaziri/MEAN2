angular.module('app')
  .factory('pollFactory', ['$http', function($http) { 	
  	 const factory = {};
  	 factory.polls = [];


      factory.getPolls = function(callback){
          $http.get('/polls')
          .then(function(response){
            factory.polls = response.data;
            callback(factory.polls);
          })
          .catch(console.log);
        };


      factory.getPoll = function(id, callback){
        var poll = factory.polls.find(function(poll){
        if(poll._id === id){
          return true;
        }
        else{
          return false;
        }
        })
        if(poll){
          return callback(poll)
        }

        $http.get('/polls/' + id)
        .then(function(response){
          factory.polls.push(response.data);
          callback(response.data);
        })
        .catch(console.log);
      };

      factory.createPoll = function(poll, callback){
        $http.post('/polls', poll)
        .then(function(response){
          factory.polls.push(response.data.poll);
          console.log("Ne createPoll client: ", response.data)
          callback();
        })
        .catch(function(errorResponse){
          console.log(errorResponse);
          callback(errorResponse.data.errors);
        });
      }

      factory.delete = function(id, callback){
        $http.delete('/polls/' + id)
          .then(function(response){
            var poll = factory.polls.find((poll) => poll._id === id);
            factory.polls.splice(factory.polls.indexOf(poll), 1);
            console.log('poll deleted from factory');
            callback();
          })
          .catch(console.log);
      }
    
      factory.vote = function(oldPoll, voteOption, callback){
        console.log('ne fact1 te vote', oldPoll);
        callback();

        if(voteOption == 1){ oldPoll.vote1++ }
        if(voteOption == 2){ oldPoll.vote2++ }
        if(voteOption == 3){ oldPoll.vote3++ }
        if(voteOption == 4){ oldPoll.vote4++ }

        $http.put('/polls/' + oldPoll._id, oldPoll)
          .then(function(response){
            console.log("ne fact2 te vote", response.data);
            var poll = factory.polls.find((poll) => poll._id === oldPoll._id);
            if(poll){
              factory.polls.splice(factory.polls.indexOf(poll), 1, response.data);
            }
            callback();
            
          })
        .catch(console.log);
      }

  	 return factory;

  }])