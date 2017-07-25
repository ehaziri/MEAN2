const User = require('mongoose').model('User');

module.exports.login = function(req, res) {
	User.findOne({ username: req.body.username })
	.then(function(user){
		return User.verifyPassword(req.body.password, user.password)
		 .then(function(){
		 	login(req, res, user);
		 })
	})
	.catch(function(error){
		res.status(422).json({error: new Error('Username/Password not match.')});

	});
}

module.exports.register = function(req, res) {
	User.create(req.body)
	.then(function(user){
		login(req, res, user);
	})
	.catch(function(error){
		console.log(error.message);
		res.status(422).json({error: new Error('Smth went wrong on REGISTER')});
	})
}

module.exports.logout = function(req, res){
	req.session.destroy();
	res.clearCookie('userID');
	res.clearCookie('expiration');
	res.json(true);
}

function login(req, res, user){
	req.session.user = user.toObject();
	delete req.session.user.password;

	res.cookie('userID', user._id.toString());
	res.cookie('expiration', Date.now() + 86400 * 1000);

	res.json(true);
}