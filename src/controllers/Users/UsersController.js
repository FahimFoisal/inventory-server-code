const dataModel = require("../../models/Users/UsersModel");
const otpsModel = require("../../models/Users/OTPSModel");

const UserCreateService = require("../../services/user/UserCreateService");
const UserDetailsService = require("../../services/user/UserDetailsService");
const UserLoginService = require("../../services/user/UserLoginService");
const UserResetPassService = require("../../services/user/UserResetPassService");
const UserUpdateService = require("../../services/user/UserUpdateService");
const UserVerifyEmailService = require("../../services/user/UserVerifyEmailService");
const UserVerifyOtpService = require("../../services/user/UserVerifyOtpService");


exports.Registration = async (req,res) => {
    let result = await UserCreateService(req,dataModel);
    return res.status(200).json(result);
}

exports.Login = async (req,res) => {
    let result = await UserLoginService(req,dataModel);
    return res.status(200).json(result);
}

exports.ProfileUpdate = async (req,res) => {
    let result = await UserUpdateService(req,dataModel);
    return res.status(200).json(result);
}

exports.ProfileDetails = async (req,res) => {
    let result = await UserDetailsService(req,dataModel);
    return res.status(200).json(result);
}

exports.RecoverVerifyEmail = async (req,res) => {
    let result = await UserVerifyEmailService(req,dataModel);
    return res.status(200).json(result);
}

exports.RecoverVerifyOTP = async (req,res) => {
    let result = await UserVerifyOtpService(req,otpsModel);
    return res.status(200).json(result);
}

exports.RecoveryResetPass = async (req,res) => {
    let result = await UserResetPassService(req,dataModel);
    return res.status(200).json(result);
}