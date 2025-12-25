const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user')

router.post('/signup', UserController.signUp);
router.post('/login', UserController.signIn);
router.post('/logout', UserController.logout);
module.exports = router;
