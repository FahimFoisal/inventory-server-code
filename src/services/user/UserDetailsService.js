// User Profile Details
const UserDetailsService = async ( req, dataModel) => {
    try {
        const data = await dataModel.aggregate([{$match: {email: req.headers.email}}]);
        return {status:'success', data: data}
    } catch (err) {
        return {status:'fail', data: err.toString()}
    }
}

module.exports = UserDetailsService;