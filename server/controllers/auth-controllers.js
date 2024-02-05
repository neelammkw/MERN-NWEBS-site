const User = require("../models/user-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome Neelam to the home page!");
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).send("Internal Server Error");
  }
};

const register = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      message: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log("Error: " + error);
    next(error); // Pass the error to the error handling middleware
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // const isValidPass = await bcrypt.compare(password, user.password);
    const isValidPass = await user.comparePassword(password);

    if (!isValidPass) {
      return res.status(400).json({ message: "Invalid password" });
    }
    
    res.status(200).json({
      msg: "Login successful",
      token: await user.generateToken(),
      userId: user._id.toString(),
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({ message: "Server Error" });
  }
};
const user = async (req, res)=> {
  try
  {
    const userData = req.user;
    console.log(userData);
    // res.status(200).json({ msg : "hi user"});
    return res.status(200).json ({userData});
  }
  catch (error)
  {
  console.log(`error from the user route ${error}`)
    
  }
}
module.exports = { home, register, login, user};
