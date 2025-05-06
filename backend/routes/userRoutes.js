const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAllUsers,getUserProfile,updateUserProfile, deleteUserProfile} = require('../controllers/userController');
const { protect } = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser); 
router.get('/', getAllUsers);
router.get('/:id', protect, getUserProfile);
router.put('/:id',protect,updateUserProfile)
// router.delete('/:id',protect,deleteUserProfile)
module.exports = router;