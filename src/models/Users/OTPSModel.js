const mongoose = require('mongoose');

const otpSchema = mongoose.Schema({
    email : {type: String},
    otp: {type:String},
    status: {type: Number, default: 0}
},{timestamps: true, versionKey: false});

const otpsModel = mongoose.model('opts',otpSchema);

module.exports = otpsModel;