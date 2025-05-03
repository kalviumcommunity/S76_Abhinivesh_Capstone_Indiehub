const User = require('../models/User');
const jwt = require('jsonwebtoken');

const CURRENT_TIMESTAMP = "2025-05-03 06:14:58";
const CURRENT_USER = "ABHISA888";

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
};

const createResponse = (success, message, data = null) => {
  return {
    success,
    message,
    ...(data && { data }),
    timestamp: CURRENT_TIMESTAMP,
    user: CURRENT_USER
  };
};

// POST Methods
exports.registerPost = async (req, res) => {
  try {
    const { fullName, email, username, password } = req.body;

    // Validation
    if (!fullName || !email || !username || !password) {
      return res.status(400).json(
        createResponse(false, 'Please provide all required fields')
      );
    }

    // Check if user exists
    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (userExists) {
      return res.status(400).json(
        createResponse(false, 'User with this email or username already exists')
      );
    }

    // Create user
    const user = await User.create({
      fullName,
      email,
      username,
      password,
      createdAt: CURRENT_TIMESTAMP,
      createdBy: CURRENT_USER
    });

    const token = generateToken(user._id);

    res.status(201).json(
      createResponse(true, 'User registered successfully', {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
          createdBy: user.createdBy
        }
      })
    );
  } catch (error) {
    res.status(500).json(
      createResponse(false, error.message)
    );
  }
};

exports.loginPost = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json(
        createResponse(false, 'Please provide username and password')
      );
    }

    const user = await User.findOne({ username }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json(
        createResponse(false, 'Invalid credentials')
      );
    }

    const token = generateToken(user._id);

    res.status(200).json(
      createResponse(true, 'Login successful', {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
          createdBy: user.createdBy
        }
      })
    );
  } catch (error) {
    res.status(500).json(
      createResponse(false, error.message)
    );
  }
};

// GET Methods
exports.registerGet = async (req, res) => {
  try {
    const { fullName, email, username, password } = req.query;

    if (!fullName || !email || !username || !password) {
      return res.status(400).json(
        createResponse(false, 'Please provide all required fields')
      );
    }

    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (userExists) {
      return res.status(400).json(
        createResponse(false, 'User with this email or username already exists')
      );
    }

    const user = await User.create({
      fullName,
      email,
      username,
      password,
      createdAt: CURRENT_TIMESTAMP,
      createdBy: CURRENT_USER
    });

    const token = generateToken(user._id);

    res.status(200).json(
      createResponse(true, 'User registered successfully', {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
          createdBy: user.createdBy
        }
      })
    );
  } catch (error) {
    res.status(500).json(
      createResponse(false, error.message)
    );
  }
};

exports.loginGet = async (req, res) => {
  try {
    const { username, password } = req.query;

    if (!username || !password) {
      return res.status(400).json(
        createResponse(false, 'Please provide username and password')
      );
    }

    const user = await User.findOne({ username }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json(
        createResponse(false, 'Invalid credentials')
      );
    }

    const token = generateToken(user._id);

    res.status(200).json(
      createResponse(true, 'Login successful', {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
          createdBy: user.createdBy
        }
      })
    );
  } catch (error) {
    res.status(500).json(
      createResponse(false, error.message)
    );
  }
};