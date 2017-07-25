const mongoose = require('mongoose');

const { Schema } = mongoose;
const commentSchema = new Schema({
	comment: {
		type: String,
		required: true,
	},
	_owener: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	},
},
{ timestamps: true }
);

module.exports = mongoose.model('Comment', commentSchema)