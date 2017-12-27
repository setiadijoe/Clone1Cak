const express = require('express');
const router = express.Router();
const User = require('../controllers/users');

router.get('/', User.getAllUsers);
router.post('/signup', User.signUpUser);
router.post('/signin', User.signInUser)

module.exports = router;