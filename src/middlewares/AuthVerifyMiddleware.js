const jwt = require('jsonwebtoken');

const AuthVerifyMiddleware = (req,res,next) => {
    const Token = req.headers['token'];
    jwt.verify(Token,"secretKeyInventoryApp", (err,decodeData) => {
        if (err) {
            res.status(401).json({status: "Unauthorized"});
        }
        else {
            const email = decodeData['email'];
            console.log(email);
            req.headers.email = email;
            next();
        }
    })
}
module.exports = AuthVerifyMiddleware;