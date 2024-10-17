import mongoose from "mongoose";
import express from "express";
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import Idea from "./models/Idea.js";
import User from "./models/User.js";

dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.log(err));

// Middleware for JWT authentication
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access Denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Token' });
    req.user = user;
    next();
  });
}

// Middleware to check admin rights
function isAdmin(req, res, next) {
  User.findById(req.user.id).then(user => {
    if (user && user.isAdmin) {
      next();
    } else {
      res.status(403).json({ message: 'Admin access required' });
    }
  }).catch(err => res.status(500).json({ message: 'Server error', err }));
}

// Helper function to check email domain
function isEmailFromDomain(email) {
  const emailDomain = email.split('@')[1];
  return emailDomain === "twaiq.edu.sa";
}

// Signup Route
app.post('/signup', [
  body('firstName').isLength({ min: 3 }),
  body('secondName').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  const { firstName, secondName, email, password } = req.body;

  if (!isEmailFromDomain(email)) {
    return res.status(400).json({ message: 'Email must be from Tuwaiq.com domain' });
  }

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, secondName, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User registered successfully', user: newUser, token });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error', err });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', user, token });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// View Approved Ideas - Student Route
app.get("/ideas", authenticateToken, async (req, res) => {
  try {
    const ideas = await Idea.find({ ideaStatus: 'Accepted' });
    res.status(200).json(ideas);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching ideas', err });
  }
});

// Add New Idea - Student Route
app.post("/addIdea", [
  body("title").isLength({ min: 3 }),
  body("ideaDescription").isLength({ min: 3 })
], authenticateToken, async (req, res) => {
  const { title, ideaDescription, ideaType } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const idea = new Idea({
      title,
      student: req.user.id,
      ideaDescription,
      ideaType,
      ideaStatus: 'Pending'
    });

    await idea.save();
    user.ideas.push(idea._id);
    await user.save();

    res.status(201).json({ message: 'Idea created successfully', idea });
  } catch (error) {
    res.status(500).json({ message: 'Error creating idea', error });
  }
});

// Admin - View All Students
app.get('/admin/students', authenticateToken, isAdmin, async (req, res) => {
  try {
    const students = await User.find({ isAdmin: false });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching students', err });
  }
});

// Admin - Search for Students by Name
app.get('/admin/students/search', authenticateToken, isAdmin, async (req, res) => {
  const { name } = req.query;
  try {
    const students = await User.find({ firstName: new RegExp(name, 'i'), isAdmin: false });
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: 'Error searching for students', err });
  }
});

// Admin - Approve or Reject an Idea
app.put('/admin/idea/:id', authenticateToken, isAdmin, async (req, res) => {
  const { status, rejectionReason } = req.body;
  try {
    const idea = await Idea.findById(req.params.id);
    if (idea) {
      idea.ideaStatus = status;
      idea.ideaFeedback = status === 'Rejected' ? rejectionReason : '';
      await idea.save();
      res.status(200).json({ message: `Idea ${status.toLowerCase()}`, idea });
    } else {
      res.status(404).json({ message: 'Idea not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating idea', err });
  }
});

// Admin - Delete an Idea with Rejection Reason
app.delete('/admin/idea/:id', authenticateToken, isAdmin, async (req, res) => {
  const { rejectionReason } = req.body;
  try {
    const idea = await Idea.findById(req.params.id);
    if (idea) {
      await Idea.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: 'Idea deleted', reason: rejectionReason });
    } else {
      res.status(404).json({ message: 'Idea not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error deleting idea', err });
  }
});

// Admin - Delete a Student Account
app.delete('/admin/student/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Student account deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting student account', err });
  }
});

// Admin - Logout
app.post('/logout', authenticateToken, (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
});
