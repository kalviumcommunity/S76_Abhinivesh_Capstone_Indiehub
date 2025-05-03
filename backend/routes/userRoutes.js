const express = require('express');
const router = express.Router();
const {
  registerPost,
  loginPost,
  registerGet,
  loginGet
} = require('../controllers/userController');

// GET routes
router.get('/register', registerGet);
router.get('/login', loginGet);

// POST routes
router.post('/register', registerPost);
router.post('/login', loginPost);

module.exports = router;