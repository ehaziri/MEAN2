const mongoose = require('mongoose');
const { Schema } = mongoose;

const beltSchema = new Schema({
	level:{
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
		trim: true,
		unique: true,
		lowercase: true
	},
	isActive: {
		type: Boolean,
		required: true,
		default: true
	}
});

module.exports = mongoose.model('Belt', beltSchema);