// const Ninja = require('../models/ninja');
const Ninja = require('mongoose').model('Ninja');
const User = require('mongoose').model('User');

module.exports = {
	index(req, res) {
		Ninja.find({}).populate('belt')
		.then(function(ninjas) {
			res.json(ninjas);
		})
		.catch(errHandler.bind(res));
	},
	create(req, res) {
		Ninja.create(req.body, function(error, ninja){
			if(error){
				console.log(error);
				return errHandler.call(res, error);
			}

			User.findById(ninja._user)
			 .then(function(user){
			 	if(!user) throw new Error('User not found!');

			 	user._ninjas.push(ninja);
			 	return user.save()
			 	 .then(function(){
			 	 	console.log('PEr user: ', user)
			 	 	res.json({ success: true, ninja });
			 	 });
			 	
			 })
			 .catch(errHandler.bind(res));

		})
	},
	show(req, res) {
		Ninja.findById(req.params.id).populate('belt')
		.then(function(ninja) {
			res.json(ninja);
		})
		.catch(errHandler.bind(res));
	},
	update(req, res) {
		Ninja.findByIdAndUpdate(req.params.id, req.body)
		.then(function() {
			return Ninja.findById(req.params.id)
			 .populate('belt')
			 .then(function(ninja){
			 	res.json(ninja);
			 });
		})
		.catch(errHandler.bind(res));
	},
	delete(req, res) {
		Ninja.findByIdAndRemove(req.params.id)
		.then(function(ninja) {
			res.json(ninja);
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
