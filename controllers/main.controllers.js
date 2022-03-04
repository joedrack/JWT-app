require('dotenv').config({ path: 'config/.env' });
const JWT = require('jsonwebtoken');

/**
 * All custom error classes are in the /errors/index.js, so we do not need to specify the index.js
 * Instead using the CustomAPIError, let's use the BadRequestError since CustomAPIError is more generic.
 */
const { BadRequestError } = require('../errors');

exports.login = async (req, res) => {
    const { username, password } = req.body;
    if(!username || !password) {
        throw new BadRequestError("Please provide username and password");
    }

    // generating a token that the user will use to access the dashboard
    const token = JWT.sign({ username }, process.env.ACCESS_TOKEN_SECRET);

    res.status(200).json({ token })
}

// the middleware used to authenticate the user is directly to the #route 
exports.dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 1000);

    res
    .status(200)
    .json({ success: true, msg: `Hello ${req.username}. Her is your random number : ${luckyNumber}`});
}