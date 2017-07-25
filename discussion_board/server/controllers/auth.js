const User = require('mongoose').model('User');

module.exports.login = function(req, res) {
	User.findOne({ username: req.body.username })
	.then(function(user){
		if(!user){
			User.create(req.body)
			.then(function(user){
				console.log('Registered: ', user)
				login(req, res, user);
			})
			.catch(function(error){
				console.log(error.message);
				res.status(422).json({error: new Error('Smth went wrong!')});
			})
		}
		else{
			console.log('There is the user: ', user);
			login(req, res, user);		  
		}
	})
	.catch(errHandler.bind(res));
}

module.exports.show = function(req, res){
	User.findById(req.params.id)
		.then(function(user){
			res.json(user);
		})
		.catch(console.log);
}

module.exports.logout = function(req, res){
	req.session.destroy();
	res.clearCookie('userID');
	res.clearCookie('username');
	res.clearCookie('expiration');
	res.json(true);
}

function login(req, res, user){
	req.session.user = user.toObject();
	delete req.session.user.password;

	res.cookie('username', user.username);
	res.cookie('userID', user._id.toString());
	res.cookie('expiration', Date.now() + 86400 * 1000);

	res.json(true);
}

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