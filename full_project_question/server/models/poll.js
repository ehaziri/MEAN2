const mongoose = require('mongoose');

const { Schema } = mongoose;
const pollSchema = new Schema({
	question: {
		type: String,
		required: true,
		minlength: [8, 'Question must be at least 8 characters'],
		unique: true
	},
	option1: {
		type: String,
		required: true,
		minlength: [3, 'Option must be at least 3 characters'],
		unique: true
	},
	vote1: {
		type: Number,
		default: 0
	},
	option2: {
		type: String,
		required: true,
		minlength: [3, 'Option must be at least 3 characters'],
		unique: true
	},
	vote2: {
		type: Number,
		default: 0
	},
	option3: {
		type: String,
		required: true,
		minlength: [3, 'Option must be at least 3 characters'],
		unique: true
	},
	vote3: {
		type: Number,
		default: 0
	},
	option4: {
		type: String,
		required: true,
		minlength: [3, 'Option must be at least 3 characters'],
		unique: true
	},
	vote4: {
		type: Number,
		default: 0
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
},
{ timestamps: true }
);

module.exports = mongoose.model('Poll', pollSchema)