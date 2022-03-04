const router = require("express").Router();

const { signUp, getUsers, login } = require("../controllers/auth.controllers");

router.post('/singup',signUp);
router.get('/accounts', getUsers);
router.post('/login', login);


module.exports = router;
 