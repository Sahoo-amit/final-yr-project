const User = require("../database/userModel");
const bcrypt = require("bcryptjs");
const Contact = require("../database/contactModel");

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
    res.status(200).json({ createUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: `Server Error during registration: ${error.message}` });
  }
};

const login = async (req, res) => {
  ``;
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: `Please fill all fields` });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(409).json({ msg: `User not found` });
    }
    const check_password = await bcrypt.compare(password, userExist.password);
    if (check_password) {
      res.status(200).json({ msg: `Register successfull` });
    }
    return res.status(409).json({ msg: `Invalid credentials` });
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
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = { login, register, contact, course };
