const mongoose = require('mongoose');
var validate = require('mongoose-validator');
const { Schema } = mongoose;
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		maxlength: [20 , 'Username should be less than 20 characters.'],
		unique: true,
		validate: {
			validator: function(value) {
						return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
						},
			message: "{ VALUE } is not a valid name."
		},
	}
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema)