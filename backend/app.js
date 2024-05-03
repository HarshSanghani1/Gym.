const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // to encrypt passwords

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

app.use(express.json()); // This replaces body-parser
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Define your MongoDB user model
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  telefone: String,
});

// Registration route
app.post("/api/users/register", async (req, res) => {
  try {
    const { name, email, password, telefone } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Encrypt password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to MongoDB
    await User.create({ name, email, password: hashedPassword, telefone });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Server is online");
});

// Login route
app.post("/api/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route to get all members (for proof of concept only)
app.get("/api/users/members", async (req, res) => {
  try {
    const members = await User.find({}); // Exclude password from results
    res.status(200).json(members);
  } catch (error) {
    console.error("Error getting members:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.delete("/api/users/delete/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    // Check if user exists
    const existingUser = await User.findById(userId);
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete user from MongoDB
    await User.findByIdAndDelete(userId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error" });
  }
});
