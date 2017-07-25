// const Ninja = require('../models/ninja');
const Topic = require('mongoose').model('Topic');
const User = require('mongoose').model('User');

module.exports = {
	index(req, res) {
		Topic.find({}).populate('_owener')
		.then(function(topics) {
			res.json(topics);
		})
		.catch(errHandler.bind(res));
	},
	create(req, res) {
		// console.log("sss", req.body);
		Topic.create(req.body)
			.then(function(topic){
				User.findById(topic._owener)
				 .then(function(user){
				 	user._topics.push(topic);
				 	return user.save()
				 	 .then(function(){
				 	 	console.log('PEr user: ', user)
				 	 	res.json(topic);
	   			 	 });
			 })
			 .catch(errHandler.bind(res));

		})
	},
	show(req, res){
		Topic.findById(req.params.id).populate('_owener')
		 	.then(function(topic){
		 		res.json(topic);
		 	})
		 	.catch(errHandler.bind(res));
	}
	// show(req, res) {
	// 	Ninja.findById(req.params.id).populate('belt')
	// 	.then(function(ninja) {
	// 		res.json(ninja);
	// 	})
	// 	.catch(errHandler.bind(res));
	// },
	// update(req, res) {
	// 	Ninja.findByIdAndUpdate(req.params.id, req.body)
	// 	.then(function() {
	// 		return Ninja.findById(req.params.id)
	// 		 .populate('belt')
	// 		 .then(function(ninja){
	// 		 	res.json(ninja);
	// 		 });
	// 	})
	// 	.catch(errHandler.bind(res));
	// },
	// delete(req, res) {
	// 	Ninja.findByIdAndRemove(req.params.id)
	// 	.then(function(ninja) {
	// 		res.json(ninja);
	// 	})
	// 	.catch(errHandler.bind(res));
	// }	
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
