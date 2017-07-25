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
	.catch(function(error){
		console.log(error.message);
		res.status(422).json({error: new Error('Smth went wrong!')});

	});
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