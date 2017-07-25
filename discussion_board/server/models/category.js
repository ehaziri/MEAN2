const mongoose = require('mongoose');

const { Schema } = mongoose;
const categorySchema = new Schema({
	category: {
		type: String,
		required: true,
		unique: true
	},
},
{ timestamps: true }
);

mongoose.Promise = global.Promise;

var Category =  mongoose.model('Category', categorySchema);

// var category1 = new Category();
// var category2 = new Category();
// var category3 = new Category();
var category4 = new Category();
var category5 = new Category();


// category1.category = "HTML";
// category1.save();
// category2.category = "CSS";
// category2.save();
// category3.category = "JavaScript";
// category3.save();
// category4.category = "Ruby on Rails";
// category4.save();
// category5.category = "MySQL";
// category5.save();


module.exports = Category;
