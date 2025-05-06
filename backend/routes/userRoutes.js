const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers,updateUserProfile, deleteUserProfile} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser); 
router.get('/', getAllUsers);
router.put('/:id',protect,updateUserProfile)
router.delete('/:id',protect,deleteUserProfile)
module.exports = router;