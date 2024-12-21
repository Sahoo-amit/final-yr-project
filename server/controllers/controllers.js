const User = require("../database/userModel");
const bcrypt = require("bcryptjs");
const Contact = require("../database/contactModel");
const Course = require('../database/courseSchema')

const register = async (req, res) => {
  try {
    const { username, email, password, phone, role } = req.body;
    if (!username || !email || !password || !phone || !role) {
      return res.status(400).json({ msg: `Please fill all fields` });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ msg: `User already exist` });
    }
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(password, salt);
    const createUser = await User.create({
      username,
      email,
      password: hash_password,
      phone,
      role,
    });
    res.status(200).json({ msg:`Registration successful` , token: await createUser.generateToken(), userId: createUser._id});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: `Server Error during registration: ${error.message}` });
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

module.exports = { login, register, contact, course, user, admin, deleteUser };
