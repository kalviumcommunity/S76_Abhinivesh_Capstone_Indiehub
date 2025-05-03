const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// GET routes for register and login
router.get('/register', registerUser);
router.get('/login', loginUser);

module.exports = router;