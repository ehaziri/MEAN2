const Topic = require('mongoose').model('Topic');
const User = require('mongoose').model('User');
const Post = require('mongoose').model('Post');


module.exports = {
	// index(req, res) {
	// 	Topic.find({}).populate('_owener')
	// 	.then(function(topics) {
	// 		res.json(topics);
	// 	})
	// 	.catch(errHandler.bind(res));
	// },
	create(req, res) {
		// console.log("sss", req.body);
		Post.create(req.body)
			.then(function(post){
				User.findById(post._owener)
				 .then(function(user){
				 	user.posts.push(post);
				 	user.save()
				 	 	.then(function(){
				 	 	console.log('PEr user: ', user)
	   			 		})
	   			 })
	   			Topic.findById(post._topic)
	   			  .then(function(topic){
				 	topic.posts.push(post);
					topic.save()
					 	 .then(function(){
					 	 	console.log('PEr topic: ', topic)
		   			 	 })
				 })
	   		res.json(post);
	   	    })
			.catch(errHandler.bind(res));

		},
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
