const mongoose = require('mongoose');

const { Schema } = mongoose;
const topicSchema = new Schema({
	title: {
		type: String,
		required: true,
		unique: true,
		minlength: 2,
	},
	category: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	_owener: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}],
},
{ timestamps: true }
);

module.exports = mongoose.model('Topic', topicSchema)