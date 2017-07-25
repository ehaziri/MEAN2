const User = require('mongoose').model('User');

module.exports = function(req, res, next){
	if(req.session && req.session.user){
		return User.findById(req.session.user._id)
		 .then(function(user){
		 	req.user = user;
		 	next();
		 })
		 .catch(next);
	}
	next();
}