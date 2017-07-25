const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path')
const modelsDir = path.resolve('server', 'models');
const reg = new RegExp('.js$', 'i');

mongoose.connect('mongodb://localhost/b1_db');
mongoose.connection.on('connected', () => console.log("Jemi lidhur me mongoose!"));
mongoose.Promise = global.Promise;

fs.readdirSync(modelsDir).forEach(function(file) {
	if(reg.test(file)){
		require(path.join(modelsDir, file));
	}
})
