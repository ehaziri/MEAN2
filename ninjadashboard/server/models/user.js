const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;
const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		minlenght: [2, 'Username must be at least 2 characters'],
		unique: true
	},
	email: {
		type: String,
		required: [true, 'Please enter an email.'],
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8
	},
	_ninjas: [{
		type: Schema.Types.ObjectId,
		ref: 'Ninja'
	}]
},
{ timestamps: true }
);

userSchema.pre('save', function(next) {
	if(!this.isModified('password')){ return next() }
	bcrypt.hash(this.password, 10)
	 .then((hashed) => {
	 	this.password = hashed;
	 	next();
	 })
	 .catch(next);
});

userSchema.statics.verifyPassword = function(candidate, hashed){
	return bcrypt.compare(candidate, hashed);
}


module.exports = mongoose.model('User', userSchema)