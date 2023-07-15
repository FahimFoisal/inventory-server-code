const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email : {type: String, unique: true},
    firstName: {type: String},
    lastName: {type: String},
    mobile: {type:String},
    password: {type: String},
    photo: {type:String}
},{timestamps: true, versionKey: false});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;