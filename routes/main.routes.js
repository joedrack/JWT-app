const router = require('express').Router();
const authMiddleware = require('../middlewares/auth');

const { login, dashboard } = require('../controllers/main.controllers');

router.post('/login', login);
// authenticating the user first before going to the dashboard route
router.get('/dashboard', authMiddleware, dashboard);

module.exports = router;