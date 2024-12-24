const User = require("../database/userModel");
const bcrypt = require("bcryptjs");
const Contact = require("../database/contactModel");
const Course = require('../database/courseSchema');
const Question = require("../database/Question");

const register = async (req, res) => {
  try {
    const { username, email, password, phone, role } = req.body;
    if (!username || !email || !password || !phone || !role) {
      return res.status(400).json({ msg: `Please fill all fields` });
    }

    const validRoles = ["student", "teacher", "admin"];
    if (!validRoles.includes(role)) {
      return res.status(400).json({ msg: `Invalid role selected` });
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ msg: `User already exists` });
    }
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    const createUser = await User.create({
      username,
      email,
      password: hash_password,
      phone,
      role,
      isAdmin: role === "admin",
    });
    res.status(201).json({
      msg: `Registration successful`,
      token: await createUser.generateToken(),
      userId: createUser._id,
    });
  } catch (error) {
    console.error(`Error during registration:`, error);
    res.status(500).json({ msg: `Server error during registration: ${error.message}` });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(409).json({ msg: `User not found` });
    }
    const check_password = await bcrypt.compare(password, userExist.password);
    if (check_password) {
      res.status(200).json({ msg: `Login successful` , token : await userExist.generateToken(), userId: userExist._id});
    }else{
      return res.status(409).json({ msg: `Invalid credentials` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `Server Error during login ` });
  }
};

const contact = async (req, res) => {
  try {
    const { username, phone, email, message } = req.body;
    if (!username || !phone || !email || !message) {
      return res.status(400).json({ msg: `Please fill all fields` });
    }
    const createContact = await Contact.create({
      username,
      phone,
      email,
      message,
    });
    res.status(200).json({ msg: `Message send`, createContact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: `Server Error during contact to admin` });
  }
};

const course = async (req, res) => {
  try {
    const response = await Course.find()
    res.status(200).json({response})
  } catch (error) {
    console.log(error);
  }
};

const courseDetails = async (req, res) => {
  try {
    const id = req.params.id
    const response = await Course.findOne({_id:id})
    res.status(200).json({response})
  } catch (error) {
    console.log(error);
  }
};

const user = async(req,res)=>{
  try {
    const userData = req.user
    const token = req.token
    res.status(200).json({userData, token})
  } catch (error) {
    console.log(error)
  }
}

const admin = async(req,res)=>{
  try {
    const userData = await User.find({}, {password: 0})
    if(!userData){
      return res.status(409).json({msg:`User not found`})
    }else{
      res.status(200).json({userData})
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteUser = async(req, res)=>{
  try {
    const id = req.params.id
    const result = await User.deleteOne({_id: id})
    if(result){
      res.status(200).json({msg:`User deleted successfully`})
    }else{
      res.status(409).json({msg: `Failed to delete`})
      return
    }
  } catch (error) {
    console.log(error)
  }
}

const singleUser = async(req,res)=>{
  try {
      const id = req.params.id
      const data = await User.findOne({_id:id}, {password: 0})
      res.status(200).json(data)
  } catch (error) {
      console.log(error)
  }
}

const updateUser = async(req,res)=>{
  try {
    const id = req.params.id
    const updateData = req.body
    const result = await User.updateOne({_id:id}, {$set:updateData})
    res.json({result})
  } catch (error) {
    console.log(error)
  }
}

const contactDetails = async(req,res)=>{
  try {
    const details = await Contact.find({})
    if(details){
      res.status(200).json(details)
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteContact = async(req,res)=>{
  try {
    const id = req.params.id
    const result = await Contact.deleteOne({_id:id})
    if(result){
      res.status(200).json({msg:`Delete successful`})
    }else{
      res.status(409).json({msg:`Delete failed`})
      return
    }
  } catch (error) {
    console.log(error)
  }
}

const getQuestionsByLanguage = async (req, res) => {
  try {
    const id = req.params.id
    const questions = await Question.find({ languageId:id });
    if (!questions.length) {
      return res.status(409).json({ message: 'No questions found for this language.' });
    }
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error: error.message });
  }
};

module.exports = { login, register, contact, course, courseDetails, user, admin, deleteUser, updateUser, singleUser, contactDetails, deleteContact, getQuestionsByLanguage };
