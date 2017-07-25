const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlength: [2, 'Username must be at least 2 characters'],
		unique: true
	},
	_polls: [{
		type: Schema.Types.ObjectId,
		ref: 'Poll'
	}]
},
{ timestamps: true }
);

module.exports = mongoose.model('User', userSchema)