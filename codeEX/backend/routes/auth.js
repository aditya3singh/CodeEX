// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser  = new User({ username, email, password: hashedPassword });

  try {
    await newUser .save();
    res.status(201).send('User  created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).send('User  not found');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid credentials');
  }

  // Store user ID in session
  req.session.userId = user._id;
  res.send('Login successful');
});

// Logout route
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Could not log out');
    }
    res.send('Logout successful');
  });
});

// Check session route
router.get('/session', (req, res) => {
  if (req.session.userId) {
    res.send('User  is logged in');
  } else {
    res.send('User  is not logged in');
  }
});

module.exports = router;