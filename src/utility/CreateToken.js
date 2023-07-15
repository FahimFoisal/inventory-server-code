const jwt = require('jsonwebtoken');

const CreateToken = async (data) => {
    return await jwt.sign({email: data},'secretKeyInventoryApp',{expiresIn: '40d'});
}

module.exports = CreateToken;