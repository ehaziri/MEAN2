const mongoose = require('mongoose');
const { Schema } = mongoose;

const ninjaSchema = new Schema({
	name: {
		type: String,
		required: true,
		minlength: [2, 'Minimum length of name is 2'],
		trim: true,
		unique: [true, 'Name must be unique!'],
	},
	age:{
		type: Number,
		min: [18, "Maybe you need to be a little older"],        
        max: [85, "You might want to be enjoying your retirement rather than using this site"], 
	},
	belt:{
		type: Schema.Types.ObjectId,
		ref: 'Belt'
	},
	location:{
		type: String,
		minlength: 4,
		required: true,
		trim: true,
		validate: {          
                      validator: function( value ) {            
                                      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,32}/.test( value );          
                                },          
                      message: "Password failed validation, you must have at least 1 number, uppercase and special character"        
                }   
	},
	_user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	}
}, 
{timestamps: true}
)

module.exports = mongoose.model('Ninja', ninjaSchema); 