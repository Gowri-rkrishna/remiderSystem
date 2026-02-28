const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // optional, for token-based auth

// REGISTER
async function register(req, res) {
  try {
    const { role, name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate patientId if role is patient
    let patientId = null;
    if (role === "patient") {
      patientId = "PAT" + Math.floor(1000 + Math.random() * 9000);
    }

    // Create user
    const user = new User({
      role,
      name,
      email,
      password: hashedPassword,
      patientId
    });

    await user.save();

    res.json({ message: "Registration successful", patientId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// LOGIN
async function login(req, res) {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Optional: generate a JWT token
    // const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      message: "Login successful",
      user,
      // token
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// EXPORTING FOR COMMONJS
module.exports = { register, login };