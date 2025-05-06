// Import required modules
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 
const User = require('../models/User'); 

// Register a new user
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body; 
  
  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Generate a JWT token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Respond with the created user and token
    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ message: 'Server error' }); // Respond with a server error
  }
};

// Login an existing user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body; // Extract login credentials from request body

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate a JWT token for the user
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    // Respond with the user and token
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
      },
    });
  } catch (err) {
    console.error(err); 
    res.status(500).json({ message: 'Server error' }); 
  }
};

// Get all users (excluding passwords)

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); 
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};


// Get a specific user's profile
exports.getUserProfile = async (req, res) => {
  try {
      const userId = req.params.id;

      // Authorization check
      if (!req.user._id.equals(userId) && !req.user.isAdmin) {
          return res.status(403).json({
              success: false,
              message: 'Not authorized to view this profile'
          });
      }

      const user = await User.findById(userId).select('-password');
      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found'
          });
      }

      res.status(200).json({
          success: true,
          data: user
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      });
  }
};


// Update a user's profile
exports.updateUserProfile = async (req, res) => {
  try {
      const userId = req.params.id;

      // Authorization check
      if (!req.user._id.equals(userId) && !req.user.isAdmin) {
          return res.status(403).json({
              success: false,
              message: 'Not authorized to update this profile'
          });
      }

      const { fullName, bio, profileImageUrl, instruments, genres } = req.body;

      const updatedFields = {};
      if (fullName) updatedFields.fullName = fullName;
      if (bio) updatedFields.bio = bio;
      if (profileImageUrl) updatedFields.profileImageUrl = profileImageUrl;
      if (instruments) updatedFields.instruments = instruments;
      if (genres) updatedFields.genres = genres;

      updatedFields.updatedAt = new Date();

      const user = await User.findByIdAndUpdate(userId, updatedFields, {
          new: true,
          runValidators: true,
          context: 'query'
      }).select('-password');

      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found'
          });
      }

      res.status(200).json({
          success: true,
          message: 'Profile updated successfully',
          data: user
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      });
  }
};


// Delete a user account
exports.deleteUserProfile = async (req, res) => {
  try {
      const userId = req.params.id;

      // Authorization check
      if (!req.user._id.equals(userId) && !req.user.isAdmin) {
          return res.status(403).json({
              success: false,
              message: 'Not authorized to delete this profile'
          });
      }

      const user = await User.findByIdAndDelete(userId);
      if (!user) {
          return res.status(404).json({
              success: false,
              message: 'User not found'
          });
      }

      res.status(200).json({
          success: true,
          message: 'User profile deleted successfully'
      });
  } catch (error) {
      res.status(500).json({
          success: false,
          message: error.message
      });
  }
};
