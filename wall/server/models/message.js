const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
	content: {
		type: String,
		required: true,
		maxlength: [300, 'Content must be less than 300 characters.'],
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	_comments: [{
		type: Schema.Types.ObjectId,
		ref: 'Comment'
	}]
},
{ timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema)