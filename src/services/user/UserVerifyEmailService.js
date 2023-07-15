
const otpsModel = require("../../models/Users/OTPSModel");
const SendEmailUtility = require("../../utility/SendEmailUtility");


const UserVerifyEmailService = async (req,dataModel) => {
    try {
        let email = req.params.email;
        let OTPCode = Math.floor( 100000 + Math.random() * 900000);
        let UserCount = await dataModel.aggregate([{$match: {email: email}},{$count:"total"}]);
        if (UserCount.length>0) {
            await otpsModel.create({email:email, otp:OTPCode});
            let SendEmail = await SendEmailUtility(email,`Your PIN code is =  ${OTPCode}`,'Inventory Management System Verification');
            return {status:"success",data:SendEmail};
        }
        else {
            return {status:"fail", data: "No user Found"}
        }
    }
    catch (error) {
        return {status:"fail", data: error.toString()}
    }
}

module.exports = UserVerifyEmailService;