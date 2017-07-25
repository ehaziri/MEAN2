// const Ninja = require('../models/ninja');
const Poll = require('mongoose').model('Poll');
const User = require('mongoose').model('User');

module.exports = {
	index(req, res) {
		// console.log('ne index server')
		Poll.find({}).populate('_user')
		 .then(function(polls){
		 	// console.log('ne index server2')
		 	res.json(polls);
		 })
		 .catch(errHandler.bind(res));
	},
	create(req, res) {
		Poll.create(req.body)
        .then(function(poll){
          return User.findById(poll._user)
            .then(function(user) {
              user._polls.push(poll);
              return user.save()
              .then(function() {
              	console.log('s', poll);
                res.json(poll);
              })
            })
          })
        res.gabimi = 
          .catch(errHandler.bind(res));
	},
	show(req, res) {
		Poll.findById(req.params.id)
		.then(function(poll) {
			res.json(poll);
		})
		.catch(errHandler.bind(res));
	},
	update(req, res) {
		// console.log('ne update server1');
		Poll.findByIdAndUpdate(req.params.id, req.body)
		.then(function() {
			return Poll.findById(req.params.id)
			 .then(function(poll){
			 	// console.log('ne update server2', poll);
			 	res.json(poll);
			 });
		})
		.catch(errHandler.bind(res));
	},

	delete(req, res) {
		Poll.findByIdAndRemove(req.params.id)
		.then(function(poll) {
			// console.log("ne delete server", poll, req.params.id);
			res.json(poll);
		})
		.catch(errHandler.bind(res));
	}	
};

function errHandler(error){
	let errors = [];
	if(error.errors){
		errors = Object.keys(error.errors)
			.map(errorKey => error.errors[errorKey].message);
	}
	else if(typeof error === 'string'){
		errors.push(error);
	}
	else{
		errors.push(error.message);
	}
	this.status(422).json({ errors });
}
