require('dotenv').config({ path: 'config/.env' });
const JWT = require('jsonwebtoken');

// using the UnauthenticatedError class instead of the CustomAPIError since CustomAPIError is more generic
const { UnauthenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

     // check if we have the authHeaders and if that #authHeader follow the Bearer schema, i.e if it starts with Bearer word
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Header not provided. Use the Bearer schema');
    }

    const token = authHeader.split(' ')[1];

    /* verifying the token is valid. Remember that the verificaction process can take longer(async) and return an error
    when the verification fails
    */
    try {
        const decoded = JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.username = decoded.username;
        next(); 
    } catch (error) {
        throw new UnauthenticatedError('Not allowed to access this ressouce');
    }
}

module.exports = authenticationMiddleware;