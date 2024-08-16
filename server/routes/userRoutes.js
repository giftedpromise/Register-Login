// server/routes/userRoutes.js

const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model
const authMiddleware = require("../middleware/auth"); // Import your authentication middleware

// Example route for user registration
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Add your registration logic here
  // For example, hash the password and save the user to the database

  res.status(200).send("User registered");
});

// Example route for user login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Add your login logic here
  // For example, validate user credentials and generate a JWT token

  res.status(200).send("User logged in");
});

// Route to get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Use req.user.id set by authMiddleware
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
