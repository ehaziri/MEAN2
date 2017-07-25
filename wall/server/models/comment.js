const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
	content: {
		type: String,
		maxlength: [300, 'Comment must be less than 300 characters.'],
		required: true
	},
	_message: {
		type: Schema.Types.ObjectId,
		ref: 'Message'
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
},
{ timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema)