const router = require('express').Router()

const { publicPosts } = require('../dbSimulation/db');
const { prenuimPosts } = require('../dbSimulation/db');
const tokenCheck = require('../middlewares/tokenAuth');

// public posts
router.get('/public', (req, res) => {
    if(publicPosts.length < 1) {
        return res.status(200).json({ success: true, msg: 'No posts available...' });
    }

    res.status(200).json({ publicPosts });
});

router.get('/prenuim', tokenCheck, (req, res) => {
    res.status(200).json({ success: true,  prenuimPosts })
});

module.exports = router