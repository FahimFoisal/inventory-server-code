const UserCreateService = async ( req, dataModel) => {
    try {
        const reqBody = req.body;
        const data = await dataModel.create(reqBody);
        return {status:'success', data: data}
    } catch (err) {
        return {status:'fail', data: err.toString()}
    }
}
module.exports = UserCreateService;
