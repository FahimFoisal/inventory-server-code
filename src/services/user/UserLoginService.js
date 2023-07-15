const CreateToken = require("../../utility/CreateToken")

const UserLoginService = async (req,dataModel) => {
    try {
        let data = await dataModel.aggregate([{$match: req.body}, {$project: {_id:0}}]);
        if (data.length>0) {
            let token = await CreateToken(data[0]['email']);
            return {status:"success", token, data: data[0]}
        }
        else {
            return {status:"unauthorized"}
        }
    } catch (err) {
        return {status: "fail", data: err.toString()}
    }
}

module.exports = UserLoginService;