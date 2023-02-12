const express = require('express');
const router = express.Router();

const artistControllers = require('../controllers/postController');

router.post('/create_post', artistControllers.createPost);

module.exports = router;