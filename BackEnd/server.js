import mongoose from "mongoose"
import express from "express";
import Idea from "./models/Idea.js"
import User from "./models/User.js"
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
dotenv.config();

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// mongoose.connect(, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch((err) => console.log(err));

// Signup Route
app.post('/signup', async (req, res) => {
  const { firstName, secondName, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      secondName,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: 'Email already exists' });
    } else {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
});



  

app.get("/addIdea",(req,res)=>{
 Idea.find().then(result=>{
  res.send(result)
 })
})

main().catch(err => console.log(err));
async function main() { 
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  console.log("----------------////////////")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  app.listen(port, function () {
    console.log("Express App running at mongod");
 })

