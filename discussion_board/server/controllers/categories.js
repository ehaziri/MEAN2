const Category = require('mongoose').model('Category');

module.exports.index = function(req, res) {
	Category.find({})
	.then(function(categories){
		res.json(categories);
	})
	.catch(console.log);
}

