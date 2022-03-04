require('dotenv').config();
const { Users } = require('../dbSimulation/db');
const JWT = require('jsonwebtoken');

/**
 * Since we'll need to perform some long process like: #password hashing, token generation, better making 
 * this controller asynchronous.
 */
exports.signUp =  async (req, res) => {
    const { email, password } = req.body
    // const isEmail = email.split('').includes('@');
    const isEmail = /^[a-z]+\b(@gmail.com)\b$/gi.test(email)

    if(!isEmail || password.length < 8) {
        return res.status(400).json({ success: false, msg: 'Provide correct password and email' })
    }

    // validate if the user already in our db
    const user = Users.find((user) => user.email === email);

    if(user) return res.status(403).json({ success: false, msg: "This user already exists" })

    const token = await JWT.sign({ email }, process.env.ACCESS_TOKEN_SECRET);

    Users.push(req.body);
    res.status(201).json({ success: true, msg: 'Account created successfully.', token });
}

exports.getUsers = (req, res) => {
    if(Users.length < 0) {
        return res.status(200).json({ success: true, msg: 'No users found...' });
    }

    res.status(200).json({ Users, nbHints: Users.length })
}

exports.login = async (req, res) => {
    const { email, password } = req.body;

    // testing if we have such email in our DB and if the provided password correspond to this email
    const user = Users.find(user => user.email === email);

    if(!user) {
        return res.status(404).json({ success: false, msg: `${email} does not exist` })
    }

    if(user.password !== password) {
        return res.status(404).json({ success: false, msg: 'Incorrect password' });
    }

    // generate a #token
    const token = JWT.sign({ email }, process.env.ACCESS_TOKEN_SECRET)
    res.status(200).json({ success: true, msg: 'User verified successfully', token });

}