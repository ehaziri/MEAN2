const Belt = require('mongoose').model('Belt');

function errHandler(error){
	this.status(422).json(error);
}

module.exports.index = function(req, res){
	
	Belt.find({})
	 .then(function(belts){
	 	res.json(belts);
	 })
	 .catch(errHandler.bind(res));
};

module.exports.update = function(req, res){
	Belt.findByIdAndUpdate(req.params.id, req.body)
	 .then(function(belt){
	 	res.json(belt);
	 })
	 .catch(errHandler.bind(res));
};

module.exports.create = function(req, res){
	Belt.create(req.body)
	 .then(function(belt){
	 	res.json(belt);
	 })
	 .catch(errHandler.bind(res));
}