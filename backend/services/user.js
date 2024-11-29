const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../database'); // Import the MongoDB connection function

// Register new user
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    // Check if user already exists
    const userExists = await usersCollection.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert new user into database
    const newUser = await usersCollection.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: 'User registered successfully',
      userId: newUser.insertedId,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    // Check if user exists
    const user = await usersCollection.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Wrong password' });
    }
 
    // Generate JWT token
    const token = jwt.sign({ id: user._id }, "hallo", {
      expiresIn: '2h',
    });

    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

module.exports = router;
