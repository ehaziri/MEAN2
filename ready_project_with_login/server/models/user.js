const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		maxlength: [20, 'Username must be less than 20 characters.'],
		unique: true
	},
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema)