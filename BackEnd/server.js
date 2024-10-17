import mongoose from "mongoose"
import express from "express";
import Idea from "./models/Idea.js"
import User from "./models/User.js"
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import { body, validationResult }from 'express-validator';
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
// app.post('/signup', async (req, res) => {
//   const { firstName, secondName, email, password } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       firstName,
//       secondName,
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully!' });
//   } catch (err) {
//     if (err.code === 11000) {
//       res.status(400).json({ message: 'Email already exists' });
//     } else {
//       console.error(err);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   }
// });


function authenticateToken(req, res, next) {

const token = req.headers['authorization'];

if (!token) return res.status(401).json({ message: 'Access Denied' });

jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

if (err) return res.status(403).json({ message: 'Invalid Token' });

req.user = user; // إضافة بيانات المستخدم إلى الطلب

next();

});

}
function isEmailFromDomain(email) {
  const emailDomain = email.split('@')[1];
  return emailDomain === "twaiq.edu.sa";
}
app.post('/signup', [body('firstName').isLength({ min: 3 }),
  body('firstName').isLength({ min: 3 }),
  body('email').isEmail(),
  body('password').isLength({ min: 5 })
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()&&!isEmailFromDomain(email)) {
    return res.status(400).json({ errors: errors.array() });
  }

    const {  
      firstName,
      secondName,
       email, 
       password } = req.body;
    
    // تحقق من أن البريد الإلكتروني غير مسجل مسبقًا
    
    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
    
    return res.status(400).json({ message: 'Email already in use' });
    
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // إنشاء مستخدم جديد
    if(isEmailFromDomain(email)){
    const newUser = new User({
      firstName,
      secondName,
      email,
      password: hashedPassword,
    });
    
    await newUser.save();
    const token = jwt.sign(
    
      { id: newUser._id, email: newUser.email }, // بيانات المستخدم التي سيتم تضمينها في التوكن
      
      process.env.JWT_SECRET, // المفتاح السري
      
      { expiresIn: '1h' } // مدة صلاحية التوكن
      
      );
      res.status(201).json({ message: 'User registered successfully', user: newUser, token: token });}else{
        return res.status(400).json({ message: 'Email Shuld be twaiq.edu.sa' });
      }
    });
    // Middleware للتحقق من أن المستخدم مسجل الدخول
    
    app.post('/login', async (req, res) => {

      const { email, password } = req.body;
      
      try {
      
      // العثور على المستخدم بالبريد الإلكتروني
      
      const user = await User.findOne({ email });
      
      if (!user) {
      
      return res.status(400).json({ message: 'User not found' });
      
      }
      
      // تحقق من كلمة المرور
      
      const isMatch = await bcrypt.compare(password, user.password);
      
      if (!isMatch) {
      
      return res.status(400).json({ message: 'Incorrect password' });
      
      }
      
      res.status(200).json({ message: 'Login successful', user });
      
      } catch (error) {
      
      res.status(500).json({ message: 'Server error', error });
      
      }
      
      })
  

app.get("/ideas",(req,res)=>{
 Idea.find().then(result=>{
  res.send(result)
 })
})


 app.get("/students",(req,res)=>{
   User.find({isAdmin:false}).then(result=>{
    res.send(result)
   }).catch(error => {
     console.error('Error fetching students:', error);
     res.status(500).json({ message: 'Internal Server Error' }); // Handle errors
   });
  })
 
  app.delete("/students/:id", (req, res) => {
   const { id } = req.params;
 
   User.findByIdAndDelete(id)
       .then(result => {
           if (!result) {
               return res.status(404).send({ message: 'User not found' });
           }
           res.send({ message: 'User deleted successfully', user: result });
       })
       .catch(error => {
           console.error('Error deleting user:', error);
           res.status(500).send({ message: 'Server error' });
       });
 });
 

app.post("/addIdea",[    body("title").isLength({ min: 3 }),
  body("ideaDescription").isLength({ min: 3 })], authenticateToken, async (req, res) =>{

  try {
  
  const user = await User.findById(req.user.id);
  
  if (!user) {
  
  return res.status(404).json({ message: 'User not found' });
  
  }
  
  const idea = new Idea({
    title:req.body.title,
 student: User._id,
  ideaFeedback:req.body.ideaFeedback,
  ideaType:req.body.ideaType,
  ideaStatus:req.body.ideaStatus,
  ideaDescription:req.body.ideaDescription
   });
  
  await idea.save(); // تأكد من أن المقالة تم حفظها
  
  console.log('New idea created:', idea); // تحقق من المقالة الجديدة
  
  // إضافة معرف المقالة إلى مدونات المستخدم
  
  user.ideas.push(idea._id);
  
  console.log('User ideas before saving:', user.ideas); // تحقق من المدونات قبل الحفظ
  
  await user.save(); // تأكد من الانتظار هنا أيضًا
  
  // إرسال استجابة
  
  res.status(201).json({
  
  message: 'idea created successfully',
  
  idea: idea
  
  });
  
  } catch (error) {
  
  console.error(error); // طباعة الخطأ في حال حدوثه
  
  res.status(500).json({ message: 'Error creating idea', error });
  
  }
  
  })

//   {
//     "title":"project of tuwaiq",
//   "ideaFeedback":"",
//   "ideaType":"",
//   "ideaStatus":"Pending",
//   "ideaDescription":"we still don't know"
// }
  app.get('/user/:id', async (req, res) => {

      try {
      
      const user = await User.findById(req.params.id).populate('ideas'); // استخدم populate هنا
      
      if (!user) {
      
      return res.status(404).json({ message: 'User not found' });
      
      }
      
      res.status(200).json(user); // سيحتوي على بيانات المستخدم مع مقالاته
      
      } catch (error) {
      
      console.error(error);
      
      res.status(500).json({ message: 'Error retrieving user', error });
      
      }
      
      })
      app.patch("/ideas/:id",(req,res)=>{
        const {id}=req.params
        Idea.findByIdAndUpdate(id,{$set:{ideaStatus:req.body.ideaStatus},$set:{ideaFeedback:req.body.ideaFeedback}},{new:true,runValidators:true}).then(result=>{
           res.send(result)
       })
      })

main().catch(err => console.log(err));
async function main() { 
    await mongoose.connect(process.env.MONGODB_URI);
  console.log("----------------////////////")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  app.listen(port, function () {
    console.log("Express App running at mongod");
 })

