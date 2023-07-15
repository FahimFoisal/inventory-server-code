const UserVerifyOtpService = async (req,dataModel) => {
    try {
        let email = req.params.email;
        let OTPCode = req.params.otp;
        let status = 0;
        let statusUpdate = 1;

        let OTPCount = await dataModel.aggregate([{$match: {email: email, otp: OTPCode, status: status}},{$count:"total"}]);
        if (OTPCount.length>0) {
            let OTPUpdate = await dataModel.updateOne({email:email, otp:OTPCode, status: status},{email:email, otp:OTPCode, status: statusUpdate})
            return {status: "success", data: OTPUpdate}
        } else {
            return  {status: "fail", data: "Invalid OTP Code"}
       }
    } catch(error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports = UserVerifyOtpService;