module.exports = function(req, res, next) {
	if(!req.user){
		next(new Error('Not logged in'));
	}
	next();
}