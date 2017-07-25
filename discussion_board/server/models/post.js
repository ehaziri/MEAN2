const mongoose = require('mongoose');

const { Schema } = mongoose;
const postSchema = new Schema({
	post: {
		type: String,
		required: true,
	},
	_owener: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	_topic: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topic'
	},
	like: Number,
	dislike: Number,
	_comments: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment'
	}],
},
{ timestamps: true }
);

module.exports = mongoose.model('Post', postSchema)