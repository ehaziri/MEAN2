const Message = require('mongoose').model('Message');
const User = require('mongoose').model('User');

module.exports.index = function(req, res){
	console.log('ne message')
	Message.find({}).populate('_user').populate('_comments')
	 .then(function(messages){
	 	res.json(messages);
	 })
	 .catch(errHandler.bind(res));
};

module.exports.create = function(req, res){
	Message.create(req.body)
        .then(function(message){
          return User.findById(message._user)
            .then(function(user) {
              user._messages.push(message);
              return user.save()
              .then(function() {
              	console.log('s', message);
                res.json(message);
              })
            })
          })
          .catch(function(error){
            console.log('G', error)
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