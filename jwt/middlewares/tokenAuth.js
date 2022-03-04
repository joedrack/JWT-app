require('dotenv').config();
const JWT = require('jsonwebtoken');

const tokenCheck = async (req, res, next) => {
    const token = req.header('x-auth-token');

    // allow the access to the GET /posts/prenuim only when the user the correct token get provided
    if(!token) {
        return res.status(400).json({ success: false, msg: 'No token found.' })
    }
    try {
        const isTokenVal = await JWT.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // adding the email to the req for futur wroks(like fetching data of the particular user)
        req.email = email;
        next();
        
    } catch (error) {
        return res.status(400).json({ success: false, msg: 'You need to login to access these ressources' });
    }
}

module.exports = tokenCheck;