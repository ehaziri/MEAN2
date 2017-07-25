const Message = require('mongoose').model('Message');
const User = require('mongoose').model('User');
const Comment = require('mongoose').model('Comment');


module.exports.index = function(req, res){
	console.log('ne index', req.body);
	Comment.find({}).populate('_user').populate('_message')
	 .then(function(comments){
	 	res.json(comments);
	 })
	 .catch(errHandler.bind(res));
};

module.exports.create = function(req, res){
	console.log('ne create server', req.body);
	Comment.create(req.body)
        .then(function(comment){
          		User.findById(comment._user)
            		.then(function(user) {
              				user._comments.push(comment);
              				user.save()
              						.then(function() {
                							res.json(comment);
              							 })
            			  });
            	Message.findById(comment._message)
            		.then(function(message) {
              				message._comments.push(comment);
              				message.save()
              						.then(function() {
                							res.json(comment);
              							 })
            			  });
         })
         .catch(function(error){
           		 console.log('Gcomment', error)
         })
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